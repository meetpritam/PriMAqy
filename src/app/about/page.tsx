import React from 'react';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { Breadcrumbs } from '@/components/content/Breadcrumbs';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { companyData } from '@/data/company';
import { getOrganizationSchema, getBreadcrumbSchema } from '@/lib/structuredData';
import { Target, Compass, ArrowRight, Cpu, ShieldCheck, Zap, Code2 } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'About PriMAqy — AI & Technology Venture',
  description:
    'Learn about PriMAqy origin in Patna, Bihar, India, our founder story, team leadership, mission, vision, and core engineering principles.',
  canonical: '/about',
});

export default function AboutPage() {
  const principles = [
    { name: 'Practicality', desc: 'Build tools that solve tangible problems for real workflows.', icon: Cpu },
    { name: 'Accessibility', desc: 'Make intelligent digital utilities easy to discover and use.', icon: Zap },
    { name: 'Simplicity', desc: 'Intuitive user experiences with zero unnecessary clutter.', icon: Code2 },
    { name: 'Innovation', desc: 'Harness modern AI models and high-performance web standards.', icon: Target },
    { name: 'Privacy', desc: 'Zero unauthorized tracking and strong data isolation.', icon: ShieldCheck },
    { name: 'Security', desc: 'Strict secret management and defense-in-depth architecture.', icon: ShieldCheck },
    { name: 'Reliability', desc: 'High availability, fast loading speeds, and predictable behavior.', icon: Zap },
    { name: 'Long-Term Thinking', desc: 'Build scalable software and infrastructure meant to endure.', icon: Compass },
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
      <SectionWrapper className="py-16 sm:py-24">
        <PageContainer size="lg">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Narrative Column */}
            <div className="space-y-6 lg:col-span-7">
              <RevealWrapper animation="fade-up">
                <SectionHeading eyebrow="Venture Narrative" title="Our Story & Founder Vision" align="left" />
              </RevealWrapper>

              <RevealWrapper animation="fade-up" delay={100}>
                <div className="space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  <p>
                    PriMAqy was founded in {companyData.location.formatted} with a clear technical ambition: to bridge the gap between complex artificial intelligence models and everyday digital workflows.
                  </p>
                  <p>
                    As the digital ecosystem expands rapidly across thousands of standalone applications, tools, and platforms, users face increasing fragmentation and complexity. PriMAqy is building unified, AI-first productivity tools—starting with our flagship suite, <Link href="/products/toolsetic" className="font-semibold text-slate-900 underline hover:text-blue-600 transition-colors">Toolsetic</Link>.
                  </p>
                  <p>
                    Driven by a build-in-public engineering philosophy, PriMAqy focuses on fundamental software architecture, clean Geist aesthetics, and security-first development rather than superficial hype.
                  </p>
                </div>
              </RevealWrapper>

              <RevealWrapper animation="fade-up" delay={200}>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button href="/founders" variant="primary" size="md" shape="pill">
                    <span>Meet the Founders</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="/startup" variant="outline" size="md" shape="pill">
                    <span>Startup Journey</span>
                  </Button>
                </div>
              </RevealWrapper>
            </div>

            {/* Right Interactive Architecture Visual Panel */}
            <div className="lg:col-span-5">
              <RevealWrapper animation="scale-up" delay={150}>
                <Card variant="glow" className="p-6 sm:p-8 space-y-6 relative overflow-hidden bg-white/95">
                  <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-30" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                      <Badge variant="accent" className="font-mono text-xs">
                        Patna, Bihar Anchor
                      </Badge>
                      <span className="text-[10px] font-mono text-slate-400">EST. 2026</span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 space-y-1">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">CORE ARCHITECTURE</span>
                        <p className="font-semibold text-slate-900">Unified AI-First Workflows</p>
                      </div>

                      <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 space-y-1">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">FLAGSHIP SUITE</span>
                        <p className="font-semibold text-blue-600">Toolsetic Productivity Ecosystem</p>
                      </div>

                      <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 space-y-1">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">ENGINEERING ETHOS</span>
                        <p className="font-semibold text-slate-900">Build-in-Public &amp; Security First</p>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Active Venture</span>
                      </span>
                      <span className="text-slate-400">INDIA</span>
                    </div>
                  </div>
                </Card>
              </RevealWrapper>
            </div>

          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="border-y border-slate-200/80 bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 py-20">
        <PageContainer size="lg">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <RevealWrapper animation="fade-up" delay={100}>
              <Card variant="glow" className="space-y-4 p-8 h-full">
                <IconWrapper size="lg" variant="accent">
                  <Target className="h-6 w-6 text-blue-600" />
                </IconWrapper>
                <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
                <p className="text-base leading-relaxed text-slate-600">
                  &quot;Build practical technology that makes advanced digital capabilities easier to use.&quot;
                </p>
              </Card>
            </RevealWrapper>

            <RevealWrapper animation="fade-up" delay={200}>
              <Card variant="glow" className="space-y-4 p-8 h-full">
                <IconWrapper size="lg" variant="default">
                  <Compass className="h-6 w-6 text-emerald-600" />
                </IconWrapper>
                <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
                <p className="text-base leading-relaxed text-slate-600">
                  &quot;Create an ecosystem of practical intelligent products that helps people and organizations work, create, and build better.&quot;
                </p>
              </Card>
            </RevealWrapper>
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Unified Leadership Section */}
      <LeadershipSection />

      {/* Our Principles */}
      <SectionWrapper className="border-y border-slate-200/80 bg-slate-50/60 py-20">
        <PageContainer size="lg" className="space-y-12">
          <RevealWrapper animation="fade-up">
            <SectionHeading
              eyebrow="Core Values"
              title="Our Principles"
              description="The engineering and ethical standards that guide every line of code we write."
            />
          </RevealWrapper>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <RevealWrapper key={item.name} animation="fade-up" delay={idx * 60}>
                  <Card variant="glow" className="space-y-3 p-6 h-full transition-all duration-300">
                    <IconWrapper size="md" variant="default">
                      <IconComp className="h-5 w-5 text-blue-600" />
                    </IconWrapper>
                    <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </Card>
                </RevealWrapper>
              );
            })}
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20">
        <PageContainer size="md" className="text-center space-y-6">
          <RevealWrapper animation="fade-up">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Explore PriMAqy
              </h2>
              <p className="text-base text-slate-600 max-w-xl mx-auto">
                Discover the products, technology and ideas being built by the PriMAqy team.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper animation="fade-up" delay={150}>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button href="/products" variant="gradient" size="lg" shape="pill">
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/products/toolsetic" variant="outline" size="lg" shape="pill">
                <span>Explore Toolsetic</span>
              </Button>
              <Button href="/insights" variant="outline" size="lg" shape="pill">
                <span>Read Insights</span>
              </Button>
            </div>
          </RevealWrapper>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}

