'use client';

import React, { useEffect } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Runtime error encountered:', error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center py-16">
      <PageContainer size="sm" className="text-center space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Something went wrong!
        </h1>
        <p className="mx-auto max-w-md text-base text-slate-700 leading-relaxed font-normal">
          An unexpected application error occurred. You can try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Button onClick={() => reset()} variant="gradient" size="lg">
            Try Again
          </Button>
          <Button href="/" variant="outline" size="lg">
            Return Home
          </Button>
        </div>
      </PageContainer>
    </div>
  );
}
