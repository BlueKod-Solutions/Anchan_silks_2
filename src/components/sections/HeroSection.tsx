'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/utils';

/* 🔢 Counter Component */
function Counter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = target / (duration / 10);

    const counter = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
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
          poster="/images/store/hero-poster.jpg"
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
          <span className="text-gold-400 text-xs font-medium tracking-[0.3em] uppercase drop-shadow-sm">
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

          {/* Secondary CTA */}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/60 text-white text-base font-medium hover:bg-white/10 hover:border-white transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606..." />
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
            { number: 1005, suffix: '+', label: 'Children Supported' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl text-gold-400 font-semibold">
                <Counter target={stat.number} duration={800 + i * 100} />
                {stat.suffix}
              </p>
              <p className="text-cream-300 text-xs tracking-wide mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}