import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { mediaBoilerplate, pressReleasesData } from '@/data/media';
import { Newspaper, Image as ImageIcon, ArrowRight } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Media Center & Press — PriMAqy',
  description: 'Official PriMAqy media resources, boilerplate descriptions, brand assets, and press releases.',
});

export default function MediaPage() {
  return (
    <div>
      <PageHeader
        badge="Press & Communications"
        title="PriMAqy Media Center"
        description="Official company descriptions, brand identity assets, press kit, and announcements."
      />

      {/* Media Quick Navigation */}
      <SectionWrapper className="py-20">
        <PageContainer size="lg" className="space-y-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card variant="glow" className="space-y-4 p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/80 shadow-xs">
                <Newspaper className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Press Kit</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                Official descriptions, founder information, product summaries, and media guidelines.
              </p>
              <Button href="/media/press-kit" variant="outline" size="sm" className="group">
                <span>View Press Kit</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>

            <Card variant="glow" className="space-y-4 p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 shadow-xs">
                <ImageIcon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Brand Assets</h2>
              <p className="text-sm leading-relaxed text-slate-700">
                High-resolution logo wordmarks, monospaced icon badges, and color tokens.
              </p>
              <Button href="/media/brand-assets" variant="outline" size="sm" className="group">
                <span>View Brand Assets</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Boilerplate Summary */}
      <SectionWrapper className="border-t border-slate-200/90 bg-slate-50/70 py-20">
        <PageContainer size="md" className="space-y-6">
          <SectionHeading eyebrow="Boilerplate" title="Official Venture Overview" align="left" />
          <div className="space-y-4 text-base leading-relaxed text-slate-700">
            <p>{mediaBoilerplate.longDescription}</p>
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Press Releases */}
      <SectionWrapper className="py-20">
        <PageContainer size="lg" className="space-y-8">
          <SectionHeading
            eyebrow="Announcements"
            title="Press Releases"
            description="Official announcements and milestones from PriMAqy."
          />

          <div className="space-y-6">
            {pressReleasesData.map((pr) => (
              <Card key={pr.id} variant="glow" className="space-y-3 p-6">
                <span className="text-xs font-mono font-bold text-blue-700">{pr.date}</span>
                <h3 className="text-xl font-bold text-slate-900">{pr.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700">{pr.summary}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
