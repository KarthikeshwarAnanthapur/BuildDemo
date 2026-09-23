import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  cursorLabel?: string;
  variant?: 'gold' | 'glass' | 'outline';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  cursorLabel = 'OPEN',
  variant = 'gold'
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = (e.clientX - centerX) * 0.25;
    const distanceY = (e.clientY - centerY) * 0.25;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'gold':
        return 'bg-gradient-to-r from-[#B38B38] to-[#D4A747] text-white font-semibold shadow-[0_10px_25px_rgba(179,139,56,0.3)] hover:shadow-[0_15px_35px_rgba(179,139,56,0.5)]';
      case 'glass':
        return 'border border-slate-900/10 bg-white/90 text-slate-900 hover:border-[#B38B38] hover:bg-white shadow-sm';
      case 'outline':
        return 'border border-slate-900/20 bg-transparent text-slate-900 hover:border-[#B38B38] hover:text-[#B38B38]';
      default:
        return '';
    }
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor={cursorLabel}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 active:scale-95 ${getVariantStyles()} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
