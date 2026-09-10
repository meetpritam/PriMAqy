import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export function RoadmapPreviewSection() {
  const phases = [
    {
      number: '01',
      name: 'Foundation',
      status: 'Completed',
      items: ['Brand Identity', 'Web Architecture', 'Research & Specs', 'Engineered Prototype'],
    },
    {
      number: '02',
      name: 'Product',
      status: 'In Development',
      items: ['Toolsetic MVP', 'Core Micro-Tools', 'Prompt Ecosystem', 'Template Library'],
    },
    {
      number: '03',
      name: 'Growth',
      status: 'Planned',
      items: ['User Onboarding', 'Community Hub', 'Workflow Automation', 'Public Distribution'],
    },
    {
      number: '04',
      name: 'Ecosystem',
      status: 'Planned',
      items: ['Multiple AI Products', 'Developer Ecosystem', 'Strategic Partnerships', 'APIs'],
    },
  ];

  return (
    <SectionWrapper className="relative py-10 sm:py-16 lg:py-24 bg-slate-50/50">
      <PageContainer size="lg" className="space-y-8 sm:space-y-12">
        <SectionHeading
          eyebrow="Timeline"
          title="Product & Venture Roadmap"
          description="Transparent strategic trajectory tracking our development from foundation to ecosystem."
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <Card key={phase.number} variant="glow" className="relative space-y-4 p-5 sm:p-6 border-slate-200/90">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-mono font-black text-blue-700">
                  {phase.number}
                </span>
                <Badge
                  variant={
                    phase.status === 'Completed'
                      ? 'status'
                      : phase.status === 'In Development'
                      ? 'glow'
                      : 'outline'
                  }
                  className="text-[11px]"
                >
                  {phase.status}
                </Badge>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {phase.name}
              </h3>

              <ul className="space-y-2 text-xs font-medium text-slate-700 pt-1">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    {phase.status === 'Completed' ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    ) : (
                      <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="space-y-4 text-center">
          <Button href="/roadmap" variant="outline" size="md" className="group w-full sm:w-auto justify-center">
            <span>View Full Roadmap</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <p className="text-xs font-mono font-medium text-slate-700">
            * Roadmap items represent current plans and may change as product development progresses.
          </p>
        </div>
      </PageContainer>
    </SectionWrapper>
  );
}
