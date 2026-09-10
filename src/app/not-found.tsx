import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-16">
      <PageContainer size="sm" className="text-center space-y-6">
        <span className="text-6xl font-mono font-black text-blue-700">404</span>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Page not found.
        </h1>
        <p className="mx-auto max-w-md text-base text-slate-700 leading-relaxed font-normal">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Button href="/" variant="gradient" size="lg">
            Go Home
          </Button>
          <Button href="/products" variant="outline" size="lg">
            Explore Products
          </Button>
        </div>
      </PageContainer>
    </div>
  );
}
