import React from 'react';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/content/Breadcrumbs';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { companyData } from '@/data/company';
import { getOrganizationSchema, getBreadcrumbSchema } from '@/lib/structuredData';
import { Target, Compass, ArrowRight } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'About PriMAqy — AI & Technology Venture',
  description:
    'Learn about PriMAqy origin in Patna, Bihar, India, our founder story, team leadership, mission, vision, and core engineering principles.',
  canonical: '/about',
});

export default function AboutPage() {
  const principles = [
    { name: 'Practicality', desc: 'Build tools that solve tangible problems for real workflows.' },
    { name: 'Accessibility', desc: 'Make intelligent digital utilities easy to discover and use.' },
    { name: 'Simplicity', desc: 'Intuitive user experiences with zero unnecessary clutter.' },
    { name: 'Innovation', desc: 'Harness modern AI models and high-performance web standards.' },
    { name: 'Privacy', desc: 'Zero unauthorized tracking and strong data isolation.' },
    { name: 'Security', desc: 'Strict secret management and defense-in-depth architecture.' },
    { name: 'Reliability', desc: 'High availability, fast loading speeds, and predictable behavior.' },
    { name: 'Long-Term Thinking', desc: 'Build scalable software and infrastructure meant to endure.' },
  ];

  const breadcrumbs = [
    { label: 'About Us' },
  ];

  const breadcrumbSchema = getBreadcrumbSchema([{ label: 'About Us', href: '/about' }]);
  const orgSchema = getOrganizationSchema();
  const founderPersonSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pritam Kumar',
    jobTitle: 'Founder & Technology Lead',
    worksFor: {
      '@type': 'Organization',
      name: 'PriMAqy',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Patna',
      addressRegion: 'Bihar',
      addressCountry: 'India',
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderPersonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHeader
        badge="Company Overview"
        title="Engineering practical AI for a smarter digital future."
        description="PriMAqy is an emerging technology venture focused on creating intelligent products that streamline how people work, create, and build."
      />

      {/* Breadcrumbs & Quick Links */}
      <div className="border-b border-slate-200/80 bg-slate-50/80 py-3">
        <PageContainer size="lg" className="flex flex-wrap items-center justify-between gap-4">
          <Breadcrumbs items={breadcrumbs} />
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <Link href="/products/toolsetic" className="text-slate-600 hover:text-blue-600 transition-colors">
              Toolsetic Suite
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/technology" className="text-slate-600 hover:text-blue-600 transition-colors">
              Technology Stack
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/startup" className="text-slate-600 hover:text-blue-600 transition-colors">
              Startup Journey
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/insights" className="text-slate-600 hover:text-blue-600 transition-colors">
              Engineering Insights
            </Link>
          </div>
        </PageContainer>
      </div>

      {/* Founder Story & Venture Origin */}
      <SectionWrapper className="py-20">
        <PageContainer size="md" className="space-y-6">
          <SectionHeading eyebrow="Venture Narrative" title="Our Story & Founder Vision" align="left" />
          <div className="space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              PriMAqy was founded in {companyData.location.formatted} with a clear technical ambition: to bridge the gap between complex artificial intelligence models and everyday digital workflows.
            </p>
            <p>
              As the digital ecosystem expands rapidly across thousands of standalone applications, tools, and platforms, users face increasing fragmentation and complexity. PriMAqy is building unified, AI-first productivity tools—starting with our flagship suite, <Link href="/products/toolsetic" className="font-semibold text-slate-900 underline hover:text-blue-600">Toolsetic</Link>.
            </p>
            <p>
              Driven by a build-in-public engineering philosophy, PriMAqy focuses on fundamental software architecture, clean Geist aesthetics, and security-first development rather than superficial hype.
            </p>
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="border-y border-slate-200/80 bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 py-20">
        <PageContainer size="lg">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card variant="glow" className="space-y-4 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/80 shadow-xs">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-base leading-relaxed text-slate-600">
                &quot;Build practical technology that makes advanced digital capabilities easier to use.&quot;
              </p>
            </Card>

            <Card variant="glow" className="space-y-4 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 shadow-xs">
                <Compass className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              <p className="text-base leading-relaxed text-slate-600">
                &quot;Create an ecosystem of practical intelligent products that helps people and organizations work, create, and build better.&quot;
              </p>
            </Card>
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Unified Leadership Section */}
      <LeadershipSection />

      {/* Our Principles */}
      <SectionWrapper className="border-y border-slate-200/80 bg-slate-50/60 py-20">
        <PageContainer size="lg" className="space-y-12">
          <SectionHeading
            eyebrow="Core Values"
            title="Our Principles"
            description="The engineering and ethical standards that guide every line of code we write."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <Card key={item.name} variant="glow" className="space-y-2 p-6">
                <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20">
        <PageContainer size="md" className="text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Explore PriMAqy
          </h2>
          <p className="text-base text-slate-600">
            Discover the products, technology and ideas being built by the PriMAqy team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/products" variant="gradient" size="lg">
              <span>Explore Products</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/products/toolsetic" variant="outline" size="lg">
              <span>Explore Toolsetic</span>
            </Button>
            <Button href="/insights" variant="outline" size="lg">
              <span>Read Insights</span>
            </Button>
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
