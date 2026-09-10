import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';

export default function Loading() {
  return (
    <div className="py-16 animate-pulse">
      <PageContainer size="lg" className="space-y-8">
        <div className="mx-auto h-8 w-48 rounded-md bg-slate-200" />
        <div className="mx-auto h-12 w-3/4 max-w-2xl rounded-md bg-slate-200" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 pt-8">
          <div className="h-48 rounded-2xl bg-slate-200" />
          <div className="h-48 rounded-2xl bg-slate-200" />
          <div className="h-48 rounded-2xl bg-slate-200" />
        </div>
      </PageContainer>
    </div>
  );
}
