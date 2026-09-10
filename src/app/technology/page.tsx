import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Cpu, Zap, Code, Database, ShieldCheck, Server, ArrowRight } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Technology & Architecture — PriMAqy',
  description: 'Explore PriMAqy technology stack, AI architecture, security guardrails, and engineering principles.',
});

export default function TechnologyPage() {
  const techPillars = [
    {
      icon: Cpu,
      title: 'Artificial Intelligence',
      desc: 'Integrating modern large language models, embedding pipelines, and task-specific AI utilities into clean user interfaces.',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      desc: 'Micro-task automation engines designed to eliminate repetitive digital operations for developers and creators.',
    },
    {
      icon: Code,
      title: 'Developer Technology',
      desc: 'Built on Next.js 16+ App Router, React Server Components, TypeScript, and utility-first Tailwind CSS.',
    },
    {
      icon: Database,
      title: 'Knowledge Systems',
      desc: 'Structured static data architecture decoupling copy from UI presentation with seamless future database migration paths.',
    },
    {
      icon: Server,
      title: 'Edge Infrastructure',
      desc: 'Hosted on global Edge CDN networks for sub-second page loads, zero layout shifts, and high availability.',
    },
    {
      icon: ShieldCheck,
      title: 'Responsible Technology & Security',
      desc: 'Strict secret isolation, zero unauthorized tracking, CSP compliance, and legal status guardrails.',
    },
  ];

  return (
    <div>
      <PageHeader
        badge="Engineering Architecture"
        title="Technology built for speed, privacy, and scale."
        description="We combine modern Web standards with intelligent software systems to build reliable digital tools."
      />

      {/* Tech Pillars */}
      <SectionWrapper className="py-20">
        <PageContainer size="lg" className="space-y-12">
          <SectionHeading
            eyebrow="Core Stack"
            title="Our Architectural Foundations"
            description="A breakdown of the engineering principles and technologies powering PriMAqy products."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card key={pillar.title} variant="glow" className="space-y-4 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/80 shadow-xs">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700">{pillar.desc}</p>
                </Card>
              );
            })}
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Security & Responsibility */}
      <SectionWrapper className="border-t border-slate-200/90 bg-gradient-to-b from-slate-50 via-slate-100/40 to-slate-50 py-20">
        <PageContainer size="md" className="space-y-6 text-center">
          <SectionHeading
            eyebrow="Security & Governance"
            title="Privacy and integrity by design"
            description="Our codebase enforces zero unauthorized data tracking, strict environment variable isolation, and legal claim guardrails."
          />
          <div className="pt-4">
            <Button href="/products" variant="gradient" size="lg">
              <span>Explore Products</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
