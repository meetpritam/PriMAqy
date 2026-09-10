import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Compass, PenTool, Zap } from 'lucide-react';

export function SolutionSection() {
  const pillars = [
    {
      icon: Compass,
      title: 'Discover',
      description: 'Find the right technology, tools, prompts, and resources tailored to your goals.',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: PenTool,
      title: 'Create',
      description: 'Build useful workflows, content, code, and digital products faster.',
      badgeColor: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
    {
      icon: Zap,
      title: 'Automate',
      description: 'Reduce repetitive digital work through intelligent systems and automated micro-utilities.',
      badgeColor: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    },
  ];

  return (
    <SectionWrapper className="relative border-y border-slate-200/80 bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 py-8 sm:py-14 lg:py-20">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)]" />

      <PageContainer size="lg" className="relative space-y-6 sm:space-y-12">
        <SectionHeading
          eyebrow="Our Approach"
          title="We build technology around real problems."
          description="PriMAqy focuses on turning complex technology into practical products that people can actually use."
        />

        <div className="grid grid-cols-1 gap-3.5 sm:gap-6 md:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} variant="glow" className="space-y-2.5 sm:space-y-4 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className={`flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl border ${pillar.badgeColor} shadow-xs`}>
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300">0{idx + 1}</span>
                </div>
                <h3 className="text-base sm:text-xl font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </div>
      </PageContainer>
    </SectionWrapper>
  );
}
