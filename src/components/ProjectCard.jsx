import { Github, ExternalLink } from "lucide-react";

export function ProjectCard ({ project }) {
  return (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
      <div className="relative h-full rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/30 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <div className="p-5 flex flex-col h-full">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 leading-tight">{project.title}</h3>
              <div className="text-xs mt-1.5 text-neutral-500 dark:text-neutral-400">{project.period}</div>
            </div>
          </div>
          
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4 flex-1">{project.blurb}</p>
          
          <div className="mt-auto">
            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-neutral-100/70 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50"
                >
                  {t}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3 pt-3 border-t border-neutral-200/50 dark:border-neutral-700/30">
              {project.links?.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <Github className="size-4" />
                  <span>Code</span>
                </a>
              )}
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <ExternalLink className="size-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
