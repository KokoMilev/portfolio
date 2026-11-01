import { useEffect, useRef, useState } from 'react';

// hasEntered stays true once the element nears the viewport, so heavy content
// loads once. isInView follows the current state, so rendering can pause.
export const useInView = (rootMargin = '300px') => {
  const ref = useRef();
  const [isInView, setIsInView] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { rootMargin },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, isInView, hasEntered };
};
