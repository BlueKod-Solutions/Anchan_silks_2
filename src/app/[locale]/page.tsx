import { useTranslations } from 'next-intl';
import Navbar          from '@/components/layout/Navbar';
import Footer          from '@/components/layout/Footer';
import HeroSection     from '@/components/sections/HeroSection';
import MarqueeSection  from '@/components/sections/MarqueeSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import BridalSpotlight from '@/components/sections/BridalSpotlight';
import LegacySection   from '@/components/sections/LegacySection';
import WhyUsSection    from '@/components/sections/WhyUsSection';
import VisitStrip      from '@/components/sections/VisitStrip';
import WhatsAppFloat   from '@/components/shared/WhatsAppFloat';

export default function HomePage() {
  return (
  <>
    <Navbar />

    <main className="min-h-screen pt-20">
      <HeroSection />
      <MarqueeSection />
      <CategoriesSection />
      <BridalSpotlight />
      <LegacySection />
      <WhyUsSection />
      {/* <VisitStrip /> */}
      <Footer />
      <WhatsAppFloat />
    </main>
  </>
);
}
