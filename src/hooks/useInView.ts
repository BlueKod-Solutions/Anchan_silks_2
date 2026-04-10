'use client';

import { useEffect, useRef, useState } from 'react';

export function useInView(options = { threshold: 0.3 }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Stringify options so the effect only re-runs when they actually change
  const optionsStr = JSON.stringify(options);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true); // trigger only once
      }
    }, JSON.parse(optionsStr));

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [optionsStr]);

  return { ref, isVisible };
}