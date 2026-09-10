import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Logo } from '@/components/branding/Logo';
import { brandAssetsData } from '@/data/media';

export const metadata = constructMetadata({
  title: 'Brand Assets — PriMAqy',
  description: 'Download high-resolution PriMAqy logos, wordmarks, icon badges, and brand color tokens.',
});

export default function BrandAssetsPage() {
  return (
    <div>
      <PageHeader
        badge="Brand Identity"
        title="Official Brand Assets"
        description="Official high-resolution logos, wordmarks, and visual identity guidelines."
      />

      <SectionWrapper className="py-16">
        <PageContainer size="lg" className="space-y-12">
          {/* Logo Preview Matrix */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card variant="glow" className="space-y-4 p-8 text-center bg-white border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">Light Canvas Wordmark</span>
              <div className="py-8 flex justify-center">
                <Logo showTagline />
              </div>
            </Card>

            <Card className="space-y-4 p-8 text-center bg-slate-900 text-white border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">Dark Canvas Wordmark</span>
              <div className="py-8 flex justify-center">
                <Logo showTagline darkText />
              </div>
            </Card>
          </div>

          {/* Asset List */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {brandAssetsData.map((asset) => (
              <Card key={asset.id} variant="glow" className="space-y-3 p-6">
                <span className="text-xs font-mono font-bold text-slate-700">{asset.category}</span>
                <h3 className="text-lg font-bold text-slate-900">{asset.name}</h3>
                <p className="text-xs leading-relaxed text-slate-700">{asset.description}</p>
                <div className="pt-2 text-xs font-mono font-bold text-blue-700">
                  Format: {asset.format} • {asset.dimensions}
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
