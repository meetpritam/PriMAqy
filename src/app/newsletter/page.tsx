import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { NewsletterForm } from '@/components/newsletter/NewsletterForm';

export const metadata = constructMetadata({
  title: 'Newsletter — Stay Ahead With PriMAqy',
  description: 'Subscribe to PriMAqy newsletter for product updates, AI insights, and technical announcements.',
});

export default function NewsletterPage() {
  return (
    <div>
      <PageHeader
        badge="Technical Newsletter"
        title="Stay Ahead With PriMAqy."
        description="Get monthly product updates, AI micro-tool releases, engineering insights, and PriMAqy venture announcements."
      />

      <SectionWrapper className="py-16">
        <PageContainer size="sm">
          <div className="rounded-2xl border border-slate-200/90 bg-white/95 p-8 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.06)] backdrop-blur-xl">
            <h2 className="text-xl font-bold text-slate-900 mb-2 text-center">
              Subscribe to Newsletter
            </h2>
            <p className="text-xs text-slate-600 mb-6 text-center">
              Zero spam. Unsubscribe anytime with a single click.
            </p>
            <NewsletterForm />
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
