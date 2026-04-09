'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/utils';

/* 🔢 Counter Component */
function Counter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden">
      
      {/* Updated Video Background using YouTube */}
      <div className="absolute inset-0 z-0 pointer-events-none">
  {/* Standard Video Tag for Cloudinary */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source 
      src="https://res.cloudinary.com/dpvhamnmx/video/upload/v1712700000/Anchan-Silks-Showcase_compressed_f8ayrr.mp4" 
      type="video/mp4" 
    />
    Your browser does not support the video tag.
  </video>

  {/* Overlays for Brand Feel */}
  <div className="absolute inset-0 bg-gradient-to-br from-maroon-950/80 via-maroon-900/40 to-black/60" />
  <div className="absolute inset-0 silk-texture opacity-10" />
</div>

      {/* Gold frame */}
      <div className="absolute inset-8 border border-gold-500/20 pointer-events-none hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Tagline */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-12 bg-gold-400" />
          <span className="text-gold-400 text-lg font-black tracking-[0.3em] uppercase drop-shadow-sm">
            {t('tagline')}
          </span>
          <span className="h-px w-12 bg-gold-400" />
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-tight mb-6 drop-shadow-2xl">
          {t('headline')}
        </h1>

        <p className="text-cream-100 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-md">
          {t('subheadline')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={`/${locale}/collections`}
            className="btn-gold text-base px-8 py-4 w-full sm:w-auto text-center"
          >
            {t('cta')}
          </Link>

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/60 text-white text-base font-medium hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
          >
            Enquire Now
          </a>
        </div>

        {/* Stats with Counter */}
        <div className="flex flex-wrap justify-center gap-8 mt-14 pt-14 border-t border-white/10">
          {[
            { number: 25, suffix: '+', label: 'Years of Trust' },
            { number: 1000, suffix: '+', label: 'Happy Brides' },
            { number: 2, suffix: '', label: 'Stores' },
            { number: 1005, suffix: '+', label: 'Children Supported' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl text-gold-400 font-bold font-sans">
                <Counter target={stat.number} duration={1200 + i * 200} />
                {stat.suffix}
              </div>
              <p className="text-cream-300 text-[11px] uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}