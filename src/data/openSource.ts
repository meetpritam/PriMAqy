import { GitBranch, Code2, Terminal, Cpu, Sparkles, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface RepositoryItem {
  id: string;
  name: string;
  githubUrl: string;
  description: string;
  category: string;
  language: string;
  framework: string;
  status: 'Public Repository' | 'In Active Development' | 'Planned Resource';
  isFeatured?: boolean;
  icon: LucideIcon;
  topics: string[];
}

export const openSourceData = {
  heading: 'PriMAqy Developer Ecosystem',
  description:
    'Code, tools, and technical frameworks engineered for transparency, collaboration, and community access.',
  officialGithubUrl: 'https://github.com/primaqy',
  repositories: [
    {
      id: 'repo-1',
      name: 'primaqy/core-platform',
      githubUrl: 'https://github.com/primaqy',
      description:
        'Modern Next.js 16 App Router web platform, Geist design system tokens, TypeScript static data architecture, and legal status guardrails.',
      category: 'Core Web Platform',
      language: 'TypeScript',
      framework: 'Next.js 16 / Tailwind CSS',
      status: 'Public Repository' as const,
      isFeatured: true,
      icon: Layers,
      topics: ['nextjs', 'typescript', 'tailwind-v4', 'app-router'],
    },
    {
      id: 'repo-2',
      name: 'primaqy/toolsetic-engine',
      githubUrl: 'https://github.com/primaqy',
      description:
        'AI micro-utility engine, prompt matrix framework, and developer workflow automation tools designed to eliminate daily work friction.',
      category: 'Developer Tooling',
      language: 'TypeScript',
      framework: 'React / AI SDK',
      status: 'In Active Development' as const,
      isFeatured: false,
      icon: Cpu,
      topics: ['ai-tools', 'prompt-matrix', 'productivity', 'workflow'],
    },
    {
      id: 'repo-3',
      name: 'primaqy/open-prompt-matrices',
      githubUrl: 'https://github.com/primaqy',
      description:
        'Structured, contextual prompt repositories and evaluation templates for practical AI tool integration across technical workflows.',
      category: 'Prompt Frameworks',
      language: 'JSON / Markdown',
      framework: 'Prompt Schema v1',
      status: 'Public Repository' as const,
      isFeatured: false,
      icon: Sparkles,
      topics: ['prompt-engineering', 'ai-evals', 'markdown', 'templates'],
    },
    {
      id: 'repo-4',
      name: 'primaqy/flow-pipeline',
      githubUrl: 'https://github.com/primaqy',
      description:
        'Micro-task automation pipeline executing structured transformations across unstructured text, code feeds, and API integrations.',
      category: 'Workflow Automation',
      language: 'TypeScript',
      framework: 'Edge Runtime',
      status: 'Planned Resource' as const,
      isFeatured: false,
      icon: Terminal,
      topics: ['automation', 'edge-runtime', 'pipelines', 'workflows'],
    },
  ],
};
