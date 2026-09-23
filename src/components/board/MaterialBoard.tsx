import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../../types';
import { Bookmark, Trash2, Share2, Check, PhoneCall, Plus } from 'lucide-react';
import { MagneticButton } from '../UI/MagneticButton';
import canvasConfetti from 'canvas-confetti';

interface MaterialBoardProps {
  savedProducts: Product[];
  onRemoveProduct: (productId: string) => void;
  onOpenConsultation: () => void;
  onAddMore: () => void;
}

export const MaterialBoard: React.FC<MaterialBoardProps> = ({
  savedProducts,
  onRemoveProduct,
  onOpenConsultation,
  onAddMore
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const spaceCode = 'AX72K';

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/space/${spaceCode}`);
    setCopiedLink(true);
    canvasConfetti({ particleCount: 40, spread: 60 });
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="material-board" className="relative w-full bg-[#F5F4F0] py-28 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* HEADER */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#B38B38]/30 bg-[#B38B38]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#B38B38] shadow-sm">
              <Bookmark className="h-3.5 w-3.5" />
              <span>Personal Spatial Canvas</span>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              My Buildstar Space
            </h2>
            <p className="mt-2 max-w-xl text-base text-slate-600">
              Your saved architectural palette. Combine engineered flooring, exterior decking, and Tata fire doors into a unified project specification board.
            </p>
          </div>

          {/* SHAREABLE CODE BANNER */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-md">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Project Reference</span>
              <span className="font-display text-base font-bold text-[#B38B38]">/space/{spaceCode}</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 rounded-xl bg-[#B38B38] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-transform active:scale-95 shadow-sm"
            >
              {copiedLink ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
              <span>{copiedLink ? 'Copied URL!' : 'Share Board'}</span>
            </button>
          </div>
        </div>

        {/* BOARD ITEMS GRID */}
        {savedProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center shadow-sm">
            <Bookmark className="h-12 w-12 text-slate-400" />
            <h3 className="mt-4 font-display text-xl font-bold text-slate-900">Your Material Board is Empty</h3>
            <p className="mt-2 max-w-md text-sm text-slate-600">
              Browse our materials or use the Room Visualizer to save your favorite flooring, decking, and fire security doors.
            </p>
            <button
              onClick={onAddMore}
              className="mt-6 flex items-center gap-2 rounded-full bg-[#B38B38] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-900 shadow-md"
            >
              <Plus className="h-4 w-4" />
              <span>Explore Materials</span>
            </button>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {savedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-md"
                  >
                    <div>
                      <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <button
                          onClick={() => onRemoveProduct(product.id)}
                          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 hover:bg-red-500 hover:text-white shadow-md backdrop-blur-md"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <span className="mt-4 inline-block font-display text-[10px] font-bold tracking-widest uppercase text-[#B38B38]">
                        {product.category}
                      </span>
                      <h3 className="font-display text-xl font-bold text-slate-900">{product.name}</h3>
                      <p className="mt-1 text-xs text-slate-600">{product.finish}</p>
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-4 flex justify-between items-center text-xs text-slate-600">
                      <span>Warranty: {product.warranty || '15 Years'}</span>
                      <span className="font-bold text-slate-900">{product.acRating || 'Premium Grade'}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* CONSULTATION BAR */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#B38B38]/30 bg-white p-8 shadow-lg lg:flex-row">
              <div>
                <h3 className="font-display text-2xl font-bold text-slate-900">Ready to bring this space to life?</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Request a doorstep sample box & customized estimate for your saved board choices.
                </p>
              </div>

              <MagneticButton
                variant="gold"
                onClick={onOpenConsultation}
                cursorLabel="ESTIMATE"
                className="!px-8 !py-4"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Request Project Estimate</span>
              </MagneticButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
