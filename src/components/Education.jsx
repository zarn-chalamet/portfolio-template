import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import mfu from "../assets/logo_mfu.jpg";

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <span className="mono text-blue-400 text-2xl">05.</span>
              Education
            </h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 rounded-lg bg-white p-2 flex items-center justify-center flex-shrink-0">
                  <img src={mfu} alt="MFU" className="max-w-full max-h-full object-contain" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Bachelor of Software Engineering
                      </h3>
                      <p className="text-blue-400 font-semibold text-sm mt-1">
                        Mae Fah Luang University — International Program
                      </p>
                    </div>
                    <span className="mono text-xs text-neutral-500 whitespace-nowrap flex items-center gap-1">
                      <Calendar className="size-3" /> Graduated 2026
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-neutral-500 text-sm mb-4">
                    <MapPin className="size-3.5" />
                    Chiang Rai, Thailand
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Completed a comprehensive software engineering curriculum taught entirely in English,
                    covering software architecture, distributed systems, algorithms, database design,
                    and modern web development. Graduated with strong hands-on project experience across
                    Java backend systems, microservices, and AI integrations.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Software Architecture",
                      "Distributed Systems",
                      "Database Systems",
                      "Data Structures & Algorithms",
                      "Web Engineering",
                      "Software Testing"
                    ].map((course) => (
                      <span
                        key={course}
                        className="mono text-xs px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;