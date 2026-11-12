import React from "react";
import { motion } from "framer-motion";
import be1Logo from "../assets/be1-logo.png";
import { ExternalLink } from "lucide-react";

const Experience = () => {
  const bullets = [
    "Designed and shipped 15+ secure RESTful API endpoints with Java, Spring Boot, and Spring Security in a live production government enterprise codebase.",
    "Built Angular + TypeScript UI components (forms, validation, services) wired to Spring Boot APIs, delivered inside Agile sprint cycles.",
    "Implemented JWT and OAuth 2.0 authorization flows for session and role-based access control across frontend and backend.",
    "Diagnosed and resolved 20+ production defects via systematic log analysis, root-cause debugging, and regression checks on Linux.",
    "Optimized PostgreSQL queries and indexes, achieving a ~35% reduction in data retrieval latency on critical paths.",
    "Supported CI/CD, application installs, and deployment maintenance; collaborated through Git reviews and Scrum ceremonies."
  ];

  const stack = [
    "Java", "Spring Boot", "Angular", "TypeScript", "PostgreSQL", 
    "JWT", "OAuth 2.0", "REST", "Git", "CI/CD"
  ];

  return (
    <section
      id="experience"
      className="py-24 md:py-32 relative border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <span className="mono text-blue-400 text-2xl">02.</span>
              Where I've Worked
            </h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative pl-8 border-l-2 border-blue-500/30">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-[#0a0a0f] shadow-lg shadow-blue-500/50"></div>

              <div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-white p-2 flex items-center justify-center">
                      <img src={be1Logo} alt="Be1 Digital" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Software Developer Intern
                      </h3>
                      <a
                        href="https://be1digital.co.th/me/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium mt-1"
                      >
                        Be1 Digital Co., Ltd.
                        <ExternalLink className="size-3" />
                      </a>
                    </div>
                  </div>
                  <span className="mono text-xs text-neutral-500 whitespace-nowrap bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    Jan 2026 — May 2026
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-neutral-400 text-sm md:text-base leading-relaxed">
                      <span className="text-blue-400 mono flex-shrink-0 mt-1">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="mono text-xs px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;