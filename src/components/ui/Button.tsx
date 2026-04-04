import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'gold' | 'outline' | 'ghost';

interface ButtonProps {
  variant?: Variant;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-maroon-900 text-cream-50 hover:bg-maroon-800',
  gold:    'bg-gold-500 text-maroon-950 font-semibold hover:bg-gold-400',
  outline: 'border border-maroon-900 text-maroon-900 hover:bg-maroon-900 hover:text-white',
  ghost:   'text-maroon-900 hover:bg-maroon-50',
};

export default function Button({
  variant = 'primary',
  href,
  external,
  children,
  className,
  onClick,
  disabled,
  type = 'button',
  fullWidth,
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200',
    variantStyles[variant],
    fullWidth && 'w-full',
    disabled && 'opacity-50 pointer-events-none',
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
