import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/seo';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Breadcrumbs } from '@/components/content/Breadcrumbs';
import { ArticleRenderer } from '@/components/content/ArticleRenderer';
import { ShareButtons } from '@/components/content/ShareButtons';
import { ArticleCard } from '@/components/content/ArticleCard';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ContentRepository } from '@/lib/contentRepository';
import { Clock, User } from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ContentRepository.getArticleBySlug(slug);

  if (!article) {
    return constructMetadata({ title: 'Article Not Found — PriMAqy' });
  }

  return constructMetadata({
    title: `${article.title} — PriMAqy Insights`,
    description: article.excerpt,
    canonical: `/insights/${article.slug}`,
  });
}

export async function generateStaticParams() {
  const articles = ContentRepository.getPublishedArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ContentRepository.getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ContentRepository.getRelatedArticles(slug, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author?.name || 'PriMAqy Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PriMAqy',
      url: 'https://primaqy.in',
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header & Meta */}
      <div className="border-b border-slate-200/90 bg-gradient-to-b from-slate-100/90 via-blue-50/20 to-slate-50 py-10">
        <PageContainer size="md" className="space-y-6">
          <Breadcrumbs
            items={[
              { label: 'Insights', href: '/insights' },
              { label: article.category, href: `/insights/category/${article.category.toLowerCase().replace(/ /g, '-')}` },
              { label: article.title },
            ]}
          />

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="status">{article.category}</Badge>
            <span className="text-xs font-mono font-bold text-slate-700">{article.contentType.toUpperCase()}</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <p className="text-lg text-slate-700 font-medium leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/90 text-xs font-medium text-slate-700">
            <div className="flex items-center gap-4">
              {article.author && (
                <Link
                  href={`/insights/author/${article.author.slug}`}
                  className="flex items-center gap-1.5 font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <User className="h-3.5 w-3.5 text-blue-600" />
                  <span>{article.author.name}</span>
                </Link>
              )}
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-slate-500" />
                <span>{article.readingTime}</span>
              </div>
              <span>• {article.publishedAt}</span>
            </div>

            <ShareButtons title={article.title} />
          </div>
        </PageContainer>
      </div>

      {/* Article Reading Body */}
      <SectionWrapper className="py-16">
        <PageContainer size="md">
          <ArticleRenderer content={article.content} />

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-8 mt-12 border-t border-slate-200/90">
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">Tags:</span>
            {article.tags.map((t) => (
              <Link
                key={t}
                href={`/insights/tag/${t.toLowerCase().replace(/ /g, '-')}`}
                className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-mono font-bold text-slate-700 hover:border-blue-300 hover:bg-blue-50/40 hover:text-blue-600 transition-colors"
              >
                #{t}
              </Link>
            ))}
          </div>

          {/* Author Bio Box */}
          {article.author && (
            <Card variant="glow" className="mt-8 flex flex-col sm:flex-row items-start gap-4 p-6 bg-slate-50/80 border-slate-200/90">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold border border-blue-200/80">
                <User className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  Written by {article.author.name}
                </h3>
                <p className="text-xs font-mono font-bold text-blue-700">
                  {article.author.role}
                </p>
                <p className="text-xs leading-relaxed text-slate-700 pt-1">
                  {article.author.bio}
                </p>
              </div>
            </Card>
          )}
        </PageContainer>
      </SectionWrapper>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <SectionWrapper className="border-t border-slate-200/90 bg-slate-50/60 py-20">
          <PageContainer size="lg" className="space-y-8">
            <h2 className="text-2xl font-extrabold text-slate-900">Related Insights</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.id} article={rel} variant="standard" />
              ))}
            </div>
          </PageContainer>
        </SectionWrapper>
      )}
    </div>
  );
}
