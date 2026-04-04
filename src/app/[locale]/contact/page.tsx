'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { siteConfig } from '@/data/products';
import { buildWhatsAppLink } from '@/lib/utils';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
  const t = useTranslations('contact');
  const { ref: storesRef, isVisible: storesVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: ownerRef, isVisible: ownerVisible } = useIntersectionObserver({ threshold: 0.1 });
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(
        siteConfig.emailjs.serviceId,
        siteConfig.emailjs.templateId,
        formRef.current,
        siteConfig.emailjs.publicKey
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream-50 pt-20">

        {/* Header */}
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
              <p className="text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase animate-fade-in-up" style={{ animationDelay: '0.1s' }}>✦ Find Us</p>
              <span className="h-px w-12 bg-gold-400 animate-fade-in-right" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{t('title')}</h1>
            <p className="text-cream-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>{t('subtitle')}</p>
          </div>
        </div>

        {/* Stores info */}
        <section className="py-16 bg-white" ref={storesRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Main Store */}
              <div className={`border border-gold-100 p-8 bg-cream-50 transition-all duration-300 hover:shadow-lg ${storesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: storesVisible ? '0ms' : '0ms' }}>
                <div className="flex items-center gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="w-10 h-10 bg-maroon-900 flex items-center justify-center">
                    <span className="text-gold-400 font-serif font-bold text-sm">AS</span>
                  </div>
                  <div>
                    <h2 className="font-serif text-xl text-maroon-900">{t('mainStore')}</h2>
                    <span className="text-xs text-gold-600 font-medium uppercase tracking-wide">Main Store</span>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-charcoal text-sm">{siteConfig.address.main}</p>
                      <a
                        href={siteConfig.address.mainMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-maroon-700 hover:text-maroon-900 underline mt-1 inline-block transition-colors"
                      >
                        {t('getDirections')} →
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Phone size={18} className="text-gold-500 shrink-0" />
                    <a href={`tel:${siteConfig.phone.main}`} className="text-charcoal text-sm hover:text-maroon-900 transition-colors">
                      {siteConfig.phone.mainDisplay}
                    </a>
                  </li>
                  <li className="flex gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <Clock size={18} className="text-gold-500 shrink-0 mt-0.5" />
                    <div className="text-sm text-charcoal">
                      <p><span className="font-medium">Mon–Sat:</span> 9:00 AM – 7:00 PM</p>
                      <p><span className="font-medium">Sunday:</span> 9:00 AM – 4:00 PM</p>
                    </div>
                  </li>
                </ul>
                <div className="flex gap-3 mt-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <a
                    href={`tel:${siteConfig.phone.main}`}
                    className="flex-1 text-center py-2.5 border border-maroon-900 text-maroon-900 text-sm font-medium hover:bg-maroon-900 hover:text-white transition-all"
                  >
                    Call
                  </a>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 bg-green-600 text-white text-sm font-medium hover:bg-green-500 transition-all"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Branch */}
              <div className={`border border-cream-200 p-8 transition-all duration-300 hover:shadow-lg ${storesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: storesVisible ? '0.15s' : '0ms' }}>
                <div className="flex items-center gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
                  <div className="w-10 h-10 bg-maroon-100 flex items-center justify-center">
                    <span className="text-maroon-700 font-serif font-bold text-sm">AG</span>
                  </div>
                  <div>
                    <h2 className="font-serif text-xl text-maroon-900">{t('subStore')}</h2>
                    <span className="text-xs text-muted font-medium uppercase tracking-wide">Since 1999</span>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
                    <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-charcoal text-sm">{siteConfig.address.branch}</p>
                      <a
                        href={siteConfig.address.branchMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-maroon-700 hover:text-maroon-900 underline mt-1 inline-block transition-colors"
                      >
                        {t('getDirections')} →
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
                    <Phone size={18} className="text-gold-500 shrink-0" />
                    <a href={`tel:${siteConfig.phone.branch}`} className="text-charcoal text-sm hover:text-maroon-900 transition-colors">
                      {siteConfig.phone.branchDisplay}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock size={18} className="text-gold-500 shrink-0 mt-0.5" />
                    <div className="text-sm text-charcoal">
                      <p><span className="font-medium">Mon–Sat:</span> 9:00 AM – 7:00 PM</p>
                      <p><span className="font-medium">Sunday:</span> 9:00 AM – 4:00 PM</p>
                    </div>
                  </li>
                </ul>
                <div className="flex gap-3 mt-6">
                  <a
                    href={`tel:${siteConfig.phone.branch}`}
                    className="flex-1 text-center py-2.5 border border-maroon-900 text-maroon-900 text-sm font-medium hover:bg-maroon-900 hover:text-white transition-colors"
                  >
                    Call Branch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maps */}
        <section className="bg-cream-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-maroon-900 text-center mb-10 animate-fade-in-up">Find Us on the Map</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-medium text-maroon-900 mb-3 text-sm uppercase tracking-wide">Anchan Silks — Bypass</h3>
                <div className="aspect-video bg-cream-100 border border-cream-200 overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.063767114751!2d75.0423308!3d12.9012132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a7000d993eef:0x7d789d525224fafa!2sAnchan%20Silks%2C%20Bypass%20road%20Bantwal!5e0!3m2!1sen!2sin!4v1712239200000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Anchan Silks Main Store Location"
                  />
                </div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-medium text-maroon-900 mb-3 text-sm uppercase tracking-wide">Anchan Garments — Market Road</h3>
                <div className="aspect-video bg-cream-100 border border-cream-200 overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5!2d75.30000001143586!3d12.8450001287370605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43c8f8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2sAnchan%20Garments!5e0!3m2!1sen!2sin!4v1712239200000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Anchan Garments Branch Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Owner Quote Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-maroon-50 to-cream-50" ref={ownerRef}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Owner Photo */}
              <div className={`flex justify-center transition-all duration-500 ${ownerVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: ownerVisible ? '0ms' : '0ms' }}>
                <div className="relative">
                  {/* Photo Frame */}
                  <div className="border-8 border-gold-400 shadow-2xl overflow-hidden max-w-sm">
                    <img
                      src="/images/Anchan_Owner.jpeg"
                      alt="Owner"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  {/* Decorative corner element */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-maroon-200 pointer-events-none hidden lg:block" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-gold-200 pointer-events-none hidden lg:block" />
                </div>
              </div>

              {/* Owner Quote & Message */}
              <div className={`transition-all duration-500 ${ownerVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: ownerVisible ? '0.2s' : '0ms' }}>
                <div className="flex items-center gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: ownerVisible ? '0.3s' : '0ms' }}>
                  <span className="h-px w-8 bg-gold-500" />
                  <p className="text-gold-600 text-xs font-semibold tracking-[0.2em] uppercase">{t('ownerTitle')}</p>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-maroon-950 mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: ownerVisible ? '0.4s' : '0ms' }}>
                  A Message from Our Founder
                </h2>

                {/* Quote */}
                <div className="mb-8 animate-fade-in-up" style={{ animationDelay: ownerVisible ? '0.5s' : '0ms' }}>
                  <p className="text-lg md:text-xl text-maroon-900 leading-relaxed italic font-light flex items-start gap-3">
                    <span className="text-4xl text-gold-500 leading-none flex-shrink-0 mt-1">&quot;</span>
                    <span>{t('ownerQuote')}</span>
                  </p>
                </div>

                {/* Message */}
                <p className="text-base text-charcoal mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: ownerVisible ? '0.6s' : '0ms' }}>
                  {t('ownerMessage')}
                </p>

                {/* Signature style */}
                <div className="animate-fade-in-up" style={{ animationDelay: ownerVisible ? '0.7s' : '0ms' }}>
                  <div className="border-t border-gold-300 pt-6 w-48">
                    <p className="font-serif text-lg text-gold-600 font-semibold">PRAKASH ANCHAN</p>
                    <p className="font-serif text-lg text-maroon-950 font-semibold">Founder & Visionary</p>
                    <p className="text-sm text-charcoal">Anchan Silks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl text-maroon-900 mb-3 animate-fade-in-up">{t('formTitle')}</h2>
              <p className="text-muted text-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Or reach us directly via WhatsApp for a faster response.</p>
            </div>

            {status === 'success' ? (
              <div className="flex flex-col items-center gap-3 py-16 text-center animate-fade-in-up">
                <CheckCircle2 size={48} className="text-green-500" />
                <p className="font-serif text-xl text-maroon-900">{t('formSuccess')}</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wide mb-2">
                      {t('formName')} *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-maroon-400 focus:bg-white transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wide mb-2">
                      {t('formPhone')} *
                    </label>
                    <input
                      type="tel"
                      name="user_phone"
                      required
                      className="w-full border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-maroon-400 focus:bg-white transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wide mb-2">
                    {t('formMessage')} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-maroon-400 focus:bg-white transition-colors resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle size={16} />
                    <span>{t('formError')}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-maroon-900 text-cream-50 text-sm font-semibold tracking-wide hover:bg-maroon-800 transition-colors disabled:opacity-60"
                >
                  <Send size={16} />
                  {status === 'sending' ? 'Sending...' : t('formSend')}
                </button>
              </form>
            )}
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
}
