import React from "react";
import {
  ServerCog,
  Code2,
  Cpu,
  Wrench,
} from "lucide-react";

const SKILLS = [
  {
    category: "Backend Development",
    icon: <ServerCog className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    gradient: "from-blue-100/20 to-blue-100/0",
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
    icon: <Code2 className="w-6 h-6 text-green-600 dark:text-green-400" />,
    gradient: "from-green-100/20 to-green-100/0",
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
    icon: <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    gradient: "from-purple-100/20 to-purple-100/0",
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
    icon: <Wrench className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
    gradient: "from-orange-100/20 to-orange-100/0",
    items: ["Firebase", "Git", "Postman", "Docker", "CI/CD Basics"],
  },
];

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-white/80 dark:bg-neutral-900/70 border-y border-black/5 dark:border-white/10"
    >
      <Container>
        <h2 className="text-3xl font-extrabold tracking-tight mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="space-y-10">
          {SKILLS.map((skill) => (
            <div
              key={skill.category}
              className="relative p-6 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden bg-white dark:bg-neutral-900"
            >
              {/* Gradient background accent */}
              <div
                className={`absolute inset-0 bg-black-500${skill.gradient} pointer-events-none`}
              />
              <div className="relative flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="relative flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/10 hover:border-neutral-400 hover:shadow-sm transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
