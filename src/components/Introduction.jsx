import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Zap } from "lucide-react";

const stats = [
  { icon: Server, label: "Backend Focus", value: "Java + Spring Boot" },
  { icon: Code2, label: "Architecture", value: "Microservices + REST" },
  { icon: Zap, label: "Specialty", value: "AI Integration" }
];

const Introduction = ({ profile }) => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 relative border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-12"
        >
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                <span className="mono text-blue-400 text-2xl">01.</span>
                About Me
              </h2>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <div className="space-y-5 text-neutral-400 text-base md:text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-semibold">Zarni Tun</span>, a Software Engineering graduate from{" "}
                <span className="text-blue-400">Mae Fah Luang University's International Program</span> in Thailand.
                My passion lies in engineering <span className="text-white">reliable backend systems</span> that solve real problems.
              </p>
              <p>
                My journey started with curiosity about how large-scale applications work under the hood.
                Today, I architect{" "}
                <span className="text-white">event-driven microservices with Spring Cloud</span>, integrate cutting-edge{" "}
                <span className="text-white">AI pipelines using Gemini and Whisper</span>, and solve deep engineering
                challenges like rendering complex Myanmar Unicode subtitles inside video processing pipelines.
              </p>
              <p>
                During my internship at <span className="text-blue-400">Be1 Digital</span>, I shipped
                production-grade Spring Boot APIs and Angular integrations for a government enterprise system —
                gaining real experience with SQL optimization, secure authentication, and enterprise-grade Git workflows.
              </p>
              <p>
                I'm currently based in Bangkok and{" "}
                <span className="text-emerald-400 font-semibold">actively seeking backend or full-stack roles</span>{" "}
                where I can contribute meaningful engineering work to a strong team.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-blue-500/50 transition group"
                >
                  <Icon className="size-6 text-blue-400 mb-3 group-hover:scale-110 transition" />
                  <p className="mono text-xs text-neutral-500 mb-1">{stat.label}</p>
                  <p className="text-white font-semibold">{stat.value}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;