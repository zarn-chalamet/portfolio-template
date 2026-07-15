import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Zap, Layers, Award, Users } from "lucide-react";

export const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[85vh] rounded-2xl bg-[#0f0f17] border border-white/10 shadow-2xl shadow-black/50 overflow-hidden flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white transition shadow-lg"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>

            {/* ============================================
                FIXED HEADER — Image background + Title
                (Does NOT scroll)
            ============================================ */}
            <div className="relative flex-shrink-0 h-[30vh] overflow-hidden">
              {/* Background image */}
              {project.image && (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f17] via-[#0f0f17]/50 to-[#0f0f17]/30" />
                </>
              )}
              
              {/* Title overlaid on image */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight drop-shadow-lg">
                    {project.title}
                  </h2>
                  {project.status && (
                    <span className="flex-shrink-0 mono text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider backdrop-blur-sm">
                      {project.status}
                    </span>
                  )}
                </div>
                {project.subtitle && (
                  <p className="mono text-sm text-blue-300 drop-shadow-md">
                    {project.subtitle}
                  </p>
                )}
                {project.period && (
                  <p className="mono text-xs text-neutral-400 mt-1 drop-shadow-md">
                    {project.period}
                  </p>
                )}
              </div>
            </div>

            {/* ============================================
                SCROLLABLE CONTENT — Only this scrolls
            ============================================ */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="mono text-xs text-blue-400 uppercase tracking-wider mb-3">
                  Overview
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Achievements */}
              {project.highlights && (
                <div>
                  <h3 className="mono text-xs text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Award className="size-4" /> Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-neutral-300 text-sm leading-relaxed">
                        <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features */}
              {project.features && (
                <div>
                  <h3 className="mono text-xs text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Zap className="size-4" /> Features
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex gap-2 text-neutral-400 text-sm">
                        <span className="text-blue-400 flex-shrink-0">▸</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              {project.tech && (
                <div>
                  <h3 className="mono text-xs text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Layers className="size-4" /> Tech Stack
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(project.tech).map(([category, items]) => (
                      <div key={category}>
                        <p className="mono text-xs text-neutral-500 mb-1.5 capitalize">
                          {category}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((item) => (
                            <span
                              key={item}
                              className="mono text-xs px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Role */}
              {project.role && (
                <div>
                  <h3 className="mono text-xs text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Users className="size-4" /> My Role
                  </h3>
                  <p className="text-neutral-300 text-sm">{project.role}</p>
                </div>
              )}
            </div>

            {/* ============================================
                FIXED FOOTER
            ============================================ */}
            <div className="flex-shrink-0 p-6 border-t border-white/10 flex gap-3 bg-[#0f0f17]">
              {project.links?.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-blue-500/50 text-neutral-300 hover:text-blue-400 rounded-md mono text-sm transition"
                >
                  <Github className="size-4" /> View Code
                </a>
              )}
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-md mono text-sm transition ml-auto"
                >
                  <ExternalLink className="size-4" /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};