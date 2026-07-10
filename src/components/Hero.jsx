import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, MapPin, Circle } from "lucide-react";

const Hero = ({ profile }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40"></div>

      {/* Animated blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl blob"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl blob" style={{ animationDelay: "4s" }}></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mono text-xs text-emerald-400 mb-6">
              <Circle className="size-2 fill-emerald-400 animate-pulse" />
              {profile.availability}
            </div>

            <p className="mono text-blue-400 text-sm mb-4">Hi, my name is</p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-3">
              {profile.name}.
            </h1>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-500 mb-8">
              I build <span className="gradient-text">backend systems</span>.
            </h2>

            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              {profile.summary}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white mono text-sm rounded-md transition shadow-lg shadow-blue-500/25"
              >
                View My Work
                <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 mono text-sm rounded-md transition"
              >
                <Download className="size-4" />
                Download CV
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-neutral-300 hover:bg-white/5 mono text-sm rounded-md transition"
              >
                <Github className="size-4" />
                GitHub
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 mono text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <MapPin className="size-3.5 text-blue-400" />
                {profile.location}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">→</span>
                {profile.email}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;