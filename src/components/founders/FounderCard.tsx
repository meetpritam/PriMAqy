import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Founder } from '@/types/founder';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MapPin } from 'lucide-react';

interface FounderCardProps {
  founder: Founder;
}

export function FounderCard({ founder }: FounderCardProps) {
  return (
    <Card variant="glow" className="flex flex-col justify-between p-5 sm:p-8 space-y-5 sm:space-y-6">
      <div className="space-y-5 sm:space-y-6">
        {/* Header Avatar & Role Badge */}
        <div className="flex items-start justify-between gap-4">
          <Link
            href={`/founders/${founder.slug}`}
            className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-md ring-2 ring-blue-500/20 bg-slate-900 block group/avatar"
            aria-label={`View ${founder.publicDisplayName} profile`}
          >
            {founder.avatarUrl ? (
              <Image
                src={founder.avatarUrl}
                alt={`${founder.name} ${founder.role} PriMAqy`}
                fill
                sizes="80px"
                className="object-cover transition-transform duration-300 group-hover/avatar:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-900 text-blue-300 font-mono font-black text-xl tracking-wider">
                {founder.name.split(' ').map((n) => n[0]).join('').substring(0, 2)}
              </div>
            )}
          </Link>
          <Badge variant={founder.isFounder ? 'status' : 'glow'} className="font-mono text-xs">
            {founder.role}
          </Badge>
        </div>

        {/* Name & Title */}
        <div className="space-y-1">
          <Link href={`/founders/${founder.slug}`} className="block group/title">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover/title:text-blue-600 transition-colors">
              {founder.publicDisplayName}
            </h3>
          </Link>
          <p className="text-sm font-semibold text-blue-700 font-mono">
            {founder.role}, {founder.company}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pt-1">
            <MapPin className="h-3.5 w-3.5 text-slate-400" />
            <span>{founder.location}</span>
          </div>
        </div>

        {/* Short Bio */}
        <p className="text-sm leading-relaxed text-slate-700 font-normal">
          {founder.shortBio}
        </p>

        {/* Focus Areas */}
        <div className="space-y-2 pt-2">
          <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700">
            Key Focus Areas
          </span>
          <div className="flex flex-wrap gap-1.5">
            {founder.whatIBuild.slice(0, 4).map((area) => (
              <span
                key={area}
                className="inline-flex items-center rounded-lg border border-slate-200/90 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-2xs"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-4 border-t border-slate-200/90 relative z-10">
        <Button href={`/founders/${founder.slug}`} variant="outline" size="sm" className="w-full justify-between group">
          <span>View Profile</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
}
