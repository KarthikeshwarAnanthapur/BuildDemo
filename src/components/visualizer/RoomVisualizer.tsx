import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BeforeAfterSlider } from '../UI/BeforeAfterSlider';
import { BUILDSTAR_PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import { Sparkles, Upload, Bookmark, PhoneCall, RefreshCw, Check } from 'lucide-react';
import { MagneticButton } from '../UI/MagneticButton';
import canvasConfetti from 'canvas-confetti';

interface RoomVisualizerProps {
  initialProductId?: string;
  onSaveToBoard: (product: Product) => void;
  onOpenConsultation: () => void;
}

export const RoomVisualizer: React.FC<RoomVisualizerProps> = ({
  initialProductId = 'prod-eng-oak',
  onSaveToBoard,
  onOpenConsultation
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    () => BUILDSTAR_PRODUCTS.find((p) => p.id === initialProductId) || BUILDSTAR_PRODUCTS[0]
  );
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [customRoomImage, setCustomRoomImage] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  const demoRooms = [
    {
      name: 'Modern Luxury Penthouse',
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
      afterMap: {
        'prod-eng-oak': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
        'prod-dark-walnut': 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600&auto=format&fit=crop',
        'prod-teak-decking': 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop',
        'prod-spc-stone': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop'
      }
    },
    {
      name: 'Corporate Executive Suite',
      before: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
      afterMap: {
        'prod-eng-oak': 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop',
        'prod-dark-walnut': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
        'prod-teak-decking': 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop',
        'prod-spc-stone': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop'
      }
    },
    {
      name: 'Resort Terrace & Balcony',
      before: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop',
      afterMap: {
        'prod-eng-oak': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
        'prod-dark-walnut': 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop',
        'prod-teak-decking': 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop',
        'prod-spc-stone': 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop'
      }
    }
  ];

  const currentRoom = demoRooms[selectedRoomIndex];
  const currentAfterImage =
    customRoomImage ||
    currentRoom.afterMap[selectedProduct.id as keyof typeof currentRoom.afterMap] ||
    selectedProduct.image;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomRoomImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSaveToBoard(selectedProduct);
    setIsSaved(true);
    canvasConfetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <section id="visualizer" className="relative w-full bg-[#08090C] py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Spatial Transformation Engine</span>
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            See it in your space.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Switch between real Buildstar hardwood, decking, and SPC materials to preview instant visual transformations with our interactive before/after drag slider.
          </p>
        </div>

        {/* MAIN VISUALIZER CONTAINER */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* LEFT: ROOM PRESET SELECTOR & MATERIAL OPTIONS */}
          <div className="flex flex-col gap-8 lg:col-span-4">
            {/* ROOM PRESETS */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="font-display text-xs font-bold tracking-widest uppercase text-[#C5A059]">
                01 / Choose Room Preset
              </h3>
              <div className="mt-4 flex flex-col gap-2">
                {demoRooms.map((room, idx) => (
                  <button
                    key={room.name}
                    onClick={() => {
                      setCustomRoomImage(null);
                      setSelectedRoomIndex(idx);
                    }}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-medium transition-all ${
                      selectedRoomIndex === idx && !customRoomImage
                        ? 'border border-[#C5A059] bg-[#C5A059]/20 text-white font-bold'
                        : 'border border-white/5 bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span>{room.name}</span>
                    {selectedRoomIndex === idx && !customRoomImage && (
                      <div className="h-2 w-2 rounded-full bg-[#C5A059]" />
                    )}
                  </button>
                ))}

                {/* CUSTOM PHOTO UPLOAD OPTION */}
                <label className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-[#C5A059]/50 bg-[#C5A059]/10 p-3 text-xs font-semibold text-[#C5A059] transition-all hover:bg-[#C5A059]/20">
                  <Upload className="h-4 w-4" />
                  <span>Upload Your Own Room Photo</span>
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>
            </div>

            {/* MATERIAL SWITCHER */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="font-display text-xs font-bold tracking-widest uppercase text-[#C5A059]">
                02 / Select Buildstar Material
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                {BUILDSTAR_PRODUCTS.slice(0, 5).map((prod) => {
                  const isSelected = selectedProduct.id === prod.id;
                  return (
                    <div
                      key={prod.id}
                      onClick={() => setSelectedProduct(prod)}
                      data-cursor="SWITCH"
                      className={`flex cursor-pointer items-center gap-4 rounded-2xl p-3 transition-all ${
                        isSelected
                          ? 'border border-[#C5A059] bg-[#C5A059]/20 shadow-[0_0_15px_rgba(197,160,89,0.2)]'
                          : 'border border-white/5 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="h-12 w-12 rounded-xl object-cover"
                      />
                      <div className="flex flex-1 flex-col">
                        <span className="font-display text-sm font-bold text-white">{prod.name}</span>
                        <span className="text-[11px] text-[#C5A059]">{prod.category}</span>
                      </div>
                      {isSelected && (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C5A059] text-black">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE BEFORE / AFTER SLIDER */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-8">
            <BeforeAfterSlider
              beforeImage={currentRoom.before}
              afterImage={currentAfterImage}
              materialName={selectedProduct.name}
            />

            {/* PRODUCT QUICK DETAILS & ACTIONS BAR */}
            <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:flex-row">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-slate-400">Active Visualization</span>
                <span className="font-display text-lg font-bold text-white">{selectedProduct.name}</span>
                <span className="text-xs text-[#C5A059]">{selectedProduct.finish} • {selectedProduct.acRating}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold text-white transition-all hover:border-[#C5A059] hover:text-[#C5A059]"
                >
                  {isSaved ? <Check className="h-4 w-4 text-green-400" /> : <Bookmark className="h-4 w-4" />}
                  <span>{isSaved ? 'Saved to Space' : 'Save to My Space'}</span>
                </button>

                <MagneticButton
                  variant="gold"
                  onClick={onOpenConsultation}
                  cursorLabel="TALK"
                  className="!px-6 !py-3 !text-xs"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Request Consultation</span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
