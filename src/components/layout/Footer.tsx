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
    <footer className="bg-maroon-950 text-cream-100">
      {/* Ornament top border */}
      <div className="h-1 bg-gradient-to-r from-maroon-900 via-gold-500 to-maroon-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/logo.png"
                  alt="Anchan Silks Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <p className="font-serif text-xl text-white">Anchan Silks</p>
                <p className="text-xs text-gold-400 tracking-widest uppercase">Est. 1999</p>
              </div>
            </div>
            <p className="text-cream-300 text-sm leading-relaxed mt-4">
              {t('tagline')}
            </p>
            <div className="flex gap-3 mt-6">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-maroon-700 text-cream-400 hover:bg-gold-500 hover:border-gold-500 hover:text-maroon-950 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-maroon-700 text-cream-400 hover:bg-gold-500 hover:border-gold-500 hover:text-maroon-950 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
              )}
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-maroon-700 text-cream-400 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-5">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={`/${locale}${href === '/' ? '' : href}`}
                    className="text-cream-300 text-sm hover:text-gold-400 transition-colors"
                  >
                    {tNav(key as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — Main Store */}
          <div>
            <h3 className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-5">
              Anchan Silks
            </h3>
            <ul className="space-y-3 text-cream-300 text-sm">
              <li className="flex gap-3">
                <MapPin size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address.main}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <a href={`tel:${siteConfig.phone.main}`} className="hover:text-gold-400 transition-colors">
                  {siteConfig.phone.mainDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p>Mon–Sat: 9AM – 7PM</p>
                  <p>Sunday: 9AM – 4PM</p>
                </div>
              </li>
            </ul>

            <h3 className="text-gold-400 text-xs font-semibold uppercase tracking-widest mt-6 mb-3">
              Anchan Garments
            </h3>
            <ul className="space-y-2 text-cream-300 text-sm">
              <li className="flex gap-3">
                <MapPin size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address.branch}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <a href={`tel:${siteConfig.phone.branch}`} className="hover:text-gold-400 transition-colors">
                  {siteConfig.phone.branchDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h3 className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-5">
              Enquire Now
            </h3>
            <p className="text-cream-300 text-sm mb-4 leading-relaxed">
              Have a question about our collections? Chat with us on WhatsApp — we respond quickly!
            </p>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 text-white text-sm font-medium hover:bg-green-500 transition-colors w-full justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-maroon-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream-500">
          <p>{t('rights')}</p>
          <p>
            {t.rich('madeWith', {
              link: (chunks) => (
                <a
                  href="https://bluekod.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 underline"
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
