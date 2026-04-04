import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'cream' | 'white' | 'maroon' | 'maroon-dark';
}

export default function Section({ children, className, id, bg = 'white' }: SectionProps) {
  const bgMap = {
    cream:       'bg-cream-50',
    white:       'bg-white',
    maroon:      'bg-maroon-900',
    'maroon-dark': 'bg-maroon-950',
  };

  return (
    <section id={id} className={cn('py-20 md:py-24', bgMap[bg], className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
