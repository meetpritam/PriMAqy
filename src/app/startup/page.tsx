import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { companyData } from '@/data/company';
import { Rocket, Compass, Layers, ArrowRight } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Startup Portal — PriMAqy',
  description: 'Learn about PriMAqy venture journey from Patna, Bihar, India, our stage, and tech focus.',
});

export default function StartupPage() {
  return (
    <div>
      <PageHeader
        badge="Venture Identity"
        title="Building from Bihar. Thinking globally."
        description="PriMAqy is an early-stage AI and technology venture anchored in Patna, Bihar, India, with a vision to build practical software products for global workflows."
      />

      {/* Startup Quick Matrix */}
      <div className="border-b border-slate-200/90 bg-slate-50/80 py-6">
        <PageContainer size="lg">
          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4 font-mono">
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xs">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700">Location</span>
              <span className="text-xs font-extrabold text-slate-900">{companyData.location.formatted}</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xs">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700">Stage</span>
              <span className="text-xs font-extrabold text-slate-900">{companyData.stage}</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xs">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700">Legal Positioning</span>
              <span className="text-xs font-extrabold text-slate-900">{companyData.legalGuardrails.entityStatus}</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xs">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700">Primary Product</span>
              <span className="text-xs font-extrabold text-slate-900">Toolsetic</span>
            </div>
          </div>
        </PageContainer>
      </div>

      {/* Startup Story */}
      <SectionWrapper className="py-20">
        <PageContainer size="md" className="space-y-6">
          <SectionHeading eyebrow="Venture Narrative" title="Our Startup Story" align="left" />
          <div className="space-y-4 text-base leading-relaxed text-slate-700">
            <p>
              PriMAqy originated out of a desire to build world-class, intelligent software products from Patna, Bihar. We believe that groundbreaking technology ventures can be created from anywhere when driven by disciplined engineering and practical user utility.
            </p>
            <p>
              Rather than chasing superficial hype, our team focuses on developing robust software architecture, practical AI integrations, and developer tools that solve real productivity friction.
            </p>
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Startup Ecosystem Partnerships Preview */}
      <SectionWrapper className="border-t border-slate-200/90 bg-slate-50/70 py-20">
        <PageContainer size="lg" className="space-y-12">
          <SectionHeading
            eyebrow="Ecosystem Initiatives"
            title="Startup Ecosystem & Collaboration"
            description="We are actively exploring technology partnerships, incubator alignment, and developer ecosystem collaborations."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card variant="glow" className="space-y-3 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/80 shadow-xs">
                <Rocket className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Incubation Exploration</h3>
              <p className="text-xs leading-relaxed text-slate-700">
                Exploring alignment with regional and national technology incubation programs.
              </p>
            </Card>

            <Card variant="glow" className="space-y-3 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 shadow-xs">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Tech Ecosystem</h3>
              <p className="text-xs leading-relaxed text-slate-700">
                Engaging with developer communities, academic institutions, and open technology advocates.
              </p>
            </Card>

            <Card variant="glow" className="space-y-3 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-200/80 shadow-xs">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Strategic Alliances</h3>
              <p className="text-xs leading-relaxed text-slate-700">
                Building partnerships for tool distribution, API integrations, and product reach.
              </p>
            </Card>
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="border-t border-slate-200/90 bg-gradient-to-b from-slate-50 via-slate-100/40 to-slate-50 py-20">
        <PageContainer size="md" className="text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Connect with PriMAqy
          </h2>
          <p className="text-base text-slate-700">
            Interested in learning more about our venture roadmap or product suite?
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" variant="gradient" size="lg">
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
