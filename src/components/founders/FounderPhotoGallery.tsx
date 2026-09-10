'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Founder, FounderPhoto } from '@/types/founder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { X, Maximize2, Filter } from 'lucide-react';

interface FounderPhotoGalleryProps {
  founder: Founder;
}

export function FounderPhotoGallery({ founder }: FounderPhotoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<FounderPhoto | null>(null);

  const categories: string[] = ['All', ...Array.from(new Set(founder.photoGallery.map((p) => p.category)))];

  const filteredPhotos =
    selectedCategory === 'All'
      ? founder.photoGallery
      : founder.photoGallery.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Visual Documentary"
        title="Photo Journey"
        description="Authentic visual record spanning founder work sessions, study desks, technology experiments, and venture milestones."
        align="left"
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/80 pb-4">
        <span className="flex items-center gap-1 text-xs font-mono font-bold text-slate-500 mr-2">
          <Filter className="h-3.5 w-3.5" />
          Filter Category:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-3 py-1 text-xs font-mono transition-all ${
              selectedCategory === cat
                ? 'bg-blue-600 font-bold text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Bento / Masonry Photo Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredPhotos.map((photo, idx) => {
          // Span 2 columns for hero or index 0 for bento rhythm
          const isLarge = photo.isHero || idx === 0;
          return (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-2xs transition-all duration-300 hover:shadow-md ${
                isLarge ? 'sm:col-span-2 sm:row-span-2 h-80 sm:h-96' : 'h-64'
              }`}
            >
              <Image
                src={photo.url}
                alt={photo.altText || photo.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

              {/* Photo Category Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <Badge variant="outline" className="bg-slate-900/80 text-white border-white/20 backdrop-blur-md text-[10px] font-mono">
                  {photo.category}
                </Badge>
                {photo.isHero && (
                  <Badge variant="status" className="text-[10px] font-mono">
                    ★ Hero
                  </Badge>
                )}
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/60 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 space-y-1 text-white">
                <p className="text-xs font-medium leading-relaxed drop-shadow-xs">
                  {photo.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal Popup */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl text-white space-y-4 p-6">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative h-96 sm:h-[500px] w-full rounded-2xl overflow-hidden bg-slate-950">
              <Image
                src={activePhoto.url}
                alt={activePhoto.altText || activePhoto.caption}
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="status" className="font-mono text-xs">
                  {activePhoto.category}
                </Badge>
                <span className="text-xs font-mono text-slate-400">PriMAqy Founder Photo Gallery</span>
              </div>
              <p className="text-sm font-medium text-slate-200 leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
