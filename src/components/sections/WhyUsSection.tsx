'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Factory, ShieldCheck, ShoppingBag, Heart } from 'lucide-react';

const icons = [Factory, ShieldCheck, ShoppingBag, Heart];

export default function WhyUsSection() {
  const t = useTranslations('why');
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const items = [
    { titleKey: 'item1title', descKey: 'item1desc', color: 'bg-maroon-50', border: 'border-maroon-100' },
    { titleKey: 'item2title', descKey: 'item2desc', color: 'bg-gold-50',   border: 'border-gold-100' },
    { titleKey: 'item3title', descKey: 'item3desc', color: 'bg-maroon-50', border: 'border-maroon-100' },
    { titleKey: 'item4title', descKey: 'item4desc', color: 'bg-gold-50',   border: 'border-gold-100' },
  ];

  return (
    <section className="py-24 bg-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="ornament-divider mb-6 max-w-xs mx-auto animate-fade-in-up">
            <span className="text-gold-500 text-xl">✦</span>
          </div>
          <h2 className="section-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>{t('title')}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.titleKey}
                className={`${item.color} border ${item.border} p-8 group hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${i * 100}ms` : '0ms' }}
              >
                <div className="w-12 h-12 bg-maroon-900 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                  <Icon size={22} className="text-white group-hover:text-maroon-950 transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl text-maroon-900 mb-3">
                  {t(item.titleKey as any)}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed">
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
