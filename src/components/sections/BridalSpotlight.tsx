'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { products } from '@/data/products';
import { buildProductWhatsAppLink } from '@/lib/utils';

export default function BridalSpotlight() {
  const t       = useTranslations('bridal');
  const tCat    = useTranslations('categories');
  const locale  = useLocale();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const featured = products.filter((p) => p.category === 'bridal' && p.featured).slice(0, 6);

  return (
    <section className="py-24 bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-800 relative overflow-hidden" ref={ref}>
      {/* Decorative silk texture */}
      <div className="absolute inset-0 silk-texture opacity-20" />
      {/* Gold orb glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="inline-block text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
              ✦ {t('badge')}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t('title')}
            </h2>
            <p className="text-cream-200 text-base mt-4 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t('subtitle')}
            </p>
          </div>
          <Link
            href={`/${locale}/collections?category=bridal`}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-gold-500/50 text-gold-400 text-sm font-medium hover:bg-gold-500 hover:text-maroon-950 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {tCat('viewAll')} →
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {featured.map((product, index) => {
            const name = locale === 'kn' ? product.nameKn : product.name;
            // First two cards taller
            const isTall = index < 2;

            return (
              <div
                key={product.id}
                className={`group relative overflow-hidden transition-opacity duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${isTall ? 'row-span-1 col-span-1' : ''}`}
                style={{ animationDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className={`relative overflow-hidden bg-maroon-900 ${isTall ? 'aspect-[2/3]' : 'aspect-[3/4]'}`}>
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    className="object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  {/* Placeholder */}
                  <div className="absolute inset-0 bg-maroon-800 flex items-center justify-center -z-10">
                    <span className="text-4xl opacity-20">🥻</span>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Tag */}
                  {product.tag && (
                    <span className="absolute top-2 left-2 bg-gold-500 text-maroon-950 text-xs font-bold px-2 py-0.5 animate-scale-in" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                      {product.tag}
                    </span>
                  )}

                  {/* Hover content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-xs font-medium mb-2 leading-tight">{name}</p>
                    <a
                      href={buildProductWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs bg-gold-500 text-maroon-950 font-bold px-3 py-1.5 w-full text-center hover:bg-gold-400 transition-colors duration-200"
                    >
                      {tCat('enquire')}
                    </a>
                  </div>
                </div>

                {/* Name below card */}
                <p className={`text-cream-300 text-xs mt-2 leading-snug px-1 transition-opacity duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: isVisible ? `${index * 100 + 50}ms` : '0ms' }}>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
