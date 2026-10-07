let disposeNavigation: (() => void) | undefined;

function cleanupNavigation(): void {
  disposeNavigation?.();
  disposeNavigation = undefined;
}

function initNavigation(): void {
  cleanupNavigation();
  let prevScrollPos = window.scrollY;
  const header = document.getElementById('header');
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  const mobileNavigation =
    document.querySelector<HTMLDetailsElement>('#mobile-navigation');
  const mobileMenuButton = document.getElementById('mobile-menu-button');

  if (!header || !scrollToTopBtn) return;

  const listeners = new AbortController();
  const { signal } = listeners;
  let resizeObserver: ResizeObserver | undefined;
  disposeNavigation = () => {
    listeners.abort();
    resizeObserver?.disconnect();
  };

  function closeMenu(): void {
    if (mobileNavigation) mobileNavigation.open = false;
  }

  header.addEventListener(
    'keydown',
    event => {
      if (event.key === 'Escape' && mobileNavigation?.open) {
        closeMenu();
        mobileMenuButton?.focus();
      }
    },
    { signal }
  );
  header.addEventListener(
    'focusin',
    () => header.classList.remove('-translate-y-full'),
    { signal }
  );

  // Measure the closed header, even while the mobile menu is expanded.
  const nav = header.querySelector('nav');
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
      if (event.matches) closeMenu();
    },
    { signal }
  );

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
    header.classList.toggle('-translate-y-full', !isVisible);
    if (!isVisible) closeMenu();
    scrollToTopBtn.classList.toggle('!opacity-100', currentScrollPos > 100);
    prevScrollPos = currentScrollPos;
  };

  // Include the brand and other page anchors, while preserving modified clicks.
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => {
    link.addEventListener(
      'click',
      event => {
        if (
          event.button !== 0 ||
          event.ctrlKey ||
          event.metaKey ||
          event.shiftKey ||
          event.altKey
        )
          return;
        closeMenu();
      },
      { signal }
    );
  });

  window.addEventListener('scroll', handleScroll, { passive: true, signal });
  closeMenu();
  header.dataset.navigationEnhanced = '';
}

document.addEventListener('astro:before-swap', cleanupNavigation);
document.addEventListener('astro:page-load', initNavigation);
