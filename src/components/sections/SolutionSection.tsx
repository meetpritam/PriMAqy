import React from 'react';
import { Compass, Sparkles, Cpu, CheckCircle2 } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SpatialBackgroundEngine } from '@/components/3d/SpatialBackgroundEngine';

const pillars = [
  {
    badge: '01 / DISCOVER',
    icon: Compass,
    title: 'AI & Machine Learning',
    description:
      'Engineered intelligent models and prompt systems that extract high-signal insights from unorganized information and workflows.',
    features: [
      'Context-aware knowledge extraction',
      'Specialized domain prompt libraries',
      'Low-latency reasoning architectures',
    ],
  },
  {
    badge: '02 / CREATE',
    icon: Sparkles,
    title: 'Software & SaaS Ecosystems',
    description:
      'High-performance digital products crafted with Next.js, React 19, and decoupled server architectures designed for effortless user interaction.',
    features: [
      'Flagship Toolsetic product suite',
      'Ultra-responsive web interfaces',
      'Modular developer & creator tools',
    ],
  },
  {
    badge: '03 / AUTOMATE',
    icon: Cpu,
    title: 'AI & Workflow Automation',
    description:
      'Autonomous system pipelines that connect disparate digital touchpoints into streamlined, friction-free operations.',
    features: [
      'End-to-end task automation',
      'Intelligent trigger & action routing',
      'Zero-code productivity integration',
    ],
  },
];

export function SolutionSection() {
  return (
    <section className="relative w-full max-w-full overflow-hidden border-b border-[#e5e5e5] bg-spatial-system py-16 sm:py-24">
      <SpatialBackgroundEngine variant="system" />

      <PageContainer size="lg" className="relative z-10 w-full max-w-full">
        <SectionHeading
          eyebrow="WHAT WE BUILD"
          title="Engineered for Discovery, Creation & Automation."
          description="We build digital systems that simplify complexity and empower creators, developers, and founders."
          align="center"
        />

        <div className="mt-12 sm:mt-16 space-y-6 w-full">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-[#e5e5e5] bg-white/90 backdrop-blur-md p-6 sm:p-10 transition-all duration-300 hover:border-[#d4d4d4] hover:shadow-md w-full"
              >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
                  
                  {/* Left Column: Number Badge & Header */}
                  <div className="space-y-3 lg:col-span-5">
                    <span className="inline-block font-mono text-xs font-semibold tracking-wider text-[#2563eb]">
                      {pillar.badge}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fafafa] border border-[#e5e5e5] text-[#171717]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold text-[#171717] tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-[#525252] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Right Column: Feature List */}
                  <div className="lg:col-span-7 lg:border-l lg:border-[#e5e5e5] lg:pl-10">
                    <ul className="space-y-3">
                      {pillar.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-sm text-[#171717] font-medium">
                          <CheckCircle2 className="h-4 w-4 text-[#2563eb] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
