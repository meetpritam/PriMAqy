import React from 'react';
import { PageContainer } from './PageContainer';
import { Badge } from '@/components/ui/Badge';

export interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
}

export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b border-slate-200/90 bg-gradient-to-b from-slate-100/80 via-blue-50/20 to-slate-50 py-10 sm:py-16 lg:py-20">
      {/* Precision Tech Grid & Radial Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[250px] w-[500px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(59,130,246,0.08),transparent_70%)] blur-xl" />

      <PageContainer size="md" className="relative z-10">
        <div className="space-y-3 sm:space-y-4 text-center">
          {badge && (
            <Badge variant="glow" className="mx-auto px-3 py-1">
              {badge}
            </Badge>
          )}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>
      </PageContainer>
    </div>
  );
}
