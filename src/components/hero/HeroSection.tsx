import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from '../UI/MagneticButton';
import { Sparkles, Compass, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onFindMaterialClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onFindMaterialClick
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const titleWords = ['Materials', 'that', 'transform', 'spaces.'];

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#FAF9F6] pt-28 pb-16"
    >
      {/* CINEMATIC ARCHITECTURAL BACKGROUND WITH LIGHT GRADIENT OVERLAY */}
      <motion.div
        style={{ scale: backgroundScale, opacity: backgroundOpacity }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="Buildstar Architectural Interior"
          className="h-full w-full object-cover object-center filter brightness-105 contrast-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/80 to-white/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#FAF9F6]/60 to-[#FAF9F6]" />
      </motion.div>

      {/* AMBIENT LIGHTING GLOWS */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B38B38]/10 blur-[160px]" />

      {/* CONTENT CONTAINER */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-12"
      >
        {/* BRAND SUBTITLE TAG */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#B38B38]/30 bg-[#B38B38]/10 px-4 py-1.5 backdrop-blur-md shadow-sm"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#B38B38]" />
          <span className="font-display text-xs font-bold tracking-[0.25em] uppercase text-[#B38B38]">
            Buildstar Digital Showroom
          </span>
        </motion.div>

        {/* PROGRESSIVE WORD REVEAL TITLE */}
        <h1 className="mb-8 font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-7xl lg:text-8xl">
          {titleWords.map((word, index) => (
            <motion.span
              key={word + index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={word === 'transform' ? 'gold-gradient-text inline-block px-2' : 'inline-block px-2'}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* SUPPORTING COPY */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mx-auto max-w-2xl text-lg font-normal leading-relaxed text-slate-600 md:text-xl"
        >
          Discover engineered wooden flooring, solid teak decking, architectural WPC cladding, and Tata Steel fire security doors through the real spaces they're made for.
        </motion.p>

        {/* CTAS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <MagneticButton
            variant="gold"
            onClick={onExploreClick}
            cursorLabel="EXPLORE"
            className="!px-8 !py-4"
          >
            <span>Explore Collection</span>
            <Compass className="h-4 w-4" />
          </MagneticButton>

          <MagneticButton
            variant="glass"
            onClick={onFindMaterialClick}
            cursorLabel="AI FIND"
            className="!px-8 !py-4"
          >
            <span>Find My Material</span>
            <Sparkles className="h-4 w-4 text-[#B38B38]" />
          </MagneticButton>
        </motion.div>

        {/* QUICK STATS STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 grid grid-cols-2 gap-4 border-t border-slate-200 pt-8 sm:grid-cols-4 lg:gap-8"
        >
          <div className="flex flex-col items-center">
            <span className="font-display text-2xl font-bold text-slate-900 md:text-3xl">5,000+</span>
            <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Projects Executed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-2xl font-bold text-slate-900 md:text-3xl">6 Cities</span>
            <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Across India</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-2xl font-bold text-[#B38B38] md:text-3xl">100%</span>
            <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Moisture Engineered</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-2xl font-bold text-slate-900 md:text-3xl">Tata Steel</span>
            <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Fire Security Doors</span>
          </div>
        </motion.div>
      </motion.div>

      {/* SCROLL DOWN INDICATOR */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center text-slate-500"
      >
        <span className="text-[10px] tracking-widest uppercase text-slate-500 font-medium">Scroll to discover</span>
        <ChevronDown className="h-4 w-4 text-[#B38B38]" />
      </motion.div>
    </section>
  );
};
