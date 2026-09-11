import React from 'react';
import { MapPin, Globe, Sparkles, Shield } from 'lucide-react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Badge } from '@/components/ui/Badge';
import { companyData } from '@/data/company';

export function StartupAnchorSection() {
  return (
    <section className="border-b border-[#e5e5e5] bg-[#fafafa] py-16 sm:py-24">
      <PageContainer size="lg">
        <div className="rounded-3xl border border-[#e5e5e5] bg-white p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            
            <div className="space-y-4 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-[#fafafa] px-3.5 py-1 text-xs font-mono text-[#525252]">
                <MapPin className="h-3.5 w-3.5 text-[#2563eb]" />
                <span>Patna, Bihar, India Anchor</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717]">
                Building from Bihar. <br />
                <span className="text-[#2563eb]">Thinking globally.</span>
              </h2>

              <p className="text-base text-[#525252] leading-relaxed max-w-xl">
                PriMAqy is an early-stage AI &amp; Technology Venture founded in Patna, Bihar. We are dedicated to pioneering high-performance software products that solve real-world productivity challenges.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs text-[#171717]">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[#2563eb]" />
                  <span>Global Standard Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#2563eb]" />
                  <span>Transparent Corporate Status</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#e5e5e5] bg-[#fafafa] p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-3">
                  <span className="text-xs font-mono font-semibold uppercase text-[#171717]">Venture Metadata</span>
                  <Badge variant="status" className="text-[10px] font-mono">
                    {companyData.legalGuardrails.entityStatus}
                  </Badge>
                </div>

                <div className="space-y-2.5 text-xs font-mono text-[#525252]">
                  <div className="flex justify-between">
                    <span>HQ Location:</span>
                    <span className="font-semibold text-[#171717]">Patna, Bihar, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stage:</span>
                    <span className="font-semibold text-[#171717]">Early-Stage Venture</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Core Focus:</span>
                    <span className="font-semibold text-[#171717]">AI, ML &amp; SaaS Products</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Flagship Product:</span>
                    <span className="font-semibold text-[#2563eb]">Toolsetic Ecosystem</span>
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
