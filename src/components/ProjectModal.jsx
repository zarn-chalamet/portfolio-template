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
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-[#0f0f17] border border-white/10 flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition"
            >
              <X className="size-5" />
            </button>

            {project.image && (
              <div className="h-56 relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f17] to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                  {project.subtitle && (
                    <p className="mono text-sm text-blue-400 mt-1">{project.subtitle}</p>
                  )}
                </div>
              </div>
            )}

            <div className="p-8 overflow-y-auto flex-1 space-y-8">
              <div>
                <h3 className="mono text-xs text-blue-400 uppercase tracking-wider mb-3">Overview</h3>
                <p className="text-neutral-300 leading-relaxed">{project.description}</p>
              </div>

              {project.highlights && (
                <div>
                  <h3 className="mono text-xs text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Award className="size-4" /> Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-neutral-300 text-sm">
                        <span className="text-emerald-400 flex-shrink-0">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.features && (
                <div>
                  <h3 className="mono text-xs text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Zap className="size-4" /> Features
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex gap-2 text-neutral-400 text-sm">
                        <span className="text-blue-400">▸</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.tech && (
                <div>
                  <h3 className="mono text-xs text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Layers className="size-4" /> Tech Stack
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(project.tech).map(([category, items]) => (
                      <div key={category}>
                        <p className="mono text-xs text-neutral-500 mb-1.5 capitalize">{category}</p>
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

              {project.role && (
                <div>
                  <h3 className="mono text-xs text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Users className="size-4" /> My Role
                  </h3>
                  <p className="text-neutral-300 text-sm">{project.role}</p>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-white/10 flex gap-3">
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
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-md mono text-sm transition"
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