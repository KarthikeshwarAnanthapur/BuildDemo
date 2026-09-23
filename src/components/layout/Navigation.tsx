import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bookmark, Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
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
          ? 'border-b border-slate-200 bg-white/90 py-4 backdrop-blur-xl shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* LOGO */}
        <a
          href="#"
          data-cursor="HOME"
          className="group flex items-center gap-3 font-display text-2xl font-black tracking-wider uppercase text-slate-900"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#B38B38]/40 bg-[#B38B38]/10 text-[#B38B38] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#B38B38] group-hover:text-white">
            <span className="font-display font-extrabold">B</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.2em] text-slate-900">BUILDSTAR</span>
            <span className="text-[9px] font-semibold tracking-widest text-[#B38B38]">DIGITAL SHOWROOM</span>
          </div>
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-900/10 bg-white/80 px-4 py-1.5 backdrop-blur-md shadow-sm lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-cursor="VIEW"
              className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 hover:text-[#B38B38] ${
                activeSection === link.href.substring(1)
                  ? 'text-[#B38B38]'
                  : 'text-slate-700'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#B38B38]"
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
            className="flex items-center gap-2 rounded-full border border-[#B38B38]/30 bg-[#B38B38]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#B38B38] transition-all duration-300 hover:border-[#B38B38] hover:bg-[#B38B38] hover:text-white"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ask Buildstar</span>
          </button>

          <a
            href="#material-board"
            data-cursor="MY SPACE"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-[#B38B38] hover:text-[#B38B38] shadow-sm"
          >
            <Bookmark className="h-4 w-4" />
            {savedBoardCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#B38B38] text-[10px] font-bold text-white">
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm lg:hidden"
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
            className="fixed inset-x-0 top-[73px] z-40 border-b border-slate-200 bg-white/95 p-6 backdrop-blur-2xl shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-slate-100 py-3 font-display text-lg font-bold tracking-wider text-slate-900 hover:text-[#B38B38]"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-400" />
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAskAI();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#B38B38]/40 bg-[#B38B38]/10 py-3 text-sm font-semibold text-[#B38B38]"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Ask Buildstar AI Assistant</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#B38B38] py-3 text-sm font-bold text-white shadow-md"
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
