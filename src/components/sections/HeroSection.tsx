import React from 'react';
import { ArrowRight, Sparkles, Terminal, Layers, Activity } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { companyData } from '@/data/company';
import { AiCoreScene } from '@/components/3d/AiCoreScene';
import { SpatialBackgroundEngine } from '@/components/3d/SpatialBackgroundEngine';

export function HeroSection() {
  return (
    <section className="relative w-full max-w-full overflow-hidden border-b border-slate-200/90 bg-spatial-hero py-12 sm:py-20 lg:py-28">
      {/* 3D Spatial Background Engine */}
      <SpatialBackgroundEngine variant="hero" />

      {/* Technical Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-40" />

      <PageContainer size="lg" className="relative z-10 w-full max-w-full">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="space-y-6 lg:col-span-7">
            
            {/* Technical Eyebrow Pill */}
            <RevealWrapper animation="fade-up" delay={50}>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-mono font-medium text-slate-900 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>PRImaQY — AI &amp; TECHNOLOGY</span>
              </div>
            </RevealWrapper>

            {/* Display Headline */}
            <RevealWrapper animation="fade-up" delay={120}>
              <h1 className="text-display text-slate-900">
                Intelligence, <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent font-bold">
                  Engineered.
                </span>
              </h1>
            </RevealWrapper>

            {/* Supporting Copy */}
            <RevealWrapper animation="fade-up" delay={180}>
              <p className="max-w-2xl text-body-lg text-slate-600 font-normal">
                PriMAqy builds practical AI and technology that makes digital work simpler, faster and more intelligent.
              </p>
            </RevealWrapper>

            {/* CTAs */}
            <RevealWrapper animation="fade-up" delay={240}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Button href="/products" variant="primary" size="lg" shape="pill" className="group justify-center min-h-[48px]">
                  <span>Explore Products</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button href="/about" variant="secondary" size="lg" shape="pill" className="justify-center min-h-[48px]">
                  Meet PriMAqy
                </Button>
              </div>
            </RevealWrapper>

            {/* Technical Metric Metadata */}
            <RevealWrapper animation="fade-up" delay={300}>
              <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-mono text-slate-600 border-t border-slate-200/80">
                <div className="flex items-center gap-2">
                  <IconWrapper size="sm" variant="accent" className="w-6 h-6 rounded-md">
                    <Terminal className="h-3 w-3 text-blue-600" />
                  </IconWrapper>
                  <span>AI-First Stack</span>
                </div>
                <span className="text-slate-300">•</span>
                <div className="flex items-center gap-2">
                  <IconWrapper size="sm" variant="default" className="w-6 h-6 rounded-md">
                    <Layers className="h-3 w-3 text-indigo-600" />
                  </IconWrapper>
                  <span>Toolsetic Ecosystem</span>
                </div>
                <span className="text-slate-300">•</span>
                <div className="flex items-center gap-2">
                  <IconWrapper size="sm" variant="default" className="w-6 h-6 rounded-md">
                    <Activity className="h-3 w-3 text-emerald-600" />
                  </IconWrapper>
                  <span>Patna, Bihar Anchor</span>
                </div>
              </div>
            </RevealWrapper>

          </div>

          {/* Right Column: 3D AI Core Canvas Showcase */}
          <div className="lg:col-span-5 w-full">
            <RevealWrapper animation="scale-up" delay={200}>
              <div className="relative mx-auto max-w-md lg:max-w-none w-full">
                
                {/* Elevated Surface Card */}
                <div className="relative rounded-2xl border border-slate-200/90 bg-white/95 p-4 sm:p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]">
                  
                  {/* Technical Crosshair Marks */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-400 select-none">+</div>
                  <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-400 select-none">+</div>

                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-3.5">
                    <div>
                      <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-900">
                        PriMAqy AI Core
                      </span>
                      <span className="block text-[10px] text-slate-500 font-mono">
                        Interactive 3D Computational System
                      </span>
                    </div>
                    <Badge variant="status" className="text-[10px] font-mono">
                      {companyData.legalGuardrails.entityStatus}
                    </Badge>
                  </div>

                  {/* 3D Core Canvas Container */}
                  <div className="relative my-3 overflow-hidden rounded-xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/70 shadow-inner">
                    <AiCoreScene />
                  </div>

                  {/* Card Footer Status */}
                  <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Systems Operational</span>
                    </span>
                    <span className="text-blue-600 font-semibold hover:underline cursor-pointer">
                      Drag to Rotate 3D
                    </span>
                  </div>

                </div>
              </div>
            </RevealWrapper>
          </div>

        </div>
      </PageContainer>
    </section>
  );
}

