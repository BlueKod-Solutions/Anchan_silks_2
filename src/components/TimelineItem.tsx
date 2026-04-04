'use client';

import { useInView } from '@/hooks/useInView';

export default function TimelineItem({ m, i, t }: any) {
  const { ref, isVisible } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-10 transition-all duration-700
      ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
      `}
    >
      {/* Card */}
      <div className="md:w-5/12">
        <div
          className={`p-8 bg-white/90 backdrop-blur-md shadow-xl 
          transition-all duration-700
          ${isVisible
            ? 'opacity-100 translate-x-0'
            : i % 2 === 0
              ? 'opacity-0 -translate-x-20'
              : 'opacity-0 translate-x-20'
          }`}
          style={{
            border: '1px solid rgba(212,175,55,0.4)',
            boxShadow: '0 10px 40px rgba(128,0,32,0.15)'
          }}
        >
          <p className="text-xs tracking-widest text-gold-500 mb-3 uppercase">
            {t(m.yearKey)}
          </p>
          <p className="text-xl font-serif font-semibold text-maroon-950">
            {t(m.descKey)}
          </p>
        </div>
      </div>

      {/* Center circle */}
      <div className="md:w-2/12 flex justify-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center 
        bg-gradient-to-br from-[#fff7e6] to-[#f1e1c6] 
        border-2 border-gold-500 shadow-xl">

          <span className="text-base font-serif font-bold text-maroon-950">
            {m.decade}
          </span>
        </div>
      </div>

      <div className="md:w-5/12" />
    </div>
  );
}