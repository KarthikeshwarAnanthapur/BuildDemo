import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUILDSTAR_SPACES } from '../../data/spaces';
import { SpaceCategory } from '../../types';
import { ArrowRight, Building2, Home, Hotel, Store, Trees, Dumbbell } from 'lucide-react';

interface SpaceSelectorProps {
  onSelectSpace: (space: SpaceCategory) => void;
}

export const SpaceSelector: React.FC<SpaceSelectorProps> = ({ onSelectSpace }) => {
  const [hoveredSpace, setHoveredSpace] = useState<SpaceCategory>(BUILDSTAR_SPACES[0]);

  const getSpaceIcon = (id: string) => {
    switch (id) {
      case 'space-home': return <Home className="h-6 w-6 text-[#C5A059]" />;
      case 'space-hotel': return <Hotel className="h-6 w-6 text-[#C5A059]" />;
      case 'space-office': return <Building2 className="h-6 w-6 text-[#C5A059]" />;
      case 'space-commercial': return <Store className="h-6 w-6 text-[#C5A059]" />;
      case 'space-outdoor': return <Trees className="h-6 w-6 text-[#C5A059]" />;
      case 'space-sports': return <Dumbbell className="h-6 w-6 text-[#C5A059]" />;
      default: return <Building2 className="h-6 w-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="spaces" className="relative min-h-screen w-full overflow-hidden bg-[#0A0B0F] py-28">
      {/* SPATIAL BACKGROUND CROSSFADE ENVIRONMENT */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={hoveredSpace.id}
            src={hoveredSpace.image}
            alt={hoveredSpace.name}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.25, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="h-full w-full object-cover filter brightness-75 contrast-110"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0F] via-[#0A0B0F]/80 to-[#0A0B0F]/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* SECTION HEADER */}
        <div className="mb-16 text-center">
          <span className="font-display text-xs font-bold tracking-[0.3em] uppercase text-[#C5A059]">
            Spatial Environment Discovery
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            What are you building?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Hover over any space to visualize the architectural environment and explore tailored material collections engineered for that exact setting.
          </p>
        </div>

        {/* 6 SPATIAL CARDS GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BUILDSTAR_SPACES.map((space) => {
            const isHovered = hoveredSpace.id === space.id;
            return (
              <motion.div
                key={space.id}
                onMouseEnter={() => setHoveredSpace(space)}
                onClick={() => onSelectSpace(space)}
                data-cursor="EXPLORE"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-500 ${
                  isHovered
                    ? 'border border-[#C5A059] bg-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(197,160,89,0.25)] backdrop-blur-xl'
                    : 'border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/20'
                }`}
              >
                {/* CARD BACKGROUND IMAGE OVERLAY */}
                <div className="absolute inset-0 -z-10 opacity-30 transition-opacity duration-500 group-hover:opacity-50">
                  <img src={space.image} alt={space.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0F] via-[#0A0B0F]/80 to-transparent" />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C5A059]/30 bg-[#C5A059]/10">
                      {getSpaceIcon(space.id)}
                    </div>
                    <span className="font-display text-xs font-bold tracking-widest text-[#C5A059]">
                      {space.recommendedCategories.length} Categories
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#C5A059]">
                    {space.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {space.subtitle}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-300 group-hover:text-white">
                    <span>Explore Spaces & Materials</span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C5A059]/20 text-[#C5A059] transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#C5A059] group-hover:text-black">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
