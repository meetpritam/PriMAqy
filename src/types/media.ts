export interface PressRelease {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  downloadUrl?: string;
}

export interface BrandAsset {
  id: string;
  name: string;
  category: 'Logo' | 'Wordmark' | 'Color Palette' | 'Icon';
  description: string;
  format: string;
  dimensions?: string;
  previewUrl?: string;
  downloadUrl?: string;
}
