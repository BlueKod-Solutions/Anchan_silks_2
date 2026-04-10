'use client';

import { useTranslations } from 'next-intl';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Factory, ShieldCheck, ShoppingBag, Heart } from 'lucide-react';

const icons = [Factory, ShieldCheck, ShoppingBag, Heart];
const cardAccents = ['✦', '❧', '◈', '✾'];

function WhyUsCard({ item, index, t }: { item: any; index: number; t: any }) {
  const Icon = icons[index];
  const { ref: itemRef, isVisible: itemVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={itemRef}
      className={`group relative p-10 min-h-[260px] bg-white/90 backdrop-blur-md 
  transition-all duration-700 rounded-sm
  ${itemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
  hover:-translate-y-3 hover:scale-[1.02]
  `}
      style={{
        border: '1px solid rgba(212,175,55,0.25)',
        boxShadow: '0 18px 45px rgba(0,0,0,0.08)',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,248,240,0.9))'
      }}
    >
      {/* Top gold line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      {/* Corner accent */}
      <div className="absolute top-4 right-4 text-gold-500/40 text-sm">
        {cardAccents[index]}
      </div>

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        style={{ boxShadow: '0 0 60px rgba(212,175,55,0.15)' }}
      />

      {/* Shine */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 
  bg-gradient-to-r from-transparent via-white/40 to-transparent 
  translate-x-[-100%] group-hover:translate-x-[100%]" />

      {/* 👑 ICON BADGE (UPGRADED) */}
      <div className="relative mb-6">

        {/* outer glow ring */}
        <div className="absolute inset-0 rounded-full blur-xl bg-gold-400/20" />

        {/* main circle */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center 
    bg-gradient-to-br from-[#fff7e6] to-[#f1e1c6] 
    border border-gold-500/40 shadow-md relative">

          {/* inner border */}
          <div className="absolute inset-1 rounded-full border border-gold-400/30" />

          <Icon size={22} className="text-maroon-900 group-hover:text-gold-600 transition duration-300" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-serif font-semibold text-maroon-950 mb-4">
        {t(item.titleKey as any)}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-[#7A5C40] leading-relaxed">
        {t(item.descKey as any)}
      </p>
    </div>
  );
}

export default function WhyUsSection() {
  const t = useTranslations('why');
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const items = [
    { titleKey: 'item1title', descKey: 'item1desc' },
    { titleKey: 'item2title', descKey: 'item2desc' },
    { titleKey: 'item3title', descKey: 'item3desc' },
    { titleKey: 'item4title', descKey: 'item4desc' },
  ];

  return (
    <section
      ref={ref}
      className="relative py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FDF8F6 0%, #D8B4B8 100%)'
      }}
    >
      {/* 👑 Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />

      {/* 👑 Large faded text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[120px] md:text-[180px] font-serif text-maroon-950/5 tracking-widest">
          TRUST
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/60" />
            <div className="w-2 h-2 bg-gold-500 rotate-45" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/60" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-maroon-950">
            {t('title')}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, i) => (
            <WhyUsCard key={item.titleKey} item={item} index={i} t={t} />
          ))}
        </div>

      </div>
    </section>
  );
}