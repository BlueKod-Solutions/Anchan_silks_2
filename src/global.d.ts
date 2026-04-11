import 'react';

declare module '*.css';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Extends all HTML elements (video, img, link, etc.) to support fetchPriority
    fetchPriority?: 'high' | 'low' | 'auto';
  }
}