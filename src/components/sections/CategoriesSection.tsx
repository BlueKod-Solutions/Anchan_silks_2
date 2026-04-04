'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { categoryMeta, type Category } from '@/data/products';

const categoryImages: Record<Category, string> = {
  bridal:      '/images/bridal/bridal-brocade-1.jpg',
  womens:      '/images/womens/anarkali-1.jpg',
  mens:        '/images/mens/jodhpuri-full-1.jpg',
  trending:    '/images/trending/bodycon-1.jpg',
  accessories: '/images/accessories/gold-jewelry-1.jpg',
};

const categoryOrder: Category[] = ['bridal', 'womens', 'mens', 'trending', 'accessories'];

export default function CategoriesSection() {
  const t      = useTranslations('categories');
  const locale = useLocale();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-24 bg-cream-50 silk-texture" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="ornament-divider mb-6 max-w-xs mx-auto animate-fade-in-up">
            <span className="text-gold-500 text-xl">✦</span>
          </div>
          <h2 className="section-title mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>{t('title')}</h2>
          <p className="section-subtitle max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{t('subtitle')}</p>
        </div>

        {/* Grid — bridal takes double width on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categoryOrder.map((cat, i) => {
            const meta = categoryMeta[cat];
            const isBridal = cat === 'bridal';

            return (
              <Link
                key={cat}
                href={`/${locale}/collections?category=${cat}`}
                className={`group relative overflow-hidden transition-opacity duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${isBridal ? 'col-span-2 md:col-span-3 lg:col-span-2 row-span-1' : ''}`}
                style={{ animationDelay: isVisible ? `${i * 75}ms` : '0ms' }}
              >
                {/* Image container */}
                <div className={`relative overflow-hidden bg-cream-100 ${isBridal ? 'aspect-[16/9] md:aspect-[4/3]' : 'aspect-[3/4]'}`}>
                  <Image
                    src={categoryImages[cat]}
                    alt={meta.label}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-125"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  {/* Placeholder */}
                  <div className="absolute inset-0 img-shimmer flex items-center justify-center -z-10">
                    <span className="text-5xl opacity-20">{meta.icon}</span>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-maroon-900/20 to-transparent group-hover:from-maroon-950/90 group-hover:via-maroon-900/30 transition-colors duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-2xl">{meta.icon}</span>
                    <h3 className={`font-serif text-white text-lg font-semibold mt-1 leading-tight ${isBridal ? 'text-2xl' : ''}`}>
                      {locale === 'kn' ? meta.labelKn : meta.label}
                    </h3>
                    {isBridal && (
                      <p className="text-cream-200 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {meta.description}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-gold-400 text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {t('viewAll')} <ArrowRight size={12} />
                    </span>
                  </div>

                  {/* Bridal special badge */}
                  {isBridal && (
                    <div className="absolute top-4 right-4 bg-gold-500 text-maroon-950 text-xs font-bold px-3 py-1 tracking-wide uppercase animate-scale-in" style={{ animationDelay: `${i * 75 + 200}ms` }}>
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
