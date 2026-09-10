import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { mediaBoilerplate } from '@/data/media';

export const metadata = constructMetadata({
  title: 'Press Kit — PriMAqy',
  description: 'Official PriMAqy boilerplate descriptions, founder bio, product positioning, and contact guidelines.',
});

export default function PressKitPage() {
  return (
    <div>
      <PageHeader
        badge="Press Guidelines"
        title="PriMAqy Press Kit"
        description="Official text assets, company descriptions, and founder background for journalists and media publications."
      />

      <SectionWrapper className="py-16">
        <PageContainer size="md" className="space-y-8">
          <Card variant="glow" className="space-y-4 p-8">
            <h2 className="text-xl font-bold text-slate-900">Official Company Name</h2>
            <p className="text-sm font-mono font-bold text-slate-900">PriMAqy</p>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-200/90">Short Description</h2>
            <p className="text-sm leading-relaxed text-slate-700">{mediaBoilerplate.shortDescription}</p>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-200/90">Full Boilerplate</h2>
            <p className="text-sm leading-relaxed text-slate-700">{mediaBoilerplate.longDescription}</p>

            <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-200/90">Media Contact</h2>
            <p className="text-sm font-mono font-bold text-blue-700">{mediaBoilerplate.mediaContact}</p>
          </Card>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
