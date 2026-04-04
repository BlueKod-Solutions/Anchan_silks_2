# 🏮 Anchan Silks — Website

> Official website for Anchan Silks, Bypass Bantwal, Dakshina Kannada, Karnataka.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with actual values (EmailJS, GA4)

# 3. Run development server
npm run dev
# Open http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/
│   └── [locale]/           ← All pages (EN + KN routing)
│       ├── page.tsx         ← Home
│       ├── collections/     ← Product catalogue with filter
│       ├── about/           ← About Us + Social commitment
│       ├── gallery/         ← Photo gallery + Video
│       ├── contact/         ← Contact form + Maps
│       └── layout.tsx       ← Root layout with fonts & i18n
├── components/
│   ├── layout/              ← Navbar, Footer
│   ├── sections/            ← Page sections (Hero, Categories, etc.)
│   └── shared/              ← Reusable components (ProductCard, WhatsAppFloat)
├── data/
│   └── products.ts          ← ALL product data + siteConfig
├── lib/
│   └── utils.ts             ← Helper functions (WhatsApp links, cn())
├── messages/
│   ├── en.json              ← English translations
│   └── kn.json              ← Kannada translations
└── styles/
    └── globals.css          ← Design system, CSS variables, base styles
```

---

## 🖼️ Adding Client Images

1. Copy all client photos to the correct `/public/images/` subfolder:
   ```
   public/images/
   ├── bridal/        ← bridal-brocade-1.jpg, kanchipuram-1.jpg, etc.
   ├── womens/        ← anarkali-1.jpg, palazzo-1.jpg, etc.
   ├── mens/          ← jodhpuri-full-1.jpg, etc.
   ├── trending/      ← bodycon-1.jpg, cargo-jeans-1.jpg, etc.
   ├── accessories/   ← gold-jewelry-1.jpg, footwear-1.jpg
   ├── gallery/       ← gallery-01.jpg through gallery-20.jpg
   └── store/         ← hero-poster.jpg, video-poster.jpg, owner.jpg
   ```

2. Match the exact filenames used in `src/data/products.ts` — or update the `image` paths there.

3. **Important:** Rename client photos to match these filenames before placing them.

---

## 🎬 Adding the Client Video

Place the video at:
```
public/video/anchan-silks-showcase.mp4
```

Also create a poster image (first frame or best frame):
```
public/images/store/hero-poster.jpg   ← Used as hero background
public/images/store/video-poster.jpg  ← Used on Gallery video player
```

---

## 🖼️ Logo Setup

1. Get the HD logo from client (request PNG with transparent background)
2. Place at: `public/images/logo.png`
3. Uncomment the `<Image>` tag in `src/components/layout/Navbar.tsx` (lines marked with comment)
4. Also create `public/favicon.ico` from the logo

---

## 🌐 Bilingual (EN / ಕನ್ನಡ)

All text is in:
- `src/messages/en.json` — English
- `src/messages/kn.json` — Kannada

The toggle button in the navbar switches between them automatically.

To add new text:
1. Add key-value to both `en.json` and `kn.json`
2. Use `const t = useTranslations('section')` and `t('key')` in components

---

## 📦 Adding/Editing Products

All products live in `src/data/products.ts`:

```typescript
{
  id: 'bridal-014',
  name: 'New Saree Name',
  nameKn: 'ಕನ್ನಡ ಹೆಸರು',
  category: 'bridal',           // bridal | womens | mens | trending | accessories
  image: '/images/bridal/new-saree.jpg',
  featured: true,               // shows in Bridal Spotlight
  tag: 'New Arrival',           // optional badge
}
```

---

## 🗺️ Setting Up Google Maps

1. Go to Google Maps and find each store
2. Click Share → Embed a map → Copy the iframe `src` URL
3. Paste into `siteConfig.address.mainEmbed` and `siteConfig.address.branchEmbed` in `products.ts`

---

## 📧 Setting Up EmailJS (Contact Form)

1. Create free account at [emailjs.com](https://www.emailjs.com/)
2. Add Email Service (Gmail works fine)
3. Create Email Template — use variables: `{{user_name}}`, `{{user_phone}}`, `{{message}}`
4. Copy Service ID, Template ID, Public Key into `.env.local`

---

## 📊 Google Analytics

1. Create GA4 property at [analytics.google.com](https://analytics.google.com/)
2. Copy Measurement ID (format: G-XXXXXXXXXX)
3. Add to `.env.local` as `NEXT_PUBLIC_GA_MEASUREMENT_ID`

---

## 🚀 Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

Then in Vercel dashboard:
- Add all environment variables from `.env.local`
- Connect custom domain: `anchansilks.com`
- Set up domain DNS to point to Vercel

---

## 🎨 Design System

| Token        | Value        |
|--------------|--------------|
| Primary      | `#6B1B2A` (Maroon) |
| Accent       | `#C9A84C` (Gold) |
| Background   | `#FAF6F0` (Cream) |
| Text         | `#1C1C1C` (Charcoal) |
| Heading font | Cormorant Garamond |
| Body font    | Inter |
| Kannada font | Noto Sans Kannada |

CSS variables are in `src/styles/globals.css`.
Tailwind classes use the custom color palette in `tailwind.config.js`.

---

## ✅ Pre-launch Checklist

- [ ] All 40 images sorted and placed in correct folders
- [ ] Video placed at `/public/video/anchan-silks-showcase.mp4`
- [ ] Logo placed at `/public/images/logo.png` and uncommented in Navbar
- [ ] Favicon created
- [ ] EmailJS keys added to `.env.local`
- [ ] Google Maps embed URLs added to `siteConfig`
- [ ] Instagram handle confirmed and added to `siteConfig.social.instagram`
- [ ] Owner photo added at `/public/images/store/owner.jpg`
- [ ] GA4 ID added to `.env.local`
- [ ] Test contact form
- [ ] Test WhatsApp links on mobile
- [ ] Test Kannada toggle
- [ ] Lighthouse score 85+ on mobile
- [ ] Submit to Google Search Console

---

## 👥 Team

Built with ❤️ by our agency for Anchan Silks, Bantwal.
