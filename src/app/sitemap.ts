import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://anchansilks.com';
  const locales = ['en', 'kn'];

  const routes = ['', '/collections', '/about', '/gallery', '/contact'];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      const path = locale === 'en' ? route || '/' : `/${locale}${route || ''}`;
      entries.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route === '/collections' ? 0.9 : 0.7,
      });
    }
  }

  return entries;
}
