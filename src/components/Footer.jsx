import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = ({ profile }) => {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="mono text-xs text-neutral-500">
            Designed & built by <span className="text-blue-400">{profile.name}</span> · © {new Date().getFullYear()}
          </p>

          <div className="flex gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-blue-400 transition">
              <Github className="size-4" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-blue-400 transition">
              <Linkedin className="size-4" />
            </a>
            <a href={`mailto:${profile.email}`} className="text-neutral-500 hover:text-blue-400 transition">
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;