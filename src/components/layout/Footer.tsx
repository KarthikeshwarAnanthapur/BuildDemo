import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, Globe, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#F1F3F6] pt-24 pb-12 text-slate-600">
      {/* Background Subtle Gradient Glow */}
      <div className="pointer-events-none absolute -bottom-48 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#B38B38]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* BRAND COLUMN */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B38B38] text-white shadow-sm">
                <span className="font-display text-xl font-extrabold">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black tracking-widest text-slate-900">BUILDSTAR</span>
                <span className="text-xs font-bold tracking-widest text-[#B38B38]">PROJECTS PVT. LTD.</span>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-600">
              India's premier architectural materials, solid & engineered wooden flooring, Burma teak decking, exterior WPC cladding, and Tata Steel fire-rated security doors provider. Over 5,000 landmark developments completed across 6 cities.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
              <ShieldCheck className="h-4 w-4 text-[#B38B38]" />
              <span>Certified Supply & Expert Installation Network across India</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="font-display text-xs font-bold tracking-widest uppercase text-slate-900">Showroom</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="#spaces" className="transition-colors hover:text-[#B38B38]">Space Discovery</a></li>
              <li><a href="#style-quiz" className="transition-colors hover:text-[#B38B38]">Style Configurator</a></li>
              <li><a href="#ai-finder" className="transition-colors hover:text-[#B38B38]">AI Material Finder</a></li>
              <li><a href="#visualizer" className="transition-colors hover:text-[#B38B38]">Room Visualizer</a></li>
              <li><a href="#products" className="transition-colors hover:text-[#B38B38]">Materials Collection</a></li>
              <li><a href="#projects" className="transition-colors hover:text-[#B38B38]">Project Showcase</a></li>
            </ul>
          </div>

          {/* PRODUCT LINES */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="font-display text-xs font-bold tracking-widest uppercase text-slate-900">Product Lines</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><span className="text-slate-700">Engineered Oak & Walnut</span></li>
              <li><span className="text-slate-700">Burma Teak Decking</span></li>
              <li><span className="text-slate-700">Architectural WPC Cladding</span></li>
              <li><span className="text-slate-700">Tata Steel Fire Doors</span></li>
              <li><span className="text-slate-700">Rigid Core SPC Stone</span></li>
              <li><span className="text-slate-700">Sports Infrastructure</span></li>
            </ul>
          </div>

          {/* HEADQUARTERS & CONTACT */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h4 className="font-display text-xs font-bold tracking-widest uppercase text-slate-900">Registered Office</h4>
            <div className="flex flex-col gap-3 text-xs leading-relaxed text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B38B38]" />
                <span>No. 130/1, Ulsoor Road, Bengaluru, Karnataka 560042, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#B38B38]" />
                <span>+91 80 4123 4567 / +91 98860 00000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#B38B38]" />
                <span>info@buildstar.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-[#B38B38]" />
                <span>www.buildstar.in</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="mt-2 flex items-center justify-between rounded-xl border border-[#B38B38]/40 bg-white px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#B38B38] transition-all duration-300 hover:bg-[#B38B38] hover:text-white shadow-sm"
            >
              <span>Schedule Showroom Visit</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* CITIES FOOTER BANNER */}
        <div className="mt-16 border-t border-slate-300 pt-8 flex flex-col items-center justify-between gap-4 text-xs lg:flex-row">
          <div className="flex flex-wrap items-center gap-2 text-slate-600">
            <span className="font-bold text-slate-900">Active Cities:</span>
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
