import Link from 'next/link';
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '@/data/products';
import { buildWhatsAppLink } from '@/lib/utils';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const navLinks = [
    { key: 'home', href: '/' },
    { key: 'collections', href: '/collections' },
    { key: 'about', href: '/about' },
    { key: 'gallery', href: '/gallery' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-maroon-950 via-maroon-950 to-maroon-900 text-cream-100">
      {/* Premium top border / accent */}
      <div className="h-1 bg-gradient-to-r from-maroon-900 via-gold-500 to-maroon-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            {/* Premium Logo Display */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Decorative ring background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500 via-gold-400 to-gold-600 rounded-lg blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Logo container with border */}
                <div className="relative w-20 h-20 rounded-lg bg-gradient-to-br from-maroon-800 to-maroon-900 border-2 border-gold-400 p-1.5 shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Anchan Silks Logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </div>

            {/* Brand Text */}
            <div className="text-center lg:text-left mb-8">
              <p className="font-serif text-2xl text-gold-300 tracking-wide font-bold">ANCHAN SILKS</p>
              <p className="text-xs text-gold-400 tracking-widest uppercase font-semibold">Established 1999</p>
            </div>

            <p className="text-cream-300 text-sm leading-relaxed mb-8">
              {t('tagline')}
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-maroon-900 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-maroon-900 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              )}
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-300 text-xs font-semibold uppercase tracking-widest mb-8 pb-3 border-b-2 border-gold-500">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-4">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={`/${locale}${href === '/' ? '' : href}`}
                    className="text-cream-300 text-sm font-medium hover:text-gold-300 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full group-hover:scale-125 transition-transform duration-300" />
                    {tNav(key as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-gold-300 text-xs font-semibold uppercase tracking-widest mb-8 pb-3 border-b-2 border-gold-500">
              Anchan Silks
            </h3>
            <ul className="space-y-5 text-cream-300 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-gold-400 shrink-0 mt-1" />
                <span className="leading-relaxed">{siteConfig.address.main}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-gold-400 shrink-0 mt-1" />
                <a href={`tel:${siteConfig.phone.main}`} className="hover:text-gold-300 transition-colors duration-300 font-medium">
                  {siteConfig.phone.mainDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-gold-400 shrink-0 mt-1" />
                <div className="leading-relaxed">
                  <p className="font-medium">Mon–Sat: 9AM – 7PM</p>
                  <p className="font-medium">Sunday: 9AM – 4PM</p>
                </div>
              </li>
            </ul>

            <h3 className="text-gold-300 text-xs font-semibold uppercase tracking-widest mt-8 mb-4 pb-3 border-b-2 border-gold-500">
              Anchan Garments
            </h3>
            <ul className="space-y-4 text-cream-300 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-gold-400 shrink-0 mt-1" />
                <span className="leading-relaxed">{siteConfig.address.branch}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-gold-400 shrink-0 mt-1" />
                <a href={`tel:${siteConfig.phone.branch}`} className="hover:text-gold-300 transition-colors duration-300 font-medium">
                  {siteConfig.phone.branchDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA Section */}
          <div className="bg-gradient-to-br from-maroon-900 to-maroon-800 rounded-xl p-8 border-2 border-gold-500 shadow-xl">
            <h3 className="text-gold-300 text-xs font-semibold uppercase tracking-widest mb-6 pb-3 border-b-2 border-gold-500">
              Enquire Now
            </h3>
            <p className="text-cream-300 text-sm mb-6 leading-relaxed font-medium">
              Have a question about our collections? Chat with us on WhatsApp — we respond quickly!
            </p>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full px-6 py-3.5 bg-gradient-to-r from-green-600 to-green-500 text-white text-sm font-semibold hover:from-green-500 hover:to-green-400 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Premium Bottom Bar */}
        <div className="border-t-2 border-gold-500 mt-16 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream-400">
          <p className="font-medium">{t('rights')}</p>
          <p className="font-medium">
            {t.rich('madeWith', {
              link: (chunks) => (
                <a
                  href="https://bluekod.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-300 hover:text-gold-400 underline transition-colors duration-300"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
