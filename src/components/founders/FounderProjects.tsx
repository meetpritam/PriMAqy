import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Founder } from '@/types/founder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight } from 'lucide-react';

interface FounderProjectsProps {
  founder: Founder;
}

export function FounderProjects({ founder }: FounderProjectsProps) {
  return (
    <div id="projects" className="space-y-8">
      <SectionHeading
        eyebrow="Venture & Product Portfolio"
        title="Projects & Building Endeavors"
        description="Factual overview of venture initiatives, products, and developer software created by the founder."
        align="left"
      />

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
        {founder.projects.map((project) => (
          <Card key={project.id} variant="glow" className="flex flex-col justify-between p-5 sm:p-6 space-y-4">
            <div className="space-y-4">
              <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-2xs">
                <Image
                  src={project.imageUrl || '/images/logo.jpg'}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="status" className="font-mono text-[10px]">
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{project.name}</h3>
                <p className="text-xs font-mono font-bold text-blue-700">{project.role}</p>
                <p className="text-xs leading-relaxed text-slate-700 font-normal">{project.description}</p>
              </div>

              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 block">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-700 border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {project.url && (
              <div className="pt-3 border-t border-slate-100">
                <Link
                  href={project.url}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 hover:underline group min-h-[44px] py-2 touch-manipulation"
                >
                  <span>Explore {project.name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
