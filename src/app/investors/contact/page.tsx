import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { InquiryForm } from '@/components/forms/InquiryForm';

export const metadata = constructMetadata({
  title: 'Investor Contact — PriMAqy',
  description: 'Connect directly with PriMAqy venture leadership regarding early-stage investment or strategic partnerships.',
});

export default function InvestorContactPage() {
  return (
    <div>
      <PageHeader
        badge="Investor Inquiry"
        title="Connect with PriMAqy Leadership"
        description="Submit your investment interest, inquiry category, or strategic alignment request directly to our team."
      />

      <SectionWrapper>
        <PageContainer size="md">
          <InquiryForm defaultInquiryType="Investor Inquiry" />
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
