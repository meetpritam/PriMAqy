import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { investorMetrics, investorHighlights } from '@/data/investors';
import { ArrowRight } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Investor Relations — PriMAqy',
  description: 'Learn about PriMAqy early-stage technology venture overview, problem space, market opportunity, and roadmap.',
});

export default function InvestorsPage() {
  return (
    <div>
      <PageHeader
        badge="Venture Relations"
        title="Building practical AI for global workflows."
        description="Early-stage investor overview detailing PriMAqy venture positioning, Toolsetic ecosystem roadmap, and market opportunity."
      />

      {/* Metrics Banner */}
      <div className="border-b border-slate-200/90 bg-slate-50/80 py-6">
        <PageContainer size="lg">
          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4 font-mono">
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xs">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700">Venture Stage</span>
              <span className="text-sm font-extrabold text-slate-900">{investorMetrics.ventureStage}</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xs">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700">Funding Model</span>
              <span className="text-sm font-extrabold text-slate-900">{investorMetrics.fundingStatus}</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xs">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700">Valuation</span>
              <span className="text-sm font-extrabold text-slate-900">{investorMetrics.valuation}</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xs">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700">ARR / Revenue</span>
              <span className="text-sm font-extrabold text-slate-900">{investorMetrics.arr}</span>
            </div>
          </div>
        </PageContainer>
      </div>

      {/* Venture Highlights */}
      <SectionWrapper className="py-20">
        <PageContainer size="lg" className="space-y-12">
          <SectionHeading
            eyebrow="Venture Opportunity"
            title="Why PriMAqy"
            description="Our core value drivers in the expanding AI productivity landscape."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {investorHighlights.map((item) => (
              <Card key={item.title} variant="glow" className="space-y-3 p-6">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700">{item.description}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="border-t border-slate-200/90 bg-gradient-to-b from-slate-50 via-slate-100/40 to-slate-50 py-20">
        <PageContainer size="md" className="text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Connect with Venture Leadership
          </h2>
          <p className="text-base text-slate-700">
            Interested in exploring early-stage investor discussions or strategic technology alliances?
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/investors/contact" variant="gradient" size="lg">
              <span>Investor Inquiry</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
