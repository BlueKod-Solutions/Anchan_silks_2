'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';

export default function AboutPage() {
  const t = useTranslations('about');
  const { ref: storyRef, isVisible: storyVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: socialRef, isVisible: socialVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: trustRef, isVisible: trustVisible } = useIntersectionObserver({ threshold: 0.1 });

  const milestones = [
    { year: '1999', event: t('story1') },
    { year: '2007', event: t('story2') },
    { year: '2024', event: t('story3') },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream-50 pt-20">

        {/* Hero */}
        <div className="pt-32 md:pt-40 pb-20 bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-800 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 silk-texture opacity-20" />
          <div className="absolute inset-8 border border-gold-500/20 pointer-events-none hidden lg:block" />
          {/* Rich gradient overlay for darker appearance */}
          <div className="absolute inset-0 bg-gradient-to-br from-maroon-950/40 via-maroon-900/30 to-maroon-800/40" />
          {/* Content */}
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

        {/* Our Story */}
        <section className="py-24 bg-white" ref={storyRef}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Story text */}
              <div>
                <div className={`ornament-divider mb-8 max-w-xs transition-opacity duration-500 ${storyVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                  <span className="text-gold-500 text-xl">✦</span>
                </div>
                <h2 className={`font-serif text-4xl text-maroon-900 mb-8 transition-opacity duration-500 ${storyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: storyVisible ? '0.1s' : '0ms' }}>{t('title')}</h2>
                <div className="space-y-5 text-charcoal leading-relaxed">
                  <p className={`transition-opacity duration-500 ${storyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: storyVisible ? '0.2s' : '0ms' }}>{t('story1')}</p>
                  <p className={`transition-opacity duration-500 ${storyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: storyVisible ? '0.3s' : '0ms' }}>{t('story2')}</p>
                  <p className={`transition-opacity duration-500 ${storyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: storyVisible ? '0.4s' : '0ms' }}>{t('story3')}</p>
                </div>
              </div>

              {/* Timeline cards */}
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={m.year} className={`flex gap-5 group transition-all duration-300 hover:shadow-lg ${storyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: storyVisible ? `${(i + 2) * 100}ms` : '0ms' }}>
                    <div className="shrink-0 w-16 h-16 bg-maroon-900 flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
                      <span className="font-serif text-white group-hover:text-maroon-950 text-sm font-bold transition-colors duration-300">{m.year}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-charcoal text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Owner Quote */}
        <section className="py-20 bg-maroon-950 relative overflow-hidden">
          <div className="absolute inset-0 silk-texture opacity-10" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <span className="text-gold-400 text-6xl font-serif leading-none animate-scale-in">&quot;</span>
            <blockquote className="font-serif text-2xl md:text-3xl text-white leading-relaxed mt-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t('ownerQuote')}
            </blockquote>
            <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Owner photo placeholder */}
              <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-gold-500/30">
                <Image
                  src="/images/store/Anchan_Owner.jpeg"
                  alt="Prakash Anchan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-gold-400 font-semibold">{t('ownerName')}</p>
                <p className="text-cream-400 text-sm">{t('ownerTitle')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Commitment */}
        <section className="py-24 bg-cream-50" ref={socialRef}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Text */}
              <div>
                <div className={`ornament-divider mb-8 max-w-xs transition-opacity duration-500 ${socialVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                  <span className="text-gold-500 text-xl">✦</span>
                </div>
                <h2 className={`font-serif text-4xl text-maroon-900 mb-8 transition-opacity duration-500 ${socialVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: socialVisible ? '0.1s' : '0ms' }}>{t('socialTitle')}</h2>
                <div className="space-y-5 text-charcoal leading-relaxed">
                  <p className={`transition-opacity duration-500 ${socialVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: socialVisible ? '0.2s' : '0ms' }}>{t('social1')}</p>
                  <p className={`transition-opacity duration-500 ${socialVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: socialVisible ? '0.3s' : '0ms' }}>{t('social2')}</p>
                  <p className={`transition-opacity duration-500 ${socialVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: socialVisible ? '0.4s' : '0ms' }}>{t('social3')}</p>
                </div>
              </div>

              {/* Trust Card */}
              <div className={`bg-white border border-gold-100 p-10 shadow-sm transition-opacity duration-500 ${trustVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: trustVisible ? '0.15s' : '0ms' }} ref={trustRef}>
                <div className={`w-16 h-16 bg-gold-500 flex items-center justify-center text-maroon-950 text-3xl mb-6 transition-opacity duration-500 ${trustVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: trustVisible ? '0.3s' : '0ms' }}>
                  🙏
                </div>
                <h3 className="font-serif text-2xl text-maroon-900 mb-4">{t('trustTitle')}</h3>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  {[
                    { value: '1999', label: 'Founded' },
                    { value: '1005+', label: 'Children Supported' },
                    { value: '25+', label: 'Years Active' },
                    { value: '∞', label: 'Community Impact' },
                  ].map((s, i) => (
                    <div key={s.label} className={`text-center p-4 bg-cream-50 transition-all duration-300 hover:shadow-md ${trustVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: trustVisible ? `${400 + i * 80}ms` : '0ms' }}>
                      <p className="font-serif text-3xl text-maroon-900 font-semibold">{s.value}</p>
                      <p className="text-muted text-xs mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
}
