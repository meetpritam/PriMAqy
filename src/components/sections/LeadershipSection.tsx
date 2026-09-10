import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { leadershipData } from '@/data/team';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

interface LeadershipSectionProps {
  className?: string;
  showDetailButtons?: boolean;
  showCTA?: boolean;
}

export function LeadershipSection({
  className = '',
  showDetailButtons = true,
  showCTA = true,
}: LeadershipSectionProps) {
  return (
    <SectionWrapper className={`relative border-y border-slate-200/80 bg-gradient-to-b from-slate-50 via-slate-100/50 to-slate-50 py-24 ${className}`}>
      <PageContainer size="lg" className="space-y-16">
        <SectionHeading
          eyebrow="Leadership"
          title="Building PriMAqy with vision, technology and execution."
          description="PriMAqy is being built by a small founding team focused on creating technology products and AI-driven systems for the next generation."
        />

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {leadershipData.map((member) => (
            <Card key={member.id} variant="glow" className="flex flex-col justify-between p-5 sm:p-8 space-y-6 text-center">
              <div className="space-y-4">
                
                {/* Avatar with Halo Glow */}
                <div className="relative mx-auto h-28 w-28">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 opacity-30 blur-md" />
                  <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-md">
                    {member.avatarUrl ? (
                      <Image
                        src={member.avatarUrl}
                        alt={`${member.name} — ${member.role} of PriMAqy`}
                        fill
                        sizes="112px"
                        className="object-cover"
                        priority
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-bold text-slate-500 text-2xl">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/80">
                    <Sparkles className="h-3 w-3" />
                    <span>{member.role}</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 pt-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 font-mono">
                    {member.title}
                  </p>
                </div>

                <p className="text-xs leading-relaxed text-slate-700 italic bg-slate-50/80 p-3 rounded-xl border border-slate-200/80">
                  &quot;{member.cardTagline}&quot;
                </p>

                <p className="text-xs leading-relaxed text-slate-600">
                  {member.shortBio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-blue-600" />
                  <span>Patna, Bihar, India</span>
                </div>

                {showDetailButtons && (
                  <Link
                    href={`/founders/${member.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors py-2 min-h-[44px] touch-manipulation"
                  >
                    <span>View {member.role === 'Founder' ? 'Founder Story' : 'Profile'} →</span>
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>

        {showCTA && (
          <div className="pt-10 border-t border-slate-200/80 text-center space-y-6 max-w-2xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Explore PriMAqy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Discover the products, technology and ideas being built by the PriMAqy team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 items-stretch sm:items-center">
              <Button href="/products" variant="gradient" size="md" className="w-full sm:w-auto">
                <span>Explore Products</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
              <Button href="/products/toolsetic" variant="outline" size="md" className="w-full sm:w-auto">
                <span>Explore Toolsetic</span>
              </Button>
              <Button href="/insights" variant="outline" size="md" className="w-full sm:w-auto">
                <span>Read Insights</span>
              </Button>
              <Button href="/founders" variant="outline" size="md" className="w-full sm:w-auto">
                <span>Meet Founders</span>
              </Button>
            </div>
          </div>
        )}
      </PageContainer>
    </SectionWrapper>
  );
}
