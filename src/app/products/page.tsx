import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { productsData } from '@/data/products';
import { ArrowRight, CheckCircle2, Clock, Sparkles, Terminal, Layers } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Our Products — Toolsetic & AI Ecosystem',
  description: 'Explore PriMAqy product portfolio, featuring Toolsetic AI-first productivity ecosystem.',
});

export default function ProductsPage() {
  const toolsetic = productsData.find((p) => p.id === 'toolsetic')!;

  const futureProducts = [
    {
      name: 'PriMAqy Flow',
      category: 'Workflow Automation',
      status: 'Coming Soon',
      description: 'Intelligent process automation for developer and creator pipelines.',
      icon: Layers,
    },
    {
      name: 'PriMAqy Insights API',
      category: 'Developer Infrastructure',
      status: 'Planned',
      description: 'High-speed API endpoints for integrating AI micro-utilities into external applications.',
      icon: Terminal,
    },
  ];

  return (
    <div>
      <PageHeader
        badge="Product Portfolio"
        title="Practical tools for the AI era."
        description="We build modular digital products designed to simplify complex workflows, accelerate creation, and improve productivity."
      />

      {/* Flagship Product Showcase: Toolsetic */}
      <SectionWrapper className="py-12 sm:py-20">
        <PageContainer size="lg" className="space-y-8 sm:space-y-12">
          <div className="mx-auto max-w-5xl">
            <RevealWrapper animation="scale-up">
              <Card variant="glow" className="p-6 sm:p-10 bg-white/95 backdrop-blur-xl space-y-8 relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-30" />
                
                <div className="relative z-10 space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                          {toolsetic.name}
                        </h2>
                        <Badge variant="glow" className="font-mono text-xs">{toolsetic.status}</Badge>
                      </div>
                      <p className="mt-1.5 text-xs font-mono font-semibold text-blue-600 flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                        <span>{toolsetic.tagline}</span>
                      </p>
                    </div>

                    <Button href="/products/toolsetic" variant="primary" size="md" shape="pill" className="group w-full sm:w-auto justify-center min-h-[44px]">
                      <span>Explore Toolsetic</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
                      {toolsetic.description}
                    </p>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                          Target Audience
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {toolsetic.targetAudience.map((item) => (
                            <Badge key={item} variant="secondary" className="font-medium text-slate-700 bg-slate-100">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                          Core Features
                        </h3>
                        <ul className="space-y-2 text-xs font-medium text-slate-700">
                          {toolsetic.features.map((f) => (
                            <li key={f.id} className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                              <span>{f.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </RevealWrapper>
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Future Products Pipeline */}
      <SectionWrapper className="border-t border-slate-200/80 bg-slate-50/60 py-16 sm:py-24">
        <PageContainer size="lg" className="space-y-12">
          <RevealWrapper animation="fade-up">
            <SectionHeading
              eyebrow="Product Pipeline"
              title="Future Product Research &amp; Specification"
              description="Products currently under research and initial architectural specification."
            />
          </RevealWrapper>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {futureProducts.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <RevealWrapper key={p.name} animation="fade-up" delay={idx * 150}>
                  <Card variant="glow" className="space-y-4 p-6 sm:p-8 h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <IconWrapper size="md" variant="accent">
                          <IconComp className="h-5 w-5 text-blue-600" />
                        </IconWrapper>
                        <Badge variant="outline" className="gap-1.5 text-slate-700 font-mono text-xs">
                          <Clock className="h-3 w-3 text-slate-500" />
                          <span>{p.status}</span>
                        </Badge>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
                        <p className="text-xs font-mono font-semibold text-blue-600">{p.category}</p>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">{p.description}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>RESEARCH PHASE</span>
                      <span>PRIMAQY LABS</span>
                    </div>
                  </Card>
                </RevealWrapper>
              );
            })}
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}

