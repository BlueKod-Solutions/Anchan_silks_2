'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const milestones = [
  { yearKey: 'year1999', descKey: 'year1999desc', decade: '1999' },
  { yearKey: 'year2007', descKey: 'year2007desc', decade: '2007' },
  { yearKey: 'year2024', descKey: 'year2024desc', decade: '2024' },
];

export default function LegacySection() {
  const t = useTranslations('legacy');
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const stats = [
    { value: t('stat1'), label: t('stat1label') },
    { value: t('stat2'), label: t('stat2label') },
    { value: t('stat3'), label: t('stat3label') },
    { value: t('stat4'), label: t('stat4label') },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #6B1B2A 0, #6B1B2A 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="ornament-divider mb-6 max-w-xs mx-auto animate-fade-in-up">
            <span className="text-gold-500 text-xl">✦</span>
          </div>
          <h2 className="section-title mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>{t('title')}</h2>
          <p className="section-subtitle max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{t('subtitle')}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold-200 via-gold-500 to-gold-200" />

          <div className="space-y-16 md:space-y-0">
            {milestones.map((m, i) => (
              <div
                key={m.yearKey}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 transition-opacity duration-500 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${i * 150}ms` : '0ms' }}
              >
                {/* Content */}
                <div className={`md:w-5/12 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <div className={`inline-block bg-maroon-50 border border-maroon-100 p-6 ${i % 2 === 0 ? 'md:ml-auto' : ''} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                    <p className="text-gold-600 text-xs font-bold tracking-widest uppercase mb-2">
                      {t(m.yearKey as any)}
                    </p>
                    <p className="text-maroon-900 font-serif text-lg leading-snug">
                      {t(m.descKey as any)}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="md:w-2/12 flex justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-gold-400 bg-white flex items-center justify-center z-10 animate-scale-in" style={{ animationDelay: `${i * 150 + 100}ms` }}>
                      <span className="font-serif text-maroon-900 font-bold text-sm">{m.decade}</span>
                    </div>
                    <div className="absolute w-20 h-20 rounded-full border border-gold-200 animate-ping opacity-20" />
                  </div>
                </div>

                {/* Empty side */}
                <div className="md:w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-gold-100">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`bg-white p-10 text-center transition-all duration-300 hover:shadow-md ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? `${500 + i * 80}ms` : '0ms' }}>
              <p className="font-serif text-5xl text-maroon-900 font-semibold">{stat.value}</p>
              <p className="text-muted text-sm mt-3 font-light tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
