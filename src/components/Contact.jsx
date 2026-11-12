import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download } from "lucide-react";

const Contact = ({ profile }) => {
  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mono text-blue-400 text-sm mb-4">06. What's Next?</p>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Let's Build Something.
          </h2>

          <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
            I'm actively seeking Software Engineering, Backend, or Full-Stack roles in{" "}
            <span className="text-white">Bangkok</span>, hybrid, or remote. 
            If you're hiring or have a project that needs a reliable Java/Spring Boot & React engineer, my inbox is always open.
          </p>

          <p className="mono text-xs text-emerald-400 mb-10">
            Available immediately · Non-Ed Plus Visa (eligible for direct Non-B transition)
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white mono rounded-md text-sm transition shadow-lg shadow-blue-500/25 mb-12 font-medium"
          >
            <Mail className="size-5" />
            Say Hello
          </a>

          <div className="flex justify-center gap-5 mb-12">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-white/10 rounded-full text-neutral-400 hover:text-blue-400 hover:border-blue-500/50 transition"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-white/10 rounded-full text-neutral-400 hover:text-blue-400 hover:border-blue-500/50 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 border border-white/10 rounded-full text-neutral-400 hover:text-blue-400 hover:border-blue-500/50 transition"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="p-3 border border-white/10 rounded-full text-neutral-400 hover:text-blue-400 hover:border-blue-500/50 transition"
              aria-label="Download Resume"
            >
              <Download className="size-5" />
            </a>
          </div>

          <div className="mono text-xs text-neutral-500 space-y-1">
            <p>{profile.email}</p>
            <p>{profile.phone}</p>
            <p>{profile.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;