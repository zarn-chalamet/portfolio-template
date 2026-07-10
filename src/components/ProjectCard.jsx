import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Star } from "lucide-react";

export const ProjectCard = ({ project, onClick }) => {
  if (!project) return null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(project)}
      className="group relative rounded-xl border border-white/10 bg-white/[0.02] hover:border-blue-500/50 hover:bg-white/[0.04] transition-all cursor-pointer overflow-hidden"
    >
      {project.featured && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 mono text-[10px] px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
          <Star className="size-2.5 fill-current" />
          FEATURED
        </div>
      )}

      {project.image && (
        <div className="h-44 overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition duration-500"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="mono text-xs text-neutral-500 mt-1">{project.subtitle}</p>
            )}
          </div>
          <ArrowUpRight className="size-5 text-neutral-500 group-hover:text-blue-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
        </div>

        <p className="text-sm text-neutral-400 leading-relaxed mb-4 line-clamp-3">
          {project.blurb}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="mono text-[10px] px-2 py-1 rounded bg-white/5 text-neutral-400 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-3 border-t border-white/5">
          {project.links?.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-neutral-400 hover:text-blue-400 transition"
            >
              <Github className="size-4" />
            </a>
          )}
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-neutral-400 hover:text-blue-400 transition"
            >
              <ExternalLink className="size-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};