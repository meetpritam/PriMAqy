import { MetadataRoute } from 'next';
import { ContentRepository } from '@/lib/contentRepository';
import { FounderRepository } from '@/lib/founderRepository';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://primaqy.com';

  const staticRoutes = [
    '',
    '/about',
    '/founders',
    '/products',
    '/products/toolsetic',
    '/technology',
    '/startup',
    '/startup/documents',
    '/investors',
    '/investors/contact',
    '/careers',
    '/media',
    '/media/press-kit',
    '/media/brand-assets',
    '/community',
    '/newsletter',
    '/legal',
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookies',
    '/legal/disclaimer',
    '/roadmap',
    '/team',
    '/contact',
    '/insights',
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const founders = FounderRepository.getPublishedFounders();
  const founderEntries = founders.map((f) => ({
    url: `${baseUrl}/founders/${f.slug}`,
    lastModified: new Date(f.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const articles = ContentRepository.getPublishedArticles();
  const articleEntries = articles.map((art) => ({
    url: `${baseUrl}/insights/${art.slug}`,
    lastModified: new Date(art.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const categories = ContentRepository.getCategories();
  const categoryEntries = categories.map((cat) => ({
    url: `${baseUrl}/insights/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...founderEntries, ...articleEntries, ...categoryEntries];
}
