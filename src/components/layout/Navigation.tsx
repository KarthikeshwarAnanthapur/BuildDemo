import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bookmark, Menu, X, ArrowUpRight, MessageSquare, PhoneCall } from 'lucide-react';
import { MagneticButton } from '../UI/MagneticButton';

interface NavigationProps {
  onOpenConsultation: () => void;
  onOpenAskAI: () => void;
  savedBoardCount: number;
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenConsultation,
  onOpenAskAI,
  savedBoardCount,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Spaces', href: '#spaces' },
    { name: 'Style Finder', href: '#style-quiz' },
    { name: 'AI Material', href: '#ai-finder' },
    { name: 'Visualizer', href: '#visualizer' },
    { name: 'Materials', href: '#products' },
    { name: 'Projects', href: '#projects' },
    { name: 'My Space', href: '#material-board' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'border-b border-white/10 bg-[#08090C]/80 py-4 backdrop-blur-xl shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* LOGO */}
        <a
          href="#"
          data-cursor="HOME"
          className="group flex items-center gap-3 font-display text-2xl font-black tracking-wider uppercase text-white"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#C5A059] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#C5A059] group-hover:text-black">
            <span className="font-display font-extrabold">B</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.2em] text-white">BUILDSTAR</span>
            <span className="text-[9px] font-medium tracking-widest text-[#C5A059]">DIGITAL SHOWROOM</span>
          </div>
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-cursor="VIEW"
              className={`relative px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors duration-300 hover:text-[#C5A059] ${
                activeSection === link.href.substring(1)
                  ? 'text-[#C5A059]'
                  : 'text-slate-300'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#C5A059]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={onOpenAskAI}
            data-cursor="ASK AI"
            className="flex items-center gap-2 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#C5A059] transition-all duration-300 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-black"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ask Buildstar</span>
          </button>

          <a
            href="#material-board"
            data-cursor="MY SPACE"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-200 transition-all duration-300 hover:border-[#C5A059] hover:text-[#C5A059]"
          >
            <Bookmark className="h-4 w-4" />
            {savedBoardCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C5A059] text-[10px] font-bold text-black">
                {savedBoardCount}
              </span>
            )}
          </a>

          <MagneticButton
            variant="gold"
            onClick={onOpenConsultation}
            cursorLabel="TALK"
            className="!px-5 !py-2.5 !text-xs"
          >
            <span>Talk to Us</span>
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white lg:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[73px] z-40 border-b border-white/10 bg-[#08090C]/95 p-6 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-white/10 py-3 font-display text-lg font-bold tracking-wider text-slate-200 hover:text-[#C5A059]"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-500" />
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAskAI();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#C5A059]/40 bg-[#C5A059]/10 py-3 text-sm font-semibold text-[#C5A059]"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Ask Buildstar AI Assistant</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C5A059] py-3 text-sm font-bold text-black"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Request Consultation</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
