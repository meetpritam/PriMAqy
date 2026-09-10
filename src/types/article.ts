export type ContentType =
  | 'article'
  | 'product_update'
  | 'research'
  | 'guide'
  | 'founder_note'
  | 'announcement';

export type ArticleStatus = 'draft' | 'scheduled' | 'published' | 'archived';

export interface Author {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  socials?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
}

export interface Tag {
  id: string;
  slug: string;
  name: string;
  description?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  authorId: string;
  author?: Author;
  category: string;
  tags: string[];
  contentType: ContentType;
  status: ArticleStatus;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  ogImage?: string;
}
