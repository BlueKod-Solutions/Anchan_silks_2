'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import type { Product } from '@/data/products';
import { buildProductWhatsAppLink } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  enquireLabel?: string;
}

export default function ProductCard({ product, enquireLabel = 'Enquire on WhatsApp' }: ProductCardProps) {
  const locale = useLocale();
  const name   = locale === 'kn' ? product.nameKn : product.name;

  return (
    <div className="group relative bg-white overflow-hidden card-hover border border-cream-100">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-50">
        <Image
          src={product.image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          onError={(e) => {
            // Fallback to placeholder if image not found
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />

        {/* Fallback placeholder shown when image is missing */}
        <div className="absolute inset-0 img-shimmer flex items-center justify-center -z-10">
          <span className="text-4xl opacity-30">🥻</span>
        </div>

        {/* Tag badge */}
        {product.tag && (
          <span className="absolute top-3 left-3 bg-maroon-900 text-cream-50 text-xs px-2.5 py-1 font-medium tracking-wide">
            {product.tag}
          </span>
        )}

        {/* WhatsApp overlay on hover */}
        <div className="absolute inset-0 bg-maroon-900/0 group-hover:bg-maroon-900/60 transition-all duration-300 flex items-center justify-center">
          <a
            href={buildProductWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-white text-maroon-900 text-sm font-semibold px-5 py-2.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {enquireLabel}
          </a>
        </div>
      </div>

      {/* Name */}
      <div className="p-4">
        <h3 className={cn(
          'text-maroon-900 font-medium text-sm leading-snug',
          locale === 'kn' && 'font-kannada'
        )}>
          {name}
        </h3>
      </div>
    </div>
  );
}
