import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream-50 flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-32 px-4">
        <div className="text-center max-w-lg">
          <span className="text-8xl">🥻</span>
          <h1 className="font-serif text-6xl text-maroon-900 mt-6 mb-4">404</h1>
          <p className="text-gray-600 text-lg mb-8">
            This page seems to have been woven out of our collection. Let&apos;s take you back.
          </p>
          <Link
            href="/"
            className="btn-primary inline-flex px-8 py-4 text-base"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
