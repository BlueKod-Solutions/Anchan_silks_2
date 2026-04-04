import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { siteConfig } from '@/data/products';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(
    message ?? siteConfig.whatsapp.defaultMessage
  );
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}

export function buildProductWhatsAppLink(productName: string): string {
  const message = `Hello! I visited your website and would like to enquire about: *${productName}*. Could you please share more details and pricing?`;
  return buildWhatsAppLink(message);
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\+91)(\d{5})(\d{5})/, '$1 $2 $3');
}
