'use client';

import React, { useState } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ArticleCard } from '@/components/content/ArticleCard';
import { ContentRepository } from '@/lib/contentRepository';
import { Search as SearchIcon, X } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const results = query.trim() ? ContentRepository.searchArticles(query) : [];

  const handleSearchChange = (val: string) => {
    setQuery(val);
    if (val.trim().length > 2) {
      trackEvent('article_search', { query: val });
    }
  };

  return (
    <div>
      <PageHeader
        badge="Content Search"
        title="Search Insights & Publications"
        description="Search across technical articles, research notes, product announcements, and founder notes."
      />

      <SectionWrapper className="py-16">
        <PageContainer size="md" className="space-y-8">
          {/* Search Box */}
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by topic, keyword, category, or tag (e.g. Next.js, AI, Toolsetic)..."
              autoFocus
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3.5 pl-12 pr-10 text-base text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Search Results */}
          {query.trim() && (
            <div className="space-y-6 pt-4">
              <div className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                {results.length} result{results.length === 1 ? '' : 's'} found for &quot;{query}&quot;
              </div>

              {results.length === 0 ? (
                <div className="py-12 text-center text-sm font-medium text-slate-700">
                  No insights match your search query. Try searching for &quot;Next.js&quot;, &quot;AI&quot;, or &quot;Toolsetic&quot;.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {results.map((article) => (
                    <ArticleCard key={article.id} article={article} variant="standard" />
                  ))}
                </div>
              )}
            </div>
          )}
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
