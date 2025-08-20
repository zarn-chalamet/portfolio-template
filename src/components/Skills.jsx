import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ServerCog,
  Code2,
  Cpu,
  Wrench,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Zap,
} from "lucide-react";

const SKILLS = [
  {
    category: "Backend Development",
    icon: <ServerCog className="w-4 h-4" />,
    gradient: "from-blue-500/10 to-blue-600/10",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    items: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "Eureka Server",
      "Kafka",
      "RabbitMQ",
      "Keycloak",
      "REST API Design",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    category: "Frontend Development",
    icon: <Code2 className="w-4 h-4" />,
    gradient: "from-green-500/10 to-green-600/10",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    items: [
      "React.js",
      "Vue.js",
      "Tailwind CSS",
      "Vuetify",
      "Material UI",
      "Chrome Extensions",
    ],
  },
  {
    category: "AI & Integrations",
    icon: <Cpu className="w-4 h-4" />,
    gradient: "from-purple-500/10 to-purple-600/10",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    items: [
      "Google Gemini API",
      "Deepseek API",
      "PDF Processing",
      "e-Signature Systems",
      "Real-time Notifications",
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-4 h-4" />,
    gradient: "from-orange-500/10 to-orange-600/10",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    items: ["Firebase", "Git", "Postman", "Docker", "CI/CD Basics"],
  },
];

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section
      id="skills"
      className="py-12 md:py-16 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 relative overflow-hidden"
    >
      {/* Background decorative elements - more subtle */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-500/3 to-purple-500/3 pointer-events-none"></div>
      
      <Container>
        <div className="text-center mb-8 relative">
          <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Technical Expertise
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I use to build robust, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden border border-neutral-200/50 dark:border-neutral-700/30 backdrop-blur-sm bg-gradient-to-br from-white/70 to-white/40 dark:from-neutral-900/70 dark:to-neutral-800/40 shadow-md hover:shadow-lg transition-all duration-200 ${expandedCategory === index ? 'ring-1 ring-blue-500/20' : ''}`}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.gradient}`}></div>
              
              <button
                onClick={() => toggleCategory(index)}
                className="w-full p-4 text-left flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${skill.bgColor} ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                    {skill.category}
                  </h3>
                </div>
                {expandedCategory === index ? (
                  <ChevronUp className="w-4 h-4 text-neutral-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-500" />
                )}
              </button>

              {expandedCategory === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((item, itemIndex) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.15, delay: itemIndex * 0.03 }}
                          className="px-2.5 py-1 text-xs rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-150 flex items-center gap-1"
                        >
                          <Sparkles className="w-2.5 h-2.5 text-yellow-500" />
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Summary card - more compact */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-8 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/30"
        >
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <ServerCog className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                Backend-Focused Full Stack Developer
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                While proficient across the stack, I specialize in building robust backend systems with Spring Boot, 
                microservices architecture, and event-driven solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;