import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { companyData } from '@/data/company';
import { MapPin, ArrowRight, Compass } from 'lucide-react';

export function StartupAnchorSection() {
  return (
    <SectionWrapper className="relative border-y border-slate-200/80 bg-gradient-to-r from-violet-50/50 via-slate-50 to-cyan-50/50 py-10 sm:py-16 lg:py-20 overflow-hidden">
      {/* Soft Violet/Cyan Ambient Orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-[300px] w-[400px] -translate-y-1/2 bg-[radial-gradient(circle,rgba(147,51,234,0.08),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-[300px] w-[400px] -translate-y-1/2 bg-[radial-gradient(circle,rgba(6,182,212,0.08),transparent_70%)] blur-2xl" />

      <PageContainer size="lg" className="relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-r from-violet-500/20 via-indigo-500/15 to-cyan-500/20 p-1 shadow-[0_20px_40px_-12px_rgba(147,51,234,0.12)]">
          <Card className="rounded-[22px] border-0 bg-white/95 p-5 sm:p-8 lg:p-12 backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              <div className="space-y-4 lg:col-span-8">
                <Badge variant="glow" className="gap-1.5 px-3 py-1">
                  <MapPin className="h-3.5 w-3.5 text-blue-600 animate-bounce" />
                  <span>{companyData.location.formatted}</span>
                </Badge>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Building from Bihar. Thinking globally.
                </h2>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-slate-700 font-normal">
                  PriMAqy is being built from Patna, Bihar, with a long-term ambition to create globally useful technology products and empower digital workflows worldwide.
                </p>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-4 border-t border-slate-100 sm:grid-cols-4 font-mono text-xs">
                  <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200">
                    <span className="block text-[10px] font-bold text-slate-700 uppercase">Location</span>
                    <span className="text-xs font-bold text-slate-900">Patna, Bihar</span>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200">
                    <span className="block text-[10px] font-bold text-slate-700 uppercase">Stage</span>
                    <span className="text-xs font-bold text-slate-900">Early-stage</span>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200">
                    <span className="block text-[10px] font-bold text-slate-700 uppercase">Primary Product</span>
                    <span className="text-xs font-bold text-slate-900">Toolsetic</span>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200">
                    <span className="block text-[10px] font-bold text-slate-700 uppercase">Focus</span>
                    <span className="text-xs font-bold text-slate-900">AI &amp; Software</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 lg:col-span-4 lg:text-right">
                <Button href="/startup" variant="gradient" size="lg" className="w-full justify-center lg:w-auto group">
                  <Compass className="h-4 w-4" />
                  <span>Learn About PriMAqy</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="text-[11px] font-mono font-medium text-slate-700">
                  {companyData.legalGuardrails.entityStatus}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </PageContainer>
    </SectionWrapper>
  );
}
