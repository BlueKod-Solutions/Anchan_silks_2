'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import Navbar        from '@/components/layout/Navbar';
import Footer        from '@/components/layout/Footer';
import ProductCard   from '@/components/shared/ProductCard';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { products, categoryMeta, type Category } from '@/data/products';

type FilterValue = Category | 'all';

const filters: { value: FilterValue; icon: string }[] = [
  { value: 'all',         icon: '✦' },
  { value: 'bridal',      icon: '🥻' },
  { value: 'womens',      icon: '👗' },
  { value: 'mens',        icon: '🤵' },
  { value: 'trending',    icon: '✨' },
  { value: 'accessories', icon: '💍' },
];

export default function CollectionsPage() {
  const t           = useTranslations('collections');
  const locale      = useLocale();
  const searchParams = useSearchParams();
  const [active, setActive] = useState<FilterValue>('all');
  const { ref: gridRef, isVisible: gridVisible } = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    const cat = searchParams.get('category') as Category | null;
    if (cat && Object.keys(categoryMeta).includes(cat)) {
      setActive(cat);
    }
  }, [searchParams]);

  const filtered = active === 'all'
    ? products
    : products.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
    <main className="min-h-screen bg-cream-50 pt-16">

      {/* Page header */}
      <div className="pt-32 md:pt-40 pb-16 bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 silk-texture opacity-20" />
        <div className="absolute inset-8 border border-gold-500/20 pointer-events-none hidden lg:block" />
        {/* Rich gradient overlay for darker appearance */}
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-950/40 via-maroon-900/30 to-maroon-800/40" />
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-4 animate-fade-in-up">
            <span className="h-px w-12 bg-gold-400 animate-fade-in-left" />
            <p className="text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              ✦ Anchan Silks
            </p>
            <span className="h-px w-12 bg-gold-400 animate-fade-in-right" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{t('title')}</h1>
          <p className="text-cream-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>{t('subtitle')}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-white border-b border-cream-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            <span className="text-xs text-muted shrink-0 mr-2 hidden sm:block">{t('filterLabel')}:</span>
            {filters.map(({ value, icon }) => {
              const label = value === 'all'
                ? t('all')
                : locale === 'kn'
                  ? categoryMeta[value as Category].labelKn
                  : categoryMeta[value as Category].label;
              return (
                <button
                  key={value}
                  onClick={() => setActive(value)}
                  className={`shrink-0 flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    active === value
                      ? 'bg-maroon-900 text-white'
                      : 'bg-cream-50 text-charcoal hover:bg-maroon-50 hover:text-maroon-900 border border-cream-200'
                  }`}
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm text-muted mb-8">
          {filtered.length} {filtered.length === 1 ? 'item' : 'items'}{active !== 'all' ? ` in ${locale === 'kn' ? categoryMeta[active as Category].labelKn : categoryMeta[active as Category].label}` : ''}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <span className="text-6xl">🥻</span>
            <p className="text-muted mt-4">No products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6" ref={gridRef}>
            {filtered.map((product, index) => (
              <div
                key={product.id}
                className={`transition-opacity duration-500 ${gridVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: gridVisible ? `${index * 75}ms` : '0ms' }}
              >
                <ProductCard
                  product={product}
                  enquireLabel={t('enquireBtn')}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
    </>
  );
}
