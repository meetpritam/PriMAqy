import React from 'react';
import { ArrowRight, Database, Cpu, Zap, CheckCircle } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Badge } from '@/components/ui/Badge';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
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
    <section className="relative w-full max-w-full overflow-hidden border-b border-slate-200/80 bg-spatial-system py-16 sm:py-24">
      <SpatialBackgroundEngine variant="system" />

      <PageContainer size="lg" className="relative z-10 w-full max-w-full">
        <RevealWrapper animation="fade-up">
          <SectionHeading
            eyebrow="AI & AUTOMATION PIPELINE"
            title="From Raw Input to Automated Intelligence."
            description="A transparent look at how PriMAqy constructs friction-free computational workflows."
            align="center"
          />
        </RevealWrapper>

        {/* Pipeline Diagram Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <RevealWrapper key={index} animation="fade-up" delay={index * 100} className="h-full">
                <div className="relative group w-full h-full">
                  <Card variant="glow" className="h-full p-6 sm:p-7 flex flex-col justify-between w-full">
                    <div>
                      <div className="flex items-center justify-between">
                        <IconWrapper size="md" variant="accent">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </IconWrapper>
                        <Badge variant="secondary" className="font-mono font-bold text-slate-500">
                          {item.step}
                        </Badge>
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-slate-900 tracking-tight">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-slate-200 text-blue-600 shadow-xs">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              </RevealWrapper>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
