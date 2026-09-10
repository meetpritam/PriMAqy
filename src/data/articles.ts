import { Article, Category, Tag } from '@/types/article';

export const categoriesData: Category[] = [
  { id: 'cat-1', slug: 'ai-machine-learning', name: 'AI & Machine Learning', description: 'Insights on LLM integration, embeddings, and intelligent micro-tools.' },
  { id: 'cat-2', slug: 'software-engineering', name: 'Software Engineering', description: 'Next.js App Router, React Server Components, and scalable Web architecture.' },
  { id: 'cat-3', slug: 'toolsetic', name: 'Toolsetic', description: 'Product updates and architecture notes for the Toolsetic ecosystem.' },
  { id: 'cat-4', slug: 'founder-notes', name: 'Founder Notes', description: 'Building in public from Patna, Bihar, India.' },
  { id: 'cat-5', slug: 'mathematics', name: 'Mathematics & Algorithms', description: 'Algorithmic foundations and mathematical frameworks powering software.' },
];

export const tagsData: Tag[] = [
  { id: 'tag-1', slug: 'ai', name: 'AI' },
  { id: 'tag-2', slug: 'nextjs', name: 'Next.js' },
  { id: 'tag-3', slug: 'typescript', name: 'TypeScript' },
  { id: 'tag-4', slug: 'productivity', name: 'Productivity' },
  { id: 'tag-5', slug: 'toolsetic', name: 'Toolsetic' },
  { id: 'tag-6', slug: 'startup', name: 'Startup' },
  { id: 'tag-7', slug: 'architecture', name: 'Architecture' },
];

export const articlesData: Article[] = [
  {
    id: 'art-1',
    slug: 'engineering-primaqy-architecture-foundation',
    title: 'Engineering PriMAqy: Building a Scalable Next.js 16+ Web Platform',
    excerpt: 'A deep dive into our modular App Router architecture, TypeScript domain boundaries, and zero-FOUC theme engine.',
    content: `Building modern web applications requires a disciplined balance between user interface aesthetics and codebase maintainability. When initializing PriMAqy, our engineering objective was clear: establish a foundation that scales seamlessly across corporate, product, and ecosystem surfaces without architectural debt.

### 1. Decoupled Data & Presentation Layers
Rather than embedding dynamic content inside UI components, PriMAqy isolates domain schemas in \`src/types/\` and structured datasets in \`src/data/\`. This decoupling ensures that transitioning from static configuration to dynamic CMS or database infrastructure requires zero UI component rewrites.

### 2. React Server Components & Micro-Bundle Performance
By leveraging Next.js 16+ App Router, the majority of PriMAqy pages execute strictly as pure React Server Components (RSC). Client-side JavaScript bundle sizes are minimized by isolating interactivity—such as theme toggling, menu overlays, and form validation—into tightly-scoped client components (\`"use client"\`).

### 3. High-Contrast Geist Aesthetics
Adopting Vercel's Geist design language provided PriMAqy with a crisp developer-platform aesthetic: stark near-white canvas (\`#fafafa\`), near-black ink (\`#171717\`), 1px hairline borders (\`#ebebeb\`), and bimodal button radii (100px marketing pills vs 6px app controls).`,
    authorId: 'author-pritam-kumar',
    category: 'Software Engineering',
    tags: ['Next.js', 'TypeScript', 'Architecture'],
    contentType: 'article',
    status: 'published',
    publishedAt: '2026-08-20',
    readingTime: '5 min read',
    featured: true,
    seoTitle: 'Engineering PriMAqy Architecture — Technical Insight',
    seoDescription: 'Explore the technical architecture, Next.js App Router patterns, and Geist design integration powering PriMAqy.',
  },
  {
    id: 'art-2',
    slug: 'toolsetic-ai-first-productivity-vision',
    title: 'Toolsetic Vision: Unifying Micro-Tools, Prompts, and Automations',
    excerpt: 'Why we are building Toolsetic to eliminate digital tool fragmentation for creators, developers, and founders.',
    content: `Digital professionals today face severe fragmentation. Creators, developers, students, and founders spend hours jumping between separate AI playgrounds, testing unverified prompt frameworks, and managing multiple standalone tool subscriptions.

### The Fragmented Ecosystem Friction
While artificial intelligence capabilities are accelerating rapidly, practical user accessibility remains inefficient. The obstacle is not a shortage of models; it is the friction of tool discovery and workflow integration.

### Toolsetic as a Unified Workspace
Toolsetic is engineered as an AI-first productivity ecosystem. By organizing single-purpose intelligent micro-tools, tested prompt libraries, process templates, and task automation engines into a single unified workspace, Toolsetic enables users to focus on output rather than tool management.

### Milestone Trajectory
As outlined in our public venture roadmap, Toolsetic Phase 01 focuses on micro-tool architecture and prompt discovery, paving the way for full task automation in Phase 02.`,
    authorId: 'author-pritam-kumar',
    category: 'Toolsetic',
    tags: ['Toolsetic', 'AI', 'Productivity'],
    contentType: 'product_update',
    status: 'published',
    publishedAt: '2026-08-22',
    readingTime: '4 min read',
    featured: false,
    seoTitle: 'Toolsetic Product Vision & Architecture — PriMAqy',
    seoDescription: 'Learn about Toolsetic, PriMAqy flagship AI productivity ecosystem unifying micro-tools, prompt frameworks, and workflow automation.',
  },
  {
    id: 'art-3',
    slug: 'mathematical-foundations-of-llm-embeddings',
    title: 'Mathematical Foundations of Vector Embeddings in AI Systems',
    excerpt: 'Understanding high-dimensional vector spaces, cosine similarity, and semantic retrieval for micro-tools.',
    content: `Artificial intelligence utilities rely heavily on transforming unstructured textual content into numerical vector representations. Understanding vector embeddings requires exploring linear algebra and high-dimensional space geometry.

### 1. Vector Spaces & Dimensions
An embedding maps a token or document into a continuous $N$-dimensional vector space $\\mathbb{R}^N$. Nearby vectors in this mathematical space represent semantic similarity.

### 2. Cosine Similarity Formula
To measure the semantic distance between two vectors $\\mathbf{A}$ and $\\mathbf{B}$, we compute their cosine similarity:

$$\\text{Similarity}(\\mathbf{A}, \\mathbf{B}) = \\frac{\\mathbf{A} \\cdot \\mathbf{B}}{\\|\\mathbf{A}\\| \\|\\mathbf{B}\\|}$$

By ranking cosine similarity scores, retrieval-augmented generation (RAG) engines extract relevant context with high precision.`,
    authorId: 'author-pritam-kumar',
    category: 'Mathematics & Algorithms',
    tags: ['AI', 'Architecture'],
    contentType: 'research',
    status: 'published',
    publishedAt: '2026-08-24',
    readingTime: '6 min read',
    featured: false,
    seoTitle: 'Mathematical Foundations of Vector Embeddings — PriMAqy Insights',
    seoDescription: 'Explore the linear algebra, high-dimensional vector spaces, and cosine similarity formulas behind modern AI embeddings.',
  },
  {
    id: 'art-4',
    slug: 'building-in-public-from-bihar',
    title: 'Building PriMAqy from Patna, Bihar: Discipline Over Hype',
    excerpt: 'Reflections on founding an early-stage technology venture anchored in Bihar with a global product mindset.',
    content: `Great technology products can be created from anywhere when driven by engineering discipline and practical utility. Founding PriMAqy from Patna, Bihar, India is anchored on a long-term commitment: building practical AI software tools that compete on global benchmarks.

### Avoiding Superficial Hype
Early-stage ventures often fall into the trap of exaggerating metrics, claiming unverified funding, or inventing customer traction. PriMAqy enforces strict transparency: we build with clean code, document public progress honestly, and let real product utility speak for itself.

### The Journey Ahead
Our focus remains steadfast on developing Toolsetic, expanding our public document architecture, and building tools that make digital work faster and smarter.`,
    authorId: 'author-pritam-kumar',
    category: 'Founder Notes',
    tags: ['Startup', 'Toolsetic'],
    contentType: 'founder_note',
    status: 'published',
    publishedAt: '2026-08-25',
    readingTime: '3 min read',
    featured: false,
    seoTitle: 'Building PriMAqy from Patna, Bihar — Founder Notes',
    seoDescription: 'Read Pritam Kumar founder notes on building PriMAqy and Toolsetic from Patna, Bihar, India.',
  },
];
