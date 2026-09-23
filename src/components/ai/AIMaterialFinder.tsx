import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Sliders, Eye, RefreshCw } from 'lucide-react';
import { findAIRecommendations } from '../../data/aiRules';
import { AIRecommendationResult } from '../../types';
import { MagneticButton } from '../UI/MagneticButton';

interface AIMaterialFinderProps {
  onVisualizingProduct: (productId: string) => void;
}

export const AIMaterialFinder: React.FC<AIMaterialFinderProps> = ({ onVisualizingProduct }) => {
  const [query, setQuery] = useState('I want a warm premium floor for a modern 3BHK that is easy to maintain and durable.');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<AIRecommendationResult[]>(() => findAIRecommendations(query));

  const samplePrompts = [
    'Warm premium floor for modern 3BHK apartment',
    'Weatherproof outdoor deck for Nandi Hills villa pool',
    'Heavy footfall acoustic flooring for corporate office corridor',
    'Tata fire-rated security doors for penthouse main entrance'
  ];

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      setResults(findAIRecommendations(query));
      setIsSearching(false);
    }, 600);
  };

  return (
    <section id="ai-finder" className="relative w-full bg-[#0A0B0F] py-28 border-t border-white/10">
      {/* BACKGROUND AMBIENT ACCENTS */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-[#C5A059]/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI Material Match Engine</span>
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Describe your vision.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Type your design intent, room layout, or technical criteria in natural language. Our AI evaluates material parameters and match percentages instantly.
          </p>
        </div>

        {/* INPUT BOX */}
        <form onSubmit={handleSearch} className="mx-auto mb-10 max-w-3xl">
          <div className="relative flex items-center rounded-3xl border border-white/15 bg-white/5 p-2 shadow-2xl backdrop-blur-xl transition-all focus-within:border-[#C5A059] focus-within:shadow-[0_0_30px_rgba(197,160,89,0.25)]">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Describe your space (e.g., 'Warm wooden floor for living room...')"
              className="w-full bg-transparent px-6 py-4 text-base font-medium text-white placeholder-slate-500 outline-none"
            />
            <MagneticButton
              variant="gold"
              onClick={handleSearch}
              cursorLabel="SEARCH"
              className="!px-6 !py-3.5"
            >
              {isSearching ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <span>Match</span>
                  <Sparkles className="h-4 w-4" />
                </>
              )}
            </MagneticButton>
          </div>

          {/* QUICK PRESET SUGGESTIONS */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="font-semibold text-slate-500 uppercase tracking-widest">Try prompts:</span>
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setQuery(prompt);
                  setIsSearching(true);
                  setTimeout(() => {
                    setResults(findAIRecommendations(prompt));
                    setIsSearching(false);
                  }, 500);
                }}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors hover:border-[#C5A059] hover:text-[#C5A059]"
              >
                "{prompt}"
              </button>
            ))}
          </div>
        </form>

        {/* RESULTS GRID */}
        <div className="mt-16">
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-display text-sm font-bold tracking-widest uppercase text-[#C5A059]">
                YOUR BUILDSTAR COLLECTION
              </span>
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-slate-300">
                {results.length} Matches Found
              </span>
            </div>
            <span className="text-xs text-slate-500">Grounded in Buildstar Technical Data</span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {results.map((item, index) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-cursor="VIEW"
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#C5A059]/50 hover:bg-white/10 hover:shadow-2xl"
                >
                  <div>
                    {/* INDEX & MATCH PERCENTAGE */}
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl font-black text-slate-600">
                        0{index + 1}
                      </span>
                      <div className="flex items-center gap-1.5 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/20 px-3 py-1 text-xs font-bold text-[#E6C875]">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>{item.matchPercentage}% Match</span>
                      </div>
                    </div>

                    {/* PRODUCT IMAGE */}
                    <div className="relative mt-6 h-52 w-full overflow-hidden rounded-2xl">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="rounded-md bg-black/60 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase text-[#C5A059] backdrop-blur-md">
                          {item.product.category}
                        </span>
                      </div>
                    </div>

                    {/* TITLE & TAGLINE */}
                    <h3 className="mt-6 font-display text-xl font-bold text-white group-hover:text-[#C5A059]">
                      {item.product.name}
                    </h3>
                    <p className="mt-1 text-xs font-light text-slate-300 line-clamp-2">
                      {item.product.tagline}
                    </p>

                    {/* AI REASONING BOX */}
                    <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4 text-xs leading-relaxed text-slate-300 backdrop-blur-md">
                      <span className="font-semibold text-[#C5A059]">Why Recommended:</span> {item.reasoning}
                    </div>
                  </div>

                  {/* BOTTOM ACTION CTA */}
                  <div className="mt-8 border-t border-white/10 pt-4">
                    <button
                      onClick={() => onVisualizingProduct(item.product.id)}
                      className="flex w-full items-center justify-between rounded-xl bg-[#C5A059] px-4 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-white"
                    >
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>See it in my space</span>
                      </div>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
