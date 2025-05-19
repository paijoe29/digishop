import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {}

export function useInView(options?: UseInViewOptions) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update state when the element's visibility changes
      if (entry.isIntersecting) {
        setInView(true);
        // Optionally, stop observing once it's in view if you only want the animation to run once
        // observer.unobserve(entry.target);
      } else {
        // If you want the animation to reset when it scrolls out of view
        // setInView(false);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]); // Re-run effect if options change

  return { ref, inView };
}