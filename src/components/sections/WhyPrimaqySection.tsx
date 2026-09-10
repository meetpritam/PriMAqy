import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Target, Unlock, Blocks, Layers } from 'lucide-react';

export function WhyPrimaqySection() {
  const principles = [
    {
      icon: Target,
      title: 'Practical',
      description: 'Build useful technology that solves daily workflow problems rather than technology for hype.',
      accent: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: Unlock,
      title: 'Accessible',
      description: 'Make powerful intelligent utilities easy to discover, understand, and use.',
      accent: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
    {
      icon: Blocks,
      title: 'Modular',
      description: 'Products evolve independently while operating seamlessly within a shared ecosystem.',
      accent: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    },
    {
      icon: Layers,
      title: 'Long-Term',
      description: 'Build solid engineering infrastructure that can support multiple products for years.',
      accent: 'bg-violet-50 text-violet-600 border-violet-200',
    },
  ];

  return (
    <SectionWrapper className="relative py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50">
      <PageContainer size="lg" className="space-y-8 sm:space-y-12">
        <SectionHeading
          eyebrow="Core Values"
          title="Why PriMAqy?"
          description="Our foundational principles guide how we design software and architect products."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <Card key={p.title} variant="glow" className="space-y-2.5 sm:space-y-4 p-4 sm:p-6">
                <div className={`flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl border ${p.accent} shadow-xs shrink-0`}>
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm leading-relaxed text-slate-600 pt-1 font-normal">
                    {p.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </PageContainer>
    </SectionWrapper>
  );
}
