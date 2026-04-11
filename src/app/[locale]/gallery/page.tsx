'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'; // Suggest adding: npm install framer-motion
import { useTranslations } from 'next-intl';
import { X, Maximize2, Volume2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const galleryImages = [
  { id: 1, src: '/images/gallery/01.jpg.jpeg', alt: 'Bridal silk saree collection', category: ['sarees'] },
  { id: 2, src: '/images/gallery/02.jpg.jpeg', alt: 'Kanchipuram silk saree', category: ['sarees'] },
  { id: 3, src: '/images/gallery/03.jpg.jpeg', alt: 'Bridal look with brocade saree', category: ['mens', 'womens'] },
  { id: 4, src: '/images/gallery/04.jpg.jpeg', alt: 'Store interior', category: ['mens', 'womens'] },
  { id: 5, src: '/images/gallery/05.jpg.jpeg', alt: 'Gold jewelry collection', category: ['mens', 'womens'] },
  { id: 6, src: '/images/gallery/06.jpg.jpeg', alt: 'Banarasi saree', category: ['mens', 'womens'] },
  { id: 7, src: '/images/gallery/07.jpg.jpeg', alt: 'Anarkali suit display', category: ['mens', 'womens'] },
  { id: 8, src: '/images/gallery/08.jpg.jpeg', alt: 'Bridal brocade', category: ['mens', 'womens'] },
  { id: 9, src: '/images/gallery/09.jpg.jpeg', alt: 'Store collection display', category: ['mens', 'womens'] },
  { id: 10, src: '/images/gallery/10.jpg.jpeg', alt: 'Tissue silk saree', category: ['mens', 'womens'] },
  { id: 11, src: '/images/gallery/11.jpg.jpeg', alt: 'Jodhpuri suit for men', category: ['mens'] },
  { id: 12, src: '/images/gallery/12.jpg.jpeg', alt: 'Soft silk saree', category: ['womens'] },
  { id: 13, src: '/images/gallery/13.jpg.jpeg', alt: 'Mysore silk saree', category: ['mens'] },
  { id: 14, src: '/images/gallery/14.jpg.jpeg', alt: 'Bridal collection display', category: ['mens'] },
  { id: 15, src: '/images/gallery/15.jpg.jpeg', alt: 'Footwear collection', category: ['mens'] },
  { id: 16, src: '/images/gallery/16.jpg.jpeg', alt: 'Chanderi silk saree', category: ['mens'] },
  { id: 17, src: '/images/gallery/17.jpg.jpeg', alt: 'Palazzo set display', category: ['mens'] },
  { id: 18, src: '/images/gallery/18.jpg.jpeg', alt: 'Store at bypass bantwal', category: ['womens'] },
  { id: 19, src: '/images/gallery/19.jpg.jpeg', alt: 'Wedding saree draping', category: ['mens'] },
  { id: 20, src: '/images/gallery/20.jpg.jpeg', alt: 'New arrivals display', category: ['mens'] },
  { id: 21, src: '/images/gallery/21.jpg.jpeg', alt: 'Bridal collection display', category: ['mens'] },
  { id: 22, src: '/images/gallery/28.jpg.jpeg', alt: 'Bridal brocade saree display with zari detailing', category: ['bridal'] },
  { id: 23, src: '/images/gallery/30.jpg.jpeg', alt: 'Bridal silk saree collection', category: ['bridal'] },
  { id: 24, src: '/images/gallery/A.jpg.jpeg', alt: 'Bridal brocade saree close-up in showroom', category: ['bridal'] },
  { id: 25, src: '/images/gallery/B.jpg.jpeg', alt: 'Bridal brocade saree rack arrangement', category: ['bridal'] },
  { id: 26, src: '/images/gallery/IMG-20260304-WA0153.jpg.jpeg', alt: 'Bridal brocade saree with rich woven border', category: ['bridal'] },
  { id: 27, src: '/images/gallery/IMG-20260225-WA0049.jpg.jpeg', alt: 'Bridal brocade saree display in boutique section', category: ['bridal'] },
  { id: 28, src: '/images/gallery/IMG-20260225-WA0053.jpg.jpeg', alt: 'Bridal brocade saree selection for wedding wear', category: ['bridal'] },
  { id: 29, src: '/images/gallery/IMG-20260304-WA0151.jpg.jpeg', alt: 'Bridal brocade saree folded set presentation', category: ['bridal'] },
  { id: 30, src: '/images/gallery/saree1.jpeg', alt: 'Saree collection style 1 on display', category: ['sarees'] },
  { id: 31, src: '/images/gallery/saree2.jpeg', alt: 'Saree collection style 2 on display', category: ['sarees'] },
  { id: 32, src: '/images/gallery/saree3.jpeg', alt: 'Saree collection style 3 on display', category: ['sarees'] },
  { id: 33, src: '/images/gallery/saree4.jpeg', alt: 'Saree collection style 4 on display', category: ['sarees'] },
  { id: 34, src: '/images/gallery/saree5.jpeg', alt: 'Saree collection style 5 on display', category: ['sarees'] },
  { id: 35, src: '/images/gallery/saree6.jpeg', alt: 'Saree collection style 6 on display', category: ['sarees'] },
  { id: 36, src: '/images/gallery/saree7.jpeg', alt: 'Saree collection style 7 on display', category: ['sarees'] },
  { id: 37, src: '/images/gallery/saree8.jpeg', alt: 'Saree collection style 8 on display', category: ['sarees'] },
  { id: 38, src: '/images/gallery/saree9.jpeg', alt: 'Saree collection style 9 on display', category: ['sarees'] },
{ id: 39, src: '/images/gallery/saree10.jpeg', alt: 'Saree collection style 10 on display', category: ['sarees'] },
{ id: 40, src: '/images/gallery/store1.jpeg', alt: 'Bridal brocade collection', category: ['store'] },
{ id: 41, src: '/images/gallery/store2.jpeg', alt: 'Bridal brocade collection', category: ['store'] },
];

const galleryFilters = ['all', 'sarees', 'bridal', 'womens', 'mens', 'accessories', 'store'];

export default function EnhancedGallery() {
  const t = useTranslations('gallery');
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState<typeof galleryImages[0] | null>(null);

  const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({ threshold: 0.2 });

  // Inside your EnhancedGallery component
const filtered = activeFilter === 'all'
  ? galleryImages.filter((img) => !img.category.includes('store')) // Exclude store from "All"
  : galleryImages.filter((img) => img.category.includes(activeFilter)); // Show specific category when selected
  const videoSrc = "https://player.cloudinary.com/embed/?cloud_name=dpvhamnmx&public_id=anchan-silks-showcase_gallery_h3alg8&autoplay=true&loop=true&muted=true&controls=true";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf9f6] pt-20">

        {/* --- Luxury Hero --- */}
        <div className="pt-32 pb-24 bg-maroon-950 relative overflow-hidden text-center">
          <div className="absolute inset-0 silk-texture opacity-10 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto px-4 relative z-10"
          >
            <span className="text-gold-400 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">The Heritage Collection</span>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 italic">{t('title')}</h1>
            <p className="text-cream-200/80 text-lg font-light max-w-2xl mx-auto leading-relaxed">{t('subtitle')}</p>
          </motion.div>
        </div>

        {/* ── Cinematic Video Showcase ── */}
        <section className="py-24 bg-white relative overflow-hidden" ref={videoRef}>
          {/* Decorative Background Text (Watermark style) */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
            <span className="text-[15vw] font-serif font-bold uppercase tracking-tighter">ANCHAN SILKS</span>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gold-600 text-[10px] tracking-[0.5em] uppercase font-bold block mb-4"
              >
                Live The Experience
              </motion.span>
              <h2 className="font-serif text-4xl md:text-5xl text-maroon-950 italic">
                {t('videoTitle')}
              </h2>
            </div>

            {/* The "Big" Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Glow Effect Layer */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-600/20 via-maroon-900/10 to-gold-600/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              {/* Main Video Container */}
              <div className="relative aspect-[21/9] md:aspect-video lg:aspect-[21/9] bg-maroon-950 overflow-hidden rounded-lg shadow-[0_30px_100px_-20px_rgba(0,0,0,0.4)] outline outline-1 outline-gold-400/30">

                {videoVisible ? (
                  <iframe
                    src={videoSrc}
                    className="absolute inset-0 w-full h-full scale-[1.01]" // Slight scale to hide edges
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="Anchan Silks Cinematic Showcase"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="w-12 h-12 border-2 border-gold-400/20 border-t-gold-400 rounded-full animate-spin" />
                  </div>
                )}

                {/* Cinematic Vignette Overlay (Optional - adds depth to edges) */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
              </div>

              {/* Floating Audio Label */}
              <div className="absolute -bottom-10 left-0 right-0 flex justify-center">
                <div className="flex items-center gap-3 px-6 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-gold-400/10">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] text-maroon-900 uppercase font-bold">
                    Experience with Sound
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Filters --- */}
        <div className="sticky top-20 z-40 bg-[#faf9f6]/80 backdrop-blur-md py-6 border-b border-maroon-900/10">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-3 justify-center">
            {galleryFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-8 py-2 text-xs tracking-widest uppercase transition-all duration-300 rounded-full border ${activeFilter === f
                    ? 'bg-maroon-900 text-white border-maroon-900 shadow-lg'
                    : 'bg-transparent text-maroon-900 border-maroon-900/20 hover:border-maroon-900'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* --- Structured Grid with Bigger Cards --- */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setLightbox(img)}
                  className="group relative cursor-pointer"
                >
                  {/* Card Container with Fixed Aspect Ratio to prevent Layout Shift */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-maroon-900/5 rounded-sm">
                    {/* Shimmer Effect / Skeleton */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />

                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      // Load the first 4 images immediately to improve LCP
                      priority={i < 4}
                    />

                    {/* High-End Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <p className="text-gold-400 text-xs tracking-[0.2em] uppercase mb-2">Exclusive Piece</p>
                      <h3 className="text-white font-serif text-2xl italic">{img.alt}</h3>
                      <div className="mt-4 flex items-center gap-2 text-white/70 text-sm">
                        <Maximize2 size={16} /> <span>View Details</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- Lightbox --- */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/98 z-[100] flex items-center justify-center p-4 md:p-12"
              onClick={() => setLightbox(null)}
            >
              <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
                <X size={40} strokeWidth={1} />
              </button>
              <div className="relative w-full h-full flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={lightbox.src}
                    alt={lightbox.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-gold-400 font-serif text-xl mt-6 italic"
                >
                  {lightbox.alt}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
        <WhatsAppFloat />
      </main>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .silk-texture {
          background-image: url("https://www.transparenttextures.com/patterns/pinstriped-suit.png");
        }
      `}</style>
    </>
  );
}