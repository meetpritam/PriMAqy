export type DocumentStatus = 'Public' | 'In Preparation' | 'Coming Soon';
export type DocumentCategory = 'Company' | 'Product' | 'Business' | 'Startup' | 'Public Resources';

export interface StartupDocument {
  id: string;
  slug: string;
  title: string;
  category: DocumentCategory;
  description: string;
  status: DocumentStatus;
  date: string;
  fileUrl?: string;
  fileSize?: string;
  fileType?: string;
  isPublic: boolean;
  featured?: boolean;
}
