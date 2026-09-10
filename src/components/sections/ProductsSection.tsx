import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { productsData } from '@/data/products';
import { ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';

const toolsetic = productsData.find((p) => p.id === 'toolsetic')!;

export function ProductsSection() {
  const categories = [
    'AI Tools',
    'Prompt Library',
    'Templates',
    'AI Playground',
    'Automation',
    'Learning Resources',
    'Productivity',
  ];

  return (
    <SectionWrapper className="relative py-24 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(59,130,246,0.08),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-10 h-[350px] w-[350px] bg-[radial-gradient(circle,rgba(6,182,212,0.07),transparent_70%)] blur-3xl" />

      <PageContainer size="lg" className="relative z-10 space-y-14">
        <SectionHeading
          eyebrow="Product Portfolio"
          title="Our Flagship Ecosystem"
          description="Building an ecosystem of practical intelligent tools designed to enhance daily digital workflows."
        />

        <div className="mx-auto max-w-4xl">
          {/* Card with Gradient Border halo */}
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/15 to-cyan-500/20 p-1 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)]">
            <Card className="rounded-[22px] border-0 bg-white/95 p-5 sm:p-8 lg:p-10 backdrop-blur-xl space-y-8">
              
              {/* Product Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {toolsetic.name}
                      </h3>
                      <p className="text-xs font-mono font-bold text-blue-700">
                        {toolsetic.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col min-[400px]:flex-row items-stretch min-[400px]:items-center gap-3">
                  <Badge variant="glow" className="gap-1 px-3 py-1 self-start min-[400px]:self-auto">
                    <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                    <span>{toolsetic.status}</span>
                  </Badge>
                  <Button href="/products/toolsetic" variant="gradient" size="md" className="group w-full min-[400px]:w-auto justify-center">
                    <span>Explore Toolsetic</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {toolsetic.description}
              </p>

              {/* Target Audience Pills */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  Target Audiences
                </h4>
                <div className="flex flex-wrap gap-2">
                  {toolsetic.targetAudience.map((audience) => (
                    <Badge key={audience} variant="secondary" className="bg-slate-100 text-slate-800 border-slate-200/90 font-semibold">
                      {audience}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Feature Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  Feature Ecosystem
                </h4>
                <div className="grid grid-cols-1 min-[380px]:grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-900 transition-all hover:border-blue-300 hover:bg-blue-50/40"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>{cat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs">
                <Button href="/roadmap" variant="outline" size="sm" className="w-full sm:w-auto justify-center">
                  View Roadmap →
                </Button>
                <span className="text-slate-700 font-mono text-[11px] font-medium">
                  * Feature categories are currently under active development.
                </span>
              </div>

            </Card>
          </div>
        </div>
      </PageContainer>
    </SectionWrapper>
  );
}
