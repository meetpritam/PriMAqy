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
  const siteName = siteConfig.name;
  const pageTitle = title
    ? title.includes(siteName)
      ? title
      : `${title} | ${siteName}`
    : `${siteName} — ${siteConfig.tagline || 'AI & Technology Venture'}`;

  const pageDesc = description || siteConfig.description;
  const pageUrl = canonical ? (canonical.startsWith('http') ? canonical : `${siteConfig.url}${canonical}`) : siteConfig.url;
  const ogImageUrl = image || siteConfig.ogImage;

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: pageUrl,
      siteName: siteName,
      images: [{ url: ogImageUrl }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDesc,
      images: [ogImageUrl],
    },
    icons: {
      icon: [
        { url: '/images/logo.jpg', type: 'image/jpeg' },
        { url: '/favicon.ico', sizes: 'any' },
      ],
      shortcut: ['/images/logo.jpg'],
      apple: [
        { url: '/images/logo.jpg', type: 'image/jpeg' },
      ],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    metadataBase: new URL(siteConfig.url),
  };
}
