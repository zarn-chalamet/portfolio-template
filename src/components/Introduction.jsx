import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 relative border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <span className="mono text-blue-400 text-lg md:text-xl">01.</span>
              About Me
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT — Narrative Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-4 text-neutral-400 text-sm md:text-base leading-relaxed">
              <p>
                Software Engineering graduate from{" "}
                <span className="text-blue-400">
                  Mae Fah Luang University (International Program)
                </span>{" "}
                — four-year degree conducted entirely in English, graduating{" "}
                <span className="text-white">July 2026</span>. I specialize in{" "}
                <span className="text-white">Java Spring Boot</span> backends and{" "}
                <span className="text-white">React / Angular</span> frontends.
              </p>
              
              <p>
                I focus on building resilient backend architecture:{" "}
                <span className="text-white">secure REST APIs (JWT, OAuth 2.0, AES-256-GCM)</span>, 
                database query optimization, and production-grade third-party integrations — 
                from EasySlip payment verification and multi-channel bots (Telegram/LINE) to AI pipelines (Gemini, Whisper).
              </p>

              <p>
                During my internship at <span className="text-blue-400">Be1 Digital</span>, I delivered{" "}
                <span className="text-white">15+ REST endpoints</span>, developed Angular UI components, 
                resolved 20+ defects, and achieved a ~35% database query speedup in Agile sprints.
              </p>
            </div>

            {/* RIGHT — Single Minimalist Metrics Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-6">
                
                {/* Metric 1 */}
                <div>
                  <span className="mono text-[10px] text-blue-400 uppercase tracking-widest block mb-1">
                    Academic Rank
                  </span>
                  <p className="text-2xl font-bold text-white">3.84 / 4.00 GPA</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    B.Eng. Software Engineering (English Medium)
                  </p>
                </div>

                <div className="h-px bg-white/5" />

                {/* Metric 2 */}
                <div>
                  <span className="mono text-[10px] text-blue-400 uppercase tracking-widest block mb-1">
                    Production Internship
                  </span>
                  <p className="text-2xl font-bold text-white">15+ APIs Shipped</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Be1 Digital · ~35% PostgreSQL latency reduction
                  </p>
                </div>

                <div className="h-px bg-white/5" />

                {/* Metric 3 */}
                <div>
                  <span className="mono text-[10px] text-emerald-400 uppercase tracking-widest block mb-1">
                    Work Authorization
                  </span>
                  <p className="text-sm font-semibold text-emerald-300">Available Immediately</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Non-Ed Plus → Direct Non-B Work Permit transition
                  </p>
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;