'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/data/products';

const navLinks = [
  { key: 'home',        href: '/' },
  { key: 'bridal',      href: '/bridal' },
  { key: 'collections', href: '/collections' },
  { key: 'about',       href: '/about' },
  { key: 'gallery',     href: '/gallery' },
  { key: 'contact',     href: '/contact' },
];

export default function Navbar() {
  const t       = useTranslations('nav');
  const locale  = useLocale();
  const router  = useRouter();
  const pathname = usePathname();
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === 'en' ? 'kn' : 'en';
    // Strip current locale prefix and add new one
    const segments = pathname.split('/');
    if (segments[1] === 'en' || segments[1] === 'kn') {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    router.push(segments.join('/') || '/');
  };

  const isActive = (href: string) =>
    href === '/' ? pathname === `/${locale}` || pathname === '/'
    : pathname.includes(href);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gold-200'
          : 'bg-transparent'
      )}
    >
      {/* Top bar */}
      <div className="bg-maroon-900 text-cream-50 text-xs py-1.5 px-4 flex justify-between items-center">
        <span className="hidden sm:block">
          📍 Bypass Road, Bantwal, Dakshina Kannada
        </span>
        <div className="flex items-center gap-4 ml-auto">
          <a
            href={`tel:${siteConfig.phone.main}`}
            className="flex items-center gap-1 hover:text-gold-300 transition-colors"
          >
            <Phone size={11} />
            {siteConfig.phone.mainDisplay}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            {/* Replace with actual logo */}
            <div className="w-10 h-10 bg-maroon-900 flex items-center justify-center text-gold-400 font-serif text-lg font-bold">
              A
            </div>
            
            <Image src="/images/logo.png" alt="Anchan Silks" fill className="object-contain" />
           
          </div>
          <div>
            <p className={cn(
              'font-serif font-semibold leading-none transition-colors',
              scrolled ? 'text-maroon-900 text-lg' : 'text-maroon-900 text-lg'
            )}>
              Anchan Silks
            </p>
            <p className="text-xs text-gold-600 tracking-widest uppercase">Est. 1999</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ key, href }) => (
            <li key={key}>
              <Link
                href={`/${locale}${href === '/' ? '' : href}`}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors relative group',
                  isActive(href)
                    ? 'text-maroon-900'
                    : 'text-charcoal hover:text-maroon-800'
                )}
              >
                {t(key as any)}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 bg-gold-500 transition-all duration-300',
                    isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={switchLocale}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-maroon-200 text-maroon-800 text-xs font-medium hover:bg-maroon-900 hover:text-white hover:border-maroon-900 transition-all duration-200"
            aria-label="Toggle language"
          >
            {locale === 'en' ? (
              <><span>ಕನ್ನಡ</span></>
            ) : (
              <><span>English</span></>
            )}
          </button>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${siteConfig.whatsapp.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-maroon-900 text-cream-50 text-sm font-medium hover:bg-maroon-800 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-maroon-900"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gold-100 shadow-lg">
          <ul className="flex flex-col py-2">
            {navLinks.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={`/${locale}${href === '/' ? '' : href}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block px-6 py-3 text-sm font-medium transition-colors',
                    isActive(href)
                      ? 'text-maroon-900 bg-cream-50 border-l-2 border-gold-500'
                      : 'text-charcoal hover:text-maroon-900 hover:bg-cream-50'
                  )}
                >
                  {t(key as any)}
                </Link>
              </li>
            ))}
            <li className="px-6 py-3 border-t border-cream-100">
              <button
                onClick={() => { switchLocale(); setOpen(false); }}
                className="text-sm text-maroon-700 font-medium"
              >
                {locale === 'en' ? 'ಕನ್ನಡದಲ್ಲಿ ನೋಡಿ' : 'View in English'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
