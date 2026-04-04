'use client';

import { useTranslations } from 'next-intl';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Factory, ShieldCheck, ShoppingBag, Heart } from 'lucide-react';

const icons = [Factory, ShieldCheck, ShoppingBag, Heart];

// Distinct gold accent marks per card
const cardAccents = ['✦', '❧', '◈', '✾'];

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
  className="relative py-32 overflow-hidden"
  style={{
    background: 'linear-gradient(180deg, #FDF8F6 0%, #D8B4B8 100%)'
  }}
>

  {/* Soft glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />

  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className={`text-center mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700`}>
      
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/60"/>
        <div className="w-2 h-2 bg-gold-500 rotate-45"/>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/60"/>
      </div>

      <h2 className="text-4xl md:text-5xl font-serif text-maroon-950">
        {t('title')}
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {items.map((item, i) => {
        const Icon = icons[i];
        return (
          <div
            key={item.titleKey}
            className="group relative p-8 bg-white/80 backdrop-blur-sm hover:-translate-y-2 transition-all duration-500"
            style={{
              border: '1px solid rgba(212,175,55,0.2)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            }}
          >
            {/* Gold glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
              style={{ boxShadow: '0 0 40px rgba(212,175,55,0.15)' }}
            />

            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center mb-6"
              style={{
                background: 'rgba(212,175,55,0.1)',
                border: '1px solid rgba(212,175,55,0.3)'
              }}>
              <Icon size={20} className="text-maroon-900 group-hover:text-gold-500 transition"/>
            </div>

            <h3 className="text-xl font-serif text-maroon-950 mb-3">
              {t(item.titleKey as any)}
            </h3>

            <p className="text-sm text-[#7A5C40] leading-relaxed">
              {t(item.descKey as any)}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>
  );
}
