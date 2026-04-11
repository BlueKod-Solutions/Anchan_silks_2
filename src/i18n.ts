import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the promise and provide a fallback string (e.g., 'en')
  // This ensures 'locale' is type 'string' instead of 'string | undefined'
  const locale = (await requestLocale) ?? 'en';

  return {
    locale, // ✅ Now guaranteed to be a string
    messages: (await import(`./messages/${locale}.json`)).default
  };
});