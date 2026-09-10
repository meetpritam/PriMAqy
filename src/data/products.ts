import type { ProductItem } from '@/types/product';

export const productsData: ProductItem[] = [
  {
    id: 'toolsetic',
    slug: 'toolsetic',
    name: 'Toolsetic',
    tagline: 'An AI-first digital productivity ecosystem.',
    positioning:
      'An AI-first digital productivity ecosystem for developers, creators, students, founders, and modern teams.',
    description:
      'Toolsetic brings together essential AI-driven utilities, content assistance, code optimization, document management, and workflow automation into a unified, high-speed interface.',
    targetAudience: [
      'Developers',
      'Creators',
      'Students',
      'Founders',
      'Modern Teams',
    ],
    features: [
      {
        id: 'ai-utilities',
        title: 'Intelligent Micro-Utilities',
        description:
          'High-speed, single-purpose AI helpers for code refactoring, content synthesis, and document formatting.',
        iconName: 'Wand2',
      },
      {
        id: 'unified-workspace',
        title: 'Unified Digital Workspace',
        description:
          'Consolidate fragmented tools into one responsive, clutter-free workspace.',
        iconName: 'LayoutGrid',
      },
      {
        id: 'privacy-first',
        title: 'Privacy-First Architecture',
        description:
          'Zero unauthorized tracking and client-side security isolation for user data.',
        iconName: 'ShieldCheck',
      },
    ],
    status: 'In Development',
    isFlagship: true,
  },
];
