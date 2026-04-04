'use client';

import { useTranslations } from 'next-intl';
import TimelineItem from '../TimelineItem';
import StatItem from '../StatItem';

const milestones = [
  { yearKey: 'year1999', descKey: 'year1999desc', decade: '1999' },
  { yearKey: 'year2007', descKey: 'year2007desc', decade: '2007' },
  { yearKey: 'year2024', descKey: 'year2024desc', decade: '2024' },
];

export default function LegacySection() {
  const t = useTranslations('legacy');

  const stats = [
    { value: t('stat1'), label: t('stat1label') },
    { value: t('stat2'), label: t('stat2label') },
    { value: t('stat3'), label: t('stat3label') },
    { value: t('stat4'), label: t('stat4label') },
  ];

  return (
    <section
      className="relative py-36 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at top, rgba(212,175,55,0.15), transparent 40%),
          linear-gradient(90deg, #EFE6DA 0%, #F7F1E8 100%)
        `
      }}
    >
      {/* 👑 Large faded watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[120px] md:text-[220px] font-serif text-maroon-950/5 tracking-widest">
          LEGACY
        </h1>
      </div>

      {/* ✨ Decorative radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
      bg-gold-400/10 blur-3xl rounded-full pointer-events-none" />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px 
      bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-maroon-950 mb-6 tracking-wide">
            {t('title')}
          </h2>

          {/* ✨ Minimal emotional line */}
          <p className="text-base italic text-[#8A6040] max-w-xl mx-auto leading-relaxed">
            A journey of trust, tradition, and timeless elegance.
          </p>
        </div>

        {/* 👑 Decorative divider */}
        <div className="flex items-center justify-center mb-24">
          <div className="w-24 h-px bg-gold-400/50" />
          <div className="mx-4 w-2 h-2 rounded-full bg-gold-500" />
          <div className="w-24 h-px bg-gold-400/50" />
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] 
          bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-70" />

          <div className="space-y-28">
            {milestones.map((m, i) => (
              <TimelineItem key={m.yearKey} m={m} i={i} t={t} />
            ))}
          </div>
        </div>

        {/* ✨ Section Divider */}
        <div className="flex items-center justify-center mt-32 mb-12">
          <div className="w-16 h-px bg-gold-400/40" />
          <div className="mx-3 w-1.5 h-1.5 rounded-full bg-gold-500" />
          <div className="w-16 h-px bg-gold-400/40" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} />
          ))}
        </div>

      </div>
    </section>
  );
}