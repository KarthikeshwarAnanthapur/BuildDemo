import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types';
import { X, MapPin, Calendar, Layers, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { MagneticButton } from '../UI/MagneticButton';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onExploreMaterial: (materialCategory: string) => void;
  onConsult: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onExploreMaterial,
  onConsult
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
        />

        {/* MODAL DIALOG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative z-10 max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/15 bg-[#0A0B0F] p-8 shadow-2xl lg:p-12"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:border-[#C5A059] hover:text-[#C5A059]"
          >
            <X className="h-5 w-5" />
          </button>

          {/* HERO BANNER IMAGE */}
          <div className="relative h-80 w-full overflow-hidden rounded-2xl md:h-[400px]">
            <img
              src={project.heroImage}
              alt={project.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0F] via-transparent to-black/40" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{project.location}</span> • <span>Completed {project.completionYear}</span>
                </div>
                <h1 className="mt-2 font-display text-3xl font-extrabold text-white md:text-5xl">
                  {project.name}
                </h1>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur-md">
                <span>Category: {project.category}</span>
              </div>
            </div>
          </div>

          {/* METRICS STRIP */}
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-4">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="font-display text-xl font-extrabold text-[#C5A059] md:text-2xl">
                  {metric.value}
                </span>
                <span className="mt-1 text-[11px] uppercase tracking-wider text-slate-400">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* PROJECT CASE STUDY STORY */}
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* LEFT: CHALLENGE, SOLUTION, RESULT */}
            <div className="flex flex-col gap-6 lg:col-span-8">
              <div>
                <h3 className="font-display text-sm font-bold tracking-widest uppercase text-[#C5A059]">
                  Architectural Challenge
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="font-display text-sm font-bold tracking-widest uppercase text-[#C5A059]">
                  Buildstar Engineering Solution
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {project.solution}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-xs text-emerald-200">
                <div className="flex items-center gap-2 font-bold text-emerald-400 uppercase tracking-wider">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Verified Result</span>
                </div>
                <p className="mt-2 leading-relaxed">{project.result}</p>
              </div>
            </div>

            {/* RIGHT: MATERIALS USED & DISCOVERY LOOP */}
            <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-4">
              <div>
                <h3 className="font-display text-xs font-bold tracking-widest uppercase text-[#C5A059]">
                  Materials Deployed
                </h3>
                <div className="mt-4 flex flex-col gap-2">
                  {project.materialsUsed.map((mat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 p-3 text-xs font-medium text-slate-200"
                    >
                      <Layers className="h-4 w-4 text-[#C5A059]" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onExploreMaterial(project.materialCategory);
                  }}
                  className="flex w-full items-center justify-between rounded-xl bg-[#C5A059] px-4 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-white"
                >
                  <span>Explore Material Used</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onConsult();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3 text-xs font-semibold text-white transition-all hover:bg-white/10"
                >
                  <span>Request Similar Project Estimate</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
