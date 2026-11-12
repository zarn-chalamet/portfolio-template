import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Star } from "lucide-react";

export const ProjectCard = ({ project, onClick, index = 0 }) => {
  if (!project) return null;

  return (
    <motion.div
      // NO layout prop — that was the main source of jank inside CSS grid
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.28,
        delay: index * 0.05, // subtle stagger after page fade-in
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onClick(project)}
      className="group relative h-full flex flex-col rounded-xl border border-white/10 bg-white/[0.02] hover:border-blue-500/50 hover:bg-white/[0.04] transition-colors cursor-pointer overflow-hidden"
    >
      {project.featured && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 mono text-[10px] px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-md">
          <Star className="size-2.5 fill-current" />
          FEATURED
        </div>
      )}

      {project.image ? (
        <div className="h-48 flex-shrink-0 overflow-hidden bg-gradient-to-br from-[#0f0f17] to-[#1a1a24] border-b border-white/5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition duration-700 ease-out"
          />
        </div>
      ) : (
        <div className="h-48 flex-shrink-0 overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-b border-white/5 flex items-center justify-center">
          <span className="mono text-blue-500/30 text-4xl font-bold">
            {project.title.substring(0, 2).toUpperCase()}
          </span>
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="mono text-xs text-neutral-500 mt-1 line-clamp-1">
                {project.subtitle}
              </p>
            )}
          </div>
          <ArrowUpRight className="size-5 text-neutral-500 group-hover:text-blue-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition flex-shrink-0" />
        </div>

        <p className="text-sm text-neutral-400 leading-relaxed mb-6 line-clamp-3">
          {project.blurb}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="mono text-[10px] px-2 py-1 rounded bg-white/5 text-neutral-400 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-4 border-t border-white/5">
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-neutral-500 hover:text-white transition flex items-center gap-1.5 mono text-xs"
              >
                <Github className="size-4" /> Code
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-neutral-500 hover:text-white transition flex items-center gap-1.5 mono text-xs"
              >
                <ExternalLink className="size-4" /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};