import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../../types';
import { X, Eye, ShieldCheck, PhoneCall, Award } from 'lucide-react';
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
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* MODAL DIALOG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl text-slate-900 lg:p-12"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 hover:border-[#B38B38] hover:text-[#B38B38]"
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-[#B38B38] px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* HIGHLIGHTED BADGES */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                {product.acRating && (
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-700">
                    <Award className="h-4 w-4 text-[#B38B38]" />
                    <span>{product.acRating}</span>
                  </div>
                )}
                {product.fireRating && (
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-700">
                    <ShieldCheck className="h-4 w-4 text-[#B38B38]" />
                    <span>{product.fireRating}</span>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT: DETAILED ARCHITECTURAL SPECS */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <span className="font-display text-xs font-bold tracking-widest uppercase text-[#B38B38]">
                  Architectural Material Specification
                </span>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-900 md:text-4xl">
                  {product.name}
                </h2>
                <p className="mt-2 font-normal italic text-[#B38B38]">"{product.tagline}"</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {product.description}
                </p>

                {/* TEXTURE & FINISH */}
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs">
                  <div className="font-bold text-slate-900">Texture & Surface Finish:</div>
                  <div className="mt-1 text-slate-600">{product.texturePattern}</div>
                </div>

                {/* SPECIFICATIONS TABLE */}
                <div className="mt-6">
                  <h4 className="font-display text-xs font-bold tracking-widest uppercase text-slate-500">
                    Technical Specifications
                  </h4>
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {product.specifications.map((spec, i) => (
                      <div key={i} className="flex justify-between border-b border-slate-100 py-1.5 text-xs">
                        <span className="text-slate-500">{spec.label}</span>
                        <span className="font-bold text-slate-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTAS */}
              <div className="mt-8 flex flex-col items-center gap-4 border-t border-slate-100 pt-6 sm:flex-row">
                <button
                  onClick={() => {
                    onClose();
                    onVisualize(product.id);
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#B38B38] py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-slate-900 sm:w-auto sm:px-8 shadow-md"
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
                  <PhoneCall className="h-4 w-4 text-[#B38B38]" />
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
