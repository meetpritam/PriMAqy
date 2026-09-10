import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/layout/PageHeader';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { communityData } from '@/data/community';
import { CheckCircle2 } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Community Ecosystem — PriMAqy',
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
          <SectionHeading
            eyebrow="Community Mission"
            title="Who Should Join"
            description="Our community brings together individuals from diverse technical and creative backgrounds."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {communityData.audiences.map((aud) => (
              <Card key={aud} variant="glow" className="flex items-center gap-3 p-6">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                <span className="text-sm font-extrabold text-slate-900">{aud}</span>
              </Card>
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>

      {/* Channels Status */}
      <SectionWrapper className="border-t border-slate-200/90 bg-slate-50/70 py-20">
        <PageContainer size="lg" className="space-y-12">
          <SectionHeading
            eyebrow="Channels"
            title="Community Access & Initiatives"
            description="Explore planned communication channels and technical update feeds."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {communityData.channels.map((chan) => (
              <Card key={chan.name} variant="glow" className="space-y-4 p-6">
                <Badge variant={chan.status === 'Active' ? 'status' : 'glow'}>
                  {chan.status}
                </Badge>
                <h3 className="text-xl font-bold text-slate-900">{chan.name}</h3>
                <p className="text-xs leading-relaxed text-slate-700">{chan.description}</p>
                {chan.href ? (
                  <Button href={chan.href} variant="outline" size="sm" className="w-full justify-center">
                    Join Channel
                  </Button>
                ) : null}
              </Card>
            ))}
          </div>
        </PageContainer>
      </SectionWrapper>
    </div>
  );
}
