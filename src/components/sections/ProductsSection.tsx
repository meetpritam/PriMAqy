import React from 'react';
import { ArrowRight, Sparkles, Terminal, ShieldCheck, Zap, Code } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { productsData } from '@/data/products';
import { SpatialBackgroundEngine } from '@/components/3d/SpatialBackgroundEngine';

export function ProductsSection() {
  const toolsetic = productsData.find((p) => p.slug === 'toolsetic') || productsData[0];

  return (
    <section className="relative w-full max-w-full overflow-hidden border-b border-slate-200/90 bg-spatial-product py-16 sm:py-24">
      <SpatialBackgroundEngine variant="product" />

      {/* Technical Grid Layer */}
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-30" />

      <PageContainer size="lg" className="relative z-10 w-full max-w-full">
        
        {/* Section Header */}
        <RevealWrapper animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-slate-200/80 w-full">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-caption font-mono font-semibold text-blue-600">
                  FLAGSHIP PRODUCT ECOSYSTEM
                </span>
              </div>
              <h2 className="text-heading font-semibold text-slate-900">
                Meet Toolsetic.
              </h2>
              <p className="text-body-lg text-slate-600">
                PriMAqy’s flagship AI-first digital productivity suite built for developers, creators, students, and founders.
              </p>
            </div>
            <Button href="/products/toolsetic" variant="secondary" shape="pill" className="shrink-0 min-h-[44px]">
              <span>Explore All Features</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </RevealWrapper>

        {/* Feature Spotlight Card */}
        <div className="mt-12 w-full">
          <RevealWrapper animation="scale-up" delay={150}>
            <Card variant="glow" className="p-6 sm:p-12 w-full bg-white/95 backdrop-blur-xl">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                
                {/* Left Info Column */}
                <div className="space-y-6 lg:col-span-6">
                  <Badge variant="accent" className="font-mono text-xs">
                    <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                    <span>{toolsetic.tagline}</span>
                  </Badge>

                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                    {toolsetic.name} — AI Productivity Reimagined
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {toolsetic.description}
                  </p>

                  {/* Feature Chips */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-900">
                      <IconWrapper size="sm" variant="accent" className="w-7 h-7 rounded-md">
                        <Terminal className="h-3.5 w-3.5 text-blue-600" />
                      </IconWrapper>
                      <span>AI Prompt Library</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-900">
                      <IconWrapper size="sm" variant="accent" className="w-7 h-7 rounded-md">
                        <Zap className="h-3.5 w-3.5 text-blue-600" />
                      </IconWrapper>
                      <span>Interactive AI Playground</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-900">
                      <IconWrapper size="sm" variant="accent" className="w-7 h-7 rounded-md">
                        <Code className="h-3.5 w-3.5 text-blue-600" />
                      </IconWrapper>
                      <span>Developer Workflow Suite</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-900">
                      <IconWrapper size="sm" variant="accent" className="w-7 h-7 rounded-md">
                        <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                      </IconWrapper>
                      <span>Verified Security Rules</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button href="/products/toolsetic" variant="primary" size="lg" shape="pill" className="group min-h-[48px]">
                      <span>Explore Toolsetic</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>

                {/* Right Interactive Mockup Container */}
                <div className="lg:col-span-6 w-full">
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-4 w-full">
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-400" />
                        <span className="h-3 w-3 rounded-full bg-amber-400" />
                        <span className="h-3 w-3 rounded-full bg-emerald-400" />
                        <span className="ml-2 font-mono text-xs font-semibold text-slate-900">toolsetic.primaqy.in</span>
                      </div>
                      <Badge variant="status" className="text-[10px] font-mono">
                        Flagship Active
                      </Badge>
                    </div>

                    <div className="space-y-3 font-mono text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200/70">
                      <div className="text-blue-600 font-semibold">// Toolsetic AI Engine v1.0</div>
                      <div>&gt; Initializing prompt templates... OK</div>
                      <div>&gt; Loading developer workflows... OK</div>
                      <div>&gt; Connecting intelligence pipeline... READY</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 text-center">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                        <span className="block text-xl font-bold font-mono text-slate-900">100+</span>
                        <span className="text-[11px] text-slate-500">Curated AI Prompts</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                        <span className="block text-xl font-bold font-mono text-slate-900">0ms</span>
                        <span className="text-[11px] text-slate-500">Local Delay</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Card>
          </RevealWrapper>
        </div>

      </PageContainer>
    </section>
  );
}
