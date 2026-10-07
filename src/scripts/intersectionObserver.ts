let disposeIntersectionObserver: (() => void) | undefined;

function cleanupIntersectionObserver(): void {
  disposeIntersectionObserver?.();
  disposeIntersectionObserver = undefined;
}

/**
 * Initialize intersection observers for elements with data-observe attribute
 */
function initIntersectionObserver(): void {
  cleanupIntersectionObserver();
  const elements = document.querySelectorAll('[data-observe]');
  if (elements.length === 0) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const revealAll = () => {
    elements.forEach(el => el.classList.remove('reveal-ready'));
  };

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    revealAll();
    return;
  }

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  let observer: IntersectionObserver | undefined;
  const listeners = new AbortController();
  disposeIntersectionObserver = () => {
    listeners.abort();
    observer?.disconnect();
    revealAll();
  };

  try {
    observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');

            // If element has data-trigger-once="true", stop observing after animation
            if ((entry.target as HTMLElement).dataset.triggerOnce === 'true') {
              observer?.unobserve(entry.target);
            }
          } else {
            // Only remove class if trigger-once is not set
            if ((entry.target as HTMLElement).dataset.triggerOnce !== 'true') {
              entry.target.classList.remove('animate-in');
            }
          }
        });
      },
      observerOptions
    );

    elements.forEach(el => observer?.observe(el));

    reducedMotion.addEventListener(
      'change',
      event => {
        if (event.matches) cleanupIntersectionObserver();
      },
      { signal: listeners.signal }
    );

    // Enable hidden states only after every element is being observed.
    elements.forEach(el => el.classList.add('reveal-ready'));
  } catch {
    cleanupIntersectionObserver();
  }
}

document.addEventListener('astro:before-swap', cleanupIntersectionObserver);
document.addEventListener('astro:page-load', initIntersectionObserver);
