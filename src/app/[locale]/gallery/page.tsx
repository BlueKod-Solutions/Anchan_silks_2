'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { X, ZoomIn } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Replace these with actual Cloudinary URLs after uploading client photos
// Select the best ~20-24 images from the 40 provided
const galleryImages = [
  { id: 1, src: '/images/gallery/gallery-01.jpeg', alt: 'Bridal silk saree collection', category: 'sarees' },
  { id: 2, src: '/images/gallery/gallery-02.jpeg', alt: 'Kanchipuram silk saree', category: 'sarees' },
  { id: 3, src: '/images/gallery/gallery-03.jpeg', alt: 'Bridal look with brocade saree', category: 'bridal' },
  { id: 4, src: '/images/gallery/gallery-04.jpeg', alt: 'Store interior', category: 'store' },
  { id: 5, src: '/images/gallery/gallery-05.jpg', alt: 'Gold jewelry collection', category: 'accessories' },
  { id: 6, src: '/images/gallery/gallery-06.jpg', alt: 'Banarasi saree', category: 'sarees' },
  { id: 7, src: '/images/gallery/gallery-07.jpg', alt: 'Anarkali suit display', category: 'womens' },
  { id: 8, src: '/images/gallery/gallery-08.jpg', alt: 'Bridal brocade', category: 'bridal' },
  { id: 9, src: '/images/gallery/gallery-09.jpg', alt: 'Store collection display', category: 'store' },
  { id: 10, src: '/images/gallery/gallery-10.jpg', alt: 'Tissue silk saree', category: 'sarees' },
  { id: 11, src: '/images/gallery/gallery-11.jpg', alt: 'Jodhpuri suit for men', category: 'mens' },
  { id: 12, src: '/images/gallery/gallery-12.jpg', alt: 'Soft silk saree', category: 'sarees' },
  { id: 13, src: '/images/gallery/gallery-13.jpg', alt: 'Mysore silk saree', category: 'sarees' },
  { id: 14, src: '/images/gallery/gallery-14.jpg', alt: 'Bridal collection display', category: 'bridal' },
  { id: 15, src: '/images/gallery/gallery-15.jpg', alt: 'Footwear collection', category: 'accessories' },
  { id: 16, src: '/images/gallery/gallery-16.jpg', alt: 'Chanderi silk saree', category: 'sarees' },
  { id: 17, src: '/images/gallery/gallery-17.jpg', alt: 'Palazzo set display', category: 'womens' },
  { id: 18, src: '/images/gallery/gallery-18.jpg', alt: 'Store at bypass bantwal', category: 'store' },
  { id: 19, src: '/images/gallery/gallery-19.jpg', alt: 'Wedding saree draping', category: 'bridal' },
  { id: 20, src: '/images/gallery/gallery-20.jpg', alt: 'New arrivals display', category: 'sarees' },
];

const galleryFilters = ['all', 'sarees', 'bridal', 'womens', 'mens', 'accessories', 'store'];

export default function GalleryPage() {
  const t = useTranslations('gallery');
  const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: galleryRef, isVisible: galleryVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState<(typeof galleryImages)[0] | null>(null);

  const filtered = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

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
              <p className="text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase animate-fade-in-up" style={{ animationDelay: '0.1s' }}>✦ Anchan Silks</p>
              <span className="h-px w-12 bg-gold-400 animate-fade-in-right" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{t('title')}</h1>
            <p className="text-cream-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>{t('subtitle')}</p>
          </div>
        </div>

        {/* Video Section */}
        <section className="py-16 bg-white" ref={videoRef}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className={`font-serif text-3xl text-maroon-900 mb-3 transition-opacity duration-500 ${videoVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>{t('videoTitle')}</h2>
              <p className={`text-gray-600 text-sm transition-opacity duration-500 ${videoVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: videoVisible ? '0.1s' : '0ms' }}>{t('videoSubtitle')}</p>
            </div>
            <div className={`relative aspect-video bg-maroon-100 overflow-hidden shadow-xl transition-opacity duration-500 ${videoVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: videoVisible ? '0.2s' : '0ms' }}>
              <video
                controls
                className="w-full h-full object-cover"
                poster="/images/store/video-poster.jpg"
              >
                {/* Replace with actual video path after upload */}
                <source src="/video/anchan-silks-showcase.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16" ref={galleryRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {galleryFilters.map((f, i) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 text-sm font-medium capitalize transition-all ${galleryVisible ? 'animate-fade-in-up' : 'opacity-0'} ${activeFilter === f
                      ? 'bg-maroon-900 text-white'
                      : 'bg-white border border-cream-200 text-charcoal hover:border-maroon-200 hover:text-maroon-900'
                    }`}
                  style={{ animationDelay: galleryVisible ? `${i * 50}ms` : '0ms' }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Masonry-style grid */}
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
              {filtered.map((img, i) => (
                <div
                  key={img.id}
                  className={`break-inside-avoid group relative overflow-hidden cursor-pointer bg-cream-100 transition-opacity duration-500 ${galleryVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  onClick={() => setLightbox(img)}
                  style={{ animationDelay: galleryVisible ? `${i * 50}ms` : '0ms' }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={500}
                    className="w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    onError={() => { }}
                  />
                  {/* Placeholder */}
                  <div className="absolute inset-0 img-shimmer -z-10" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-maroon-900/0 group-hover:bg-maroon-900/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={28} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gold-400 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <div
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={900}
                className="object-contain max-h-[85vh] w-auto mx-auto"
              />
              <p className="text-cream-300 text-sm text-center mt-4">{lightbox.alt}</p>
            </div>
          </div>
        )}

        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
}
