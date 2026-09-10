# SEO & Metadata Architecture — PriMAqy

---

## 1. Next.js Metadata API Integration

Page metadata is managed using Next.js native `Metadata` type export and centralized generator helpers in `src/lib/seo.ts`.

### Dynamic Metadata Generator Pattern
```typescript
// src/lib/seo.ts
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export function constructMetadata({
  title,
  description,
  image,
  canonical,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
    description: description || siteConfig.description,
    openGraph: {
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      url: canonical || siteConfig.url,
      siteName: siteConfig.name,
      images: [{ url: image || siteConfig.ogImage }],
      type: 'website',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}
```

---

## 2. Dynamic Indexing & Structured Data

- **Robots Handler**: `src/app/robots.ts` dynamically outputs search engine crawling directives.
- **Sitemap Handler**: `src/app/sitemap.ts` maps all active site routes with update frequencies.
- **JSON-LD Schema**:
  - `Organization`: PriMAqy brand identity, Patna location, official URL.
  - `Product` / `SoftwareApplication`: Toolsetic product capabilities.
