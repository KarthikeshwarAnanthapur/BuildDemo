import { Product } from '../types';

export const BUILDSTAR_PRODUCTS: Product[] = [
  {
    id: 'prod-eng-oak',
    name: 'Engineered Oak Artisan',
    tagline: 'Warmth, dimensional stability, and timeless European oak elegance.',
    category: 'Engineered Wood',
    description: 'Constructed with a multi-ply cross-grain eucalyptus base topped with a 4mm prime European White Oak wear layer. Engineered to withstand India’s sub-tropical humidity fluctuations without warping.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
    texturePattern: 'Wire-brushed hand-scraped grain with UV cured matte lacquer finish',
    finish: 'Natural Matte Silk',
    applications: ['Living Rooms', 'Master Suites', 'High-End Penthouses', 'Boutique Hotel Suites'],
    suitableSpaces: ['Home', 'Hotel', 'Office'],
    acRating: 'AC5 Heavy Commercial',
    fireRating: 'Class Bfl-s1 Fire Retardant',
    warranty: '25 Years Residential / 10 Years Commercial',
    ecoScore: 94,
    specifications: [
      { label: 'Plank Thickness', value: '15mm (4mm Wear Layer)' },
      { label: 'Plank Width', value: '190mm' },
      { label: 'Plank Length', value: '1900mm (Nested)' },
      { label: 'Core Material', value: 'High-Density Birch & Eucalyptus Ply' },
      { label: 'Installation Method', value: 'Click-Lock / Glue Down' },
      { label: 'Underfloor Heating', value: 'Compatible up to 27°C' }
    ],
    featuredProjectIds: ['proj-karle-zenith', 'proj-sobha-neopolis']
  },
  {
    id: 'prod-dark-walnut',
    name: 'American Dark Walnut Luxe',
    tagline: 'Deep dark grain tones creating unmatched architectural grandeur.',
    category: 'Engineered Wood',
    description: 'Sourced from sustainable North American Black Walnut forests. Exhibits rich chocolate hues, subtle purplish undertones, and dramatic swirling grain figures suited for opulent interiors.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    texturePattern: 'Smooth oil-finished micro-bevelled edges',
    finish: 'Satin Natural Oil',
    applications: ['Executive Boardrooms', 'Luxury Villas', 'Presidential Suites', 'Private Libraries'],
    suitableSpaces: ['Home', 'Office', 'Hotel'],
    acRating: 'AC4 Commercial',
    fireRating: 'Class Bfl-s1',
    warranty: '25 Years Residential',
    ecoScore: 92,
    specifications: [
      { label: 'Plank Thickness', value: '14mm (3.5mm Walnut Top)' },
      { label: 'Plank Width', value: '180mm' },
      { label: 'Plank Length', value: '1820mm' },
      { label: 'Moisture Content', value: '8% ± 2%' },
      { label: 'Installation', value: 'T&G Glue Down' }
    ],
    featuredProjectIds: ['proj-total-environment']
  },
  {
    id: 'prod-teak-decking',
    name: 'Burma Teak Outdoor Decking',
    tagline: 'Weather-resistant solid teak deck planks naturally high in silica and oil.',
    category: 'Outdoor Decking',
    description: 'Pure solid plantation Burma Teak profiled for exterior poolside decks, balconies, and sky terraces. Natural teak oils resist rot, termites, and harsh monsoon downpours.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop',
    texturePattern: 'Anti-skid reeded / smooth dual-profile surface',
    finish: 'Exterior Marine Oil Sealer',
    applications: ['Poolside Decking', 'Rooftop Lounges', 'Garden Passageways', 'Outdoor Patios'],
    suitableSpaces: ['Outdoor', 'Hotel', 'Home'],
    acRating: 'Heavy Outdoor Grade',
    warranty: '15 Years Outdoor Weather',
    ecoScore: 96,
    specifications: [
      { label: 'Profile Size', value: '90mm x 19mm' },
      { label: 'Sub-structure', value: 'Aluminum / Teak Joist Grid' },
      { label: 'Fastening', value: 'Hidden Stainless Steel Clip System' },
      { label: 'Water Absorption', value: '< 0.5%' }
    ],
    featuredProjectIds: ['proj-prestige-golfshire']
  },
  {
    id: 'prod-spc-stone',
    name: 'Rigid Core SPC Stone Titanium',
    tagline: '100% waterproof stone polymer composite engineered for intense traffic.',
    category: 'PVC/SPC',
    description: 'High-density limestone composite core with IXPE acoustic underlayment attached. Zero swelling under standing water, anti-bacterial, and impervious to heavy furniture indentations.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
    texturePattern: 'Real-feel EIR (Embossed In Register) stone slate texture',
    finish: 'Ultra-Matte Ceramic Bead Scratch Shield',
    applications: ['Hospitality Lobbies', 'Retail Showrooms', 'Hospitals', 'Commercial Kitchens'],
    suitableSpaces: ['Commercial', 'Hotel', 'Office'],
    acRating: 'AC5 High Traffic',
    fireRating: 'Class B1 Flame Retardant',
    warranty: '30 Years Commercial',
    ecoScore: 90,
    specifications: [
      { label: 'Total Thickness', value: '6.5mm (including 1.5mm IXPE)' },
      { label: 'Wear Layer', value: '0.55mm Commercial Grade' },
      { label: 'Sound Reduction', value: '21 dB Impact Sound Insulation' },
      { label: 'Formaldehyde', value: 'E0 Zero Emission' }
    ],
    featuredProjectIds: ['proj-embassy-golflinks', 'proj-brigade-tech']
  },
  {
    id: 'prod-wpc-cladding',
    name: 'Architectural WPC Exterior Cladding',
    tagline: 'Composite wood facade panels engineered against UV degradation.',
    category: 'WPC Cladding',
    description: 'Second-generation co-extruded wood-plastic composite elevation cladding. Features a 360-degree protective shield preventing fading, staining, mold, and wood borer infestations.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    texturePattern: 'Deep 3D Architectural Timber Grain',
    finish: 'Teak / Charcoal Weathered Finish',
    applications: ['Building Elevations', 'Feature Accent Walls', 'Boundary Walls', 'Resort Facades'],
    suitableSpaces: ['Outdoor', 'Commercial', 'Hotel'],
    warranty: '20 Years Color Guarantee',
    ecoScore: 98,
    specifications: [
      { label: 'Panel Profile', value: '219mm x 26mm Slatted Flute' },
      { label: 'Sub-frame', value: 'Galvanized Steel / Aluminum Battens' },
      { label: 'Wind Resistance', value: 'Up to Category 4 Cyclone Grade' }
    ],
    featuredProjectIds: ['proj-prestige-golfshire']
  },
  {
    id: 'prod-tata-door',
    name: 'Tata Steel Fire-Rated Security Door',
    tagline: 'Precision engineered fire-resistant steel doors with luxury wood veneer aesthetics.',
    category: 'Tata Steel Fire Doors',
    description: 'Manufactured in direct collaboration with Tata Steel. Combines 120-minute CBRI/UL certified fire containment with high-definition wood grain powder coating and multi-point smart security locks.',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=1600&auto=format&fit=crop',
    texturePattern: 'Polished Wood Grain Thermal Transfer Finish',
    finish: 'Anti-Scratch Polyurethane Matte',
    applications: ['Emergency Exit Staircases', 'High-Rise Apartment Main Entrances', 'Server Rooms'],
    suitableSpaces: ['Home', 'Office', 'Commercial'],
    fireRating: '120 Minutes CBRI / Fire Tested',
    warranty: '10 Years Structural Guarantee',
    ecoScore: 89,
    specifications: [
      { label: 'Sheet Thickness', value: '1.2mm GI Steel Skin / 50mm Door Shutter' },
      { label: 'Infill Material', value: 'High-Density Mineral Rockwool (100 kg/m³)' },
      { label: 'Acoustic Rating', value: '38 dB Noise Reduction' },
      { label: 'Locking', value: 'Multi-point German Mortise Hardware' }
    ],
    featuredProjectIds: ['proj-sobha-neopolis', 'proj-brigade-tech']
  },
  {
    id: 'prod-sports-turf',
    name: 'Pro-Court Indoor & Outdoor Sports Turf',
    tagline: 'Shock-absorbing FIFA and ITF compliant synthetic turf & polyurethane surfaces.',
    category: 'Sports Infrastructure',
    description: 'Heavy-duty multi-purpose sports surfaces designed for badminton halls, basketball courts, rooftop football arenas, and athletic tracks with high impact absorption and non-slip traction.',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1600&auto=format&fit=crop',
    texturePattern: 'High-density monofilament PE fiber with shock pad backing',
    finish: 'UV-stabilized Matte Green / Terracotta',
    applications: ['School Sports Complexes', 'Badminton Academies', 'Rooftop Turf Arenas', 'Clubhouses'],
    suitableSpaces: ['Sports', 'Commercial'],
    warranty: '10 Years UV & Wear Warranty',
    ecoScore: 91,
    specifications: [
      { label: 'Pile Height', value: '15mm - 50mm customizable' },
      { label: 'Force Reduction', value: '55% ASTM F2772 Shock Absorption' },
      { label: 'Infill', value: 'Eco-friendly TPE Rubber Granules' }
    ],
    featuredProjectIds: ['proj-embassy-golflinks']
  }
];
