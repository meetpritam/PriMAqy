import React from 'react';
import Link from 'next/link';
import { Article } from '@/types/article';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Clock, ArrowRight, User } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  variant?: 'featured' | 'standard' | 'compact';
  className?: string;
}

export function ArticleCard({ article, variant = 'standard', className = '' }: ArticleCardProps) {
  if (variant === 'featured') {
    return (
      <Card variant="glow" className={`relative overflow-hidden p-5 sm:p-8 lg:p-12 ${className}`}>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="status">{article.category}</Badge>
            <span className="text-xs font-mono font-bold text-slate-700">{article.contentType.toUpperCase()}</span>
          </div>

          <Link href={`/insights/${article.slug}`} className="group block space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              {article.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-slate-700">
              {article.excerpt}
            </p>
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200/90">
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-700">
              {article.author && (
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <User className="h-3.5 w-3.5 text-blue-600" />
                  <span>{article.author.name}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-slate-500" />
                <span>{article.readingTime}</span>
              </div>
              <span>• {article.publishedAt}</span>
            </div>

            <Link
              href={`/insights/${article.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline min-h-[44px] py-2 touch-manipulation"
            >
              <span>Read Insight</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  if (variant === 'compact') {
    return (
      <Card variant="glow" className={`p-4 space-y-2 ${className}`}>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700">
            {article.category}
          </span>
          <span className="text-[11px] font-medium text-slate-600">{article.publishedAt}</span>
        </div>
        <Link href={`/insights/${article.slug}`} className="block group">
          <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h4>
        </Link>
      </Card>
    );
  }

  return (
    <Card variant="glow" className={`flex flex-col justify-between p-5 sm:p-6 space-y-4 ${className}`}>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline">{article.category}</Badge>
          <span className="text-xs font-medium text-slate-700">{article.readingTime}</span>
        </div>

        <Link href={`/insights/${article.slug}`} className="group block space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-xs leading-relaxed text-slate-700">
            {article.excerpt}
          </p>
        </Link>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-200/90 text-xs font-medium text-slate-700">
        <span>{article.publishedAt}</span>
        <Link
          href={`/insights/${article.slug}`}
          className="inline-flex items-center gap-1 font-bold text-blue-600 hover:underline min-h-[44px] py-2 touch-manipulation"
        >
          <span>Read</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </Card>
  );
}
