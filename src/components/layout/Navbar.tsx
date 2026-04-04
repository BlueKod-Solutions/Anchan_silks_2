'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Globe, MessageCircle } from 'lucide-react';
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
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-maroon-900 via-maroon-900 to-maroon-800 shadow-xl border-b-4 border-gold-500"
    >

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
            {/* Replace with actual logo */}
            <Image src="/images/logo.png" alt="Anchan Silks" fill className="object-contain" />
          </div>
          <div>
            <p className="font-serif font-bold leading-none text-gold-400 text-xl tracking-wide">
              ANCHAN SILKS
            </p>
            <p className="text-xs text-gold-300 font-semibold tracking-widest uppercase">Est.  1999</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ key, href }) => (
            <li key={key}>
              <Link
                href={`/${locale}${href === '/' ? '' : href}`}
                className={cn(
                  'text-sm font-semibold tracking-widest uppercase transition-all duration-300 relative group',
                  isActive(href)
                    ? 'text-gold-300'
                    : 'text-gold-200 hover:text-gold-300'
                )}
              >
                {t(key as any)}
                <span
                  className={cn(
                    'absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-300 transition-all duration-300',
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
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 border-2 border-gold-400 text-gold-300 text-xs font-semibold tracking-wide hover:bg-gold-400 hover:text-maroon-900 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
            aria-label="Toggle language"
          >
            <Globe size={16} className="transition-transform duration-300" />
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
            className="hidden md:inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-gold-400 to-gold-300 text-maroon-900 text-sm font-semibold hover:from-gold-300 hover:to-gold-200 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            <MessageCircle size={18} className="transition-transform duration-300" />
            WhatsApp
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2.5 text-gold-300 hover:bg-maroon-800 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-maroon-950 border-t-2 border-gold-400 shadow-xl">
          <ul className="flex flex-col py-4">
            {navLinks.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={`/${locale}${href === '/' ? '' : href}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block px-6 py-3.5 text-sm font-semibold transition-all duration-300 border-l-4',
                    isActive(href)
                      ? 'text-gold-300 bg-maroon-900 border-gold-400'
                      : 'text-gold-200 hover:text-gold-300 hover:bg-maroon-900 border-transparent'
                  )}
                >
                  {t(key as any)}
                </Link>
              </li>
            ))}
            <li className="px-6 py-3.5 border-t border-maroon-800">
              <button
                onClick={() => { switchLocale(); setOpen(false); }}
                className="flex items-center gap-2 text-sm text-gold-300 font-semibold hover:text-gold-200 transition-colors duration-300"
              >
                <Globe size={16} />
                {locale === 'en' ? 'ಕನ್ನಡದಲ್ಲಿ ನೋಡಿ' : 'View in English'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}


