import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { leadershipData } from '@/data/team';
import { ArrowRight, MapPin, Sparkles, User, ShieldCheck } from 'lucide-react';

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
            align="center"
          />
        </RevealWrapper>

        {/* Founding Team Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto items-stretch">
          {leadershipData.map((member, idx) => (
            <RevealWrapper key={member.id} animation="fade-up" delay={idx * 150} className="h-full">
              <Card
                variant="glow"
                className="h-full flex flex-col justify-between p-7 sm:p-9 relative overflow-hidden bg-white border-slate-200/90"
              >
                <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-20" />

                <div className="relative z-10 space-y-6">
                  {/* Avatar & Header Info */}
                  <div className="flex items-start gap-4 sm:gap-5 border-b border-slate-100 pb-5">
                    <Link
                      href={`/founders/${member.slug}`}
                      className="relative h-20 w-20 sm:h-22 sm:w-22 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-md ring-2 ring-blue-500/20 bg-slate-950 block group/avatar"
                      aria-label={`View ${member.name} profile`}
                    >
                      {member.avatarUrl ? (
                        <Image
                          src={member.avatarUrl}
                          alt={`${member.name} — ${member.role} of PriMAqy`}
                          fill
                          sizes="88px"
                          className="object-cover transition-transform duration-300 group-hover/avatar:scale-105"
                          priority
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-900 text-blue-300 font-mono font-black text-xl tracking-wider">
                          {member.name.split(' ').map((n) => n[0]).join('').substring(0, 2)}
                        </div>
                      )}
                    </Link>

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <Badge variant={member.role === 'Founder' ? 'status' : 'accent'} className="font-mono text-xs">
                          {member.role}
                        </Badge>
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                          0{idx + 1} / 02
                        </span>
                      </div>
                      <Link href={`/founders/${member.slug}`} className="block group/title">
                        <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover/title:text-blue-600 transition-colors truncate">
                          {member.name}
                        </h3>
                      </Link>
                      <p className="text-xs font-mono font-semibold text-slate-500 truncate">
                        {member.title}
                      </p>
                    </div>
                  </div>

                  {/* Card Tagline Quote */}
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-medium italic bg-slate-50/90 p-4 rounded-xl border border-slate-200/80">
                    &quot;{member.cardTagline}&quot;
                  </p>

                  {/* Short Bio */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {member.shortBio}
                  </p>

                  {/* Focus Tags */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Core Responsibilities &amp; Focus
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.rolesList.slice(0, 4).map((roleTag) => (
                        <Badge key={roleTag} variant="secondary" className="font-mono text-[11px]">
                          {roleTag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Info & CTA */}
                <div className="relative z-10 pt-5 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                    <MapPin className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>Patna, Bihar, India</span>
                  </div>

                  {showDetailButtons && (
                    <Link
                      href={`/founders/${member.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors py-1.5"
                    >
                      <span>View {member.role === 'Founder' ? 'Founder Deep-Dive' : 'Profile'}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
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
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Explore PriMAqy
                </h3>
                <p className="text-sm text-slate-600">
                  Discover the products, technology and ideas being built by the PriMAqy team.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 items-stretch sm:items-center">
                <Button href="/products" variant="gradient" size="md" shape="pill">
                  <span>Explore Products</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
                <Button href="/products/toolsetic" variant="outline" size="md" shape="pill">
                  <span>Explore Toolsetic</span>
                </Button>
                <Button href="/insights" variant="outline" size="md" shape="pill">
                  <span>Read Insights</span>
                </Button>
                <Button href="/founders" variant="outline" size="md" shape="pill">
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
