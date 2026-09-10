import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { FounderRepository } from '@/lib/founderRepository';
import { FounderCard } from '@/components/founders/FounderCard';
import { getOrganizationSchema, getBreadcrumbSchema } from '@/lib/structuredData';
import { Sparkles } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Meet the Founders — PriMAqy',
  description:
    'Meet Pritam Kumar (Founder) and Anshu Kumar (Co-Founder), leading PriMAqy — AI & Technology Venture from Patna, Bihar, India.',
  canonical: '/founders',
});

export default function FoundersDirectoryPage() {
  const founders = FounderRepository.getPublishedFounders();
  const orgSchema = getOrganizationSchema();
  const breadcrumbsSchema = getBreadcrumbSchema([
    { label: 'Home', href: '/' },
    { label: 'Founders', href: '/founders' },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      <PageHeader
        badge="Engineering & Venture Leadership"
        title="Meet the Founders"
        description="The founding team behind PriMAqy, building practical AI products, intelligent software, and developer tool ecosystems from Patna, Bihar, India."
      />

      <SectionWrapper className="py-16 lg:py-24">
        <PageContainer size="lg" className="space-y-12">
          {/* Intro Box */}
          <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-r from-blue-50/60 via-slate-50 to-white p-6 sm:p-8 shadow-xs backdrop-blur-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 rounded-md bg-blue-100/80 px-2.5 py-0.5 text-xs font-mono font-bold text-blue-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Venture Anchors</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900">
                  Disciplined Craftsmanship & Vision
                </h2>
                <p className="text-sm leading-relaxed text-slate-700 font-normal">
                  PriMAqy is founded on the conviction that world-class software tools, AI integrations, and developer infrastructure can be engineered anywhere when anchored in fundamentals, curiosity, and persistent execution.
                </p>
              </div>
              <div className="shrink-0 font-mono text-xs text-slate-500 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <span className="block font-bold text-slate-900">Patna, Bihar, India</span>
                <span className="text-[11px] text-blue-600">Venture Headquarters</span>
              </div>
            </div>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {founders.map((founder) => (
              <FounderCard key={founder.id} founder={founder} />
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
