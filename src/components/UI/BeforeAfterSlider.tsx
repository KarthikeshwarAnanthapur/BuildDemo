import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  materialName?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'ORIGINAL SPACE',
  afterLabel = 'WITH BUILDSTAR',
  materialName = 'Engineered Oak'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      data-cursor="DRAG"
      className="group relative h-[480px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl select-none md:h-[600px]"
    >
      {/* BEFORE IMAGE (Full width background) */}
      <img
        src={beforeImage}
        alt={beforeLabel}
        className="absolute inset-0 h-full w-full object-cover brightness-90"
      />
      <div className="absolute top-6 left-6 z-10 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-300 backdrop-blur-md">
        {beforeLabel}
      </div>

      {/* AFTER IMAGE (Clipped overlay) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 h-full w-full max-w-none object-cover"
          style={{ width: containerRef.current?.clientWidth || '100%' }}
        />
        <div className="absolute top-6 left-6 z-10 flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-black shadow-lg backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{afterLabel}: {materialName}</span>
        </div>
      </div>

      {/* DRAG DIVIDER LINE */}
      <div
        className="absolute top-0 bottom-0 z-20 w-1 cursor-ew-resize bg-gradient-to-b from-[#C5A059] via-white to-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.8)]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* DRAG HANDLE BUTTON */}
        <div className="absolute top-1/2 -left-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/80 text-[#C5A059] shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-transform duration-150 group-hover:scale-110">
          <ArrowLeftRight className="h-4 w-4" />
        </div>
      </div>

      {/* FOOTER INSTRUCTION OVERLAY */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-5 py-2 text-xs tracking-wider text-slate-300 backdrop-blur-md">
        Drag slider left or right to experience material transformation
      </div>
    </div>
  );
};
