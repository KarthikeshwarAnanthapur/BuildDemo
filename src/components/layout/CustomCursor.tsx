import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch desktop screens
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Ring / Label Bubble */}
      <motion.div
        className={`flex items-center justify-center rounded-full border transition-colors duration-200 ${
          isHovered
            ? 'h-16 w-16 border-[#B38B38] bg-[#B38B38] text-white shadow-[0_10px_25px_rgba(179,139,56,0.4)]'
            : 'h-8 w-8 border-slate-900/40 bg-slate-900/10 backdrop-blur-sm'
        }`}
        animate={{
          x: position.x - (isHovered ? 32 : 16),
          y: position.y - (isHovered ? 32 : 16),
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.5 }}
      >
        {isHovered && cursorText && (
          <span className="font-display text-[10px] font-bold tracking-widest uppercase text-white">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Tiny Core Dot */}
      <motion.div
        className="h-1.5 w-1.5 rounded-full bg-[#B38B38]"
        animate={{
          x: position.x - 3,
          y: position.y - 3
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 600 }}
      />
    </div>
  );
};
