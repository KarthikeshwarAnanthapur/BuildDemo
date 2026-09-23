export type MaterialCategory =
  | 'Engineered Wood'
  | 'Solid Wood'
  | 'Veneered Wood'
  | 'Laminate'
  | 'PVC/SPC'
  | 'Outdoor Decking'
  | 'WPC Cladding'
  | 'Tata Steel Fire Doors'
  | 'Sports Infrastructure'
  | 'Roofing';

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: MaterialCategory;
  description: string;
  image: string;
  texturePattern: string;
  finish: string;
  applications: string[];
  suitableSpaces: string[];
  specifications: Specification[];
  featuredProjectIds: string[];
  acRating?: string;
  fireRating?: string;
  warranty?: string;
  ecoScore?: number; // out of 100
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  city: string;
  category: 'Commercial' | 'Hospitality' | 'Residential' | 'Sports' | 'Mixed-Use';
  area: string;
  description: string;
  materialsUsed: string[];
  materialCategory: MaterialCategory;
  heroImage: string;
  galleryImages: string[];
  metrics: ProjectMetric[];
  challenge: string;
  solution: string;
  result: string;
  completionYear: string;
}

export interface SpaceCategory {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  description: string;
  recommendedCategories: MaterialCategory[];
}

export interface StylePreference {
  style: 'Minimal' | 'Warm' | 'Contemporary' | 'Luxury' | 'Natural' | 'Bold';
  priority: 'Appearance' | 'Durability' | 'Low Maintenance' | 'Budget' | 'Sustainability';
  spaceType: string;
}

export interface MaterialBoardItem {
  type: 'Flooring' | 'Door' | 'Cladding' | 'Decking';
  product: Product;
}

export interface MaterialBoardState {
  id: string;
  title: string;
  spaceType: string;
  styleTag: string;
  items: MaterialBoardItem[];
  createdAt: string;
}

export interface AIRecommendationResult {
  matchPercentage: number;
  product: Product;
  reasoning: string;
  idealFor: string;
}
