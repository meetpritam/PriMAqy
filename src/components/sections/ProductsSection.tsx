import React from 'react';
import { ArrowRight, Sparkles, Terminal, ShieldCheck, Zap, Code } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { productsData } from '@/data/products';
import { SpatialBackgroundEngine } from '@/components/3d/SpatialBackgroundEngine';

export function ProductsSection() {
  const toolsetic = productsData.find((p) => p.slug === 'toolsetic') || productsData[0];

  return (
    <section className="relative w-full max-w-full overflow-hidden border-b border-[#e5e5e5] bg-spatial-product py-16 sm:py-24">
      <SpatialBackgroundEngine variant="product" />

      <PageContainer size="lg" className="relative z-10 w-full max-w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-[#e5e5e5] w-full">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#2563eb]">
                FLAGSHIP PRODUCT ECOSYSTEM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-[#171717]">
              Meet Toolsetic.
            </h2>
            <p className="text-base sm:text-lg text-[#525252]">
              PriMAqy’s flagship AI-first digital productivity suite built for developers, creators, students, and founders.
            </p>
          </div>
          <Button href="/products/toolsetic" variant="secondary" shape="pill" className="shrink-0">
            <span>Explore All Features</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Feature Spotlight Card */}
        <div className="mt-12 rounded-3xl border border-[#e5e5e5] bg-white/90 backdrop-blur-md p-6 sm:p-12 w-full">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            
            {/* Left Info Column */}
            <div className="space-y-6 lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-mono font-medium text-blue-700">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>{toolsetic.tagline}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171717]">
                {toolsetic.name} — AI Productivity Reimagined
              </h3>

              <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
                {toolsetic.description}
              </p>

              {/* Feature Chips */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#171717]">
                  <Terminal className="h-4 w-4 text-[#2563eb]" />
                  <span>AI Prompt Library</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#171717]">
                  <Zap className="h-4 w-4 text-[#2563eb]" />
                  <span>Interactive AI Playground</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#171717]">
                  <Code className="h-4 w-4 text-[#2563eb]" />
                  <span>Developer Workflow Suite</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#171717]">
                  <ShieldCheck className="h-4 w-4 text-[#2563eb]" />
                  <span>Verified Security Rules</span>
                </div>
              </div>

              <div className="pt-4">
                <Button href="/products/toolsetic" variant="primary" size="lg" shape="pill" className="group">
                  <span>Explore Toolsetic</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Right Interactive Mockup Container */}
            <div className="lg:col-span-6 w-full">
              <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 shadow-sm space-y-4 w-full">
                <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 font-mono text-xs font-semibold text-[#171717]">toolsetic.primaqy.in</span>
                  </div>
                  <Badge variant="status" className="text-[10px] font-mono">
                    Flagship Active
                  </Badge>
                </div>

                <div className="space-y-3 font-mono text-xs text-[#525252] bg-[#fafafa] p-4 rounded-xl border border-[#f5f5f5]">
                  <div className="text-[#2563eb] font-semibold">// Toolsetic AI Engine v1.0</div>
                  <div>&gt; Initializing prompt templates... OK</div>
                  <div>&gt; Loading developer workflows... OK</div>
                  <div>&gt; Connecting intelligence pipeline... READY</div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-center">
                  <div className="p-3 rounded-xl bg-[#fafafa] border border-[#e5e5e5]">
                    <span className="block text-xl font-bold font-mono text-[#171717]">100+</span>
                    <span className="text-[11px] text-[#737373]">Curated AI Prompts</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#fafafa] border border-[#e5e5e5]">
                    <span className="block text-xl font-bold font-mono text-[#171717]">0ms</span>
                    <span className="text-[11px] text-[#737373]">Local Delay</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </PageContainer>
    </section>
  );
}
