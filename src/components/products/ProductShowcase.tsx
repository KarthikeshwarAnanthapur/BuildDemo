import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUILDSTAR_PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { ProductDetailModal } from './ProductDetailModal';
import { Eye } from 'lucide-react';

interface ProductShowcaseProps {
  onVisualizeProduct: (productId: string) => void;
  onConsult: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onVisualizeProduct,
  onConsult
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const categories = [
    'All',
    'Engineered Wood',
    'Outdoor Decking',
    'PVC/SPC',
    'WPC Cladding',
    'Tata Steel Fire Doors',
    'Sports Infrastructure'
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? BUILDSTAR_PRODUCTS
      : BUILDSTAR_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="relative w-full bg-[#F5F4F0] py-28 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <span className="font-display text-xs font-bold tracking-[0.3em] uppercase text-[#B38B38]">
            Architectural Material Collection
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            Crafted for endurance & elegance.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Explore verified Buildstar materials engineered to survive India's climate variations while exuding Apple-level product craftsmanship.
          </p>
        </div>

        {/* CATEGORY FILTER STRIP */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                data-cursor="FILTER"
                className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'border border-[#B38B38] bg-[#B38B38] text-white shadow-md'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* EDITORIAL MATERIAL CARDS GRID */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                data-cursor="VIEW"
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-500 hover:border-[#B38B38]/60 hover:shadow-xl"
              >
                <div>
                  {/* IMAGE CONTAINER WITH PARALLAX SCALING */}
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm backdrop-blur-md">
                        {product.category}
                      </span>
                    </div>

                    {product.ecoScore && (
                      <div className="absolute bottom-3 right-3 rounded-full bg-emerald-600 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                        Eco Score {product.ecoScore}/100
                      </div>
                    )}
                  </div>

                  {/* TITLE & TAGLINE */}
                  <h3 className="mt-6 font-display text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#B38B38]">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs font-normal text-slate-600 line-clamp-2">
                    {product.tagline}
                  </p>

                  {/* KEY SPECS SUMMARY */}
                  <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-slate-600">
                    <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1">
                      Finish: {product.finish}
                    </span>
                    {product.acRating && (
                      <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1">
                        {product.acRating}
                      </span>
                    )}
                  </div>
                </div>

                {/* BOTTOM BUTTONS */}
                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-slate-900"
                  >
                    Specs & Details
                  </button>

                  <button
                    onClick={() => onVisualizeProduct(product.id)}
                    className="flex items-center gap-2 rounded-full border border-[#B38B38]/30 bg-[#B38B38]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#B38B38] transition-all duration-300 hover:bg-[#B38B38] hover:text-white"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Visualize</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* DETAIL MODAL */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onVisualize={onVisualizeProduct}
        onConsult={onConsult}
      />
    </section>
  );
};
