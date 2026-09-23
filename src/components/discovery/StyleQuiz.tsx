import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StylePreference } from '../../types';
import { Sparkles, Check, ArrowRight, RefreshCw } from 'lucide-react';
import { MagneticButton } from '../UI/MagneticButton';

interface StyleQuizProps {
  onComplete: (pref: StylePreference) => void;
}

export const StyleQuiz: React.FC<StyleQuizProps> = ({ onComplete }) => {
  const [selectedStyle, setSelectedStyle] = useState<StylePreference['style']>('Warm');
  const [selectedPriority, setSelectedPriority] = useState<StylePreference['priority']>('Durability');
  const [selectedSpace, setSelectedSpace] = useState('Living & Bedrooms');

  const styles: { name: StylePreference['style']; desc: string; img: string }[] = [
    { name: 'Warm', desc: 'Natural European Oak, soft honey tones & tactile warmth.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop' },
    { name: 'Minimal', desc: 'Clean architectural lines, subtle grain & seamless slate.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop' },
    { name: 'Luxury', desc: 'Deep dark American walnut & gold-accented solid timber.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
    { name: 'Contemporary', desc: 'Modern herringbone patterns & sleek glass door pairings.', img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop' },
    { name: 'Natural', desc: 'Raw plantation teak decking & sustainable cork textures.', img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop' },
    { name: 'Bold', desc: 'Dark charcoal WPC slatted facade walls & high-contrast grain.', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop' }
  ];

  const priorities: { name: StylePreference['priority']; note: string }[] = [
    { name: 'Appearance', note: 'Unmatched visual prestige & luxury finish' },
    { name: 'Durability', note: '100% moisture stability & scratch shield' },
    { name: 'Low Maintenance', note: 'Easy wipe cleaning & anti-bacterial' },
    { name: 'Sustainability', note: 'FSC certified non-toxic E0 timber' },
    { name: 'Budget', note: 'High ROI & long warranty longevity' }
  ];

  const handleGenerate = () => {
    onComplete({
      style: selectedStyle,
      priority: selectedPriority,
      spaceType: selectedSpace
    });
  };

  return (
    <section id="style-quiz" className="relative w-full bg-[#08090C] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <span className="font-display text-xs font-bold tracking-[0.3em] uppercase text-[#C5A059]">
            Guided Style Configurator
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            What feels like you?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
            Configure your aesthetic aesthetic preferences and technical priorities to curate a personalized Buildstar collection.
          </p>
        </div>

        {/* STEP 1: STYLE SELECTION */}
        <div className="mb-16">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="font-display text-lg font-bold tracking-wider uppercase text-white">
              01 / Select Your Aesthetic Vibe
            </h3>
            <span className="text-xs text-[#C5A059] font-medium">Selected: {selectedStyle}</span>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {styles.map((item) => {
              const isSelected = selectedStyle === item.name;
              return (
                <div
                  key={item.name}
                  onClick={() => setSelectedStyle(item.name)}
                  data-cursor="SELECT"
                  className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl p-4 transition-all duration-300 ${
                    isSelected
                      ? 'border-2 border-[#C5A059] bg-[#C5A059]/10 shadow-[0_10px_30px_rgba(197,160,89,0.3)]'
                      : 'border border-white/10 bg-white/5 hover:border-white/30'
                  }`}
                >
                  <div className="h-28 w-full overflow-hidden rounded-xl">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-base font-bold text-white">{item.name}</span>
                      {isSelected && (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C5A059] text-black">
                          <Check className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                    <p className="mt-1 text-[11px] leading-tight text-slate-400">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* STEP 2: PRIORITY SELECTION */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="font-display text-lg font-bold tracking-wider uppercase text-white">
              02 / What is most important to you?
            </h3>
            <span className="text-xs text-[#C5A059] font-medium">Selected: {selectedPriority}</span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {priorities.map((item) => {
              const isSelected = selectedPriority === item.name;
              return (
                <div
                  key={item.name}
                  onClick={() => setSelectedPriority(item.name)}
                  data-cursor="SELECT"
                  className={`flex cursor-pointer flex-col justify-between rounded-2xl p-6 transition-all duration-300 ${
                    isSelected
                      ? 'border border-[#C5A059] bg-[#C5A059]/20 shadow-[0_0_20px_rgba(197,160,89,0.2)]'
                      : 'border border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-base font-bold text-white">{item.name}</span>
                    <div
                      className={`h-4 w-4 rounded-full border ${
                        isSelected ? 'border-[#C5A059] bg-[#C5A059]' : 'border-slate-500'
                      }`}
                    />
                  </div>
                  <p className="mt-3 text-xs text-slate-400">{item.note}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* GENERATE ACTION BUTTON */}
        <div className="flex items-center justify-center pt-6">
          <MagneticButton
            variant="gold"
            onClick={handleGenerate}
            cursorLabel="CURATE"
            className="!px-10 !py-5"
          >
            <Sparkles className="h-5 w-5" />
            <span>Curate My Buildstar Collection</span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
