import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  MapPin,
  Circle,
  FileCheck,
  ShieldCheck,
  Zap,
  Bot,
  Server,
  Lock,
  Cpu
} from "lucide-react";

const Hero = ({ profile }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Ambient ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl blob" />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ============================================
              LEFT COLUMN (7 COLS): Headline & Bio
          ============================================ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 mono text-[11px] text-emerald-400 mb-6 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Circle className="size-1.5 fill-emerald-400 animate-pulse" />
              {profile.availability}
            </div>

            <p className="mono text-blue-400 text-xs tracking-wide mb-3">
              Hi, my name is
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
              {profile.name}.
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-neutral-400 mb-2">
              I build <span className="gradient-text">reliable systems</span>.
            </h2>

            <p className="mono text-xs md:text-sm text-neutral-500 mb-6 tracking-wide">
              Java · Spring Boot · React · Angular · PostgreSQL
            </p>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl mb-8">
              {profile.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white mono text-xs rounded-md transition shadow-lg shadow-blue-500/20 font-medium"
              >
                View My Work
                <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition" />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 mono text-xs rounded-md transition"
              >
                <Download className="size-3.5" />
                Resume.pdf
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 mono text-xs rounded-md transition"
              >
                <Github className="size-3.5" />
                GitHub
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mono text-[11px] text-neutral-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3 text-blue-400" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-blue-400">→</span>
                {profile.email}
              </span>
              <span className="inline-flex items-center gap-1.5 text-neutral-400 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                <FileCheck className="size-3 text-emerald-400" />
                {profile.visaNote}
              </span>
            </div>
          </motion.div>

          {/* ============================================
              RIGHT COLUMN (5 COLS): Enterprise System Architecture Preview
          ============================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-2xl border border-white/10 bg-[#0f0f17]/90 backdrop-blur-xl p-6 shadow-2xl space-y-5">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Cpu className="size-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mono">
                      System Architecture
                    </h3>
                    <p className="mono text-[10px] text-neutral-500">
                      Core Pipeline & Security Engine
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 mono text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Active System
                </span>
              </div>

              {/* Core System Highlights */}
              <div className="space-y-3">

                {/* System 1: SlipCheck Verification Engine */}
                <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-blue-500/30 transition group">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="size-3.5 text-blue-400" />
                      <span className="text-xs font-semibold text-neutral-200">
                        SlipCheck Core Pipeline
                      </span>
                    </div>
                    <span className="mono text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                      6-Step Engine
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-snug">
                    Zero-disk slip processing, EasySlip v2 provider, atomic SQL locking under 20-thread concurrency.
                  </p>
                </div>

                {/* System 2: Multi-Channel Bot Router */}
                <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-blue-500/30 transition group">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Bot className="size-3.5 text-purple-400" />
                      <span className="text-xs font-semibold text-neutral-200">
                        Multi-Channel Delivery
                      </span>
                    </div>
                    <span className="mono text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                      Telegram + LINE
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-snug">
                    Deep-link pairing, multi-line rich receipt pushing, and proactive channel unlink notifications.
                  </p>
                </div>

                {/* System 3: Production Security Standard */}
                <div className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-blue-500/30 transition group">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Lock className="size-3.5 text-emerald-400" />
                      <span className="text-xs font-semibold text-neutral-200">
                        Security at Rest & Motion
                      </span>
                    </div>
                    <span className="mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      AES-256-GCM
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-snug">
                    Encrypted bank accounts at rest, JWT auth, Bucket4j rate limiting, and PDPA compliance.
                  </p>
                </div>

              </div>

              {/* Metrics Bar */}
              <div className="pt-3 border-t border-white/5 grid grid-cols-3 gap-2 text-center mono text-[10px]">
                <div className="p-2 rounded bg-white/[0.01]">
                  <p className="text-neutral-500 mb-0.5">Performance</p>
                  <p className="text-white font-bold">~35% Faster</p>
                </div>
                <div className="p-2 rounded bg-white/[0.01]">
                  <p className="text-neutral-500 mb-0.5">Degree GPA</p>
                  <p className="text-emerald-400 font-bold">3.84 / 4.00</p>
                </div>
                <div className="p-2 rounded bg-white/[0.01]">
                  <p className="text-neutral-500 mb-0.5">Deployment</p>
                  <p className="text-blue-400 font-bold">Docker / GCP</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;