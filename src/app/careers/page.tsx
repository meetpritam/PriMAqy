import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { careerAreas, openRolesData } from '@/data/careers';
import { InquiryForm } from '@/components/forms/InquiryForm';
import { Users } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Careers & Build With Us — PriMAqy',
  description: 'Join PriMAqy early-stage technology venture. Explore areas of work and submit general interest.',
});

export default function CareersPage() {
  return (
    <div>
      <PageHeader
        badge="Build With Us"
        title="Engineering software products from the ground up."
        description="PriMAqy is an early-stage technology venture building AI-first productivity tools. We are always looking for disciplined engineers and creators."
      />

      {/* Areas of Work */}
      <SectionWrapper className="py-20">
        <PageContainer size="lg" className="space-y-12">
          <SectionHeading
            eyebrow="Technical Disciplines"
            title="Areas of Work"
            description="Explore the engineering, design, and product domains driving PriMAqy."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careerAreas.map((area) => (
              <Card key={area.name} variant="glow" className="space-y-2 p-6">
                <h3 className="text-lg font-bold text-slate-900">{area.name}</h3>
                <p className="text-xs leading-relaxed text-slate-700">{area.desc}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Open Roles Section */}
      <SectionWrapper className="border-t border-slate-200/90 bg-slate-50/70 py-20">
        <PageContainer size="lg" className="space-y-8">
          <SectionHeading
            eyebrow="Openings"
            title="Current Open Positions"
            description="All active job openings across our engineering and product teams."
          />

          {openRolesData.length === 0 ? (
            <Card variant="glow" className="text-center space-y-4 p-8 max-w-xl mx-auto border-amber-200 bg-amber-50/30">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 border border-amber-200 shadow-2xs">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">No open positions right now</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                We are not actively hiring for specific roles today, but we welcome general interest submissions from passionate builders.
              </p>
            </Card>
          ) : null}
        </PageContainer>
      </SectionWrapper>

      {/* General Application */}
      <SectionWrapper className="py-20">
        <PageContainer size="md" className="space-y-8">
          <SectionHeading
            eyebrow="Talent Pool"
            title="Submit General Interest"
            description="Share your experience and portfolio for future role openings."
          />
          <InquiryForm defaultInquiryType="Career Application" />
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
