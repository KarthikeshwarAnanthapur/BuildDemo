import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types';
import { X, MapPin, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

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
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* MODAL DIALOG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative z-10 max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl text-slate-900 lg:p-12"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 hover:border-[#B38B38] hover:text-[#B38B38]"
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
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/30" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B38B38]">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{project.location}</span> • <span>Completed {project.completionYear}</span>
                </div>
                <h1 className="mt-2 font-display text-3xl font-extrabold text-white md:text-5xl">
                  {project.name}
                </h1>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/30 bg-black/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                <span>Category: {project.category}</span>
              </div>
            </div>
          </div>

          {/* METRICS STRIP */}
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-4">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="font-display text-xl font-extrabold text-[#B38B38] md:text-2xl">
                  {metric.value}
                </span>
                <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
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
                <h3 className="font-display text-sm font-bold tracking-widest uppercase text-[#B38B38]">
                  Architectural Challenge
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="font-display text-sm font-bold tracking-widest uppercase text-[#B38B38]">
                  Buildstar Engineering Solution
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {project.solution}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50 p-5 text-xs text-emerald-900">
                <div className="flex items-center gap-2 font-bold text-emerald-700 uppercase tracking-wider">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Verified Result</span>
                </div>
                <p className="mt-2 leading-relaxed">{project.result}</p>
              </div>
            </div>

            {/* RIGHT: MATERIALS USED & DISCOVERY LOOP */}
            <div className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:col-span-4">
              <div>
                <h3 className="font-display text-xs font-bold tracking-widest uppercase text-[#B38B38]">
                  Materials Deployed
                </h3>
                <div className="mt-4 flex flex-col gap-2">
                  {project.materialsUsed.map((mat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 text-xs font-semibold text-slate-800 shadow-sm"
                    >
                      <Layers className="h-4 w-4 text-[#B38B38]" />
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
                  className="flex w-full items-center justify-between rounded-xl bg-[#B38B38] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-slate-900 shadow-md"
                >
                  <span>Explore Material Used</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onConsult();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-3 text-xs font-bold text-slate-800 transition-all hover:bg-slate-100 shadow-sm"
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
