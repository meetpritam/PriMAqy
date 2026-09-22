'use client';

import React, { useState } from 'react';
import { openSourceData, RepositoryItem } from '@/data/openSource';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { SpatialBackgroundEngine } from '@/components/3d/SpatialBackgroundEngine';
import { Github, ExternalLink, Copy, Check, Terminal, Code2 } from 'lucide-react';

export function OpenSourceSection() {
  const [copied, setCopied] = useState(false);
  const featuredRepo = openSourceData.repositories.find((r) => r.isFeatured) || openSourceData.repositories[0];
  const otherRepos = openSourceData.repositories.filter((r) => !r.isFeatured);

  const cloneCommand = 'git clone https://github.com/primaqy/core-platform.git';

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full max-w-full overflow-hidden border-y border-slate-200/80 bg-white py-16 sm:py-24">
      <SpatialBackgroundEngine variant="system" />

      <PageContainer size="lg" className="relative z-10 w-full max-w-full">
        <RevealWrapper animation="fade-up">
          <SectionHeading
            eyebrow="OPEN SOURCE & DEVELOPER ECOSYSTEM"
            title={openSourceData.heading}
            description={openSourceData.description}
            align="center"
          />
        </RevealWrapper>

        {/* Featured Repo & Terminal Grid (Desktop Spotlight) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Terminal Command Visual Panel */}
          <div className="lg:col-span-5">
            <RevealWrapper animation="scale-up" delay={100} className="h-full">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-7 space-y-5 h-full flex flex-col justify-between font-mono text-xs shadow-2xl text-slate-300">
                <div className="space-y-4">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-[11px] text-slate-500 font-bold">bash — 80x24</span>
                  </div>

                  {/* Terminal Output */}
                  <div className="space-y-2.5 leading-relaxed text-slate-300">
                    <p className="text-slate-500"># Clone PriMAqy platform architecture</p>
                    <div className="flex items-center justify-between rounded-lg bg-slate-900 border border-slate-800/80 p-3">
                      <code className="text-blue-400 font-semibold truncate pr-2">
                        $ {cloneCommand}
                      </code>
                      <button
                        onClick={handleCopy}
                        aria-label="Copy clone command"
                        className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                      >
                        {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>

                    <p className="text-slate-500 pt-1"># Environment &amp; Build verification</p>
                    <p className="text-slate-400">$ cd core-platform &amp;&amp; npm install</p>
                    <p className="text-emerald-400 font-semibold">$ npm run build</p>
                    <p className="text-slate-500 text-[11px]">✓ Generating static pages (59/59)</p>
                  </div>
                </div>

                {/* Terminal Footer */}
                <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-blue-400" />
                    <span>Public Source Access</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">0 Errors</span>
                </div>
              </div>
            </RevealWrapper>
          </div>

          {/* Featured Repository Spotlight Card */}
          <div className="lg:col-span-7">
            <RevealWrapper animation="fade-up" delay={150} className="h-full">
              <Card
                variant="glow"
                className="h-full p-8 sm:p-9 flex flex-col justify-between relative overflow-hidden bg-white border-blue-200/80"
              >
                <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-25" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                    <div className="flex items-center gap-3">
                      <IconWrapper size="lg" variant="accent">
                        <featuredRepo.icon className="h-6 w-6 text-blue-600" />
                      </IconWrapper>
                      <div>
                        <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold">
                          FEATURED REPOSITORY
                        </span>
                        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                          {featuredRepo.name}
                        </h3>
                      </div>
                    </div>

                    <Badge variant="status">{featuredRepo.status}</Badge>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    {featuredRepo.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {featuredRepo.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="font-mono text-xs">
                        #{topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                      <span>{featuredRepo.language}</span>
                    </span>
                    <span>{featuredRepo.framework}</span>
                  </div>

                  <Button
                    href={featuredRepo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                    shape="pill"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Repository</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </Card>
            </RevealWrapper>
          </div>
        </div>

        {/* Other Open Source Repositories & Frameworks Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherRepos.map((repo: RepositoryItem, idx: number) => {
            const Icon = repo.icon;
            return (
              <RevealWrapper key={repo.id} animation="fade-up" delay={idx * 80}>
                <Card
                  variant="glow"
                  className="space-y-5 p-6 sm:p-7 h-full flex flex-col justify-between bg-white border-slate-200/90 transition-all duration-300 hover:border-blue-400/60"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <IconWrapper size="md" variant="accent">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </IconWrapper>
                      <Badge
                        variant={
                          repo.status === 'Public Repository'
                            ? 'status'
                            : repo.status === 'In Active Development'
                            ? 'glow'
                            : 'outline'
                        }
                      >
                        {repo.status}
                      </Badge>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        {repo.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight mt-1">
                        {repo.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {repo.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {repo.topics.map((top) => (
                        <span
                          key={top}
                          className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md"
                        >
                          #{top}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-blue-600" />
                      <span>{repo.language}</span>
                    </span>

                    <a
                      href={repo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:underline"
                    >
                      <span>Repository</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </Card>
              </RevealWrapper>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
