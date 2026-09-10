import React from 'react';
import { ArrowRight, Sparkles, Cpu, Layers, Activity, Terminal } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { companyData } from '@/data/company';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden border-b border-slate-200/80 bg-slate-50/50 py-8 sm:py-16 lg:py-24">
      {/* === MULTI-LAYERED FUTURISTIC ATMOSPHERIC BACKGROUND === */}
      {/* Blue Radial Glow Orb top-center */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[400px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] blur-2xl" />
      {/* Cyan Glow Orb top-left */}
      <div className="pointer-events-none absolute top-12 -left-32 h-[350px] w-[350px] bg-[radial-gradient(circle,rgba(6,182,212,0.10),transparent_70%)] blur-2xl" />
      {/* Violet Glow Orb top-right */}
      <div className="pointer-events-none absolute top-20 -right-32 h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(147,51,234,0.08),transparent_70%)] blur-2xl" />

      {/* Technical Precision Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-75" />

      <PageContainer size="lg" className="relative z-10">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="space-y-4 sm:space-y-5 lg:col-span-7">
            {/* Technical Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-[0_2px_10px_rgba(59,130,246,0.12)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>{companyData.legalGuardrails.entityStatus}</span>
            </div>

            {/* Futuristic High-Contrast Headline */}
            <h1 className="text-2xl min-[380px]:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] sm:leading-[1.08]">
              Building practical <span className="text-blue-600 font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">AI &amp; technology</span> for a smarter digital future.
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-sm sm:text-lg lg:text-xl leading-relaxed text-slate-700 font-normal">
              PriMAqy is an emerging AI and technology venture focused on building practical software products that make digital work simpler, faster, and more intelligent.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Button href="/products" variant="gradient" size="lg" className="group justify-center">
                <span>Explore Our Products</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/about" variant="outline" size="lg" className="justify-center">
                Meet PriMAqy
              </Button>
            </div>

            {/* Technical Metric Chips */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3 sm:pt-4 text-xs font-mono font-semibold text-slate-700 border-t border-slate-200/80">
              <div className="flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-blue-600" />
                <span>AI-First Stack</span>
              </div>
              <span className="text-slate-400">•</span>
              <div className="flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-indigo-600" />
                <span>Toolsetic Ecosystem</span>
              </div>
              <span className="text-slate-400">•</span>
              <div className="flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5 text-emerald-600" />
                <span>Patna, Bihar Anchor</span>
              </div>
            </div>
          </div>

          {/* Right Column: Engineered System Dashboard Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer Glow Halo behind card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/15 to-cyan-500/20 blur-xl opacity-75" />

              {/* Elevated Card Surface */}
              <div className="relative rounded-2xl border border-slate-200/90 bg-white/95 p-4 sm:p-6 shadow-[0_16px_40px_-8px_rgba(15,23,42,0.08),0_4px_12px_-2px_rgba(15,23,42,0.03)] backdrop-blur-xl">
                
                {/* Corner Technical Cross-Hair Accents */}
                <div className="absolute top-2.5 left-2.5 text-[10px] font-mono text-slate-400 select-none">+</div>
                <div className="absolute top-2.5 right-2.5 text-[10px] font-mono text-slate-400 select-none">+</div>

                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60 shadow-xs">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                        Engineered System
                      </span>
                      <span className="block text-[10px] text-slate-600 font-mono">
                        v0.5.1 Production Architecture
                      </span>
                    </div>
                  </div>
                  <Badge variant="status" className="text-[10px]">
                    Active Development
                  </Badge>
                </div>

                {/* Card Content Body */}
                <div className="mt-5 space-y-4">
                  {/* Flagship Feature Card */}
                  <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50/60 via-slate-50/50 to-indigo-50/40 p-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
                      <span>Toolsetic Ecosystem</span>
                      <span className="text-emerald-800 font-mono text-[10px] bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300 font-bold">
                        Flagship Suite
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-700 leading-relaxed">
                      AI-first digital productivity tools designed to simplify workflows for developers &amp; creators.
                    </p>
                  </div>

                  {/* 2-Column Technical Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3 text-center transition-colors hover:border-slate-300">
                      <span className="block text-[10px] font-mono font-bold text-slate-700 uppercase">Location Anchor</span>
                      <span className="mt-0.5 block text-xs font-bold text-slate-900">Patna, Bihar, India</span>
                    </div>
                    <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3 text-center transition-colors hover:border-slate-300">
                      <span className="block text-[10px] font-mono font-bold text-slate-700 uppercase">Architecture</span>
                      <span className="mt-0.5 block text-xs font-bold text-slate-900">Decoupled RSC</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Status */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="font-semibold">Systems Operational</span>
                  </span>
                  <span className="text-blue-600 font-bold hover:underline cursor-pointer">
                    PriMAqy Core →
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </PageContainer>
    </div>
  );
}
