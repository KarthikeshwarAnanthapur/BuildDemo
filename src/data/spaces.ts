import { SpaceCategory } from '../types';

export const BUILDSTAR_SPACES: SpaceCategory[] = [
  {
    id: 'space-home',
    name: 'Home & Residential',
    subtitle: 'Living rooms, master suites, penthouses & private libraries.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    description: 'Transform residential sanctuaries with warm engineered hardwoods, quiet acoustic acoustics, and elegant secure fire doors.',
    recommendedCategories: ['Engineered Wood', 'Solid Wood', 'Veneered Wood', 'Tata Steel Fire Doors']
  },
  {
    id: 'space-hotel',
    name: 'Hotel & Hospitality',
    subtitle: 'Resort lobbies, presidential suites, sky lounges & dining spaces.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop',
    description: 'Create unforgettable luxury guest impressions with wear-resistant SPC stone, rich teak decking, and grand timber cladding.',
    recommendedCategories: ['Engineered Wood', 'Outdoor Decking', 'PVC/SPC', 'WPC Cladding']
  },
  {
    id: 'space-office',
    name: 'Office & Workplaces',
    subtitle: 'Executive boardrooms, open tech floors, breakouts & corridors.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    description: 'Boost workplace well-being and sound dampening with acoustic rigid core SPC, heavy-traffic laminates, and Tata security doors.',
    recommendedCategories: ['PVC/SPC', 'Laminate', 'Tata Steel Fire Doors', 'Engineered Wood']
  },
  {
    id: 'space-commercial',
    name: 'Commercial & Retail',
    subtitle: 'Flagship boutiques, airport lounges, high-end shopping galleries.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop',
    description: 'High-impact scratch resistant slate textures and flame retardant surfaces built for continuous high footfall.',
    recommendedCategories: ['PVC/SPC', 'Tata Steel Fire Doors', 'WPC Cladding']
  },
  {
    id: 'space-outdoor',
    name: 'Outdoor & Terraces',
    subtitle: 'Poolside decks, sky bars, balcony gardens & exterior facades.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop',
    description: 'Weatherproof solid teak and co-extruded composite cladding engineered against rain, UV solar heat, and termites.',
    recommendedCategories: ['Outdoor Decking', 'WPC Cladding']
  },
  {
    id: 'space-sports',
    name: 'Sports & Arenas',
    subtitle: 'Badminton halls, gym floors, athletic tracks & rooftop turf.',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1600&auto=format&fit=crop',
    description: 'Shock-absorbing FIFA/ITF standard indoor and outdoor sports surfaces with anti-slip traction and high rebound.',
    recommendedCategories: ['Sports Infrastructure', 'PVC/SPC']
  }
];
