import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../../types';
import { X, Check, Eye, ShieldCheck, Sparkles, PhoneCall, Layers, Award } from 'lucide-react';
import { MagneticButton } from '../UI/MagneticButton';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onVisualize: (productId: string) => void;
  onConsult: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onVisualize,
  onConsult
}) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* MODAL DIALOG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/15 bg-[#0C0E14] p-8 shadow-2xl lg:p-12"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:border-[#C5A059] hover:text-[#C5A059]"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* LEFT: IMMERSIVE PRODUCT VISUAL */}
            <div className="flex flex-col gap-4 lg:col-span-5">
              <div className="relative h-80 w-full overflow-hidden rounded-2xl lg:h-96">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-[#C5A059] px-3 py-1 text-xs font-bold text-black">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* HIGHLIGHTED BADGES */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                {product.acRating && (
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300">
                    <Award className="h-4 w-4 text-[#C5A059]" />
                    <span>{product.acRating}</span>
                  </div>
                )}
                {product.fireRating && (
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300">
                    <ShieldCheck className="h-4 w-4 text-[#C5A059]" />
                    <span>{product.fireRating}</span>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT: DETAILED ARCHITECTURAL SPECS */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <span className="font-display text-xs font-bold tracking-widest uppercase text-[#C5A059]">
                  Architectural Material Specification
                </span>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-white md:text-4xl">
                  {product.name}
                </h2>
                <p className="mt-2 font-light italic text-[#E6C875]">"{product.tagline}"</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {product.description}
                </p>

                {/* TEXTURE & FINISH */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs">
                  <div className="font-semibold text-white">Texture & Surface Finish:</div>
                  <div className="mt-1 text-slate-400">{product.texturePattern}</div>
                </div>

                {/* SPECIFICATIONS TABLE */}
                <div className="mt-6">
                  <h4 className="font-display text-xs font-bold tracking-widest uppercase text-slate-400">
                    Technical Specifications
                  </h4>
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {product.specifications.map((spec, i) => (
                      <div key={i} className="flex justify-between border-b border-white/10 py-1.5 text-xs">
                        <span className="text-slate-400">{spec.label}</span>
                        <span className="font-semibold text-white">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTAS */}
              <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/10 pt-6 sm:flex-row">
                <button
                  onClick={() => {
                    onClose();
                    onVisualize(product.id);
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C5A059] py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-white sm:w-auto sm:px-8"
                >
                  <Eye className="h-4 w-4" />
                  <span>See it in my space</span>
                </button>

                <MagneticButton
                  variant="glass"
                  onClick={() => {
                    onClose();
                    onConsult();
                  }}
                  cursorLabel="TALK"
                  className="w-full sm:w-auto !py-3.5 !text-xs"
                >
                  <PhoneCall className="h-4 w-4 text-[#C5A059]" />
                  <span>Talk to an Expert</span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
