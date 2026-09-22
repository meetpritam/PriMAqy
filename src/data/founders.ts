import { Founder } from '@/types/founder';

export const initialFoundersData: Founder[] = [
  {
    id: 'pritam-kumar',
    slug: 'pritam-kumar',
    name: 'Pritam Kumar',
    publicDisplayName: 'Pritam Kumar',
    role: 'Founder',
    company: 'PriMAqy',
    isFounder: true,
    isCoFounder: false,
    title: 'Founder & Technology Lead',
    location: 'Patna, Bihar, India',
    email: 'pritam@primaqy.in',
    avatarUrl: '/images/pritam-portrait.jpg',
    coverUrl: '/images/pritam-portrait.jpg',
    isPublished: true,
    isFeatured: true,
    displayOrder: 1,
    createdAt: '2026-08-01T00:00:00Z',
    updatedAt: '2026-09-08T21:24:00Z',

    shortBio:
      'Pritam Kumar is the Founder of PriMAqy, an early-stage AI & technology venture focused on building practical intelligent software products, developer tools, and workflow automation systems from Patna, Bihar, India.',

    heroStatement:
      'Building useful AI products, software systems, and developer tools with disciplined engineering and long-term vision.',

    aboutIntro:
      'Pritam Kumar founded PriMAqy with a clear commitment: to create high-utility software products, practical AI tools, and productivity frameworks. Operating from Patna, Bihar, Pritam focuses on software architecture, machine learning concepts, automation engineering, and product development.',

    workingPhilosophy:
      'Focus on real utility rather than superficial hype. Product engineering should solve genuine friction through disciplined code, clean design, and mathematical foundation.',

    motivation:
      'Driven by curiosity, continuous learning, and the goal of demonstrating that world-class AI and technology ventures can be engineered from any location when grounded in fundamentals.',

    whatIBuild: [
      'Artificial Intelligence & Machine Learning Integrations',
      'Intelligent Developer Productivity Tools & Frameworks',
      'Workflow Automation & API Infrastructure',
      'Modern Web Applications & Software Systems',
      'AI Micro-Tool Suites & Prompt Engines',
      'Venture Product Architecture',
    ],

    currentWork: [
      'PriMAqy Venture Engineering & Product Strategy',
      'Toolsetic — AI-First Productivity Suite & Micro-Tool Ecosystem',
      'LLM Embedding & Context Engine Research',
      'Open-Source Developer Utilities & Prompt Frameworks',
    ],

    skills: [
      { id: 's1', name: 'Artificial Intelligence', category: 'AI', level: 'Building With' },
      { id: 's2', name: 'LLM Prompt Engineering', category: 'AI', level: 'Strong' },
      { id: 's3', name: 'TypeScript & JavaScript', category: 'Programming', level: 'Strong' },
      { id: 's4', name: 'Next.js & React Frameworks', category: 'Web Development', level: 'Strong' },
      { id: 's5', name: 'Node.js & API Systems', category: 'Programming', level: 'Building With' },
      { id: 's6', name: 'Workflow Automation', category: 'Automation', level: 'Building With' },
      { id: 's7', name: 'Product Architecture', category: 'Product', level: 'Building With' },
      { id: 's8', name: 'Software Design & TailWind CSS', category: 'Web Development', level: 'Strong' },
      { id: 's9', name: 'Venture Strategy', category: 'Startup Building', level: 'Building With' },
      { id: 's10', name: 'Python & Machine Learning Foundations', category: 'AI', level: 'Working Knowledge' },
      { id: 's11', name: 'Applied Mathematics & Linear Algebra', category: 'AI', level: 'Working Knowledge' },
      { id: 's12', name: 'Economics & Venture Model Analysis', category: 'Business', level: 'Working Knowledge' },
    ],

    education: [
      {
        id: 'edu-1',
        institution: 'Senior Secondary / Academic Studies',
        field: 'Science & Mathematics Core',
        status: 'CURRENT',
        description: 'Focusing on core Mathematics, Physics, Chemistry, Economics, and Business Foundations.',
        timeline: '2024 – Present',
        subjects: ['Mathematics', 'Physics', 'Economics', 'Business Studies', 'Computer Science'],
      },
      {
        id: 'edu-2',
        institution: 'Self-Directed Technology & Engineering Study',
        field: 'Software Engineering, Web Development & Artificial Intelligence',
        status: 'CURRENT',
        description: 'Rigorous self-directed learning in Next.js, React, TypeScript, AI APIs, and product design.',
        timeline: '2023 – Present',
        subjects: ['TypeScript', 'Next.js Turbopack', 'AI API Integration', 'State Management', 'UI Design Tokens'],
      },
      {
        id: 'edu-3',
        institution: 'Higher Education / Undergraduate Degree',
        field: 'Computer Science, Mathematics, or Technology Innovation',
        status: 'PLANNED',
        description: 'Planned formal undergraduate studies focusing on Applied Mathematics, Computer Science, and Artificial Intelligence.',
        timeline: 'Future Academic Target',
        subjects: ['Linear Algebra', 'Algorithms & Data Structures', 'Machine Learning Theory', 'Systems Design'],
      },
    ],

    studyRoadmap: [
      {
        id: 'sr-1',
        stage: 'Stage 1',
        title: 'Current Foundational & Applied Learning',
        description: 'Mastering modern web stacks (TypeScript, Next.js), practical AI API integration, and senior secondary academics (Mathematics, Economics).',
        status: 'CURRENT',
        order: 1,
      },
      {
        id: 'sr-2',
        stage: 'Stage 2',
        title: '12th Grade Completion & Entrance Validation',
        description: 'Completing senior secondary board qualifications with strong focus on quantitative problem solving and computer applications.',
        status: 'PLANNED',
        order: 2,
      },
      {
        id: 'sr-3',
        stage: 'Stage 3',
        title: "Undergraduate Bachelor's Admission",
        description: "Enrolling in a structured undergraduate degree program in Computer Science, Mathematics, or Technology Innovation.",
        status: 'PLANNED',
        order: 3,
      },
      {
        id: 'sr-4',
        stage: 'Stage 4',
        title: 'Advanced Mathematics & Computer Science Core',
        description: 'Deep study of Calculus, Linear Algebra, Probability & Statistics, Discrete Mathematics, Data Structures, and Operating Systems.',
        status: 'PLANNED',
        order: 4,
      },
      {
        id: 'sr-5',
        stage: 'Stage 5',
        title: 'Specialized Machine Learning & AI Engineering',
        description: 'Rigorous investigation into neural network architectures, attention mechanisms, transformer models, and model optimization.',
        status: 'PLANNED',
        order: 5,
      },
      {
        id: 'sr-6',
        stage: 'Stage 6',
        title: 'Venture Research & Systems Engineering',
        description: 'Bridging academic computer science research with PriMAqy venture product engineering for autonomous workflow agents.',
        status: 'PLANNED',
        order: 6,
      },
      {
        id: 'sr-7',
        stage: 'Stage 7',
        title: 'Long-Term Technological Leadership',
        description: 'Leading PriMAqy as a recognized AI and technology venture building global software tools from Bihar, India.',
        status: 'PLANNED',
        order: 7,
      },
    ],

    journey: [
      {
        id: 'j-1',
        period: '2023 – Early Phase',
        title: 'Early Learning & Coding Foundations',
        summary: 'Initiated systematic self-learning in web development, HTML, CSS, JavaScript, and programming fundamentals.',
        category: 'Learning',
      },
      {
        id: 'j-2',
        period: 'Late 2023 – 2024',
        title: 'Technology Exploration & Project Creation',
        summary: 'Built experimental web applications, explored React and modern UI libraries, and studied modern API patterns.',
        category: 'Exploration',
      },
      {
        id: 'j-3',
        period: '2024 – 2025',
        title: 'AI Micro-Tools & Toolsetic Conceptualization',
        summary: 'Recognized productivity friction in everyday workflows, leading to the creation of the Toolsetic product concept.',
        category: 'Building',
      },
      {
        id: 'j-4',
        period: 'Early 2026',
        title: 'PriMAqy Venture Initialization',
        summary: 'Formally founded PriMAqy in Patna, Bihar, establishing the legal, brand, and architecture foundation of the venture.',
        category: 'Entrepreneurship',
      },
      {
        id: 'j-5',
        period: 'Mid 2026 – Present',
        title: 'Product Architecture & Public Launch Preparation',
        summary: 'Engineering the full PriMAqy web platform, Toolsetic ecosystem, technical publication pipeline, and venture roadmap.',
        category: 'Venture',
      },
      {
        id: 'j-6',
        period: 'Future',
        title: 'Global Software Product Scale & Academic Advancement',
        summary: 'Combining advanced academic study in AI with the commercial and technological expansion of PriMAqy products.',
        category: 'Future',
      },
    ],

    projects: [
      {
        id: 'proj-1',
        name: 'PriMAqy Venture Platform',
        description: 'Official digital venture platform for PriMAqy featuring programmatic SEO, technical publication pipeline, and corporate overview.',
        role: 'Founder & Primary Architect',
        techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Schema.org JSON-LD'],
        status: 'Active',
        url: 'https://primaqy.in',
        imageUrl: '/images/logo.jpg',
      },
      {
        id: 'proj-2',
        name: 'Toolsetic Productivity Suite',
        description: 'Flagship AI-first toolbox unifying AI micro-tools, prompt engineering frameworks, and automated workspace templates.',
        role: 'Founder & Lead Developer',
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'AI APIs'],
        status: 'In Development',
        url: '/products/toolsetic',
        imageUrl: '/images/logo.jpg',
      },
      {
        id: 'proj-3',
        name: 'PriMAqy Technical Insights & Publications',
        description: 'Knowledge sharing center covering LLM embeddings, Next.js architecture, and software engineering practices from Bihar.',
        role: 'Author & Editor',
        techStack: ['Markdown', 'Article Renderer', 'KaTeX Math', 'SEO Automation'],
        status: 'Active',
        url: '/insights',
        imageUrl: '/images/logo.jpg',
      },
    ],

    photoGallery: [
      {
        id: 'p-1',
        url: '/images/pritam-portrait.jpg',
        caption: 'Pritam Kumar — Founder of PriMAqy.',
        category: 'Founder',
        altText: 'Pritam Kumar Founder Profile Photo',
        isHero: true,
        isFeatured: true,
        order: 1,
      },
    ],

    currentlyLearning: [
      {
        id: 'cl-1',
        topic: 'LLM Embeddings & Vector Space Mathematics',
        why: 'To understand how high-dimensional semantic spaces represent user intent and document context.',
        connectionToProducts: 'Powers intelligent search and context-aware tools inside Toolsetic.',
      },
      {
        id: 'cl-2',
        topic: 'Applied Linear Algebra & Matrices',
        why: 'Essential mathematical foundation for understanding neural network transformations and weight matrices.',
        connectionToProducts: 'Provides core mathematical insight for evaluating open AI model performance.',
      },
      {
        id: 'cl-3',
        topic: 'Advanced Next.js Turbopack & Server Actions',
        why: 'To optimize server-side rendering speeds and reduce client bundle sizes.',
        connectionToProducts: 'Ensures PriMAqy web products load in under 1 second globally.',
      },
    ],

    philosophy: [
      {
        id: 'phil-1',
        pillar: 'Utility Over Hype',
        principle: 'Build software that actually works and solves real daily friction.',
        description: 'Technology is valuable only when it simplifies human workflows and enhances human capability.',
      },
      {
        id: 'phil-2',
        pillar: 'Disciplined Craftsmanship',
        principle: 'Code, typography, and architecture must be clean, deliberate, and maintainable.',
        description: 'Shortcuts create technical debt. Rigorous engineering creates enduring products.',
      },
      {
        id: 'phil-3',
        pillar: 'Continuous Learning',
        principle: 'Never stop being a student of mathematics, computer science, and product design.',
        description: 'Curiosity combined with structured study is the ultimate competitive advantage for a founder.',
      },
      {
        id: 'phil-4',
        pillar: 'Location Agnosticism',
        principle: 'World-class technology ventures can be created anywhere.',
        description: 'Building from Patna, Bihar proves that dedication, code, and vision transcend geography.',
      },
    ],

    socialLinks: [
      { platform: 'GitHub', url: 'https://github.com/primaqy', label: 'GitHub' },
      { platform: 'Twitter', url: 'https://twitter.com/primaqy', label: 'Twitter / X' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/company/primaqy', label: 'LinkedIn' },
      { platform: 'Email', url: 'mailto:pritam@primaqy.in', label: 'Email' },
    ],

    primaqyConnection: {
      relationship: 'Founder & Lead Product Architect of PriMAqy',
      description:
        'Pritam Kumar is the Founder of PriMAqy. He leads venture strategy, core software architecture, AI product development, and the technical publication pipeline.',
      impact: [
        'Established PriMAqy as an AI & Technology Venture anchored in Patna, Bihar',
        'Conceived and designed flagship product Toolsetic',
        'Authored foundational technical publications on LLM embeddings & Next.js architecture',
        'Directs technical execution and product design tokens across the venture',
      ],
    },

    seo: {
      title: 'Pritam Kumar — Founder of PriMAqy',
      description:
        'Official profile of Pritam Kumar, Founder of PriMAqy — AI & Technology Venture. Explore founder journey, skills, education, projects, and vision from Patna, Bihar, India.',
      canonicalUrl: 'https://primaqy.in/founders/pritam-kumar',
      ogTitle: 'Pritam Kumar — Founder, PriMAqy',
      ogDescription:
        'Explore the official founder profile of Pritam Kumar: building AI products, Toolsetic, and technology software from Patna, Bihar, India.',
      ogImage: '/images/pritam-portrait.jpg',
      aiSummary:
        'Pritam Kumar is the Founder of PriMAqy, an early-stage AI & Technology Venture based in Patna, Bihar, India. He builds software products, AI tools (Toolsetic), and developer utilities with a focus on Applied Mathematics, Next.js, TypeScript, and AI integrations.',
      keywords: [
        'Pritam Kumar',
        'Pritam Kumar Founder',
        'Pritam Kumar PriMAqy',
        'PriMAqy Founder',
        'Pritam Kumar Patna',
        'PriMAqy Bihar',
        'Toolsetic Founder',
        'AI Technology Founder India',
      ],
    },
  },
  {
    id: 'anshu-kumar',
    slug: 'anshu-kumar',
    name: 'Anshu Kumar',
    publicDisplayName: 'Anshu Kumar',
    role: 'Co-Founder',
    company: 'PriMAqy',
    isFounder: false,
    isCoFounder: true,
    title: 'Co-Founder & Growth Lead',
    location: 'Patna, Bihar, India',
    email: 'anshu@primaqy.in',
    avatarUrl: '/images/anshu.jpg',
    coverUrl: '/images/anshu.jpg',
    isPublished: true,
    isFeatured: false,
    displayOrder: 2,
    createdAt: '2026-08-01T00:00:00Z',
    updatedAt: '2026-09-06T00:00:00Z',

    shortBio:
      'Anshu Kumar is the Co-Founder of PriMAqy, contributing to the venture\'s growth, business development, operational support, and ecosystem expansion.',

    heroStatement:
      'Execution-driven co-founder dedicated to turning venture vision into practical market progress and community growth.',

    aboutIntro:
      'Anshu Kumar joined the founding team of PriMAqy as Co-Founder. Focused on operational execution, community outreach, and partner development, Anshu works alongside Founder Pritam Kumar to establish PriMAqy as a recognized technology venture.',

    workingPhilosophy:
      'Great products require consistent execution, strong community relationships, and reliable operational groundwork.',

    motivation:
      'Building strong ecosystem connections, expanding tool distribution, and supporting the growth of PriMAqy from Patna to global users.',

    whatIBuild: [
      'Venture Ecosystem Partnerships',
      'Community Outreach Channels',
      'User Growth & Outreach Strategies',
      'Operational Workflows',
    ],

    currentWork: [
      'PriMAqy Growth & Outreach Initiatives',
      'Community Channel Setup (Telegram / Discord)',
      'Product Distribution & Feedback Collection',
    ],

    skills: [
      { id: 'as-1', name: 'Business Growth & Outreach', category: 'Business', level: 'Strong' },
      { id: 'as-2', name: 'Community Management', category: 'Startup Building', level: 'Strong' },
      { id: 'as-3', name: 'Operational Support', category: 'Business', level: 'Building With' },
      { id: 'as-4', name: 'Product Marketing', category: 'Product', level: 'Working Knowledge' },
      { id: 'as-5', name: 'Strategic Partnerships', category: 'Business', level: 'Building With' },
    ],

    education: [
      {
        id: 'aedu-1',
        institution: 'Senior Secondary / Academic Studies',
        field: 'Commerce & Business Studies',
        status: 'CURRENT',
        description: 'Focusing on Business Organization, Economics, Accountancy, and Management.',
        timeline: '2024 – Present',
        subjects: ['Business Studies', 'Economics', 'Accountancy', 'English'],
      },
    ],

    studyRoadmap: [
      {
        id: 'asr-1',
        stage: 'Stage 1',
        title: 'Current Business & Operations Foundations',
        description: 'Studying business management fundamentals and practical startup operations.',
        status: 'CURRENT',
        order: 1,
      },
      {
        id: 'asr-2',
        stage: 'Stage 2',
        title: '12th Board Qualification Completion',
        description: 'Completing senior secondary academics with strong performance in business studies.',
        status: 'PLANNED',
        order: 2,
      },
      {
        id: 'asr-3',
        stage: 'Stage 3',
        title: 'Higher Education in Business Administration / Growth',
        description: 'Enrolling in formal business, management, or marketing studies.',
        status: 'PLANNED',
        order: 3,
      },
    ],

    journey: [
      {
        id: 'aj-1',
        period: '2024',
        title: 'Business & Entrepreneurship Interest',
        summary: 'Explored startup business models, digital marketing, and growth strategies.',
        category: 'Learning',
      },
      {
        id: 'aj-2',
        period: '2026 – Present',
        title: 'PriMAqy Co-Founder Role',
        summary: 'Co-founded PriMAqy alongside Founder Pritam Kumar to drive growth and community execution.',
        category: 'Entrepreneurship',
      },
    ],

    projects: [
      {
        id: 'aproj-1',
        name: 'PriMAqy Ecosystem Growth',
        description: 'Community outreach and partnership development for PriMAqy venture initiatives.',
        role: 'Co-Founder & Growth Lead',
        techStack: ['Community Tools', 'Outreach', 'Analytics'],
        status: 'Active',
        url: '/community',
        imageUrl: '/images/anshu.jpg',
      },
    ],

    photoGallery: [
      {
        id: 'ap-1',
        url: '/images/anshu.jpg',
        caption: 'Anshu Kumar — Co-Founder of PriMAqy.',
        category: 'Founder',
        altText: 'Anshu Kumar Co-Founder Profile Photo',
        isHero: true,
        isFeatured: true,
        order: 1,
      },
    ],

    currentlyLearning: [
      {
        id: 'acl-1',
        topic: 'Digital Product Growth & Analytics',
        why: 'To understand user retention metrics and distribution channels for software tools.',
        connectionToProducts: 'Informs marketing campaigns for Toolsetic launches.',
      },
    ],

    philosophy: [
      {
        id: 'aphil-1',
        pillar: 'Execution Excellence',
        principle: 'Ideas matter, but consistent daily execution is what builds successful ventures.',
        description: 'Helping turn PriMAqy goals into tangible operational results.',
      },
    ],

    socialLinks: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/company/primaqy', label: 'LinkedIn' },
      { platform: 'Email', url: 'mailto:anshu@primaqy.in', label: 'Email' },
    ],

    primaqyConnection: {
      relationship: 'Co-Founder & Growth Lead of PriMAqy',
      description:
        'Anshu Kumar is the Co-Founder of PriMAqy. He leads community engagement, partner development, and operational support.',
      impact: [
        'Co-founded PriMAqy alongside Founder Pritam Kumar',
        'Drives startup community initiatives and outreach',
        'Supports product rollout and user feedback loops',
      ],
    },

    seo: {
      title: 'Anshu Kumar — Co-Founder of PriMAqy',
      description:
        'Official profile of Anshu Kumar, Co-Founder of PriMAqy — AI & Technology Venture. Explore bio, role, projects, and venture execution from Patna, Bihar, India.',
      canonicalUrl: 'https://primaqy.in/founders/anshu-kumar',
      ogTitle: 'Anshu Kumar — Co-Founder, PriMAqy',
      ogDescription:
        'Explore the official co-founder profile of Anshu Kumar: driving growth, community, and operations at PriMAqy.',
      ogImage: '/images/anshu.jpg',
      aiSummary:
        'Anshu Kumar is the Co-Founder of PriMAqy, an early-stage AI & Technology Venture based in Patna, Bihar, India. He focuses on growth, operations, business development, and ecosystem partnerships.',
      keywords: [
        'Anshu Kumar',
        'Anshu Kumar Co-Founder',
        'Anshu Kumar PriMAqy',
        'PriMAqy Co-Founder',
        'PriMAqy Growth Lead',
      ],
    },
  },
];
