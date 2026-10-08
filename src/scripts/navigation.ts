import { navigate } from 'astro:transitions/client';

let disposeNavigation: (() => void) | undefined;

function cleanupNavigation(): void {
  disposeNavigation?.();
  disposeNavigation = undefined;
}

function initNavigation(): void {
  cleanupNavigation();
  let prevScrollPos = window.scrollY;
  let scrollingUp = true;
  const header = document.getElementById('header');
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  const brand = document.getElementById('navbar-brand');
  const mobileNavigation =
    document.querySelector<HTMLDetailsElement>('#mobile-navigation');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  let hiddenNavigationFocus: HTMLElement | null = null;

  const listeners = new AbortController();
  const { signal } = listeners;
  let resizeObserver: ResizeObserver | undefined;
  let focusUpdateFrame: number | undefined;
  disposeNavigation = () => {
    listeners.abort();
    resizeObserver?.disconnect();
    if (focusUpdateFrame !== undefined) cancelAnimationFrame(focusUpdateFrame);
  };

  function closeMenu(): void {
    if (mobileNavigation) mobileNavigation.open = false;
  }

  const updateNavigation = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos !== prevScrollPos) {
      scrollingUp = currentScrollPos < prevScrollPos;
    }
    const isVisible =
      currentScrollPos < 10 ||
      scrollingUp ||
      header?.contains(document.activeElement) ||
      mobileNavigation?.open;
    header?.classList.toggle('-translate-y-full', !isVisible);
    if (scrollToTopBtn) {
      scrollToTopBtn.hidden =
        currentScrollPos <= 100 && document.activeElement !== scrollToTopBtn;
    }
    prevScrollPos = currentScrollPos;
  };

  const updateAfterFocus = () => {
    if (focusUpdateFrame !== undefined) cancelAnimationFrame(focusUpdateFrame);
    focusUpdateFrame = requestAnimationFrame(() => {
      focusUpdateFrame = undefined;
      updateNavigation();
    });
  };

  header?.addEventListener(
    'keydown',
    event => {
      if (event.key === 'Escape' && mobileNavigation?.open) {
        event.preventDefault();
        closeMenu();
        mobileMenuButton?.focus({ preventScroll: true });
      }
    },
    { signal }
  );
  header?.addEventListener('focusin', updateNavigation, { signal });
  header?.addEventListener(
    'focusout',
    event => {
      // Responsive CSS can remove focus before the media-query handler runs.
      if (
        event.target instanceof HTMLElement &&
        event.target.getClientRects().length === 0
      ) {
        hiddenNavigationFocus = event.target;
      }
      updateAfterFocus();
    },
    { signal }
  );
  mobileNavigation?.addEventListener('toggle', updateNavigation, { signal });
  scrollToTopBtn?.addEventListener('focusout', updateAfterFocus, { signal });

  document.addEventListener(
    'focusin',
    event => {
      hiddenNavigationFocus = null;
      if (event.target instanceof Element) {
        const reveal = event.target.closest<HTMLElement>('[data-intro-reveal]');
        if (reveal) reveal.dataset.focusRevealed = '';
      }
    },
    { signal }
  );

  // Measure the closed header, even while the mobile menu is expanded.
  const nav = header?.querySelector('nav');
  const navRow = nav?.firstElementChild;
  if (nav && navRow) {
    const updateHeaderOffset = () => {
      const style = getComputedStyle(nav);
      const height =
        navRow.getBoundingClientRect().height +
        parseFloat(style.paddingTop) +
        parseFloat(style.paddingBottom) +
        parseFloat(style.borderTopWidth) +
        parseFloat(style.borderBottomWidth);
      document.documentElement.style.setProperty(
        '--header-height',
        `${height}px`
      );
    };
    updateHeaderOffset();
    resizeObserver = new ResizeObserver(updateHeaderOffset);
    resizeObserver.observe(navRow);
  }

  window.matchMedia('(min-width: 64rem)').addEventListener(
    'change',
    event => {
      const focused = hiddenNavigationFocus ?? document.activeElement;
      hiddenNavigationFocus = null;
      if (event.matches) {
        if (focused && mobileNavigation?.contains(focused)) {
          const href =
            focused instanceof HTMLAnchorElement
              ? focused.getAttribute('href')
              : null;
          const desktopLink = Array.from(
            header?.querySelectorAll<HTMLAnchorElement>(
              '#desktop-navigation a'
            ) ?? []
          ).find(link => href && link.getAttribute('href') === href);
          (desktopLink ?? brand)?.focus({ preventScroll: true });
        }
        closeMenu();
      } else if (
        focused instanceof Element &&
        focused.closest('#desktop-navigation')
      ) {
        mobileMenuButton?.focus({ preventScroll: true });
      }
      updateNavigation();
    },
    { signal }
  );

  // Let Astro manage hashes and history, then focus the fragment destination.
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => {
    link.addEventListener(
      'click',
      async event => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.ctrlKey ||
          event.metaKey ||
          event.shiftKey ||
          event.altKey ||
          link.hasAttribute('download') ||
          link.hasAttribute('data-astro-reload') ||
          (link.target && link.target !== '_self')
        )
          return;
        const targetId = link.hash.slice(1);
        const destination = document.getElementById(targetId);
        if (!destination) return;
        const focusTarget =
          targetId === 'top'
            ? (brand ?? destination)
            : destination.matches('section')
              ? (destination.querySelector<HTMLElement>('h1, h2') ??
                destination)
              : destination;
        if (
          !focusTarget.matches(
            'a[href], button, input, select, textarea, summary, [tabindex]'
          )
        ) {
          focusTarget.tabIndex = -1;
        }

        event.preventDefault();
        closeMenu();
        await navigate(link.href, {
          history: link.dataset.astroHistory === 'replace' ? 'replace' : 'auto',
          sourceElement: link,
        });
        if (signal.aborted || !focusTarget.isConnected) return;
        focusTarget.focus({ preventScroll: true });
        updateNavigation();
      },
      { signal }
    );
  });

  window.addEventListener('scroll', updateNavigation, {
    passive: true,
    signal,
  });
  window.addEventListener('pageshow', updateNavigation, { signal });
  closeMenu();
  if (header) header.dataset.navigationEnhanced = '';
  updateNavigation();
}

document.addEventListener('astro:before-swap', cleanupNavigation);
document.addEventListener('astro:page-load', initNavigation);
