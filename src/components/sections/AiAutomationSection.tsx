import React from 'react';
import { ArrowRight, Database, Cpu, Zap, CheckCircle } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SpatialBackgroundEngine } from '@/components/3d/SpatialBackgroundEngine';

const steps = [
  {
    step: '01',
    icon: Database,
    title: 'Raw Input Data',
    description: 'Unstructured text, developer code, API feeds, and user requirements enter the system.',
  },
  {
    step: '02',
    icon: Cpu,
    title: 'AI Intelligence Layer',
    description: 'High-signal reasoning models and prompt matrices analyze context and determine optimal pathing.',
  },
  {
    step: '03',
    icon: Zap,
    title: 'Autonomous Routing',
    description: 'Automated workflow pipelines execute complex transformations without manual intervention.',
  },
  {
    step: '04',
    icon: CheckCircle,
    title: 'Verified Output',
    description: 'Structured results, production code, automated documents, and clean intelligence delivered.',
  },
];

export function AiAutomationSection() {
  return (
    <section className="relative w-full max-w-full overflow-hidden border-b border-[#e5e5e5] bg-spatial-system py-16 sm:py-24">
      <SpatialBackgroundEngine variant="system" />

      <PageContainer size="lg" className="relative z-10 w-full max-w-full">
        <SectionHeading
          eyebrow="AI & AUTOMATION PIPELINE"
          title="From Raw Input to Automated Intelligence."
          description="A transparent look at how PriMAqy constructs friction-free computational workflows."
          align="center"
        />

        {/* Pipeline Diagram Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group w-full">
                <div className="h-full rounded-2xl border border-[#e5e5e5] bg-white/90 backdrop-blur-md p-6 transition-all duration-300 hover:border-[#2563eb] hover:shadow-md flex flex-col justify-between w-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fafafa] border border-[#e5e5e5] text-[#171717] group-hover:text-[#2563eb] transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#a3a3a3]">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-[#171717] tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#525252] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white border border-[#e5e5e5] text-[#a3a3a3] shadow-xs">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
