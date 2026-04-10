'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { X, ZoomIn, Volume2, VolumeX } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const galleryImages = [
  { id: 1, src: '/images/gallery/01.jpg.jpeg', alt: 'Bridal silk saree collection', category: ['sarees'] },
  { id: 2, src: '/images/gallery/02.jpg.jpeg', alt: 'Kanchipuram silk saree', category: ['sarees'] },
  { id: 3, src: '/images/gallery/03.jpg.jpeg', alt: 'Bridal look with brocade saree', category: ['mens','womens'] },
  { id: 4, src: '/images/gallery/04.jpg.jpeg', alt: 'Store interior', category:['mens','womens'] },
  { id: 5, src: '/images/gallery/05.jpg.jpeg', alt: 'Gold jewelry collection', category: ['mens','womens'] },
  { id: 6, src: '/images/gallery/06.jpg.jpeg', alt: 'Banarasi saree', category: ['mens','womens'] },
  { id: 7, src: '/images/gallery/07.jpg.jpeg', alt: 'Anarkali suit display', category: ['mens','womens'] },
  { id: 8, src: '/images/gallery/08.jpg.jpeg', alt: 'Bridal brocade', category: ['mens','womens'] },
  { id: 9, src: '/images/gallery/09.jpg.jpeg', alt: 'Store collection display', category: ['mens','womens'] },
  { id: 10, src: '/images/gallery/10.jpg.jpeg', alt: 'Tissue silk saree', category:['mens','womens'] },
  { id: 11, src: '/images/gallery/11.jpg.jpeg', alt: 'Jodhpuri suit for men', category: ['mens'] },
  { id: 12, src: '/images/gallery/12.jpg.jpeg', alt: 'Soft silk saree', category: ['womens'] },
  { id: 13, src: '/images/gallery/13.jpg.jpeg', alt: 'Mysore silk saree', category: ['mens' ] },
  { id: 14, src: '/images/gallery/14.jpg.jpeg', alt: 'Bridal collection display', category: ['mens'  ] },
  { id: 15, src: '/images/gallery/15.jpg.jpeg', alt: 'Footwear collection', category: ['mens '] },
  { id: 16, src: '/images/gallery/16.jpg.jpeg', alt: 'Chanderi silk saree', category: ['mens'] },
  { id: 17, src: '/images/gallery/17.jpg.jpeg', alt: 'Palazzo set display', category: ['mens'] },
  { id: 18, src: '/images/gallery/18.jpg.jpeg', alt: 'Store at bypass bantwal', category: ['womens'] },
  { id: 19, src: '/images/gallery/19.jpg.jpeg', alt: 'Wedding saree draping', category: ['mens'] },
  { id: 20, src: '/images/gallery/20.jpg.jpeg', alt: 'New arrivals display', category: ['mens'] },
  { id: 21, src: '/images/gallery/21.jpg.jpeg', alt: 'Bridal collection display', category: ['mens'] },
  { id: 22, src: '/images/gallery/28.jpg.jpeg', alt: 'Bridal brocade collection', category: ['bridal'] },
  { id: 23, src: '/images/gallery/30.jpg.jpeg', alt: 'Bridal silk saree collection', category: ['bridal'] },
  { id: 24, src: '/images/gallery/A.jpg.jpeg', alt: 'Bridal brocade collection', category: ['bridal'] },
  { id: 25, src: '/images/gallery/B.jpg.jpeg', alt: 'Bridal brocade collection', category: ['bridal'] },
  { id: 26, src: '/images/gallery/IMG-20260304-WA0153.jpg.jpeg', alt: 'Bridal brocade collection', category:['bridal'] },
  { id: 27, src: '/images/gallery/IMG-20260225-WA0049.jpg.jpeg', alt: 'Bridal brocade collection', category: ['bridal'] },
  { id: 28, src: '/images/gallery/IMG-20260225-WA0053.jpg.jpeg', alt: 'Bridal brocade collection', category: ['bridal'] },
  { id: 29, src: '/images/gallery/IMG-20260304-WA0151.jpg.jpeg', alt: 'Bridal brocade collection', category: ['bridal'] },
];

const galleryFilters = ['all', 'sarees', 'bridal', 'womens', 'mens', 'accessories', 'store'];

export default function GalleryPage() {
  const t = useTranslations('gallery');
  
  // Video Section Observer
  const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({ threshold: 0.4 });
  const { ref: galleryRef, isVisible: galleryVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState<(typeof galleryImages)[0] | null>(null);

  const filtered = activeFilter === 'all'
  ? galleryImages
  : galleryImages.filter((img) => img.category.includes(activeFilter));

  /**
   * VIDEO CONFIGURATION
   * muted=false: Requests unmuted playback.
   * autoplay=true: Starts as soon as the iframe loads.
   */
  const videoSrc = "https://player.cloudinary.com/embed/?cloud_name=dpvhamnmx&public_id=anchan-silks-showcase_gallery_h3alg8&autoplay=true&loop=true&muted=true&controls=true";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream-50 pt-20">

        {/* Hero Header */}
        <div className="pt-32 md:pt-40 pb-16 bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-800 relative overflow-hidden">
          <div className="absolute inset-0 silk-texture opacity-20" />
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="flex items-center justify-center gap-4 mb-4 animate-fade-in-up">
              <span className="h-px w-12 bg-gold-400" />
              <p className="text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase">✦ Anchan Silks</p>
              <span className="h-px w-12 bg-gold-400" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight animate-fade-in-up">
              {t('title')}
            </h1>
            <p className="text-cream-200 text-base max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* Video Section: Plays UNMUTED on Scroll */}
        <section className="py-16 bg-white" ref={videoRef}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className={`font-serif text-3xl text-maroon-900 mb-3 transition-all duration-700 ${videoVisible ? 'opacity-100' : 'opacity-0'}`}>
                {t('videoTitle')}
              </h2>
              <div className="flex items-center justify-center gap-2 text-gold-600 animate-pulse">
                <Volume2 size={16} />
                <span className="text-xs uppercase tracking-widest font-bold">Audio Experience Enabled</span>
              </div>
            </div>

            <div className={`relative aspect-video bg-maroon-100 overflow-hidden shadow-2xl rounded-sm transition-all duration-1000 ${videoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              
              {/* Conditional Rendering:
                The iframe is only injected when videoVisible is true.
                Because muted=false, it will play with sound IF the user has 
                interacted with the page (clicked) prior to this point.
              */}
              {videoVisible ? (
                <iframe
                  src={videoSrc}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Anchan Silks Video Gallery"
                ></iframe>
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-maroon-900/10">
                   <div className="text-maroon-900/20 font-serif italic">Loading Experience...</div>
                </div>
              )}
            </div>
            <p className="mt-4 text-center text-gray-400 text-[10px] uppercase tracking-tighter">
              Note: Browsers may require one click on the page to enable sound.
            </p>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16" ref={galleryRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {galleryFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 text-sm font-medium capitalize transition-all ${
                    activeFilter === f ? 'bg-maroon-900 text-white shadow-md' : 'bg-white border border-cream-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
              {filtered.map((img, i) => (
                <div
                  key={img.id}
                  className={`break-inside-avoid group relative overflow-hidden cursor-pointer transition-all duration-500 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${i * 30}ms` }}
                  onClick={() => setLightbox(img)}
                >
                  <Image src={img.src} alt={img.alt} width={400} height={500} className="w-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-maroon-900/0 group-hover:bg-maroon-900/40 transition-all flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100" size={28} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightbox && (
          <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
            <button className="absolute top-6 right-6 text-white" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <div className="relative max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <Image src={lightbox.src} alt={lightbox.alt} width={1200} height={900} className="object-contain max-h-[90vh] w-auto" />
            </div>
          </div>
        )}

        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
}