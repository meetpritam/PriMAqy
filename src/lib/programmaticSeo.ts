/**
 * Programmatic SEO Architecture for PriMAqy.
 * Guarantees zero thin doorway pages and enforces unique, high-intent topic definitions.
 */

export interface TopicHub {
  slug: string;
  title: string;
  definition: string;
  useCases: string[];
  targetAudience: string;
  relatedInsightSlugs: string[];
  productLink: string;
}

export const topicHubsData: TopicHub[] = [
  {
    slug: 'ai-micro-tools',
    title: 'AI Micro-Tools for Digital Productivity',
    definition: 'Single-purpose, high-speed artificial intelligence utilities designed to perform discrete workflow tasks without subscription bloat.',
    useCases: [
      'Automated code refactoring & snippet generation',
      'High-speed content & prompt transformation',
      'Research paper summarization',
    ],
    targetAudience: 'Developers, Creators & Students',
    relatedInsightSlugs: [
      'engineering-primaqy-architecture-foundation',
      'toolsetic-ai-first-productivity-vision',
    ],
    productLink: '/products/toolsetic',
  },
  {
    slug: 'prompt-libraries',
    title: 'Tested Prompt Libraries & Frameworks',
    definition: 'Curated and mathematically verified prompt blueprints optimized for major large language models (LLMs).',
    useCases: [
      'Structured JSON output formatting',
      'Technical specification extraction',
      'System prompt guardrails',
    ],
    targetAudience: 'AI Engineers & Product Teams',
    relatedInsightSlugs: [
      'mathematical-foundations-of-llm-embeddings',
      'toolsetic-ai-first-productivity-vision',
    ],
    productLink: '/products/toolsetic',
  },
];
