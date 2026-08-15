export interface ProductSpec {
  weight?: string;
  packCount?: string;
  storage?: string;
  shelfLife?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  tagline: string;
  badge: string;
  description: string;
  shortDescription: string;
  highlights: string[];
  specs: ProductSpec;
  pricePlaceholder?: string;
  primaryImage: string;
  secondaryImage: string;
  inStock: boolean;
  featured: boolean;
}

export interface BrandPillar {
  id: string;
  title: string;
  desc: string;
  badge: string;
}

export interface FoodMoment {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

