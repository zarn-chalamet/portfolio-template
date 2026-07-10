import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Backend & Frameworks",
    items: ["Java", "Spring Boot", "Spring Cloud", "Spring Security", "Node.js", "Express.js"]
  },
  {
    category: "Architecture & Systems",
    items: ["Microservices", "REST APIs", "Event-Driven Design", "API Gateway", "Service Discovery"]
  },
  {
    category: "Messaging & Auth",
    items: ["RabbitMQ", "Keycloak", "JWT", "OAuth2 / OIDC"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    category: "AI & Integration",
    items: ["Google Gemini API", "Groq Whisper", "DeepFace", "FFmpeg", "Apache PDFBox"]
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Angular", "Vue.js", "Tailwind CSS"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Google Cloud Run", "Railway", "Vercel", "Firebase", "Git"]
  },
  {
    category: "Tools",
    items: ["Postman", "IntelliJ IDEA", "VS Code", "Linux CLI"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <span className="mono text-blue-400 text-2xl">04.</span>
              Skills & Tech Stack
            </h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <p className="text-neutral-400 mb-12 max-w-2xl">
            The technologies and tools I use to design, build, and ship reliable software systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition"
              >
                <h3 className="mono text-xs text-blue-400 uppercase tracking-wider mb-4">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="mono text-xs px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5 hover:border-blue-500/30 hover:text-blue-300 transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;