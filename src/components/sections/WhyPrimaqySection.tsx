import React from 'react';
import { ArrowRight, Rss, Clock } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { articlesData } from '@/data/articles';

export function WhyPrimaqySection() {
  const featuredArticles = articlesData.slice(0, 3);

  return (
    <section className="border-b border-[#e5e5e5] bg-[#fafafa] py-16 sm:py-24">
      <PageContainer size="lg">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-[#e5e5e5]">
          <SectionHeading
            eyebrow="EDITORIAL & RESEARCH"
            title="PriMAqy Insights."
            description="Deep dives into artificial intelligence, workflow automation, software engineering, and digital venture building."
            align="left"
          />
          <div className="flex items-center gap-3 shrink-0">
            <Button href="/rss.xml" variant="ghost" size="sm" shape="pill">
              <Rss className="h-4 w-4 text-[#2563eb]" />
              <span>RSS Feed</span>
            </Button>
            <Button href="/insights" variant="secondary" size="md" shape="pill">
              <span>View All Articles</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              className="group rounded-2xl border border-[#e5e5e5] bg-white p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#d4d4d4] hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#737373]">
                  <span className="text-[#2563eb] font-semibold uppercase">{article.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#171717] tracking-tight group-hover:text-[#2563eb] transition-colors leading-snug">
                  <a href={`/insights/${article.slug}`}>
                    {article.title}
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-[#525252] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e5e5e5] flex items-center justify-between text-xs font-mono font-semibold text-[#2563eb]">
                <a href={`/insights/${article.slug}`} className="inline-flex items-center gap-1 hover:underline">
                  <span>Read Article</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
                <span className="text-[#a3a3a3] text-[10px]">{article.publishedAt}</span>
              </div>
            </article>
          ))}
        </div>

      </PageContainer>
    </section>
  );
}
