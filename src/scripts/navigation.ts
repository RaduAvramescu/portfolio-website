import { navigate } from 'astro:transitions/client';

let disposeNavigation: (() => void) | undefined;
let preserveScrollPosition = ['back_forward', 'reload'].includes(
  (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)
    ?.type
);

function cleanupNavigation(): void {
  disposeNavigation?.();
  disposeNavigation = undefined;
}

function initNavigation(): void {
  cleanupNavigation();
  const pageUrl = window.location.href.split('#')[0];
  let prevScrollPos = window.scrollY;
  let scrollingUp = true;
  let hideHeaderAfterNavigation = Boolean(window.location.hash);
  const header = document.getElementById('header');
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  const brand = document.getElementById('navbar-brand');
  const mobileNavigation =
    document.querySelector<HTMLDetailsElement>('#mobile-navigation');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  let hiddenNavigationFocus: HTMLElement | null = null;

  const listeners = new AbortController();
  const { signal } = listeners;
  let focusUpdateFrame: number | undefined;
  disposeNavigation = () => {
    listeners.abort();
    if (focusUpdateFrame !== undefined) cancelAnimationFrame(focusUpdateFrame);
  };

  function closeMenu(): void {
    if (mobileNavigation) mobileNavigation.open = false;
  }

  function focusDestination(destination: HTMLElement): void {
    const focusTarget =
      destination.id === 'top'
        ? (document.getElementById('main-content') ?? destination)
        : destination.matches('section')
          ? (destination.querySelector<HTMLElement>('h1, h2') ?? destination)
          : destination;
    if (
      !focusTarget.matches(
        'a[href], button, input, select, textarea, summary, [tabindex]'
      )
    ) {
      focusTarget.tabIndex = -1;
    }
    focusTarget.focus({ preventScroll: true });
  }

  const updateNavigation = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos !== prevScrollPos) {
      scrollingUp = currentScrollPos < prevScrollPos;
    }
    const isVisible =
      header?.contains(document.activeElement) ||
      mobileNavigation?.open ||
      (!hideHeaderAfterNavigation && (currentScrollPos < 10 || scrollingUp));
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
  header?.addEventListener(
    'focusin',
    () => {
      hideHeaderAfterNavigation = false;
      updateNavigation();
    },
    { signal }
  );
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

  // Resume normal header behavior when the user interacts after navigation.
  ['pointerdown', 'wheel', 'touchmove', 'keydown'].forEach(type => {
    window.addEventListener(
      type,
      () => {
        hideHeaderAfterNavigation = false;
        if ((type === 'wheel' || type === 'touchmove') && window.scrollY < 10) {
          updateNavigation();
        }
      },
      { passive: true, signal }
    );
  });

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
        const destination = document.getElementById(link.hash.slice(1));
        if (!destination) return;

        event.preventDefault();
        closeMenu();
        hideHeaderAfterNavigation = true;
        await navigate(link.href, {
          history: link.dataset.astroHistory === 'replace' ? 'replace' : 'auto',
          sourceElement: link,
        });
        if (signal.aborted || !destination.isConnected) return;
        focusDestination(destination);
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
  window.addEventListener(
    'popstate',
    () => {
      if (window.location.href.split('#')[0] !== pageUrl) return;
      closeMenu();
      hideHeaderAfterNavigation = Boolean(window.location.hash);
      const destination = document.getElementById(
        window.location.hash.slice(1) || 'main-content'
      );
      if (destination) focusDestination(destination);
      updateNavigation();
    },
    { signal }
  );
  closeMenu();
  if (header) header.dataset.navigationEnhanced = '';
  // The browser may align the fragment before the mobile header becomes fixed.
  if (!preserveScrollPosition && window.location.hash) {
    const destination = document.getElementById(window.location.hash.slice(1));
    destination?.scrollIntoView({ behavior: 'instant' });
    if (destination) focusDestination(destination);
  }
  updateNavigation();
}

document.addEventListener('astro:before-swap', event => {
  cleanupNavigation();
  preserveScrollPosition = event.navigationType === 'traverse';
});
document.addEventListener('astro:page-load', initNavigation);
