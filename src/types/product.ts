export interface ProductFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  positioning: string;
  description: string;
  targetAudience: string[];
  features: ProductFeature[];
  status: 'In Development' | 'Early Access' | 'Live' | 'Coming Soon';
  isFlagship: boolean;
}
