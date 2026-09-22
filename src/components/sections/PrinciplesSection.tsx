'use client';

import React, { useState } from 'react';
import { companyPrinciples, PrincipleItem } from '@/data/principles';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Badge } from '@/components/ui/Badge';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { SpatialBackgroundEngine } from '@/components/3d/SpatialBackgroundEngine';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function PrinciplesSection() {
  const [activePrincipleId, setActivePrincipleId] = useState<string>(companyPrinciples[0].id);

  const activePrinciple =
    companyPrinciples.find((p) => p.id === activePrincipleId) || companyPrinciples[0];

  return (
    <section className="relative w-full max-w-full overflow-hidden border-y border-slate-200/80 bg-slate-50/70 py-16 sm:py-24">
      <SpatialBackgroundEngine variant="hero" />

      <PageContainer size="lg" className="relative z-10 w-full max-w-full">
        {/* Section Heading */}
        <RevealWrapper animation="fade-up">
          <SectionHeading
            eyebrow="ENGINEERING HANDBOOK & PHILOSOPHY"
            title="How PriMAqy Builds Technology."
            description="The engineering principles and ethical standards that guide every line of code we write."
            align="center"
          />
        </RevealWrapper>

        {/* Interactive Desktop Handbook Spotlight */}
        <div className="mt-12 sm:mt-16 hidden lg:grid grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Index */}
          <div className="col-span-5 space-y-2 flex flex-col justify-between">
            {companyPrinciples.map((item) => {
              const isSelected = item.id === activePrinciple.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePrincipleId(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group focus-ring ${
                    isSelected
                      ? 'border-blue-500/80 bg-white shadow-md shadow-blue-500/5'
                      : 'border-slate-200/70 bg-white/60 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {item.number}
                    </span>
                    <IconWrapper
                      size="sm"
                      variant={isSelected ? 'accent' : 'default'}
                      className="transition-colors"
                    >
                      <Icon
                        className={`h-4 w-4 ${
                          isSelected ? 'text-blue-600' : 'text-slate-500 group-hover:text-slate-800'
                        }`}
                      />
                    </IconWrapper>
                    <span
                      className={`text-sm font-bold tracking-tight ${
                        isSelected ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isSelected && (
                      <Badge variant="glow" className="font-mono text-[10px]">
                        Active
                      </Badge>
                    )}
                    <ArrowRight
                      className={`h-3.5 w-3.5 transition-transform ${
                        isSelected
                          ? 'text-blue-600 translate-x-0.5'
                          : 'text-slate-300 opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Principle Spotlight Detail Panel */}
          <div className="col-span-7">
            <Card
              variant="glow"
              className="h-full p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden bg-white/95 border-blue-200/80"
            >
              <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-25" />

              <div className="relative z-10 space-y-6">
                {/* Header Row */}
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-5">
                  <div className="flex items-center gap-3">
                    <IconWrapper size="lg" variant="accent">
                      <activePrinciple.icon className="h-6 w-6 text-blue-600" />
                    </IconWrapper>
                    <div>
                      <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold">
                        PRINCIPLE {activePrinciple.number} / 08
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        {activePrinciple.name}
                      </h3>
                    </div>
                  </div>

                  <Badge variant="secondary" className="font-mono text-xs">
                    {activePrinciple.category}
                  </Badge>
                </div>

                {/* Primary Description */}
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    Core Statement
                  </span>
                  <p className="text-lg font-medium text-slate-900 leading-relaxed">
                    &quot;{activePrinciple.desc}&quot;
                  </p>
                </div>

                {/* Engineering Implication */}
                <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>ENGINEERING IMPLICATION</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {activePrinciple.engineeringEthos}
                  </p>
                </div>
              </div>

              {/* Bottom Footer Info */}
              <div className="relative z-10 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>PriMAqy Engineering Handbook</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  <span>Verified Standard</span>
                </span>
              </div>
            </Card>
          </div>
        </div>

        {/* Responsive Grid View (Visible across mobile/tablet, and accessible to all viewports) */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companyPrinciples.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <RevealWrapper key={item.id} animation="fade-up" delay={idx * 60}>
                <Card
                  variant="glow"
                  className="space-y-4 p-6 sm:p-7 h-full flex flex-col justify-between bg-white border-slate-200/90 transition-all duration-300 hover:border-blue-400/60"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <IconWrapper size="md" variant="accent">
                        <IconComp className="h-5 w-5 text-blue-600" />
                      </IconWrapper>
                      <Badge variant="secondary" className="font-mono text-xs">
                        {item.number}
                      </Badge>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900 tracking-tight">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{item.category}</span>
                  </div>
                </Card>
              </RevealWrapper>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
