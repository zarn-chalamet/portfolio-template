import React, { useMemo, useState, useRef, useEffect } from 'react'
import { Filter } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from './ProjectCard';
import { Pagination } from './Pagination';
import { ProjectModal } from './ProjectModal';
import { projects } from '../json/data';



const Projects = ({ tags }) => {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const inputRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const projectsPerPage = 3; // Changed to 3 projects per page

  useEffect(() => {
    // Focus the input on component mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const Container = ({ children, className = "" }) => (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return projects.filter((p) => {
      const matchesTag = activeTag === "all" || p.tags.includes(activeTag);
      const matchesQuery = !q || 
        p.title.toLowerCase().includes(q) || 
        p.blurb.toLowerCase().includes(q) || 
        p.tags.some(tag => tag.toLowerCase().includes(q));
      
      return matchesTag && matchesQuery;
    });
  }, [activeTag, query]);

  const totalPages = Math.ceil(filtered.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filtered.slice(startIndex, startIndex + projectsPerPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    } else if (totalPages === 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Removed the scroll to top behavior
  };

  return (
    <section id="projects" className="py-16 md:py-24" ref={projectsSectionRef}>
      <Container>
        <div className="mb-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Highlighted Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
          >
            A collection of my recent work showcasing various technologies and solutions
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/30 shadow-sm"
        >
          
          
          <div className="flex flex-wrap gap-2">

            <div className="relative flex items-center gap-2 flex-1 mr-3">
              <Filter className="size-5 text-neutral-500" />
            </div>

            {tags.map((t) => (
              <button
                key={t.key}
                onClick={() => {
                  setActiveTag(t.key);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  activeTag === t.key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:shadow-md"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </motion.div>

        {filtered.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-2xl font-semibold text-neutral-600 dark:text-neutral-400 mb-2">
              No projects found
            </div>
            <p className="text-neutral-500">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        ) : (
          <>
            <motion.div 
              layout
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {paginatedProjects.map((p) => (
                  <ProjectCard 
                    key={p.title} 
                    project={p} 
                    onClick={handleProjectClick}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {totalPages > 1 && (
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}

        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      </Container>
    </section>
  );
};

export default Projects;