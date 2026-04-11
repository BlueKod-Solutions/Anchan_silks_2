'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
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
      {/* FIXED CONTAINER: 
          Using a grid for desktop ensures true centering of the middle links 
      */}
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 grid grid-cols-2 lg:grid-cols-3 items-center">
        
        {/* 1. Left Section: Logo (Moves left) */}
        {/* 1. Left Section: Logo + Mobile/Desktop Text Logic */}
<div className="flex justify-start">
  <Link href={`/${locale}`} className="flex items-center gap-3 group">
    <div className="relative group/logo">
      {/* Decorative glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500 via-gold-400 to-gold-600 rounded-lg blur-md opacity-30 group-hover/logo:opacity-50 transition-opacity duration-300" />
      
      {/* Logo container */}
      <div className="relative w-11 h-11 lg:w-14 lg:h-14 rounded-lg bg-gradient-to-br from-maroon-800 to-maroon-900 border-2 border-gold-400 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center p-1">
        <Image src="/images/logo.svg" alt="Anchan Silks" fill className="object-contain p-1" fetchPriority="high" />
      </div>
    </div>

    {/* MOBILE ONLY TEXT (Visible only on phones) */}
    <div className="block lg:hidden">
      <p className="font-serif font-bold leading-none text-gold-300 text-base tracking-wide whitespace-nowrap">
        ANCHAN SILKS
      </p>
      <p className="text-[9px] text-gold-400/80 font-semibold tracking-[0.2em] uppercase mt-1">
        ESTD 1999
      </p>
    </div>

    {/* DESKTOP ONLY TEXT (Hidden on mobile, appears from lg breakpoint) */}
    <div className="hidden lg:block">
      <p className="font-serif font-bold leading-none text-gold-300 text-lg lg:text-xl tracking-wide whitespace-nowrap">
        ANCHAN SILKS
      </p>
      <p className="text-[10px] text-gold-400 font-semibold tracking-widest uppercase mt-1">
        Est. 1999
      </p>
    </div>
  </Link>
</div>

        {/* 2. Middle Section: Links (Perfectly centered) */}
        <ul className="hidden lg:flex items-center justify-center gap-8 xl:gap-10">
          {navLinks.map(({ key, href }) => (
            <li key={key}>
              <Link
                href={`/${locale}${href === '/' ? '' : href}`}
                className={cn(
                  'text-[13px] font-semibold tracking-widest uppercase transition-all duration-300 relative group whitespace-nowrap',
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

        {/* 3. Right Section: Controls (Moves right) */}
        {/* 3. Right Section */}
<div className="flex items-center justify-end gap-1">
  {/* Show language toggle on mobile too, but maybe smaller */}
  <button
    onClick={switchLocale}
    className="flex items-center justify-center gap-1 px-2 py-1.5 border border-gold-500/50 text-gold-300 text-[10px] font-bold tracking-tight rounded-md mr-1"
    aria-label="Toggle language"
  >
    <Globe size={12} />
    <span>{locale === 'en' ? 'ಕನ್ನಡ' : 'EN'}</span>
  </button>

  <button
    onClick={() => setOpen(!open)}
    className="lg:hidden p-2 text-gold-300"
  >
    {open ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>
      </nav>

      {/* Mobile menu logic remains same */}
      {open && (
        <div className="lg:hidden bg-maroon-950 border-t-2 border-gold-400 shadow-xl animate-in fade-in slide-in-from-top-4">
          <ul className="flex flex-col py-4">
            {navLinks.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={`/${locale}${href === '/' ? '' : href}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block px-6 py-4 text-sm font-semibold transition-all duration-300 border-l-4',
                    isActive(href)
                      ? 'text-gold-300 bg-maroon-900 border-gold-400'
                      : 'text-gold-200 hover:text-gold-300 hover:bg-maroon-900 border-transparent'
                  )}
                >
                  {t(key as any)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}