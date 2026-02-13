import { useRef, useState, useEffect, useCallback } from 'react';

export const useCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      const scrollableWidth = scrollWidth - clientWidth;
      const progress = scrollableWidth > 0 ? (scrollLeft / scrollableWidth) * 100 : 0;
      setProgress(progress);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.addEventListener('scroll', updateProgress);
      // Initialize progress
      updateProgress();
      return () => el.removeEventListener('scroll', updateProgress);
    }
  }, [updateProgress]);

  return { ref, progress, scroll };
};