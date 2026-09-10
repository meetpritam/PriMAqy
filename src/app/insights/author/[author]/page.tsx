import React from 'react';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ArticleCard } from '@/components/content/ArticleCard';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ContentRepository } from '@/lib/contentRepository';
import { User, ArrowRight } from 'lucide-react';

interface AuthorPageProps {
  params: Promise<{ author: string }>;
}

export async function generateMetadata({ params }: AuthorPageProps) {
  const { author } = await params;
  const matched = ContentRepository.getAuthorBySlug(author);

  return constructMetadata({
    title: matched ? `${matched.name} — Author Profile` : 'Author Profile — PriMAqy',
    description: matched?.bio || 'Author profile on PriMAqy Insights.',
    canonical: `/founders/pritam-kumar`,
  });
}

export async function generateStaticParams() {
  return [{ author: 'pritam-kumar' }];
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { author } = await params;
  const matched = ContentRepository.getAuthorBySlug(author);

  if (!matched) {
    notFound();
  }

  const articles = ContentRepository.getArticlesByAuthor(author);

  return (
    <div>
      <PageHeader
        badge="Author Profile"
        title={matched.name}
        description={matched.role}
      />

      <SectionWrapper className="py-16">
        <PageContainer size="lg" className="space-y-12">
          {/* Author Card */}
          <Card variant="glow" className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 text-center sm:text-left bg-slate-50/80 border-slate-200/90">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold border border-blue-200/80 shadow-xs">
                <User className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold text-slate-900">{matched.name}</h2>
                <p className="text-sm font-mono font-bold text-blue-700">{matched.role}</p>
                <p className="text-xs leading-relaxed text-slate-700">{matched.bio}</p>
              </div>
            </div>

            <Button href="/founders/pritam-kumar" variant="gradient" size="sm" className="shrink-0 group">
              <span>View Full Founder Profile</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Card>

          {/* Author Articles */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900">
              Published Insights by {matched.name} ({articles.length})
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} variant="standard" />
              ))}
            </div>
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
