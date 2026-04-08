// ─── PRODUCT DATA ────────────────────────────────────────────────────────────
// Replace placeholder image paths with actual Cloudinary URLs after upload
// Format: https://res.cloudinary.com/YOUR_CLOUD/image/upload/v1/anchansilks/...

export type Category =
  | 'bridal'
  | 'mens'
  | 'womens'
  | 'trending'
  | 'accessories';

export interface Product {
  id: string;
  name: string;
  nameKn: string;
  category: Category;
  image: string;       // replace with Cloudinary URL
  featured?: boolean;
  tag?: string;
}

export const products: Product[] = [
  // ── BRIDAL SAREES ──────────────────────────────────────────────────────────
  {
    id: 'bridal-001',
    name: 'Pure Bridal Brocade Saree',
    nameKn: 'ಶುದ್ಧ ವಿವಾಹ ಬ್ರೋಕೇಡ್ ಸೀರೆ',
    category: 'bridal',
    image: '/images/bridal/bridal-brocade-1.jpeg',
    featured: true,
    tag: 'Bestseller',
  },
  {
    id: 'bridal-002',
    name: 'Bridal Tissue Brocade Saree',
    nameKn: 'ವಿವಾಹ ಟಿಶ್ಯೂ ಬ್ರೋಕೇಡ್ ಸೀರೆ',
    category: 'bridal',
    image: '/images/bridal/tissue-brocade-1.jpeg',
    featured: true,
  },
  {
    id: 'bridal-003',
    name: 'Kanchipuram Silk Saree',
    nameKn: 'ಕಾಂಚೀಪುರಂ ರೇಷ್ಮೆ ಸೀರೆ',
    category: 'bridal',
    image: '/images/bridal/kanchipuram-1.jpeg',
    featured: true,
    tag: 'Premium',
  },
  {
    id: 'bridal-004',
    name: 'Mysore Silk Saree',
    nameKn: 'ಮೈಸೂರು ರೇಷ್ಮೆ ಸೀರೆ',
    category: 'bridal',
    image: '/images/bridal/mysore_silk.png',
    featured: true,
  },
  {
    id: 'bridal-005',
    name: 'Pure Silk Saree',
    nameKn: 'ಶುದ್ಧ ರೇಷ್ಮೆ ಸೀರೆ',
    category: 'bridal',
    image: '/images/bridal/pure_silk.jpeg',
    featured: true,
  },
  {
    id: 'bridal-006',
    name: 'Soft Silk Saree',
    nameKn: 'ಸಾಫ್ಟ್ ರೇಷ್ಮೆ ಸೀರೆ',
    category: 'bridal',
    image: '/images/bridal/soft-silk-1.jpg',
  },
  {
    id: 'bridal-007',
    name: 'Banarasi Saree',
    nameKn: 'ಬನಾರಸಿ ಸೀರೆ',
    category: 'bridal',
    image: '/images/bridal/banarasi-1.png',
    tag: 'New Arrival',
  },
  // {
  //   id: 'bridal-008',
  //   name: 'Mysore Silk Saree',
  //   nameKn: 'ಮೈಸೂರು ರೇಷ್ಮೆ ಸೀರೆ',
  //   category: 'bridal',
  //   image: '/images/bridal/mysore-silk-1.jpg',
  // },
  {
    id: 'bridal-009',
    name: 'Pochampally Saree',
    nameKn: 'ಪೋಚಂಪಲ್ಲಿ ಸೀರೆ',
    category: 'bridal',
    image: '/images/bridal/pochampally-1.jpeg',
  },
  {
    id: 'bridal-010',
    name: 'Chanderi Silk Saree',
    nameKn: 'ಚಂದೇರಿ ರೇಷ್ಮೆ ಸೀರೆ',
    category: 'bridal',
    image: '/images/bridal/chanderi-1.jpeg',
  },
  {
    id: 'bridal-011',
    name: 'Crepe Silk Saree',
    nameKn: 'ಕ್ರೇಪ್ ರೇಷ್ಮೆ ಸೀರೆ',
    category: 'bridal',
    image: '/images/bridal/crepe-silk-1.jpeg',
  },
  {
    id: 'bridal-012',
    name: 'Art Silk Saree',
    nameKn: 'ಆರ್ಟ್ ರೇಷ್ಮೆ ಸೀರೆ',
    category: 'bridal',
    image: '/images/bridal/art-silk-1.jpeg',
  },
  {
    id: 'bridal-013',
    name: 'Chiffon Saree',
    nameKn: 'ಚಿಫಾನ್ ಸೀರೆ',
    category: 'bridal',
    image: '/images/bridal/chiffon-1.jpeg',
  },
  // ── WOMEN'S WEAR ───────────────────────────────────────────────────────────
  {
    id: 'womens-001',
    name: 'Anarkali Suit',
    nameKn: 'ಅನಾರ್ಕಲಿ ಸೂಟ್',
    category: 'womens',
    image: '/images/womens/anarkali-1.png',
    featured: true,
  },
  {
    id: 'womens-002',
    name: 'Chikankari Cotton Suit',
    nameKn: 'ಚಿಕನ್‌ಕಾರಿ ಹತ್ತಿ ಸೂಟ್',
    category: 'womens',
    image: '/images/womens/chikankari-1.jpeg',
  },
  {
    id: 'womens-003',
    name: 'Palazzo Set',
    nameKn: 'ಪಲಾಜ್ಜೋ ಸೆಟ್',
    category: 'womens',
    image: '/images/womens/palazzo-1.jpeg',
  },
  {
    id: 'womens-004',
    name: 'Sharara',
    nameKn: 'ಶರಾರ',
    category: 'womens',
    image: '/images/womens/sharara-1.jpeg',
  },

  // ── MEN'S WEAR ─────────────────────────────────────────────────────────────
  {
    id: 'mens-001',
    name: 'Jodhpuri Suit — Full Button',
    nameKn: 'ಜೋಧಪುರಿ ಸೂಟ್ — ಫುಲ್ ಬಟನ್',
    category: 'mens',
    image: '/images/mens/jodhpuri-full-1.jpeg',
    featured: true,
  },
  {
    id: 'mens-002',
    name: 'Jodhpuri Suit — Open Button',
    nameKn: 'ಜೋಧಪುರಿ ಸೂಟ್ — ಓಪನ್ ಬಟನ್',
    category: 'mens',
    image: '/images/mens/jodhpuri-open-1.jpeg',
  },
  {
    id: 'mens-003',
    name: 'Formal Suit',
    nameKn: 'ಫಾರ್ಮಲ್ ಸೂಟ್',
    category: 'mens',
    image: '/images/mens/formal-suit-1.jpeg',
  },
    {
    id: 'mens-004',
    name: 'Sharavani',
    nameKn: 'ಶರವಾಣಿ',
    category: 'mens',
    image: '/images/mens/sharavani-1.jpeg',
  },
  // ── TRENDING & WESTERN ─────────────────────────────────────────────────────
  {
    id: 'trending-001',
    name: 'Bodycon Dress',
    nameKn: 'ಬಾಡಿಕಾನ್ ಡ್ರೆಸ್',
    category: 'trending',
    image: '/images/trending/bodycon-1.png',
    tag: 'Trending',
  },
  {
    id: 'trending-002',
    name: 'Baggy Jeans',
    nameKn: 'ಬ್ಯಾಗಿ ಜೀನ್ಸ್',
    category: 'trending',
    image: '/images/trending/baggy-jeans-1.jpeg',
  },
  {
    id: 'trending-003',
    name: 'Cargo Jeans',
    nameKn: 'ಕಾರ್ಗೋ ಜೀನ್ಸ್',
    category: 'trending',
    image: '/images/trending/cargo-jeans-1.png',
  },
  {
    id: 'trending-004',
    name: 'Mom-fit Pants',
    nameKn: 'ಮಾಮ್-ಫಿಟ್ ಪ್ಯಾಂಟ್',
    category: 'trending',
    image: '/images/trending/momfit-1.png',
  },
  {
    id: 'trending-005',
    name: 'Loose-fit Pants',
    nameKn: 'ಲೂಸ್-ಫಿಟ್ ಪ್ಯಾಂಟ್',
    category: 'trending',
    image: '/images/trending/loosefit-1.png',
  },
  {
    id: 'trending-006',
    name: 'Formal Pants',
    nameKn: 'ಫಾರ್ಮಲ್ ಪ್ಯಾಂಟ್',
    category: 'trending',
    image: '/images/trending/formal-pants-1.png',
  },
  {
    id: 'trending-007',
    name: 'Hoodies',
    nameKn: 'ಹೂಡಿಗಳು',
    category: 'trending',
    image: '/images/trending/hoodie-1.png',
    tag: 'New',
  },
  // ── LIFESTYLE & ACCESSORIES ────────────────────────────────────────────────
  {
    id: 'acc-001',
    name: '1-Gram Gold Jewelry',
    nameKn: '೧ ಗ್ರಾಂ ಚಿನ್ನದ ಆಭರಣ',
    category: 'accessories',
    image: '/images/accessories/gold-jewelry-1.jpg',
    featured: true,
    tag: 'Premium',
  }
  // {
  //   id: 'acc-002',
  //   name: 'Footwear Collection',
  //   nameKn: 'ಪಾದರಕ್ಷೆ ಸಂಗ್ರಹ',
  //   category: 'accessories',
  //   image: '/images/accessories/footwear-1.jpg',
  // },
];

// ─── SITE CONFIG ──────────────────────────────────────────────────────────────
export const siteConfig = {
  name: 'Anchan Silks',
  nameKn: 'ಅಂಚನ್ ಸಿಲ್ಕ್ಸ್',
  tagline: "Bantwal's Most Trusted Bridal & Silk Destination",
  phone: {
    main: '+919886543840',
    branch: '+919740361504',
    mainDisplay: '+91 98865 43840',
    branchDisplay: '+91 97403 61504',
  },
  whatsapp: {
    number: '919886543840',
    defaultMessage: 'Hello! I visited your website and would like to enquire about your products.',
  },
  address: {
    main: 'Bypass Road, Bantwal, Dakshina Kannada, Karnataka — 574219',
    branch: 'Market Road, Bantwal, Dakshina Kannada, Karnataka',
    mainMaps: 'https://maps.google.com/?q=Anchan+Silks+Bantwal+Bypass',
    branchMaps: 'https://maps.google.com/?q=Anchan+Garments+Market+Road+Bantwal',
    // TODO: Replace with actual Google Maps embed URLs from client
    mainEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...',
    branchEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...',
  },
  hours: {
    weekdays: 'Monday – Saturday',
    weekdayTime: '9:00 AM – 7:00 PM',
    sunday: 'Sunday',
    sundayTime: '9:00 AM – 4:00 PM',
  },
  social: {
    instagram: 'https://instagram.com/anchansilks', // TODO: confirm handle
    facebook: '',  // TODO: add if they have one
    youtube: '',
  },
  emailjs: {
    serviceId: 'YOUR_EMAILJS_SERVICE_ID',      // TODO: set up EmailJS
    templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
    publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  },
};

// ─── CATEGORY META ────────────────────────────────────────────────────────────
export const categoryMeta: Record<Category, { label: string; labelKn: string; icon: string; description: string }> = {
  bridal: {
    label: 'Bridal Sarees',
    labelKn: 'ವಿವಾಹ ಸೀರೆಗಳು',
    icon: '🥻',
    description: 'Kanchipuram, Banarasi, Brocade & more — every bride\'s dream',
  },
 
  mens: {
    label: "Men's Wear",
    labelKn: 'ಪುರುಷ ಉಡುಪು',
    icon: '🤵',
    description: 'Jodhpuri suits & formal wear for every occasion',
  },
   womens: {
    label: "Women's Wear",
    labelKn: 'ಮಹಿಳಾ ಉಡುಪು',
    icon: '👗',
    description: 'Anarkali, Palazzo, Sharara & more ethnic wear',
  },
  trending: {
    label: 'Trending & Western',
    labelKn: 'ಟ್ರೆಂಡಿಂಗ್ & ವೆಸ್ಟರ್ನ್',
    icon: '✨',
    description: 'Bodycon, cargo jeans, hoodies & the latest styles',
  },
  accessories: {
    label: 'Lifestyle & Accessories',
    labelKn: 'ಲೈಫ್‌ಸ್ಟೈಲ್ & ಆಕ್ಸೆಸರೀಸ್',
    icon: '💍',
    description: '1-gram gold jewelry & footwear collections',
  },
};
