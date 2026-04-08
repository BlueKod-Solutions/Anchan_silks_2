'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Navigation, MessageCircle, Share2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import { siteConfig } from '@/data/products';
import { buildWhatsAppLink } from '@/lib/utils';
import Image from "next/image";

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface Store {
  id: number;
  name: string;
  phone: string;
  phoneDisplay: string;
  address: string;
  city: string;
  hours: string;
  mapUrl: string;
  feature: string;
  image: string;
}



const storeLocations: Store[] = [
  {
    id: 1,
    name: 'Bypass Road Store',
    phone: siteConfig.phone.main,
    phoneDisplay: siteConfig.phone.mainDisplay,
    address: siteConfig.address.main,
    city: 'Bantwal, Karnataka 574219',
    hours: 'Monday - Saturday: 9:00 AM - 7:00 PM | Sunday: 9:00 AM - 4:00 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.063767114751!2d75.0423308!3d12.9012132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a7000d993eef:0x7d789d525224fafa!2sAnchan%20Silks%2C%20Bypass%20road%20Bantwal!5e0!3m2!1sen!2sin!4v1712239200000',
    image: '/images/accessories/trending-1.jpg',
    feature: 'Our Flagship Store'
  },
  {
    id: 2,
    name: 'Market Road Store',
    phone: siteConfig.phone.branch,
    phoneDisplay: siteConfig.phone.branchDisplay,
    address: siteConfig.address.branch,
    city: 'Bantwal, Karnataka 574211',
    hours: 'Monday - Saturday: 9:00 AM - 7:00 PM | Sunday: 9:00 AM - 4:00 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.138840268312!2d75.04158047412962!3d12.898792587409885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a66cae8a69b9%3A0xaa7403ef2a90b281!2sAnchan%20Garments!5e0!3m2!1sen!2sus!4v1775385050695!5m2!1sen!2sus',
    image: '/images/womens/palazzo-1.jpg',
    feature: 'Our Heritage Store'
  }
];


export default function ContactPage() {
  const t = useTranslations('contact');
  const formRef = useRef<HTMLFormElement>(null);
  const storesRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [selectedStore, setSelectedStore] = useState(0);
  const [storesVisible, setStoresVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStoresVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (storesRef.current) {
      observer.observe(storesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormStatus('sending');
    try {
      await emailjs.sendForm(
        siteConfig.emailjs.serviceId,
        siteConfig.emailjs.templateId,
        formRef.current,
        siteConfig.emailjs.publicKey
      );
      setFormStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
  };

  const currentStore = storeLocations[selectedStore];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">

        {/* HERO SECTION */}
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
              <p className="text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase animate-fade-in-up" style={{ animationDelay: '0.1s' }}>✦ Anchan Silks</p>
              <span className="h-px w-12 bg-gold-400 animate-fade-in-right" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{t('title')}</h1>
            <p className="text-cream-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>{t('subtitle')}</p>
          </div>
        </div>

        {/* STORE LOCATIONS - INTERACTIVE */}
        <section className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-3">{t('getDirections')}</p>
            <h2 className="text-5xl text-maroon-900 mb-4 font-serif">
              Two Premium Locations
            </h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* STORE SELECTOR & INFO */}
            <div className="space-y-6">
              <div className="space-y-4">
                {storeLocations.map((store, idx) => (
                  <button
                    key={store.id}
                    onClick={() => setSelectedStore(idx)}
                    className={`w-full text-left p-6 rounded-lg transition-all duration-300 border-2 ${
                      selectedStore === idx
                        ? 'border-gold-500 bg-gradient-to-br from-gold-100 to-yellow-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-gold-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs text-gold-600 tracking-[0.2em] uppercase font-medium mb-2">
                          {store.feature}
                        </p>
                        <h3 className="text-lg font-serif text-maroon-900 mb-1">{store.name}</h3>
                      </div>
                      {selectedStore === idx && (
                        <div className="w-3 h-3 bg-gold-500 rounded-full" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* DETAILED INFO */}
              <div className="bg-gradient-to-br from-maroon-900 to-maroon-950 rounded-xl p-8 text-white space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Address</p>
                      <p className="text-sm leading-relaxed">{currentStore.address}</p>
                      <p className="text-sm text-gray-400">{currentStore.city}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Phone</p>
                      <a href={`tel:${currentStore.phone}`} className="text-sm hover:text-gold-300 transition">
                        {currentStore.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Store Hours</p>
                      <p className="text-sm leading-relaxed">{currentStore.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-600 flex gap-4">
                  <a
                    href={`tel:${currentStore.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-maroon-900 px-4 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    <Phone size={16} />
                    Call
                  </a>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-gold-500 text-gold-300 px-4 py-3 rounded-lg font-medium hover:bg-gold-500/10 transition-all duration-300"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* INTERACTIVE MAP */}
            <div className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-gold-200">
                <div className="bg-gradient-to-r from-gold-500 to-yellow-400 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Navigation className="w-5 h-5 text-white" />
                    <div>
                      <p className="text-white font-medium">{currentStore.name}</p>
                      <p className="text-white/80 text-sm">{currentStore.city}</p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <iframe
                    title={`${currentStore.name} Location`}
                    src={currentStore.mapUrl}
                    width="100%"
                    height="500"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Mini Map Cards */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gold-200">
                  <p className="text-xs text-gray-600 tracking-[0.2em] uppercase font-medium mb-3">All Locations</p>
                  <div className="flex gap-3">
                    {storeLocations.map((store, idx) => (
                      <button
                        key={store.id}
                        onClick={() => setSelectedStore(idx)}
                        className={`flex-1 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                          selectedStore === idx
                            ? 'bg-gold-500 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:border-gold-500'
                        }`}
                      >
                        {store.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Store Preview Image */}
              {/* <div className="mt-8 rounded-xl overflow-hidden shadow-xl h-64">
                <img
                  src={currentStore.image}
                  alt={currentStore.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div> */}
            </div>
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-3">{t('formTitle')}</p>
              <h2 className="text-5xl text-maroon-900 mb-4 font-serif">
                {t('formTitle')}
              </h2>
              <div className="w-12 h-1 bg-gold-500 mx-auto" />
            </div>

            {formStatus === 'success' ? (
              <div className="text-center py-20">
                <div className="mb-6">
                  <CheckCircle2 size={64} className="text-green-500 mx-auto" />
                </div>
                <h3 className="text-3xl text-maroon-900 mb-4 font-serif">{t('formSuccess')}</h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-xs text-gold-600 tracking-[0.2em] uppercase font-medium mb-3">
                      {t('formName')} *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full border border-gray-300 bg-white px-4 py-3 font-sans text-sm text-gray-900 placeholder-gray-400 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs text-gold-600 tracking-[0.2em] uppercase font-medium mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full border border-gray-300 bg-white px-4 py-3 font-sans text-sm text-gray-900 placeholder-gray-400 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs text-gold-600 tracking-[0.2em] uppercase font-medium mb-3">
                    {t('formMessage')} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us what you're looking for or any special requests..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full border border-gray-300 bg-white px-4 py-3 font-sans text-sm text-gray-900 placeholder-gray-400 rounded-lg focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200 transition-all resize-none"
                  />
                </div>

                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    <AlertCircle size={18} />
                    <span>{t('formError')}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-gradient-to-r from-gold-500 to-yellow-400 text-maroon-900 py-4 rounded-lg font-medium tracking-[0.15em] uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-60"
                >
                  <Send size={18} />
                  {formStatus === 'sending' ? 'Sending...' : t('formSend')}
                </button>

                <p className="text-center text-gray-500 text-sm">
                  We'll respond within 24 hours on business days
                </p>
              </form>
            )}
          </div>
        </section>

        {/* ALTERNATIVE CONTACT METHODS */}
        <section className="max-w-6xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-3">{t('getDirections')}</p>
            <h2 className="text-4xl text-maroon-900 font-serif">Connect With Us</h2>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                desc: 'Speak with our team directly',
                action: siteConfig.phone.mainDisplay,
                link: `tel:${siteConfig.phone.main}`
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                desc: 'Quick messages welcome',
                action: 'Message us',
                link: buildWhatsAppLink()
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                desc: 'Explore our stores',
                action: 'Get Directions',
                link: siteConfig.address.mainMaps
              },
              {
                icon: Share2,
                title: 'Instagram',
                desc: 'Follow our collections',
                action: '@anchansilks',
                link: 'https://instagram.com/anchansilks'
              }
            ].map(({ icon: Icon, title, desc, action, link }) => (
              <a
                key={title}
                href={link}
                target={link.startsWith('http') ? '_blank' : undefined}
                rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl text-center hover:border-gold-500 transition-all duration-300 group hover:shadow-lg hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-serif text-maroon-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">{desc}</p>
                <p className="text-gold-600 font-medium text-sm">{action}</p>
              </a>
            ))}
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
}