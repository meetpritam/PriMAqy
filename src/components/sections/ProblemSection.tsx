import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Layers, HelpCircle, RefreshCw } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: Layers,
      title: 'Fragmented Tools',
      description: 'Too many disconnected tools make discovery and integration difficult for everyday users.',
    },
    {
      icon: HelpCircle,
      title: 'Knowledge Overload',
      description: 'Users struggle to find the right technology, optimal prompts, and effective workflows.',
    },
    {
      icon: RefreshCw,
      title: 'Workflow Complexity',
      description: 'Switching constantly between multiple systems and paywalled apps wastes time and energy.',
    },
  ];

  return (
    <SectionWrapper className="relative border-y border-slate-200/80 bg-gradient-to-b from-slate-100/60 via-slate-50 to-slate-100/60 py-8 sm:py-14 lg:py-20">
      <PageContainer size="lg" className="space-y-6 sm:space-y-12">
        <SectionHeading
          eyebrow="The Challenge"
          title="Technology is powerful. Using it effectively shouldn't be complicated."
          description="The modern digital ecosystem is fragmented across thousands of tools, platforms, prompts, templates, and workflows. PriMAqy is exploring ways to make this ecosystem simpler and more useful."
        />

        <div className="grid grid-cols-1 gap-3.5 sm:gap-6 md:grid-cols-3">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <Card key={problem.title} variant="glow" className="space-y-2.5 sm:space-y-4 p-4 sm:p-6">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-slate-100 border border-slate-200/90 shadow-2xs">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-800" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-slate-900">
                  {problem.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  {problem.description}
                </p>
              </Card>
            );
          })}
        </div>
      </PageContainer>
    </SectionWrapper>
  );
}
