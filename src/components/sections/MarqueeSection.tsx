'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function MarqueeSection() {
  const t = useTranslations('marquee');
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const text = t('text');
  // Duplicate for seamless loop
  const content = `${text} ${text}`;

  return (
    <div className={`bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-800 py-3 overflow-hidden border-y border-gold-500/30 transition-opacity duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} ref={ref}>
      <div className="marquee-container">
        <div className="marquee-track">
          <span className="text-gold-400 text-sm font-medium tracking-wider px-4">
            {content}
          </span>
          <span className="text-gold-400 text-sm font-medium tracking-wider px-4">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
}
