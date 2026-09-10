export interface InsightPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
}

export interface StartupDocument {
  id: string;
  title: string;
  category: 'Company Profile' | 'Pitch Deck' | 'Product Brief' | 'Business Plan' | 'Market Research' | 'Founder Profile' | 'Roadmap' | 'Startup Application' | 'Media Kit';
  version: string;
  date: string;
  status: 'Published' | 'In Review' | 'Draft' | 'Coming Soon';
  isPublic: boolean;
  fileUrl?: string;
  description: string;
}
