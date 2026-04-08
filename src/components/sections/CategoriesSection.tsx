'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { categoryMeta, type Category } from '@/data/products';

const categoryImages: Record<Category, string> = {
  bridal: '/images/bridal/bridal-brocade-1.jpeg',
  mens: '/images/mens/mens_wear.png',
  womens: '/images/womens/womens_wear.jpeg',
  trending: '/images/trending/bodycon-1.png',
  accessories: '/images/accessories/gold-jewelry-1.jpg',
};

const categoryOrder: Category[] = ['bridal', 'mens', 'womens', 'trending', 'accessories'];

export default function CategoriesSection() {
  const t = useTranslations('categories');
  const locale = useLocale();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-24 bg-cream-50 silk-texture" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="ornament-divider mb-6 max-w-xs mx-auto">
            <span className="text-gold-500 text-xl">✦</span>
          </div>
          <h2 className="section-title mb-4">{t('title')}</h2>
          <p className="section-subtitle max-w-xl mx-auto">{t('subtitle')}</p>
        </div>

        {/* FIX: We use flex-wrap with justify-center. 
          This ensures the 5th item centers itself when it drops to a new line.
        */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {categoryOrder.map((cat, i) => {
            const meta = categoryMeta[cat];
            const isBridal = cat === 'bridal';

            return (
              <Link
                key={cat}
                href={`/${locale}/collections?category=${cat}`}
                className={`
                  group relative overflow-hidden rounded-xl
                  shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
                  transition-all duration-300
                  ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                  ${isBridal ? 'ring-1 ring-gold-400/30' : ''}
                  
                  /* RESPONSIVE WIDTHS */
                  /* Mobile: 2 per row (approx 50%) */
                  w-[calc(50%-8px)] 
                  /* Tablet: 3 per row (approx 33%) */
                  md:w-[calc(33.333%-16px)] 
                  /* Desktop: 5 per row (approx 20%) */
                  lg:w-[calc(20%-20px)]
                  /* Minimum width to prevent squishing */
                  min-w-[160px]
                `}
                style={{ animationDelay: `${i * 75}ms` }}
              >

                {/* Image container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-cream-100">
                  <Image
                    src={categoryImages[cat]}
                    alt={meta.label}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />

                  {/* Softer gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div className="flex flex-col items-start gap-1">

                      {/* Premium divider */}
                      <div className="w-8 h-[1px] bg-gold-400 mb-2 opacity-80" />

                      {/* Title */}
                      <h3 className="
                        font-serif text-white 
                        text-base md:text-xl 
                        font-medium 
                        tracking-wide 
                        leading-snug
                        drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]
                      ">
                        {locale === 'kn' ? meta.labelKn : meta.label}
                      </h3>

                      {/* Bridal description (Only on hover/desktop) */}
                      {isBridal && (
                        <p className="hidden md:block text-cream-200 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {meta.description}
                        </p>
                      )}

                      {/* CTA */}
                      <span className="
                        inline-flex items-center gap-1 
                        text-gold-300 text-[10px] md:text-[11px] 
                        tracking-widest uppercase 
                        mt-2 opacity-0 group-hover:opacity-100 
                        translate-y-2 group-hover:translate-y-0 
                        transition-all duration-300
                      ">
                        {t('viewAll')} <ArrowRight size={12} />
                      </span>

                    </div>
                  </div>

                  {/* Bridal badge */}
                  {isBridal && (
                    <div className="absolute top-4 right-4 bg-gold-500 text-maroon-950 text-[9px] md:text-[10px] font-bold px-2 py-1 md:px-3 tracking-widest uppercase shadow-lg">
                      Signature
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}