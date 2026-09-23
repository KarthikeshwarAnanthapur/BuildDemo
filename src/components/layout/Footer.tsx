import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, Globe, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#060709] pt-24 pb-12 text-slate-400">
      {/* Background Subtle Gradient Glow */}
      <div className="pointer-events-none absolute -bottom-48 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C5A059]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* BRAND COLUMN */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C5A059] text-black">
                <span className="font-display text-xl font-extrabold">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black tracking-widest text-white">BUILDSTAR</span>
                <span className="text-xs font-semibold tracking-widest text-[#C5A059]">PROJECTS PVT. LTD.</span>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              India's premier architectural materials, solid & engineered wooden flooring, Burma teak decking, exterior WPC cladding, and Tata Steel fire-rated security doors provider. Over 5,000 landmark developments completed across 6 cities.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="h-4 w-4 text-[#C5A059]" />
              <span>Certified Supply & Expert Installation Network across India</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="font-display text-xs font-bold tracking-widest uppercase text-white">Showroom</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="#spaces" className="transition-colors hover:text-[#C5A059]">Space Discovery</a></li>
              <li><a href="#style-quiz" className="transition-colors hover:text-[#C5A059]">Style Configurator</a></li>
              <li><a href="#ai-finder" className="transition-colors hover:text-[#C5A059]">AI Material Finder</a></li>
              <li><a href="#visualizer" className="transition-colors hover:text-[#C5A059]">Room Visualizer</a></li>
              <li><a href="#products" className="transition-colors hover:text-[#C5A059]">Materials Collection</a></li>
              <li><a href="#projects" className="transition-colors hover:text-[#C5A059]">Project Showcase</a></li>
            </ul>
          </div>

          {/* PRODUCT LINES */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="font-display text-xs font-bold tracking-widest uppercase text-white">Product Lines</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><span className="text-slate-300">Engineered Oak & Walnut</span></li>
              <li><span className="text-slate-300">Burma Teak Decking</span></li>
              <li><span className="text-slate-300">Architectural WPC Cladding</span></li>
              <li><span className="text-slate-300">Tata Steel Fire Doors</span></li>
              <li><span className="text-slate-300">Rigid Core SPC Stone</span></li>
              <li><span className="text-slate-300">Sports Infrastructure</span></li>
            </ul>
          </div>

          {/* HEADQUARTERS & CONTACT */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h4 className="font-display text-xs font-bold tracking-widest uppercase text-white">Registered Office</h4>
            <div className="flex flex-col gap-3 text-xs leading-relaxed text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A059]" />
                <span>No. 130/1, Ulsoor Road, Bengaluru, Karnataka 560042, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#C5A059]" />
                <span>+91 80 4123 4567 / +91 98860 00000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#C5A059]" />
                <span>info@buildstar.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-[#C5A059]" />
                <span>www.buildstar.in</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="mt-2 flex items-center justify-between rounded-xl border border-[#C5A059]/40 bg-[#C5A059]/10 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#C5A059] transition-all duration-300 hover:bg-[#C5A059] hover:text-black"
            >
              <span>Schedule Showroom Visit</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* CITIES FOOTER BANNER */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 text-xs lg:flex-row">
          <div className="flex flex-wrap items-center gap-2 text-slate-400">
            <span className="font-semibold text-white">Active Cities:</span>
            <span>Bengaluru</span> • <span>Mumbai</span> • <span>Hyderabad</span> • <span>Kochi</span> • <span>Ahmedabad</span> • <span>Pune</span>
          </div>
          <p className="text-slate-500">
            © {new Date().getFullYear()} Buildstar Projects Pvt. Ltd. Digital Showroom Concept. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
