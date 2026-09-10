import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { legalDisclaimerData } from '@/data/legal';

export const metadata = constructMetadata({
  title: 'Venture Disclaimer — PriMAqy',
  description: 'Official PriMAqy Venture Disclaimer and legal disclosures.',
});

export default function DisclaimerPage() {
  return (
    <div>
      <PageHeader
        badge="Legal Disclosure"
        title={legalDisclaimerData.title}
        description={`Last updated: ${legalDisclaimerData.lastUpdated}`}
      />

      <SectionWrapper className="py-16">
        <PageContainer size="md" className="space-y-8">
          <Card variant="glow" className="space-y-6 p-8">
            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              {legalDisclaimerData.summary}
            </p>

            {legalDisclaimerData.sections.map((sec) => (
              <div key={sec.heading} className="space-y-2 border-t border-slate-200/90 pt-4">
                <h2 className="text-lg font-bold text-slate-900">{sec.heading}</h2>
                {sec.content.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-slate-700">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </Card>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
