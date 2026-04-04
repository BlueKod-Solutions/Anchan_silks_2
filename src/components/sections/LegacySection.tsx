'use client';

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
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #EFE6DA 0%, #F7F1E8 100%)'
      }}
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-24 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl md:text-5xl font-serif text-maroon-950 mb-4">
            {t('title')}
          </h2>
          <p className="text-sm italic text-[#8A6040] max-w-md mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold-500/50" />

          <div className="space-y-20">
            {milestones.map((m, i) => (
              <div
                key={m.yearKey}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >

                {/* Card */}
                <div className="md:w-5/12">
                  <div className="p-8 bg-white shadow-xl transition hover:-translate-y-1"
                    style={{ border: '1px solid rgba(212,175,55,0.3)' }}
                  >
                    <p className="text-xs tracking-widest text-gold-500 mb-3 uppercase">
                      {t(m.yearKey as any)}
                    </p>
                    <p className="text-lg font-serif text-maroon-950 leading-snug">
                      {t(m.descKey as any)}
                    </p>
                  </div>
                </div>

                {/* Center circle */}
                <div className="md:w-2/12 flex justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white border-2 border-gold-500 shadow-lg">
                    <span className="text-sm font-serif text-maroon-950">
                      {m.decade}
                    </span>
                  </div>
                </div>

                <div className="md:w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div className="text-center p-6 bg-white shadow-md hover:shadow-xl transition border border-gold-400/20">
              <p className="text-3xl font-serif text-maroon-950 mb-2">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-gold-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}