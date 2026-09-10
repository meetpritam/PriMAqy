import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { productsData } from '@/data/products';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Our Products — Toolsetic & AI Ecosystem',
  description: 'Explore PriMAqy product portfolio, featuring Toolsetic AI-first productivity ecosystem.',
});

export default function ProductsPage() {
  const toolsetic = productsData.find((p) => p.id === 'toolsetic')!;

  const futureProducts = [
    {
      name: 'PriMAqy Flow',
      category: 'Workflow Automation',
      status: 'Coming Soon',
      description: 'Intelligent process automation for developer and creator pipelines.',
    },
    {
      name: 'PriMAqy Insights API',
      category: 'Developer Infrastructure',
      status: 'Planned',
      description: 'High-speed API endpoints for integrating AI micro-utilities into external applications.',
    },
  ];

  return (
    <div>
      <PageHeader
        badge="Product Portfolio"
        title="Practical tools for the AI era."
        description="We build modular digital products designed to simplify complex workflows, accelerate creation, and improve productivity."
      />

      {/* Flagship Product: Toolsetic */}
      <SectionWrapper className="py-10 sm:py-16 lg:py-20">
        <PageContainer size="lg" className="space-y-8 sm:space-y-12">
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/15 to-cyan-500/20 p-1 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)]">
              <Card className="rounded-[22px] border-0 bg-white/95 p-5 sm:p-8 lg:p-10 backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/90 pb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {toolsetic.name}
                      </h2>
                      <Badge variant="glow">{toolsetic.status}</Badge>
                    </div>
                    <p className="mt-1 text-xs font-mono font-bold text-blue-700">
                      {toolsetic.tagline}
                    </p>
                  </div>

                  <Button href="/products/toolsetic" variant="gradient" size="md" className="group w-full sm:w-auto justify-center">
                    <span>Explore Toolsetic</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <div className="mt-6 space-y-6">
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                    {toolsetic.description}
                  </p>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                        Target Audience
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {toolsetic.targetAudience.map((item) => (
                          <Badge key={item} variant="secondary" className="bg-slate-100 text-slate-800 border-slate-200/90 font-semibold">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                        Core Features
                      </h3>
                      <ul className="space-y-1.5 text-xs font-medium text-slate-800">
                        {toolsetic.features.map((f) => (
                          <li key={f.id} className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                            <span>{f.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Future Products Pipeline */}
      <SectionWrapper className="border-t border-slate-200/90 bg-slate-50/70 py-10 sm:py-16 lg:py-20">
        <PageContainer size="lg" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Future Product Pipeline</h2>
            <p className="text-xs sm:text-sm text-slate-700">Products currently under research and initial architectural specification.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            {futureProducts.map((p) => (
              <Card key={p.name} variant="glow" className="space-y-3 p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">{p.name}</h3>
                  <Badge variant="outline" className="gap-1 text-slate-800 font-semibold">
                    <Clock className="h-3 w-3 text-slate-500" />
                    <span>{p.status}</span>
                  </Badge>
                </div>
                <p className="text-xs font-mono font-bold text-blue-700">{p.category}</p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{p.description}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
