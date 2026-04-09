'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { products } from '@/data/products';
import { buildProductWhatsAppLink } from '@/lib/utils';

export default function BridalSpotlight() {
  const t = useTranslations('bridal');
  const tCat = useTranslations('categories');
  const locale = useLocale();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  // If you want to see the centering effect, ensure this is an odd number (like 5)
  const featured = products
    .filter((p) => p.category === 'bridal' && p.featured)
    .slice(0, 5); 

  return (
    <section
      className="py-28 bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-800 relative overflow-hidden"
      ref={ref}
    >
      {/* Texture */}
      <div className="absolute inset-0 silk-texture opacity-10" />

      {/* Soft gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_65%)]" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== HEADER ===== */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/60" />
            <div className="w-2 h-2 bg-gold-500 rotate-45" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/60" />
          </div>

          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-400 mb-4">
            {t('badge')}
          </p>

          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight tracking-tight">
            {t('title')}
          </h2>

          <p className="text-cream-200/70 text-sm mt-5 max-w-lg mx-auto leading-relaxed italic">
            {t('subtitle')}
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {featured.map((product, index) => {
            const name = locale === 'kn' ? product.nameKn : product.name;

            return (
              <div
                key={product.id}
                className={`group relative transition-all duration-700 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  /* MOBILE CENTERING LOGIC */
                  last:col-span-2 last:md:col-span-1 last:flex last:justify-center
                `}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                {/* Added 'w-full max-w-[200px] md:max-w-none' to the inner container 
                   to prevent the centered item from becoming too wide on mobile.
                */}
                <div className="relative aspect-[3/4] rounded-md overflow-hidden transform transition duration-500 group-hover:scale-[1.06] shadow-md group-hover:shadow-2xl w-full max-w-[220px] md:max-w-none">

                  {/* IMAGE */}
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* LIGHT OVERLAY */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />

                  {/* GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* GOLD BORDER */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(212,175,55,0.6)' }}
                  />

                  {/* TAG */}
                  {product.tag && (
                    <div className="absolute top-3 left-3 bg-gold-500 text-maroon-950 text-[10px] px-2 py-1 uppercase tracking-widest font-semibold">
                      {product.tag}
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-cream-100 text-sm leading-snug tracking-wide">
                      {name}
                    </p>

                    <div className="overflow-hidden max-h-0 group-hover:max-h-12 transition-all duration-400 ease-out">
                      <a
                        href={buildProductWhatsAppLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center text-[11px] tracking-[0.25em] uppercase mt-3 py-2 bg-gold-500 text-maroon-950 hover:bg-gold-400 transition"
                      >
                        {tCat('enquire')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== CTA ===== */}
        <div className="mt-16 flex justify-center">
          <Link
            href={`/${locale}/collections?category=bridal`}
            className="relative inline-flex items-center px-10 py-4 text-[11px] tracking-[0.35em] uppercase border border-gold-500/40 text-gold-400 overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 group-hover:text-maroon-950 transition">
              {tCat('viewAll')}
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}