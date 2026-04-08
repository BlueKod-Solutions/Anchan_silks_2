import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '@/styles/globals.css';


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Anchan Silks — Bantwal\'s Most Trusted Bridal & Silk Destination',
    template: '%s | Anchan Silks',
  },
  description:
    'Anchan Silks, Bypass Bantwal — Dakshina Karnataka\'s premier destination for bridal sarees, silk sarees, ethnic wear and more. Est. 1999.',
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

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={locale === 'kn' ? 'font-kannada' : ''}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
