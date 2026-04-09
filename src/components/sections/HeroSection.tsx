'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ChevronDown, MessageCircle } from 'lucide-react';
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
    <section className="relative min-h-screen py-32 pt-50 flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-90 contrast-110"
          // poster="/images/store/hero-poster.jpg"
        >
          <source src="/video/anchan-silks-showcase.mp4" type="video/mp4" />
        </video>

        {/* Balanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-maroon-900/50 to-transparent" />

        {/* Light texture */}
        <div className="absolute inset-0 silk-texture opacity-10" />
      </div>

      {/* Gold frame */}
      <div className="absolute inset-8 border border-gold-500/20 pointer-events-none hidden lg:block" />
      <div className="absolute inset-10 border border-gold-500/10 pointer-events-none hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Tagline */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-12 bg-gold-400" />
          <span className="text-gold-400 text-lg font-black tracking-[0.3em] uppercase drop-shadow-sm">
            {t('tagline')}
          </span>
          <span className="h-px w-12 bg-gold-400" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-tight mb-6 drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
          {t('headline')}
        </h1>

        {/* Subheadline */}
        <p className="text-cream-100 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-md">
          {t('subheadline')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA */}
          <Link
            href={`/${locale}/collections`}
            className="btn-gold text-base px-8 py-4 w-full sm:w-auto justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {t('cta')}
          </Link>

          {/* Secondary CTA (WhatsApp) */}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/60 text-white text-base font-medium hover:bg-white/10 hover:border-white transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.815 11.815 0 001.592 5.911L0 24l6.117-1.605a11.794 11.794 0 005.926 1.594h.005c6.637 0 12.046-5.412 12.049-12.05a11.812 11.812 0 00-3.479-8.525z"/>
            </svg>
            {t('ctaSecondary')}
          </a>
        </div>

        {/* Stats with Counter */}
        <div className="flex flex-wrap justify-center gap-8 mt-14 pt-14 border-t border-white/10">
          {[
            { number: 25, suffix: '+', label: 'Years of Trust' },
            { number: 1000, suffix: '+', label: 'Happy Brides' },
            { number: 2, suffix: '', label: 'Stores' },
            { number: 1000, suffix: '+', label: 'Children Supported' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="font-family:sans-serif text-2xl text-gold-400 font-bold">
                <Counter target={stat.number} duration={1200 + i * 200} />
                {stat.suffix}
              </div>
              <p className="text-cream-300 text-lg tracking-wide mt-1">
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