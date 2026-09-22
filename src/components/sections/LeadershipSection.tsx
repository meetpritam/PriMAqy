import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
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
    <section className={`border-b border-slate-200/80 bg-white py-16 sm:py-24 ${className}`}>
      <PageContainer size="lg" className="space-y-16">
        <RevealWrapper animation="fade-up">
          <SectionHeading
            eyebrow="LEADERSHIP & TEAM"
            title="Engineered by a dedicated founding team."
            description="PriMAqy is built by engineers and builders dedicated to creating practical AI systems for tomorrow's digital economy."
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {leadershipData.map((member, idx) => (
            <RevealWrapper key={member.id} animation="fade-up" delay={idx * 150}>
              <Card
                variant="glow"
                className="h-full flex flex-col justify-between text-center p-6 sm:p-8"
              >
                <div className="space-y-4">
                  {/* Avatar Image Container */}
                  <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-sm">
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

                  <div className="space-y-1.5">
                    <Badge variant="accent" className="mx-auto text-[11px] font-mono">
                      <Sparkles className="h-3 w-3 text-blue-600" />
                      <span>{member.role}</span>
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 pt-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-500">
                      {member.title}
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-600 italic bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                    &quot;{member.cardTagline}&quot;
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {member.shortBio}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-slate-500">
                    <MapPin className="h-3.5 w-3.5 text-blue-600" />
                    <span>Patna, Bihar, India</span>
                  </div>

                  {showDetailButtons && (
                    <Link
                      href={`/founders/${member.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline py-2 min-h-[44px]"
                    >
                      <span>View {member.role === 'Founder' ? 'Founder Deep-Dive' : 'Profile'} →</span>
                    </Link>
                  )}
                </div>
              </Card>
            </RevealWrapper>
          ))}
        </div>

        {showCTA && (
          <RevealWrapper animation="fade-up" delay={200}>
            <div className="pt-10 border-t border-slate-200/80 text-center space-y-6 max-w-2xl mx-auto">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                  Explore PriMAqy
                </h3>
                <p className="text-sm text-slate-600">
                  Discover the products, technology and ideas being built by the PriMAqy team.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 items-stretch sm:items-center">
                <Button href="/products" variant="primary" size="md" shape="pill">
                  <span>Explore Products</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
                <Button href="/products/toolsetic" variant="secondary" size="md" shape="pill">
                  <span>Explore Toolsetic</span>
                </Button>
                <Button href="/insights" variant="secondary" size="md" shape="pill">
                  <span>Read Insights</span>
                </Button>
                <Button href="/founders" variant="secondary" size="md" shape="pill">
                  <span>Meet Founders</span>
                </Button>
              </div>
            </div>
          </RevealWrapper>
        )}
      </PageContainer>
    </section>
  );
}
