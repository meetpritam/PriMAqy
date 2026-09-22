import React from 'react';
import { ArrowRight, Sparkles, Terminal, Layers, Activity } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { companyData } from '@/data/company';
import { AiCoreScene } from '@/components/3d/AiCoreScene';
import { SpatialBackgroundEngine } from '@/components/3d/SpatialBackgroundEngine';

export function HeroSection() {
  return (
    <section className="relative w-full max-w-full overflow-hidden border-b border-[#e5e5e5] bg-spatial-hero py-12 sm:py-20 lg:py-28">
      {/* 3D Spatial Background Engine */}
      <SpatialBackgroundEngine variant="hero" />

      {/* Precision Grid Layer */}
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-50" />

      <PageContainer size="lg" className="relative z-10 w-full max-w-full">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="space-y-6 lg:col-span-7">
            {/* Technical Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-mono font-medium text-[#171717] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>PRImaQY — AI &amp; TECHNOLOGY</span>
            </div>

            {/* Apple Display Headline */}
            <h1 className="text-4xl min-[400px]:text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] text-[#171717] leading-[1.05]">
              Intelligence, <br />
              <span className="text-gradient-blue font-bold">Engineered.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="max-w-2xl text-base sm:text-xl text-[#525252] leading-relaxed font-normal">
              PriMAqy builds practical AI and technology that makes digital work simpler, faster and more intelligent.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button href="/products" variant="primary" size="lg" shape="pill" className="group justify-center">
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/about" variant="secondary" size="lg" shape="pill" className="justify-center">
                Meet PriMAqy
              </Button>
            </div>

            {/* Technical Metric Metadata */}
            <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-mono text-[#525252] border-t border-[#e5e5e5]">
              <div className="flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-blue-600" />
                <span>AI-First Stack</span>
              </div>
              <span className="text-[#d4d4d4]">•</span>
              <div className="flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-indigo-600" />
                <span>Toolsetic Ecosystem</span>
              </div>
              <span className="text-[#d4d4d4]">•</span>
              <div className="flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5 text-emerald-600" />
                <span>Patna, Bihar Anchor</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D AI Core Canvas Showcase */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none w-full">
              
              {/* Elevated Apple Surface Card */}
              <div className="relative rounded-2xl border border-[#e5e5e5] bg-white/90 p-4 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl">
                
                {/* Corner Technical Marks */}
                <div className="absolute top-3 left-3 text-[10px] font-mono text-[#a3a3a3] select-none">+</div>
                <div className="absolute top-3 right-3 text-[10px] font-mono text-[#a3a3a3] select-none">+</div>

                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-3.5">
                  <div>
                    <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#171717]">
                      PriMAqy AI Core
                    </span>
                    <span className="block text-[10px] text-[#737373] font-mono">
                      Interactive 3D Computational System
                    </span>
                  </div>
                  <Badge variant="status" className="text-[10px] font-mono">
                    {companyData.legalGuardrails.entityStatus}
                  </Badge>
                </div>

                {/* 3D Core Canvas Container */}
                <div className="relative my-2 overflow-hidden rounded-xl bg-gradient-to-b from-[#fafafa] to-white border border-[#f5f5f5]">
                  <AiCoreScene />
                </div>

                {/* Card Footer Status */}
                <div className="pt-3 border-t border-[#e5e5e5] flex items-center justify-between text-[11px] font-mono text-[#525252]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Systems Operational</span>
                  </span>
                  <span className="text-[#2563eb] font-semibold hover:underline cursor-pointer">
                    Drag to Rotate 3D
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </PageContainer>
    </section>
  );
}
