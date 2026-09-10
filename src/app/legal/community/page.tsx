import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card } from '@/components/ui/Card';

export const metadata = constructMetadata({
  title: 'Community Guidelines',
  description: 'PriMAqy community interaction and conduct policy.',
});

export default function CommunityGuidelinesPage() {
  return (
    <div>
      <PageHeader
        badge="Governance"
        title="Community Guidelines"
        description="Conduct rules, interaction standards, and ecosystem participation principles."
      />

      <SectionWrapper className="py-16">
        <PageContainer size="md">
          <Card variant="glow" className="p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Ecosystem Conduct Standard</h2>
            <p className="text-sm leading-relaxed text-slate-700 font-medium">
              PriMAqy is committed to fostering an inclusive, respectful, and constructive environment for developers, creators, and partners.
            </p>
          </Card>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
