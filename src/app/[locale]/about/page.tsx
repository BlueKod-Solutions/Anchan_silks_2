'use client';

import { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';

// --- Helper Component: Animated Number Counter ---
const AnimatedNumber = ({ value, isVisible }: { value: string, isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  // Extract number and suffix (e.g., "1005+" -> target: 1005, suffix: "+")
  const targetMatch = value.match(/(\d+)/);
  const target = targetMatch ? parseInt(targetMatch[0], 10) : null;
  const suffix = value.replace(/[0-9]/g, '');


  useEffect(() => {
    if (!isVisible || target === null) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds animation

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, isVisible]);

  // If it's a non-number like '∞', just return it as is
  if (target === null) return <span>{value}</span>;

  return <span>{count}{suffix}</span>;
};

export default function AboutPage() {
  const t = useTranslations('about');
  const { ref: storyRef, isVisible: storyVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: socialRef, isVisible: socialVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: trustRef, isVisible: trustVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: ownerRef, isVisible: ownerVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: heritageRef, isVisible: heritageVisible } = useIntersectionObserver({ threshold: 0.1 });
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream-50 pt-20">

        {/* Hero */}
        <div className="pt-32 md:pt-40 pb-20 bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-800 relative overflow-hidden">
          <div className="absolute inset-0 silk-texture opacity-20" />
          <div className="absolute inset-8 border border-gold-500/20 pointer-events-none hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-br from-maroon-950/40 via-maroon-900/30 to-maroon-800/40" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="flex items-center justify-center gap-4 mb-4 animate-fade-in-up">
              <span className="h-px w-12 bg-gold-400 animate-fade-in-left" />
              <p className="text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase animate-fade-in-up" style={{ animationDelay: '0.1s' }}>✦ Since 1999</p>
              <span className="h-px w-12 bg-gold-400 animate-fade-in-right" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{t('title')}</h1>
            <p className="text-cream-200 text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>{t('subtitle')}</p>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="relative bg-white overflow-hidden" ref={storyRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between min-h-[700px] lg:gap-20">

              {/* LEFT CONTENT BLOCK */}
              <div className="w-full lg:w-[60%] pt-24 pb-0 lg:pb-24 order-1">
                <div className={`transition-all duration-1000 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                  {/* ✅ Heading + Perfectly Aligned Underline */}
                  <div className="mb-12">
                    <div className="flex items-start gap-4">

                      {/* Star */}
                      <span className="text-gold-500 text-2xl mt-2">✦</span>

                      {/* Text */}
                      <div>
                        <h2 className="font-serif text-4xl md:text-5xl text-maroon-900 tracking-tight">
                          Our Heritage & Vision
                        </h2>

                        {/* Underline aligned with text */}
                        <div className="mt-4 flex justify-center">
                          <div className="flex items-center">
                            <div className="h-[2px] w-36 bg-gradient-to-r from-transparent to-gold-600/80 rounded-full" />
                            <div className="mx-3 text-gold-600 text-sm">◆</div>
                            <div className="h-[2px] w-36 bg-gradient-to-r from-gold-600/80 to-transparent rounded-full" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* TEXT CONTENT */}
                  <div className="space-y-10 text-charcoal text-lg md:text-xl leading-relaxed">

                    <div>
                      <p>
                        <span className="text-3xl font-serif text-maroon-900 mr-3">1999.</span>
                        {t('story1')}
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gold-100" />
                      <p className="italic text-maroon-950 font-light">
                        As our reputation grew, so did our responsibility to the craft.
                        <span className="font-bold ml-2 italic">By 2007,</span> {t('story2')}
                      </p>
                    </div>

                  </div>
                </div>

                {/* DESKTOP ONLY TEXT */}
                <div className="hidden lg:block mt-12">
                  <div className="pt-10 border-t border-stone-100">
                    <h3 className="text-2xl font-serif text-maroon-900 mb-6">
                      The Evolution of Elegance
                    </h3>
                    <p className="text-charcoal/90 text-lg md:text-xl leading-relaxed">
                      {t('story3')}
                    </p>
                  </div>

                  <div className="mt-20 flex items-center gap-6 opacity-40">
                    <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-maroon-900 whitespace-nowrap">
                      Architectural Excellence
                    </span>
                    <div className="h-px w-full bg-maroon-900" />
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE BLOCK */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center py-10 order-2 lg:ml-auto lg:translate-x-20">

                {/* IMAGE */}
                {/* Container with a more natural aspect ratio for buildings */}
<div className={`relative w-full aspect-[4/3] lg:aspect-square shadow-2xl rounded-sm overflow-hidden transition-all duration-1000 delay-300 ${storyVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
  <Image
    src="/images/Anchan_shop.jpeg"
    alt="Anchan Mall Exterior"
    fill
    className="object-cover object-center" 
    priority
  />
  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
</div>

                {/* CAPTION */}
                <div className="mt-8 text-center lg:text-right lg:-translate-x-20">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-maroon-900/50 font-semibold">
                    Bantwal Bypass Landmark • 2024
                  </p>
                </div>
              </div>

              {/* MOBILE ONLY TEXT */}
              <div className="w-full lg:hidden pb-24 pt-10 order-3">
                <div className={`transition-all duration-1000 delay-200 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                  <div className="pt-10 border-t border-stone-100">
                    <h3 className="text-2xl font-serif text-maroon-900 mb-6">
                      The Evolution of Elegance
                    </h3>
                    <p className="text-charcoal/90 text-lg md:text-xl leading-relaxed">
                      {t('story3')}
                    </p>
                  </div>

                  <div className="mt-12 flex items-center gap-6 opacity-40">
                    <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-maroon-900 whitespace-nowrap">
                      Architectural Excellence
                    </span>
                    <div className="h-px w-full bg-maroon-900" />
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Owner Quote Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-maroon-50 to-cream-50" ref={ownerRef}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">

              {/* IMAGE CONTAINER */}
              <div className={`flex justify-center transition-all duration-700 ${ownerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative">
                  <div className="border-[6px] md:border-8 border-gold-400 shadow-2xl overflow-hidden max-w-[280px] sm:max-w-sm">
                    <img
                      src="/images/Anchan_Owner.jpeg"
                      alt="Owner"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-maroon-200 pointer-events-none hidden lg:block" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-gold-200 pointer-events-none hidden lg:block" />
                </div>
              </div>

              {/* CONTENT CONTAINER */}
              <div
                className={`text-center md:text-left transition-all duration-700 ${ownerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: ownerVisible ? '200ms' : '0ms' }}
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                  <span className="h-px w-8 bg-gold-500" />
                  <p className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">{t('ownerTitle')}</p>
                  <span className="h-px w-8 bg-gold-500 md:hidden" />
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-maroon-950 mb-6 leading-tight">
                  A Message from Our Founder
                </h2>

                <div className="mb-8 px-2 md:px-0">
                  <p className="text-lg md:text-xl text-maroon-900 leading-relaxed italic font-light relative">
                    <span className="text-5xl text-gold-500/30 font-serif absolute -top-4 -left-2 md:-left-6 lg:text-gold-500 lg:relative lg:top-1 lg:left-0 lg:block lg:mb-2">&quot;</span>
                    <span className="relative z-10">{t('ownerQuote')}</span>
                  </p>
                </div>

                <p className="text-base text-charcoal mb-10 leading-relaxed max-w-prose mx-auto md:mx-0">
                  {t('ownerMessage')}
                </p>

                <div className="inline-block md:block border-t border-gold-300 pt-6 px-4 md:px-0 md:w-64">
                  <p className="font-serif text-2xl text-gold-600 font-bold tracking-wide uppercase">Prakash Anchan</p>
                  <div className="flex flex-col mt-1">
                    <span className="font-serif text-xl text-maroon-950 font-semibold italic">Founder & Visionary</span>
                    <span className="text-xl text-charcoal/70 uppercase tracking-widest mt-1">Anchan Silks</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-cream-50 to-maroon-50" ref={heritageRef}>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">

      {/* CONTENT CONTAINER — left side */}
      <div
        className={`text-center md:text-left transition-all duration-700 ${heritageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ animationDelay: heritageVisible ? '200ms' : '0ms' }}
      >
        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
          <span className="h-px w-8 bg-gold-500" />
          <p className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">{t('heritageTitle')}</p>
          <span className="h-px w-8 bg-gold-500 md:hidden" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-maroon-950 mb-6 leading-tight">
          Woven with Tradition, Crafted with Love
        </h2>

        <div className="mb-8 px-2 md:px-0">
          <p className="text-lg md:text-xl text-maroon-900 leading-relaxed italic font-light relative">
            <span className="text-5xl text-gold-500/30 font-serif absolute -top-4 -left-2 md:-left-6 lg:text-gold-500 lg:relative lg:top-1 lg:left-0 lg:block lg:mb-2">&quot;</span>
            <span className="relative z-10">{t('heritageQuote')}</span>
          </p>
        </div>

        <p className="text-base text-charcoal mb-10 leading-relaxed max-w-prose mx-auto md:mx-0">
          {t('heritageMessage')}
        </p>

        <div className="inline-block md:block border-t border-gold-300 pt-6 px-4 md:px-0 md:w-64">
          <p className="font-serif text-2xl text-gold-600 font-bold tracking-wide uppercase">Shekhar Anchan</p>
          <div className="flex flex-col mt-1">
            <span className="font-serif text-xl text-maroon-950 font-semibold italic">Partner</span>
            <span className="text-xl text-charcoal/70 uppercase tracking-widest mt-1">Anchan Silks</span>
          </div>
        </div>
      </div>

      {/* IMAGE CONTAINER — right side */}
      <div className={`flex justify-center transition-all duration-700 ${heritageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative">
          <div className="border-[6px] md:border-8 border-gold-400 shadow-2xl overflow-hidden max-w-[280px] sm:max-w-sm">
            <img
              src="/images/Anchan_Partner.jpeg"
              alt="Master Weaver"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-maroon-200 pointer-events-none hidden lg:block" />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-gold-200 pointer-events-none hidden lg:block" />
        </div>
      </div>

    </div>
  </div>
</section>

        {/* Social Commitment & Impact */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-stone-100 via-cream-50 to-stone-100 relative overflow-hidden" ref={socialRef}>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-100/30 to-transparent pointer-events-none" />
          <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* TOP ELEGANT DIVIDER */}
            <div className={`flex items-center justify-center w-full max-w-md mx-auto mb-16 transition-all duration-1000 ${socialVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-gold-600/80 rounded-full" />
              <div className="mx-4 text-gold-600 transform rotate-45 text-sm md:text-base">◆</div>
              <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-gold-600/80 rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* LEFT CONTENT: The Narrative */}
              <div className="lg:pr-8">
                <div className={`flex items-center gap-4 mb-8 transition-opacity duration-700 ${socialVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                  <span className="h-px w-12 bg-gold-400" />
                  <span className="text-gold-600 text-xs font-semibold tracking-[0.3em] uppercase">Beyond Business</span>
                </div>

                <h2 className={`font-serif text-4xl md:text-5xl text-maroon-950 mb-8 leading-tight transition-opacity duration-700 ${socialVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: socialVisible ? '0.1s' : '0ms' }}>
                  {t('socialTitle')}
                </h2>

                <div className="space-y-6 text-charcoal text-lg leading-relaxed font-light relative pl-4 md:pl-6">
                  <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-gold-300 via-gold-200 to-transparent" />
                  <p className={`transition-opacity duration-700 ${socialVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: socialVisible ? '0.2s' : '0ms' }}>{t('social1')}</p>
                  <p className={`transition-opacity duration-700 ${socialVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: socialVisible ? '0.3s' : '0ms' }}>{t('social2')}</p>
                  <p className={`transition-opacity duration-700 ${socialVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: socialVisible ? '0.4s' : '0ms' }}>{t('social3')}</p>
                </div>
              </div>

              {/* RIGHT CONTENT: The Impact Card */}
              <div className={`transition-all duration-1000 ${trustVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} ref={trustRef}>
                <div className="relative bg-white border border-gold-200/60 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden rounded-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-50 to-transparent opacity-80" />

                  <div className="w-16 h-16 bg-cream-50 border border-gold-200 flex items-center justify-center mb-8 rounded-full relative group transition-colors duration-500 hover:bg-gold-50 hover:border-gold-300">
                    <span className="text-gold-500 text-2xl relative z-10 transition-transform group-hover:scale-110 duration-500">✦</span>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl text-maroon-900 mb-10">{t('trustTitle')}</h3>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {[
                      { value: '1999', label: 'Founded' },
                      { value: '1005+', label: 'Children Supported' },
                      { value: '25+', label: 'Years Active' },
                      { value: '∞', label: 'Community Impact' },
                    ].map((s, i) => (
                      <div
                        key={s.label}
                        className={`flex flex-col justify-center p-6 bg-stone-50/50 hover:bg-cream-50 border border-stone-100 hover:border-gold-200 transition-all duration-500 group ${trustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: trustVisible ? `${200 + i * 150}ms` : '0ms' }}
                      >
                        <p className="font-serif text-3xl md:text-4xl text-maroon-950 font-medium mb-2 transform group-hover:scale-105 group-hover:text-gold-600 transition-all duration-500 origin-left flex items-center">
                          <AnimatedNumber value={s.value} isVisible={trustVisible} />
                        </p>
                        <p className="text-charcoal/60 text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* BOTTOM ELEGANT DIVIDER */}
            <div className={`flex items-center justify-center w-full max-w-md mx-auto mt-20 transition-all duration-1000 delay-500 ${socialVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-gold-600/80 rounded-full" />
              <div className="mx-4 text-gold-600 transform rotate-45 text-sm md:text-base">◆</div>
              <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-gold-600/80 rounded-full" />
            </div>

          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
}