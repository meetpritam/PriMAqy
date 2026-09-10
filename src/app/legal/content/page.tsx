import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card } from '@/components/ui/Card';

export const metadata = constructMetadata({
  title: 'Content Policy',
  description: 'PriMAqy content licensing and copyright policy.',
});

export default function ContentPolicyPage() {
  return (
    <div>
      <PageHeader
        badge="Intellectual Property"
        title="Content Policy"
        description="Guidelines on content licensing, copyright, attribution, and fair usage."
      />

      <SectionWrapper className="py-16">
        <PageContainer size="md">
          <Card variant="glow" className="p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Licensing & Attribution</h2>
            <p className="text-sm leading-relaxed text-slate-700 font-medium">
              All documentation, insights, and brand assets published by PriMAqy are protected under applicable IP standards.
            </p>
          </Card>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
