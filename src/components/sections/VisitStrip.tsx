'use client';

import { useTranslations } from 'next-intl';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MapPin, Phone, Clock } from 'lucide-react';
import { siteConfig } from '@/data/products';
import { buildWhatsAppLink } from '@/lib/utils';

export default function VisitStrip() {
  const t = useTranslations('contact');
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #3D0A14 0%, #5A0D1F 40%, #2A0A14 100%)'
      }}
    >
      {/* TOP GOLD LINE */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />

      {/* SOFT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_60%)]" />

      {/* BOTTOM SEPARATOR (KEY FIX) */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent via-[#2A0A14] to-[#1A060F]" />

      {/* INNER CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className={`
          grid grid-cols-1 md:grid-cols-3 gap-12 items-center
          transition-all duration-700
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
        >

          {/* ADDRESS */}
          <div className="group flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">

            <div className="w-14 h-14 border border-gold-500/40 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:scale-105 transition shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <MapPin className="text-gold-400" size={20} />
            </div>

            <div>
              <p className="text-[11px] tracking-[0.35em] uppercase text-gold-400 mb-2">
                {t('mainStore')}
              </p>
              <p className="text-cream-200 text-sm leading-relaxed max-w-xs">
                {siteConfig.address.main}
              </p>
            </div>
          </div>

          {/* HOURS */}
          <div className="group flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">

            <div className="w-14 h-14 border border-gold-500/40 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:scale-105 transition shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <Clock className="text-gold-400" size={20} />
            </div>

            <div>
              <p className="text-[11px] tracking-[0.35em] uppercase text-gold-400 mb-2">
                {t('hours')}
              </p>
              <p className="text-cream-200 text-sm">
                {t('weekdays')}: {t('weekdayTime')}
              </p>
              <p className="text-cream-200 text-sm">
                {t('sunday')}: {t('sundayTime')}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">

            {/* CALL BUTTON */}
            <a
              href={`tel:${siteConfig.phone.main}`}
              className="group relative px-7 py-3 text-[11px] tracking-[0.3em] uppercase border border-gold-500/40 text-gold-300 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              <span className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 group-hover:text-maroon-950 transition">
                {t('callUs')}
              </span>
            </a>

            {/* WHATSAPP BUTTON */}
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-7 py-3 text-[11px] tracking-[0.3em] uppercase bg-gold-500 text-maroon-950 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              <span className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">
                {t('whatsapp')}
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}