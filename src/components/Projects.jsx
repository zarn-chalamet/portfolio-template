import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects } from "../json/data";

const Projects = ({ tags }) => {
  const [activeTag, setActiveTag] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = useMemo(() => {
    if (activeTag === "all") return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <p className="text-neutral-400 mb-10 max-w-2xl">
            A selection of projects that showcase my backend engineering, microservices architecture,
            and AI integration skills. Each one solves a real problem end-to-end.
          </p>

          {/* Filter tags */}
          <div className="flex flex-wrap gap-2 mb-12">
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

          {/* Projects grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onClick={handleProjectClick}
                />
              ))}
            </AnimatePresence>
          </div>
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