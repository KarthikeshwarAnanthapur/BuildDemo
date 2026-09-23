import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BUILDSTAR_PROJECTS } from '../../data/projects';
import { Project } from '../../types';
import { CaseStudyModal } from './CaseStudyModal';
import { MapPin, ArrowRight, Expand, Layers, Award } from 'lucide-react';

interface HorizontalProjectsProps {
  onExploreMaterialCategory: (category: string) => void;
  onConsult: () => void;
}

export const HorizontalProjects: React.FC<HorizontalProjectsProps> = ({
  onExploreMaterialCategory,
  onConsult
}) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative w-full bg-[#060709] py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <span className="font-display text-xs font-bold tracking-[0.3em] uppercase text-[#C5A059]">
            Realized Architectural Portfolio
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Built with Buildstar.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Over 5,000 landmark developments across India. Explore verified case studies from high-rise sky residences to corporate tech parks.
          </p>
        </div>

        {/* HORIZONTAL SCROLL / FLEX CAROUSEL */}
        <div className="flex gap-8 overflow-x-auto pb-8 pt-4 scrollbar-none snap-x snap-mandatory">
          {BUILDSTAR_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              onClick={() => setActiveProject(project)}
              data-cursor="CASE STUDY"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative flex min-w-[320px] max-w-[420px] flex-none snap-center flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:border-[#C5A059]/60 hover:bg-white/10 hover:shadow-2xl md:min-w-[400px]"
            >
              <div>
                {/* HERO CARD IMAGE */}
                <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded-full bg-[#C5A059] px-3 py-1 text-[10px] font-bold text-black uppercase">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-[#C5A059]" />
                      <span>{project.location}</span>
                    </div>
                    <span className="font-display text-sm font-bold text-white">
                      {project.area}
                    </span>
                  </div>
                </div>

                {/* PROJECT TITLE & DESCRIPTION */}
                <h3 className="mt-6 font-display text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#C5A059]">
                  {project.name}
                </h3>
                <p className="mt-2 text-xs font-light text-slate-300 line-clamp-2">
                  {project.description}
                </p>

                {/* MATERIALS USED TAGS */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.materialsUsed.map((mat, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] text-slate-400"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION FOOTER */}
              <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                <span>View Full Case Study</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C5A059]/20 text-[#C5A059] transition-all group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-black">
                  <Expand className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CASE STUDY MODAL */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onExploreMaterial={onExploreMaterialCategory}
        onConsult={onConsult}
      />
    </section>
  );
};
