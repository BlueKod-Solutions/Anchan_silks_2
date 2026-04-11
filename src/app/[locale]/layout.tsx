import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Noto_Sans_Kannada } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '@/styles/globals.css';

// 1. Optimized Font Loading (Self-hosted by Next.js)
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap', 
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const kannada = Noto_Sans_Kannada({
  subsets: ['kannada'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-kannada',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Anchan Silks — Bantwal's Most Trusted Bridal & Silk Destination",
    template: '%s | Anchan Silks',
  },
  description:
    "Anchan Silks, Bypass Bantwal — Dakshina Karnataka's premier destination for bridal sarees, silk sarees, ethnic wear and more. Est. 1999.",
  keywords: [
    'silk sarees bantwal',
    'bridal sarees bantwal',
    'kanchipuram saree bantwal',
    'anchan silks',
    'wedding sarees dakshina kannada',
    'saree shop bantwal',
  ],
  openGraph: {
    title: 'Anchan Silks — Bantwal',
    description: 'Exquisite bridal sarees & silk collections. Trusted since 1999.',
    url: 'https://anchansilks.com',
    siteName: 'Anchan Silks',
    locale: 'en_IN',
    type: 'website',
  },
  metadataBase: new URL('https://anchansilks.com'),
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout(props: Props) {
  const { locale } = await props.params;
  const children = props.children;
  const messages = await getMessages();

  return (
    <html 
      lang={locale} 
      // 2. Pass all font variables to the HTML tag
      className={`${inter.variable} ${cormorant.variable} ${kannada.variable} scroll-smooth`}
    >
      <body className={locale === 'kn' ? 'font-kannada' : 'font-sans'}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}