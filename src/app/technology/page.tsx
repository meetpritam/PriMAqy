import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { TechHighlightsSection } from '@/components/sections/TechHighlightsSection';
import { AiAutomationSection } from '@/components/sections/AiAutomationSection';
import { Cpu, Zap, Code, Database, ShieldCheck, Server, ArrowRight, Layers, Box } from 'lucide-react';

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
      tag: 'Capability Domain 01',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      desc: 'Micro-task automation engines designed to eliminate repetitive digital operations for developers and creators.',
      tag: 'Capability Domain 02',
    },
    {
      icon: Code,
      title: 'Developer Technology',
      desc: 'Built on Next.js 16+ App Router, React Server Components, TypeScript, and utility-first Tailwind CSS.',
      tag: 'Capability Domain 03',
    },
    {
      icon: Database,
      title: 'Knowledge Systems',
      desc: 'Structured static data architecture decoupling copy from UI presentation with seamless future database migration paths.',
      tag: 'Capability Domain 04',
    },
    {
      icon: Server,
      title: 'Edge Infrastructure',
      desc: 'Hosted on global Edge CDN networks for sub-second page loads, zero layout shifts, and high availability.',
      tag: 'Capability Domain 05',
    },
    {
      icon: ShieldCheck,
      title: 'Responsible Technology & Security',
      desc: 'Strict secret isolation, zero unauthorized tracking, CSP compliance, and legal status guardrails.',
      tag: 'Capability Domain 06',
    },
  ];

  return (
    <div>
      <PageHeader
        badge="Engineering Architecture"
        title="Technology built for speed, privacy, and scale."
        description="We combine modern Web standards with intelligent software systems to build reliable digital tools."
      />

      {/* Tech Pillars Grid */}
      <SectionWrapper className="py-16 sm:py-24">
        <PageContainer size="lg" className="space-y-12">
          <RevealWrapper animation="fade-up">
            <SectionHeading
              eyebrow="Core Stack & Capabilities"
              title="Our Architectural Foundations"
              description="A breakdown of the engineering principles and technical capabilities powering PriMAqy."
            />
          </RevealWrapper>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <RevealWrapper key={pillar.title} animation="fade-up" delay={idx * 80}>
                  <Card variant="glow" className="space-y-4 p-6 sm:p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <IconWrapper size="md" variant="accent">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </IconWrapper>
                        <Badge variant="secondary" className="font-mono text-xs">
                          {pillar.tag}
                        </Badge>
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-slate-900 tracking-tight">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.desc}</p>
                    </div>
                  </Card>
                </RevealWrapper>
              );
            })}
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Products vs Capabilities Distinction Matrix */}
      <SectionWrapper className="border-t border-slate-200/80 bg-slate-50/50 py-16 sm:py-24">
        <PageContainer size="lg" className="space-y-12">
          <RevealWrapper animation="fade-up">
            <SectionHeading
              eyebrow="SYSTEM ARCHITECTURE"
              title="Capabilities vs. Products"
              description="How our technology domains directly power PriMAqy end-user software products."
              align="center"
            />
          </RevealWrapper>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <RevealWrapper animation="fade-up" delay={100}>
              <Card variant="glow" className="p-8 space-y-6 h-full border-blue-200/60 bg-white">
                <div className="flex items-center gap-3">
                  <IconWrapper size="md" variant="accent">
                    <Layers className="h-5 w-5 text-blue-600" />
                  </IconWrapper>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Technical Capabilities</h3>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Engineering Domains</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Capabilities represent the core technology areas, AI models, automation workflows, and edge infrastructure engineered by PriMAqy. They are the foundational building blocks.
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2">
                  <Badge variant="accent">Artificial Intelligence</Badge>
                  <Badge variant="accent">Workflow Automation</Badge>
                  <Badge variant="accent">Edge Infrastructure</Badge>
                  <Badge variant="accent">Knowledge Systems</Badge>
                </div>
              </Card>
            </RevealWrapper>

            <RevealWrapper animation="fade-up" delay={200}>
              <Card variant="glow" className="p-8 space-y-6 h-full border-blue-200/60 bg-white">
                <div className="flex items-center gap-3">
                  <IconWrapper size="md" variant="accent">
                    <Box className="h-5 w-5 text-blue-600" />
                  </IconWrapper>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">End-User Products</h3>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Shipped Software</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Products are the standalone user applications, laboratories, and APIs built by applying our capabilities into focused, high-value user tools like Toolsetic.
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2">
                  <Badge variant="glow">Toolsetic Flagship</Badge>
                  <Badge variant="secondary">PriMAqy Flow (Pipeline)</Badge>
                  <Badge variant="secondary">PriMAqy Insights API</Badge>
                </div>
              </Card>
            </RevealWrapper>
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Embedded Pipeline Section */}
      <AiAutomationSection />

      {/* Embedded Engineering Philosophy Section */}
      <TechHighlightsSection />

      {/* Security & Responsibility Banner */}
      <SectionWrapper className="border-t border-slate-200/90 bg-slate-900 text-white py-20">
        <PageContainer size="md" className="space-y-6 text-center">
          <RevealWrapper animation="fade-up">
            <SectionHeading
              eyebrow="Security & Governance"
              title="Privacy and integrity by design"
              description="Our codebase enforces zero unauthorized data tracking, strict environment variable isolation, and legal claim guardrails."
              className="text-white"
            />
            <div className="pt-6 flex justify-center">
              <Button href="/products" variant="gradient" size="lg">
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </RevealWrapper>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
