import React from 'react';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ArticleCard } from '@/components/content/ArticleCard';
import { ContentRepository } from '@/lib/contentRepository';

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateMetadata({ params }: TagPageProps) {
  const { tag } = await params;
  const tags = ContentRepository.getTags();
  const matched = tags.find((t) => t.slug === tag);

  return constructMetadata({
    title: matched ? `#${matched.name} — PriMAqy Insights` : 'Tag — PriMAqy Insights',
    description: `Browse technical insights tagged with #${tag}.`,
  });
}

export async function generateStaticParams() {
  const tags = ContentRepository.getTags();
  return tags.map((t) => ({ tag: t.slug }));
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const tags = ContentRepository.getTags();
  const matched = tags.find((t) => t.slug === tag);

  if (!matched) {
    notFound();
  }

  const articles = ContentRepository.getArticlesByTag(tag);

  return (
    <div>
      <PageHeader
        badge="Tag Filter"
        title={`#${matched.name}`}
        description={`All articles and research notes tagged with #${matched.name}.`}
      />

      <SectionWrapper className="py-16">
        <PageContainer size="lg" className="space-y-8">
          {articles.length === 0 ? (
            <p className="text-center text-sm font-medium text-slate-700 py-12">
              No insights match this tag.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} variant="standard" />
              ))}
            </div>
          )}
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
