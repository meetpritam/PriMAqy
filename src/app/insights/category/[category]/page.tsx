import React from 'react';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ArticleCard } from '@/components/content/ArticleCard';
import { ContentRepository } from '@/lib/contentRepository';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const categories = ContentRepository.getCategories();
  const matched = categories.find((c) => c.slug === category);

  return constructMetadata({
    title: matched ? `${matched.name} — PriMAqy Insights` : 'Category — PriMAqy Insights',
    description: matched?.description || 'Browse PriMAqy insights by category.',
  });
}

export async function generateStaticParams() {
  const categories = ContentRepository.getCategories();
  return categories.map((cat) => ({ category: cat.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categories = ContentRepository.getCategories();
  const matched = categories.find((c) => c.slug === category);

  if (!matched) {
    notFound();
  }

  const articles = ContentRepository.getArticlesByCategory(category);

  return (
    <div>
      <PageHeader
        badge="Category Filter"
        title={matched.name}
        description={matched.description}
      />

      <SectionWrapper>
        <PageContainer size="lg" className="space-y-8">
          {articles.length === 0 ? (
            <p className="text-center text-sm text-zinc-500 py-12">
              No published insights in this category yet.
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
