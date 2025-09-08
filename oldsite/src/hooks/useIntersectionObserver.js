import { useState, useEffect, useRef } from "react";

/**
 * Custom hook that uses Intersection Observer API to detect when an element is visible
 *
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of element that must be visible (0-1)
 * @param {string} options.rootMargin - Margin around root element
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {Array} [ref, isVisible] - Reference to attach to element and visibility state
 */
const useIntersectionObserver = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -100px 0px", // Trigger when element is 100px into viewport
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;

        if (isIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce && !isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return [elementRef, isVisible];
};

export default useIntersectionObserver;
