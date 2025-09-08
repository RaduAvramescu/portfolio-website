/**
 * Initialize intersection observers for elements with data-observe attribute
 */
function initIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // If element has data-trigger-once="true", stop observing after animation
        if (entry.target.dataset.triggerOnce === 'true') {
          observer.unobserve(entry.target);
        }
      } else {
        // Only remove class if trigger-once is not set
        if (entry.target.dataset.triggerOnce !== 'true') {
          entry.target.classList.remove('animate-in');
        }
      }
    });
  }, observerOptions);

  // Observe all elements with data-observe attribute
  document.querySelectorAll('[data-observe]').forEach((el) => {
    observer.observe(el);
  });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initIntersectionObserver);
} else {
  initIntersectionObserver();
}