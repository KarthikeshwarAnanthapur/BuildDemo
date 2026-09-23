import { AIRecommendationResult } from '../types';
import { BUILDSTAR_PRODUCTS } from './products';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  suggestedProducts?: string[];
  suggestedProjects?: string[];
}

export const AI_KNOWLEDGE_BASE = [
  {
    keywords: ['hotel', 'hospitality', 'resort', 'lobby', 'suite'],
    reply: 'For hospitality environments, we recommend a combination of **Engineered Oak Artisan** for guest rooms (combining high acoustic isolation with luxury feel) and **Rigid Core SPC Stone Titanium** for lobbies & corridors due to its 100% waterproof nature and zero scratch wear layer.',
    recommendedProductIds: ['prod-eng-oak', 'prod-spc-stone'],
    recommendedProjectId: 'proj-prestige-golfshire'
  },
  {
    keywords: ['outdoor', 'terrace', 'balcony', 'pool', 'deck', 'patio'],
    reply: 'For outdoor exposure in Indian climate conditions, **Burma Teak Outdoor Decking** is unmatched for natural oils and anti-skid performance. For wall cladding, our **Architectural WPC Exterior Cladding** provides 360-degree UV protection against monsoon rains and summer solar heat.',
    recommendedProductIds: ['prod-teak-decking', 'prod-wpc-cladding'],
    recommendedProjectId: 'proj-prestige-golfshire'
  },
  {
    keywords: ['flat', 'apartment', 'home', 'living room', 'bhk', 'master bedroom', 'house'],
    reply: 'For luxury residential projects, **Engineered Oak Artisan** offers warm, natural aesthetics with 15mm plank stability against monsoon moisture. For entrance security and fire compliance, pair it with **Tata Steel Fire-Rated Security Doors**.',
    recommendedProductIds: ['prod-eng-oak', 'prod-dark-walnut', 'prod-tata-door'],
    recommendedProjectId: 'proj-karle-zenith'
  },
  {
    keywords: ['office', 'boardroom', 'corporate', 'commercial', 'workplace'],
    reply: 'For executive corporate spaces like boardrooms, **American Dark Walnut Luxe** creates immediate prestige. For open desk floors and high chair-rolling traffic, **Rigid Core SPC Stone** ensures 21dB sound reduction and high scratch resilience.',
    recommendedProductIds: ['prod-dark-walnut', 'prod-spc-stone'],
    recommendedProjectId: 'proj-embassy-golflinks'
  },
  {
    keywords: ['sports', 'turf', 'badminton', 'gym', 'court', 'football'],
    reply: 'Buildstar provides FIFA and ITF compliant **Pro-Court Sports Infrastructure**, engineered with 55% shock absorption pads to prevent player joint fatigue in academies and rooftop courts.',
    recommendedProductIds: ['prod-sports-turf'],
    recommendedProjectId: 'proj-embassy-golflinks'
  }
];

export function findAIRecommendations(query: string): AIRecommendationResult[] {
  const lower = query.toLowerCase();
  
  // Default recommendations if query is broad
  const results: AIRecommendationResult[] = [];

  const oak = BUILDSTAR_PRODUCTS.find(p => p.id === 'prod-eng-oak')!;
  const walnut = BUILDSTAR_PRODUCTS.find(p => p.id === 'prod-dark-walnut')!;
  const teak = BUILDSTAR_PRODUCTS.find(p => p.id === 'prod-teak-decking')!;
  const spc = BUILDSTAR_PRODUCTS.find(p => p.id === 'prod-spc-stone')!;

  if (lower.includes('outdoor') || lower.includes('deck') || lower.includes('balcony') || lower.includes('pool')) {
    results.push(
      {
        matchPercentage: 97,
        product: teak,
        reasoning: 'Solid Burma Teak has natural high silica & oil content, rendering it immune to monsoon decay and UV warping.',
        idealFor: 'Poolside Decks, Open Terraces & Rooftop Patios'
      },
      {
        matchPercentage: 92,
        product: BUILDSTAR_PRODUCTS.find(p => p.id === 'prod-wpc-cladding')!,
        reasoning: 'Co-extruded 360-degree slatted timber profile engineered for zero maintenance elevation cladding.',
        idealFor: 'Exterior Feature Walls & Balcony Elevation'
      }
    );
  } else if (lower.includes('office') || lower.includes('corporate') || lower.includes('commercial') || lower.includes('heavy')) {
    results.push(
      {
        matchPercentage: 96,
        product: spc,
        reasoning: 'High-density limestone core with 0.55mm wear layer built for continuous foot traffic and chair casters.',
        idealFor: 'Executive Corridors & High-Traffic Corporate Floors'
      },
      {
        matchPercentage: 91,
        product: walnut,
        reasoning: 'Rich chocolate tones and deep American black walnut grain for high-impact boardroom prestige.',
        idealFor: 'Executive Boardrooms & Private Client Lounges'
      }
    );
  } else {
    // Residential / Default warm prompt match
    results.push(
      {
        matchPercentage: 96,
        product: oak,
        reasoning: 'Prime European White Oak wear layer with multi-ply cross-grain base for optimal dimensional stability in Indian climates.',
        idealFor: 'Living Rooms, Master Bedrooms & Luxury Apartments'
      },
      {
        matchPercentage: 91,
        product: walnut,
        reasoning: 'Deep natural walnut tones with micro-bevelled edges for modern architectural warm luxury.',
        idealFor: 'Master Suites & Penthouse Lounges'
      },
      {
        matchPercentage: 87,
        product: teak,
        reasoning: 'Genuine plantation solid teak wood with high weather & moisture resistance for connected indoor-outdoor balconies.',
        idealFor: 'Spacious Balconies & Garden Verandahs'
      }
    );
  }

  return results;
}
