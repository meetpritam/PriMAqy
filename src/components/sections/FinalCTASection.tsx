import React from 'react';
import { ArrowRight, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import { SpatialBackgroundEngine } from '@/components/3d/SpatialBackgroundEngine';

export function FinalCTASection() {
  const whatsappUrl = 'https://wa.me/918252468903?text=Hello%20PriMAqy%20Team%2C%20I%20would%20like%20to%20connect.';

  return (
    <section className="relative w-full max-w-full overflow-hidden border-b border-[#e5e5e5] bg-spatial-cta py-16 sm:py-24">
      <SpatialBackgroundEngine variant="cta" />

      <PageContainer size="lg" className="relative z-10 w-full max-w-full">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-14 text-white shadow-2xl w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-mono text-white/90 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>START A CONVERSATION</span>
            </div>

            <h2 className="text-3xl min-[400px]:text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-white">
              Let&apos;s build what&apos;s next.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Have an inquiry, partnership proposal, or feedback for PriMAqy? Reach out directly to our founding team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-lg transition-all"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp (+91 8252468903)</span>
              </a>

              <Button href="/contact" variant="secondary" size="lg" shape="pill" className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Mail className="h-4 w-4" />
                <span>Contact Page</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="pt-4 text-xs font-mono text-slate-400">
              Patna, Bihar, India • Responsive Support within 24 Hours
            </div>

          </div>
        </div>
      </PageContainer>
    </section>
  );
}
