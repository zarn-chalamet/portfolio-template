import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects } from "../json/data";

const ITEMS_PER_PAGE = 3;

const Projects = ({ tags }) => {
  const [activeTag, setActiveTag] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTag]);

  const filteredProjects = useMemo(() => {
    if (activeTag === "all") return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));

  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const goToPage = (page) => setCurrentPage(page);

  return (
    <section id="projects" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <span className="mono text-blue-400 text-2xl">03.</span>
              Things I've Built
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <p className="text-neutral-400 mb-10 max-w-2xl">
            A selection of projects that showcase my backend engineering, microservices architecture,
            and AI integration skills. Each one solves a real problem end-to-end.
          </p>

          {/* Filter tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {tags.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTag(t.key)}
                className={`mono text-xs px-4 py-2 rounded-md border transition-all ${
                  activeTag === t.key
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-transparent text-neutral-400 border-white/10 hover:border-blue-500/50 hover:text-blue-400"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/*
            mode="wait" = exit finishes BEFORE enter starts (no overlap chaos)
            key changes on filter OR page → whole grid swaps as one unit
          */}
          <div className="relative min-h-[520px] md:min-h-[480px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${activeTag}-${currentPage}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {currentProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                    onClick={handleProjectClick}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center justify-center size-10 rounded-full border border-white/10 bg-white/5 text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                aria-label="Previous page"
              >
                <ChevronLeft className="size-5" />
              </button>

              <span className="mono text-sm text-neutral-400 tracking-widest tabular-nums">
                {String(currentPage).padStart(2, "0")}{" "}
                <span className="text-white/20">/</span>{" "}
                {String(totalPages).padStart(2, "0")}
              </span>

              <button
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center size-10 rounded-full border border-white/10 bg-white/5 text-white disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                aria-label="Next page"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          )}
        </motion.div>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default Projects;