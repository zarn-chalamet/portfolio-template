import React, { useMemo, useState, useRef, useEffect } from 'react'
import { Filter } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from './ProjectCard';

const PROJECTS = [
  {
    title: "Quiz Builder (Vue + Firebase + AI)",
    period: "2024",
    blurb:
      "Vue SPA that ingests PDFs and generates quizzes and flashcards using Google Gemini API. Rate-limit aware AI calls with Firebase Cloud Functions for long-running jobs.",
    tags: ["frontend", "vue", "firebase", "ai"],
    links: { repo: "https://github.com/yourhandle/quiz-builder" },
  },
  {
    title: "AI Email Reply Assistant (Chrome Extension)",
    period: "2024",
    blurb:
      "Chrome extension that integrates with Gmail to generate AI-powered replies using Google Gemini API. Backend powered by Spring Boot for request handling.",
    tags: ["extension", "spring-boot", "react", "ai"],
    links: { repo: "https://github.com/yourhandle/ai-email-reply-assistant" },
  },
  {
    title: "Research Assistant (Chrome Extension)",
    period: "2024",
    blurb:
      "Summarizes selected webpage content using Google Gemini API. Built with a minimal popup UI and Spring Boot backend for AI request processing.",
    tags: ["extension", "spring-boot", "react", "ai"],
    links: { repo: "https://github.com/yourhandle/research-assistant" },
  },
  {
    title: "E-Signature Platform",
    period: "2023",
    blurb:
      "Multi-user PDF e-signature system with real-time notifications and signature pad input. Supports multiple signatories per document.",
    tags: ["backend", "nodejs", "mongodb", "react"],
    links: { repo: "https://github.com/yourhandle/e-signature-platform",live: "https://your-deploy-url.example", },
    
  },
  {
    title: "Distributed Microservices App",
    period: "2023",
    blurb:
      "Microservices setup with Spring Boot, Eureka Server for service registry, Kafka/RabbitMQ for messaging, MySQL & MongoDB for storage. Designed for scalability.",
    tags: ["microservices","backend", "spring-boot", "kafka", "rabbitmq", "eureka"],
    links: { repo: "https://github.com/yourhandle/distributed-microservices-app" },
  },
];

const Projects = ({ tags }) => {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  
  // create a ref for the input
  const inputRef = useRef(null);

  // focus the input on mount
  useEffect(() => {
    
  }, []);

  const Container = ({ children, className = "" }) => (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return PROJECTS.filter((p) => {
      const matchesTag =
        activeTag === "all" || p.tags.includes(activeTag);
      const matchesQuery = (p.title + p.blurb + p.tags.join(" "))
        .toLowerCase()
        .includes(q);
      return matchesTag && matchesQuery;
    });
  }, [activeTag, query]);

  return (
    <section id="projects" className="py-16 md:py-24">
      <Container>
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Highlighted Projects</h2>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div className="relative flex items-center gap-2 rounded-2xl ring-1 ring-black/10 dark:ring-white/10 bg-white dark:bg-neutral-900 px-3 py-2">
            <Filter className="size-4"/>
            <input
              ref={inputRef} // attach the ref
              autoFocus // optional, mostly handled by useEffect
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, tag, or description"
              className="bg-transparent outline-none text-sm w-56"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTag(t.key)}
                className={`px-3 py-1.5 text-xs rounded-full border transition ${
                  activeTag === t.key
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-white dark:bg-neutral-900 border-black/10 dark:border-white/10"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;