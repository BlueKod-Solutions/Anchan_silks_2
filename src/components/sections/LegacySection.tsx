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
        <div className="absolute inset-0 pointer-events-none">
  <img
    src="/images/logo.svg"
    alt="Brand Logo"
    className="
      fixed 
      /* Mobile: 25% down (moves it lower) */
      top-[30%] 
      
      /* Desktop: 15% down (keeps your perfect setting) */
      md:top-[15%] 
      
      left-[50%]
      -translate-x-1/2

      /* Sizing */
      w-[700px] sm:w-[900px] md:w-[600px]

      opacity-[0.04]
      mix-blend-multiply
      select-none
    "
  />
</div>
        {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/images/logo.svg"
            alt="Brand Logo"
            className="
  absolute 
  top-[42%] left-[50%] 
  -translate-x-1/2 -translate-y-1/2

  w-[480px] 
  sm:w-[650px] 
  md:w-[1100px] 
  lg:w-[1400px]

  opacity-[0.05] sm:opacity-[0.06]
  mix-blend-multiply
"
          />
        </div> */}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-sans">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} />
          ))}
        </div>

        {/* 📜 FINAL QUOTE SECTION */}
        <div className="mt-32 text-center">
          <div className="inline-block relative">
            <span className="block text-gold-600 text-3xl font-serif mb-4 opacity-40">“</span>
            <p className="text-2xl md:text-3xl font-serif text-maroon-900 leading-relaxed italic max-w-3xl mx-auto">
              Your trust is our heritage, and your grace is our greatest service.
            </p>
            <span className="block text-gold-600 text-3xl font-serif mt-2 opacity-40 text-right">”</span>

            {/* Sub-text signature */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="h-px w-12 bg-gold-500/50" />
              <p className="text-xs tracking-[0.4em] uppercase text-gold-700 font-bold">
                Always at your service
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}