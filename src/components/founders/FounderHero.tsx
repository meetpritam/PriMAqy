'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Founder } from '@/types/founder';
import { Button } from '@/components/ui/Button';
import { MapPin, Sparkles, ArrowDown, Mail } from 'lucide-react';

interface FounderHeroProps {
  founder: Founder;
}

export function FounderHero({ founder }: FounderHeroProps) {
  // Get active hero image from available photos or avatarUrl
  const availablePhotos = founder.photoGallery?.filter((p) => Boolean(p.url)) || [];
  const [selectedPhotoUrl, setSelectedPhotoUrl] = useState<string>(
    availablePhotos.length > 0 ? availablePhotos[0].url : founder.avatarUrl || ''
  );

  const currentPhoto = selectedPhotoUrl || founder.avatarUrl;
  const initials = founder.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2);

  return (
    <div className="relative overflow-hidden border-b border-slate-200/90 bg-gradient-to-b from-slate-100/80 via-slate-50 to-white py-10 sm:py-20 lg:py-24">
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-10 -z-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Photo / Avatar Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
            <div className="relative aspect-4/5 w-full max-w-md overflow-hidden rounded-3xl border-4 border-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.15)] ring-1 ring-slate-200 bg-slate-900">
              {currentPhoto ? (
                <Image
                  src={currentPhoto}
                  alt={`${founder.name} ${founder.role} PriMAqy`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-opacity duration-300"
                  priority
                />
              ) : (
                /* Premium Placeholder Treatment when no photo is available */
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-8 text-center space-y-4">
                  <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-blue-600/20 border border-blue-400/30 text-4xl font-black font-mono tracking-widest text-blue-300 shadow-inner">
                    {initials || 'P'}
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
                      {founder.company}
                    </span>
                    <span className="text-base font-bold text-slate-200 block">
                      {founder.publicDisplayName}
                    </span>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono pointer-events-none">
                <span className="rounded-lg bg-slate-900/80 px-2.5 py-1 backdrop-blur-md border border-white/20">
                  {founder.role}
                </span>
                <span className="flex items-center gap-1 rounded-lg bg-blue-600/90 px-2.5 py-1 backdrop-blur-md">
                  <MapPin className="h-3 w-3" />
                  <span>{founder.location}</span>
                </span>
              </div>
            </div>

            {/* If 2-3 photos exist, display natural thumbnail selector strip */}
            {availablePhotos.length > 1 && availablePhotos.length <= 3 && (
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[11px] font-mono text-slate-500 font-medium mr-1">Photos:</span>
                {availablePhotos.map((photo, idx) => (
                  <button
                    key={photo.id || idx}
                    onClick={() => setSelectedPhotoUrl(photo.url)}
                    className={`relative h-12 w-12 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedPhotoUrl === photo.url
                        ? 'border-blue-600 ring-2 ring-blue-500/30 scale-105'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={photo.url}
                      alt={photo.caption || 'Founder Photo'}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hero Content Column */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-1 text-xs font-mono font-bold text-blue-700 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Official {founder.role} Profile</span>
            </div>

            <div className="space-y-1.5">
              <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.12] sm:leading-[1.08]">
                {founder.publicDisplayName}
              </h1>
              <p className="text-lg sm:text-xl font-bold font-mono text-blue-700">
                {founder.role}, {founder.company}
              </p>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
              {founder.heroStatement}
            </p>

            <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 sm:p-5 shadow-xs backdrop-blur-md space-y-2">
              <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                Venture Focus
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                {founder.shortBio}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <Button href="#current-work" variant="gradient" size="lg" className="shadow-md justify-center">
                <span>Explore Work</span>
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button href="#contact" variant="outline" size="lg" className="justify-center">
                <span>Connect</span>
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

