import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Cpu, RefreshCcw, Code, Database, ShieldCheck, ArrowRight } from 'lucide-react';

export function TechHighlightsSection() {
  const techCards = [
    {
      icon: Cpu,
      title: 'Artificial Intelligence',
      description: 'Practical AI systems and intelligent workflows designed for real utility.',
      badgeBg: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: RefreshCcw,
      title: 'Automation',
      description: 'Reducing repetitive digital tasks and streamlining manual processes.',
      badgeBg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
    {
      icon: Code,
      title: 'Developer Tools',
      description: 'Technology that improves software development and coding workflows.',
      badgeBg: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    },
    {
      icon: Database,
      title: 'Knowledge Systems',
      description: 'Organizing complex information into structured, useful digital experiences.',
      badgeBg: 'bg-violet-50 text-violet-600 border-violet-200',
    },
    {
      icon: ShieldCheck,
      title: 'Responsible Technology',
      description: 'Built on privacy, security, transparency, and user data control.',
      badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
  ];

  return (
    <SectionWrapper className="relative border-y border-slate-200/80 bg-slate-50/60 py-10 sm:py-16 lg:py-24 overflow-hidden">
      {/* Precision Tech Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-60" />
      {/* Ambient Cool Glow */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-[300px] w-[500px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.06),transparent_70%)] blur-2xl" />

      <PageContainer size="lg" className="relative z-10 space-y-8 sm:space-y-12">
        <SectionHeading
          eyebrow="Engineering Philosophy"
          title="Technology should disappear into the experience."
          description="We focus on deep technology fundamentals to build fast, robust, and accessible products."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {techCards.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} variant="glow" className="space-y-2.5 sm:space-y-4 p-4 sm:p-6">
                <div className={`flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl border ${item.badgeBg} shadow-xs shrink-0`}>
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm leading-relaxed text-slate-600 pt-1 font-normal">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button href="/technology" variant="outline" size="lg" className="group w-full sm:w-auto justify-center">
            <span>Explore Our Technology</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </PageContainer>
    </SectionWrapper>
  );
}
