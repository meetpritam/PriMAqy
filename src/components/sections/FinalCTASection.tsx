import React from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

export function FinalCTASection() {
  return (
    <SectionWrapper className="relative py-24 overflow-hidden">
      {/* Ambient Radial Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] blur-3xl" />

      <PageContainer size="lg" className="relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 p-1 shadow-[0_24px_50px_-12px_rgba(37,99,235,0.25)]">
          <Card className="rounded-[22px] border-0 bg-white/95 p-5 sm:p-10 lg:p-14 backdrop-blur-xl text-center space-y-6">
            <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/80 shadow-xs">
              <Mail className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>

            <div className="space-y-2 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 pt-2 leading-tight">
                Let&apos;s build what&apos;s next.
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal pt-1">
                Whether you&apos;re exploring a partnership, a product, technology, or simply want to connect, we&apos;d like to hear from you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
              <Button href="/contact" variant="gradient" size="lg" className="w-full sm:w-auto group">
                <span>Contact PriMAqy</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/products" variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Products
              </Button>
            </div>
          </Card>
        </div>
      </PageContainer>
    </SectionWrapper>
  );
}
