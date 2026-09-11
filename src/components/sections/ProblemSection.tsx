import React from 'react';
import { Layers, BrainCircuit, Workflow } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';

const problems = [
  {
    icon: Layers,
    title: 'Fragmented Toolchains',
    description:
      'Digital teams switch between dozens of disconnected apps every day, scattering context and draining focused execution.',
    stat: '42%',
    statLabel: 'Productivity Lost in App Switching',
  },
  {
    icon: BrainCircuit,
    title: 'Information & Context Overload',
    description:
      'Raw data is abundant, but actionable intelligence remains hidden inside unorganized documentation and complex dashboards.',
    stat: '3.5h',
    statLabel: 'Wasted Daily Searching Information',
  },
  {
    icon: Workflow,
    title: 'Manual Workflow Complexity',
    description:
      'Repetitive manual operations slow down software innovation, turning build cycles into tedious administrative overhead.',
    stat: '68%',
    statLabel: 'Developer Time Spent on Repetitive Tasks',
  },
];

export function ProblemSection() {
  return (
    <section className="border-b border-[#e5e5e5] bg-[#ffffff] py-16 sm:py-24">
      <PageContainer size="lg">
        <SectionHeading
          eyebrow="THE CHALLENGE"
          title="Technology is powerful. Using it effectively shouldn't be complicated."
          description="Modern creators and developers face unprecedented complexity. PriMAqy eliminates friction by engineering unified, practical intelligence."
          align="center"
        />

        {/* 3-Column Editorial Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-6 sm:p-8 transition-all duration-300 hover:border-[#d4d4d4] hover:bg-white hover:shadow-md"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[#e5e5e5] text-[#171717] shadow-xs group-hover:border-[#2563eb] group-hover:text-[#2563eb] transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#171717] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#525252] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Metric Footer */}
                <div className="mt-8 pt-6 border-t border-[#e5e5e5] flex items-baseline justify-between">
                  <span className="text-2xl font-bold font-mono text-[#171717]">
                    {item.stat}
                  </span>
                  <span className="text-xs text-[#737373] font-mono text-right max-w-[140px]">
                    {item.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
