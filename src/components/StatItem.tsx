'use client';

import CountUp from 'react-countup';
import { useInView } from '@/hooks/useInView';

export default function StatItem({ stat }: any) {
  const { ref, isVisible } = useInView({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`text-center p-8 bg-white/90 backdrop-blur-md 
      shadow-lg transition-all duration-700 border border-gold-400/30
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <p className="text-4xl font-serif font-bold text-maroon-950 mb-2">
        {isVisible && (
          <CountUp end={parseInt(stat.value)} duration={2} />
        )}
      </p>

      <p className="text-xs uppercase tracking-widest text-gold-500">
        {stat.label}
      </p>
    </div>
  );
}