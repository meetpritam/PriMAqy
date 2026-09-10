import React from 'react';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArticleCard } from '@/components/content/ArticleCard';
import { NewsletterForm } from '@/components/newsletter/NewsletterForm';
import { ContentRepository } from '@/lib/contentRepository';
import { Search, Rss } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'PriMAqy Insights — Ideas, Experiments & Intelligence',
  description: 'Explore technical articles, AI research, product updates, and founder notes from PriMAqy.',
});

export default function InsightsPage() {
  const publishedArticles = ContentRepository.getPublishedArticles();
  const featuredArticle = publishedArticles.find((art) => art.featured) || publishedArticles[0];
  const latestArticles = publishedArticles.filter((art) => art.id !== featuredArticle?.id);
  const categories = ContentRepository.getCategories();
  const tags = ContentRepository.getTags();

  return (
    <div>
      <PageHeader
        badge="PriMAqy Insights"
        title="Ideas, Experiments & Intelligence."
        description="Technical articles, AI research, software engineering insights, and build-in-public notes."
      />

      {/* Category Pills & Search Bar */}
      <div className="border-b border-slate-200/90 bg-slate-50/80 py-4">
        <PageContainer size="lg" className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/insights"
              className="rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-mono font-bold text-white shadow-xs"
            >
              All Topics
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/insights/category/${cat.slug}`}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-mono font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors shadow-2xs"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/insights/search"
              className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-mono font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600 shadow-2xs"
            >
              <Search className="h-3.5 w-3.5 text-blue-600" />
              <span>Search Insights</span>
            </Link>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3.5 py-1.5 text-xs font-mono font-bold text-amber-800 shadow-2xs"
            >
              <Rss className="h-3.5 w-3.5 text-amber-600" />
              <span>RSS Feed</span>
            </a>
          </div>
        </PageContainer>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <SectionWrapper className="py-16">
          <PageContainer size="lg">
            <ArticleCard article={featuredArticle} variant="featured" />
          </PageContainer>
        </SectionWrapper>
      )}

      {/* Latest Articles */}
      <SectionWrapper className="border-t border-slate-200/90 bg-slate-50/60 py-20">
        <PageContainer size="lg" className="space-y-12">
          <SectionHeading
            eyebrow="Latest Publications"
            title="Recent Insights"
            description="Explore our newest engineering writeups and technical notes."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="standard" />
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Tag Cloud */}
      <SectionWrapper className="py-16">
        <PageContainer size="lg" className="space-y-6">
          <SectionHeading eyebrow="Explore by Tag" title="Popular Topics" align="left" />
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag.id}
                href={`/insights/tag/${tag.slug}`}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-mono font-bold text-slate-700 hover:border-blue-300 hover:bg-blue-50/40 hover:text-blue-600 transition-colors"
              >
                #{tag.name}
              </Link>
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Newsletter CTA */}
      <SectionWrapper className="border-t border-slate-200/90 bg-gradient-to-b from-slate-50 via-slate-100/40 to-slate-50 py-20">
        <PageContainer size="md" className="text-center space-y-6">
          <SectionHeading
            eyebrow="Stay Informed"
            title="Get the next PriMAqy insight."
            description="Subscribe to receive new technical writeups and product updates directly in your inbox."
          />
          <div className="mx-auto max-w-md pt-2">
            <NewsletterForm />
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
