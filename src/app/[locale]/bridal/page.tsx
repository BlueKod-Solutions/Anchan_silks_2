'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import Navbar        from '@/components/layout/Navbar';
import Footer        from '@/components/layout/Footer';
import ProductCard   from '@/components/shared/ProductCard';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import { products } from '@/data/products';
import { buildProductWhatsAppLink } from '@/lib/utils';

export default function BridalPage() {
  const t           = useTranslations();
  const locale      = useLocale();

  // Filter for bridal products only
  const bridalProducts = products.filter((p) => p.category === 'bridal');
  const featured = bridalProducts.filter((p) => p.featured).slice(0, 4);

  const benefits = [
    {
      icon: '✦',
      title: locale === 'kn' ? 'ಪರಂಪರೆಯ ಸೌಂದರ್ಯ' : 'Timeless Beauty',
      desc: locale === 'kn' ? 'ಶಾಶ್ವತ ಪರಂಪರೆ ಮತ್ತು ಆಧುನಿಕ ವಿನ್ಯಾಸ' : 'Eternal heritage meets modern elegance',
    },
    {
      icon: '🥻',
      title: locale === 'kn' ? 'ಪ್ರಿಮಿಯಂ ರೇಷ್ಮೆ' : 'Premium Silks',
      desc: locale === 'kn' ? 'ಭಾರತದ ಅತ್ಯುತ್ತಮ ರೇಷ್ಮೆ ನೇಮಕರಣ' : 'Hand-selected pure silk varieties',
    },
    {
      icon: '👑',
      title: locale === 'kn' ? 'ಧಾರೀದಾರ ನೈಪುಣ್ಯ' : 'Expert Craftsmanship',
      desc: locale === 'kn' ? 'ತಜ್ಞ ಕಸೂತೀ ಕರ್ತೃತ್ವ ಮತ್ತು ವಿಸ್ತಾರ' : 'Intricate embroidery with perfection',
    },
    {
      icon: '💎',
      title: locale === 'kn' ? 'ಕಸ್ಟಮೈಜೇಶನ' : 'Customization',
      desc: locale === 'kn' ? 'ನಿಮ್ಮ ಅನನ್ಯ ದೃಷ್ಟಿಕೋನಕ್ಕೆ ಮೆರೆಯುತ್ತವೆ' : 'We create your dream bridal saree',
    },
  ];

  return (
    <>
      <Navbar />
    <main className="min-h-screen bg-cream-50 pt-20">

      {/* Hero Section with Image & Content Overlay */}
      <div className="relative h-screen md:h-[600px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bridal/bridal-hero.jpeg"
            alt="Bridal Collection Hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            onError={(e) => {
              // Fallback to gradient if image fails
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Rich gradient overlay matching home page */}
          <div className="absolute inset-0 bg-gradient-to-br from-maroon-950/85 via-maroon-900/70 to-maroon-800/60" />
          {/* Decorative silk texture */}
          <div className="absolute inset-0 silk-texture opacity-20" />
          {/* Gold frame ornament */}
          <div className="absolute inset-8 border border-gold-500/20 pointer-events-none hidden lg:block" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 md:pt-20 lg:pt-16">
            <div className="max-w-2xl">
              <div className="mb-6 animate-fade-up">
                <span className="inline-block text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase">
                  ✦ {t('bridal.badge')}
                </span>
              </div>
              
              <h1 
                className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight animate-fade-up"
                style={{ animationDelay: '100ms' }}
              >
                {t('bridal.title')}
              </h1>
              
              <p 
                className="text-cream-200 text-lg md:text-xl max-w-xl mb-8 leading-relaxed animate-fade-up"
                style={{ animationDelay: '200ms' }}
              >
                {t('bridal.subtitle')}
              </p>

              <div 
                className="flex flex-col sm:flex-row gap-4 animate-fade-up"
                style={{ animationDelay: '300ms' }}
              >
                <Link
                  href={`/${locale}/bridal#collection`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-maroon-950 font-semibold hover:bg-gold-400 transition-all duration-300 hover:shadow-lg"
                >
                  {locale === 'kn' ? 'ಸಂಗ್ರಹಣೆ ನೋಡಿ' : 'Explore Collection'}
                </Link>
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent('I\'m interested in your bridal collection')}`}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-500 text-gold-400 font-semibold hover:bg-gold-500/10 transition-all duration-300"
                >
                  {locale === 'kn' ? 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ' : 'Enquire on WhatsApp'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-lg hover:bg-cream-50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-xl text-maroon-900 mb-2">{benefit.title}</h3>
                <p className="text-cream-700 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section id="collection" className="py-24 bg-maroon-950 relative overflow-hidden">
        <div className="absolute inset-0 silk-texture opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4 animate-fade-up">
              ✦ {locale === 'kn' ? 'ನಮ್ಮ ಸಂಗ್ರಹಣೆ' : 'Our Collection'}
            </span>
            <h2 
              className="font-serif text-4xl md:text-5xl text-white mb-4 animate-fade-up"
              style={{ animationDelay: '100ms' }}
            >
              {locale === 'kn' ? 'ಮುಖ್ಯ ಸಂಗ್ರಹ' : 'Featured Bridal Sarees'}
            </h2>
            <p 
              className="text-cream-300 text-base max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              {locale === 'kn' 
                ? 'ನಮ್ಮ ಅತ್ಯುತ್ತಮ ವಿವಾಹ ಸಂಗ್ರಹದಿಂದ ಪ್ರತಿ ವಧುವಿನ ಸ್ವಪ್ನವನ್ನು ಹೃದಯ ಮಾಡಿ'
                : 'Each piece is a masterpiece designed to make your special day unforgettable'
              }
            </p>
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featured.length > 0 ? (
              featured.map((product, index) => {
                const name = locale === 'kn' ? product.nameKn : product.name;
                return (
                  <div
                    key={product.id}
                    className="group animate-fade-up hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden bg-maroon-900 aspect-[3/4]">
                      <Image
                        src={product.image}
                        alt={name}
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* Placeholder */}
                      <div className="absolute inset-0 bg-maroon-800 flex items-center justify-center -z-10">
                        <span className="text-6xl opacity-20">🥻</span>
                      </div>

                      {/* Tag */}
                      {product.tag && (
                        <span className="absolute top-3 right-3 bg-gold-500 text-maroon-950 text-xs font-bold px-3 py-1">
                          {product.tag}
                        </span>
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white text-sm font-semibold mb-3">{name}</p>
                        <a
                          href={buildProductWhatsAppLink(product.name)}
                          className="inline-block w-full text-center px-4 py-2 bg-gold-500 text-maroon-950 text-xs font-bold hover:bg-gold-400 transition-colors"
                        >
                          {t('categories.enquire')}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <span className="text-6xl">🥻</span>
                <p className="text-cream-400 mt-4">{locale === 'kn' ? 'ಪ್ರದರ್ಶನ ಪ್ರೆ ಅದೃಶ್ಯ' : 'Featured items coming soon'}</p>
              </div>
            )}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href={`/${locale}/collections?category=bridal`}
              className="inline-flex items-center gap-2 px-8 py-3 border border-gold-500/50 text-gold-400 font-semibold hover:bg-gold-500 hover:text-maroon-950 transition-all duration-300 hover:shadow-lg"
            >
              {locale === 'kn' ? 'ಎಲ್ಲ ನೋಡಿ' : 'View All Collections'} →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-up">
              <span className="inline-block text-gold-600 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                ✦ {locale === 'kn' ? 'ನಮ್ಮ ಬಲ' : 'Why Us'}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-maroon-900 mb-6 leading-tight">
                {locale === 'kn' 
                  ? 'ಪಾರಂಪರಿಕ ಕೌಶಲ್ಯ, ಆಧುನಿಕ ಸೌಂದರ್ಯ'
                  : 'Three Decades of Bridal Excellence'
                }
              </h2>
              <p className="text-cream-700 text-lg mb-6 leading-relaxed">
                {locale === 'kn'
                  ? 'ಸಿದ್ಧಾಂತ 1999 ರಿಂದ, ನಾವು ದಕ್ಷಿಣ ಕನ್ನಡದ ಸಾವಿರಾರು ವಧುಗಳ ಸ್ವಪ್ನವನ್ನು ಜೀವಂತ ಮಾಡಿದ್ದೇವೆ. ಪ್ರತಿಟಿ ಸೀರೆ ನಮ್ಮ ಪ್ರತಿಶ್ರುತಿಯ ಸಾಕ್ಷ್ಯ - ಗುಣಮಾನ, ಕೌಶಲ್ಯ ಮತ್ತು ಪರಿಪೂರ್ಣತೆಗೆ.'
                  : 'Since 1999, we have been the trusted choice for brides across Dakshina Kannada. Every saree in our collection is handpicked and crafted with meticulous attention to detail.'
                }
              </p>
              <ul className="space-y-3">
                {[
                  locale === 'kn' ? '✓ ಶುದ್ಧ ಮೊಸರು ರೇಷ್ಮೆ' : '✓ 100% Authentic Silks',
                  locale === 'kn' ? '✓ ಮೈಸೂರು ಮತ್ತು ಕಾಂಚೀಪುರಂ ಪರಿಸರ್ವ' : '✓ Mysore & Kanchipuram Expertise',
                  locale === 'kn' ? '✓ ಅಂತಹ ಕಸ್ಟಮೈಜೇಶನ ಸೇವೆ' : '✓ Personalized Services',
                  locale === 'kn' ? '✓ ಜೀವನಾವಧಿ ಅಲಮಾರಿ ಜವಾಬ್ದಾರಿ' : '✓ Lifetime Care & Support',
                ].map((item, idx) => (
                  <li key={idx} className="text-maroon-900 font-medium">{item}</li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative rounded-lg overflow-hidden aspect-square animate-fade-up [animation-delay:200ms] shadow-2xl">
              <Image
                src="/images/bridal/bridal-about.jpeg"
                alt="Bridal Experience"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  // Fallback to gradient if image fails
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-maroon-900/30 to-gold-500/20" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-maroon-900 relative overflow-hidden">
        <div className="absolute inset-0 silk-texture opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 animate-fade-up">
            {locale === 'kn' ? 'ನಿಮ್ಮ ಪರಿಪೂರ್ಣ ಸೀರೆ ಕಂಡುಕೊಳ್ಳುತ್ತವೆ' : 'Ready to Find Your Perfect Bridal Saree?'}
          </h2>
          <p className="text-cream-300 text-lg max-w-2xl mx-auto mb-8 animate-fade-up [animation-delay:100ms]">
            {locale === 'kn'
              ? 'ನಮ್ಮ ತಜ್ಞ ದಲ್ಲಾಲಿ ನಿಮ್ಮ ಶೀರ್ಷ ಸೌಂದರ್ಯವನ್ನು ಪಡೆಯಲು ಸಹಾಯ ಮಾಡಿ'
              : 'Let our expert consultants help you discover the perfect match for your special day'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Link
              href={`/${locale}/bridal#collection`}
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-maroon-950 font-semibold hover:bg-gold-400 transition-all duration-300 hover:shadow-lg"
            >
              {locale === 'kn' ? 'ಸಂಗ್ರಹಣೆ ಪರಿಶೋಧಿಸಿ' : 'Browse Collection'}
            </Link>
            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent('I would like a consultation for my bridal saree')}`}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-500 text-gold-400 font-semibold hover:bg-gold-500/10 transition-all duration-300"
            >
              {locale === 'kn' ? 'ಪರಾಮರ್ಶ ಬುಕ್ಕಿಂಗ್ ಪಡೆಯಿರಿ' : 'Book Consultation'}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
    </>
  );
}
