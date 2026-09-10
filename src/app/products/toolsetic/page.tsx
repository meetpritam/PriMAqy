import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getToolseticSchema } from '@/lib/structuredData';
import {
  Wand2,
  BookOpen,
  Layout,
  Terminal,
  Zap,
  GraduationCap,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Toolsetic — Your Digital Toolbox for the AI Era',
  description:
    'Toolsetic is an AI-first productivity ecosystem designed for developers, creators, students, founders, and modern teams.',
});

export default function ToolseticPage() {
  const schema = getToolseticSchema();

  const targetAudiences = [
    { title: 'Developers', desc: 'Code helpers, API snippets, and automated refactoring tools.' },
    { title: 'Creators', desc: 'Content generation, prompt workflows, and media utilities.' },
    { title: 'Students', desc: 'Study helpers, research summarizers, and writing tools.' },
    { title: 'Founders', desc: 'Operational templates, product specs, and pitch deck guides.' },
    { title: 'Small Businesses', desc: 'Simple administrative automation and digital workflows.' },
  ];

  const featureCategories = [
    { icon: Wand2, title: 'AI Micro-Tools', desc: 'High-speed single-purpose intelligent utilities.' },
    { icon: BookOpen, title: 'Prompt Library', desc: 'Curated, tested AI prompts for all major models.' },
    { icon: Layout, title: 'Workflow Templates', desc: 'Ready-to-use document and process blueprints.' },
    { icon: Terminal, title: 'AI Playground', desc: 'Interactive environment to test and refine workflows.' },
    { icon: Zap, title: 'Automation Tasks', desc: 'Background micro-automation for daily tasks.' },
    { icon: GraduationCap, title: 'Learning Resources', desc: 'Guides, tutorials, and practical AI documentation.' },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHeader
        badge="Flagship Product Suite"
        title="Your digital toolbox for the AI era."
        description="Toolsetic is being developed as an AI-first productivity ecosystem designed to help people discover tools, prompts, templates, workflows, and automation."
      />

      {/* Product Status Bar */}
      <div className="border-b border-slate-200/90 bg-slate-50/80 py-4">
        <PageContainer size="md" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">Current Status:</span>
            <Badge variant="glow">Under Active Development</Badge>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-700">
            <Clock className="h-3.5 w-3.5 text-blue-600 shrink-0" />
            <span>Target MVP Release: Upcoming Phase 02</span>
          </div>
        </PageContainer>
      </div>

      {/* Problem & Solution */}
      <SectionWrapper className="py-12 sm:py-20">
        <PageContainer size="lg" className="space-y-8 sm:space-y-12">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            <Card variant="glow" className="space-y-4 p-5 sm:p-8 border-red-200/80 bg-red-50/20">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600">The Problem</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Tools are everywhere. Productivity isn&apos;t.</h2>
              <p className="text-sm leading-relaxed text-slate-700 font-normal">
                Creators and developers waste hours searching for the right AI tools, testing unverified prompts, and switching across dozens of paid subscriptions.
              </p>
            </Card>

            <Card variant="glow" className="space-y-4 p-5 sm:p-8 border-emerald-200/80 bg-emerald-50/20">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">The Solution</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">One unified, AI-first ecosystem.</h2>
              <p className="text-sm leading-relaxed text-slate-700 font-normal">
                Toolsetic consolidates high-value tools, tested prompt frameworks, templates, and micro-automations into one clean, high-speed workspace.
              </p>
            </Card>
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Feature Categories */}
      <SectionWrapper className="border-t border-slate-200/90 bg-slate-50/60 py-12 sm:py-20">
        <PageContainer size="lg" className="space-y-8 sm:space-y-12">
          <SectionHeading
            eyebrow="Core Architecture"
            title="Toolsetic Modules"
            description="Explore the planned feature ecosystem designed for modern digital work."
          />

          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Card key={cat.title} variant="glow" className="space-y-3 p-5 sm:p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/80 shadow-xs">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">{cat.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-700">{cat.desc}</p>
                </Card>
              );
            })}
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Target Audiences */}
      <SectionWrapper className="py-12 sm:py-20">
        <PageContainer size="lg" className="space-y-8 sm:space-y-12">
          <SectionHeading
            eyebrow="Who It's For"
            title="Designed for creators and builders"
            description="Built to adapt to the unique workflows of digital professionals."
          />

          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {targetAudiences.map((aud) => (
              <Card key={aud.title} variant="glow" className="space-y-2 p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">{aud.title}</h3>
                </div>
                <p className="text-xs leading-relaxed text-slate-700">{aud.desc}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="border-t border-slate-200/90 bg-gradient-to-b from-slate-50 via-slate-100/40 to-slate-50 py-12 sm:py-20">
        <PageContainer size="md" className="text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Track Toolsetic Development
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Follow our public venture roadmap to see when Toolsetic MVP modules go live.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
            <Button href="/roadmap" variant="gradient" size="lg" className="w-full sm:w-auto">
              <span>View Venture Roadmap</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
