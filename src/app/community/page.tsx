import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { OpenSourceSection } from '@/components/sections/OpenSourceSection';
import { communityData } from '@/data/community';
import { CheckCircle2 } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Community & Developer Ecosystem — PriMAqy',
  description: 'Join the PriMAqy community ecosystem for developers, creators, students, and digital productivity enthusiasts.',
});

export default function CommunityPage() {
  return (
    <div>
      <PageHeader
        badge="Community Hub"
        title="Connecting builders, creators, and AI enthusiasts."
        description="PriMAqy is building a collaborative community around practical AI tools, prompt frameworks, and software development."
      />

      {/* Target Audiences */}
      <SectionWrapper className="py-20">
        <PageContainer size="lg" className="space-y-12">
          <RevealWrapper animation="fade-up">
            <SectionHeading
              eyebrow="Community Mission"
              title="Who Should Join"
              description="Our community brings together individuals from diverse technical and creative backgrounds."
            />
          </RevealWrapper>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {communityData.audiences.map((aud, idx) => (
              <RevealWrapper key={aud} animation="fade-up" delay={idx * 80}>
                <Card variant="glow" className="flex items-center gap-3 p-6 sm:p-7">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm font-bold text-slate-900">{aud}</span>
                </Card>
              </RevealWrapper>
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Primary Developer & Open Source Ecosystem */}
      <OpenSourceSection />

      {/* Channels Status */}
      <SectionWrapper className="border-t border-slate-200/90 bg-slate-50/70 py-20">
        <PageContainer size="lg" className="space-y-12">
          <RevealWrapper animation="fade-up">
            <SectionHeading
              eyebrow="Channels"
              title="Community Access & Initiatives"
              description="Explore planned communication channels and technical update feeds."
            />
          </RevealWrapper>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {communityData.channels.map((chan, idx) => (
              <RevealWrapper key={chan.name} animation="fade-up" delay={idx * 80}>
                <Card variant="glow" className="space-y-4 p-6 sm:p-7 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <Badge variant={chan.status === 'Active' ? 'status' : 'glow'}>
                      {chan.status}
                    </Badge>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">{chan.name}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">{chan.description}</p>
                  </div>
                  {chan.href ? (
                    <Button href={chan.href} variant="outline" size="sm" className="w-full justify-center mt-2">
                      Join Channel
                    </Button>
                  ) : null}
                </Card>
              </RevealWrapper>
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
