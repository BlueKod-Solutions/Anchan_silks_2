import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'center' | 'left';
  light?: boolean; // for dark backgrounds
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-14', align === 'center' ? 'text-center' : 'text-left')}>
      {badge && (
        <p className={cn(
          'text-xs font-semibold tracking-[0.3em] uppercase mb-4',
          light ? 'text-gold-300' : 'text-gold-600'
        )}>
          ✦ {badge}
        </p>
      )}

      {!badge && (
        <div className={cn(
          'ornament-divider mb-6',
          align === 'center' ? 'max-w-xs mx-auto' : 'max-w-xs'
        )}>
          <span className="text-gold-500 text-xl">✦</span>
        </div>
      )}

      <h2 className={cn(
        'font-serif text-4xl md:text-5xl leading-tight',
        light ? 'text-white' : 'text-maroon-900'
      )}>
        {title}
      </h2>

      {subtitle && (
        <p className={cn(
          'text-base mt-4 max-w-xl leading-relaxed',
          align === 'center' && 'mx-auto',
          light ? 'text-cream-300' : 'text-muted'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
