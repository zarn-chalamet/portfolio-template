import React, { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X, Terminal, Mail } from "lucide-react";

const Navbar = ({ profile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) current = section.id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "about" },
    { id: "experience", label: "experience" },
    { id: "projects", label: "projects" },
    { id: "skills", label: "skills" },
    { id: "education", label: "education" },
    { id: "contact", label: "contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25 group-hover:scale-110 transition">
              <Terminal className="size-4" />
            </div>
            <span className="mono text-sm text-neutral-300 group-hover:text-white transition">
              zarn.dev
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`mono px-3 py-2 text-sm rounded-md transition-all ${
                  activeSection === item.id
                    ? "text-blue-400"
                    : "text-neutral-500 hover:text-neutral-200"
                }`}
              >
                <span className="text-blue-500/60">0{idx + 1}.</span> {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-neutral-400 hover:text-white transition hidden sm:block"
            >
              <Github className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-neutral-400 hover:text-white transition hidden sm:block"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="hidden md:inline-flex items-center gap-2 mono text-xs px-4 py-2 border border-blue-500/50 text-blue-400 rounded-md hover:bg-blue-500/10 transition"
            >
              Resume.pdf
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-neutral-300"
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0f]/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`mono w-full text-left px-3 py-3 rounded-md text-sm transition ${
                  activeSection === item.id
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-neutral-400"
                }`}
              >
                <span className="text-blue-500/60">0{idx + 1}.</span> {item.label}
              </button>
            ))}

            {/* Social icons row */}
            <div className="flex items-center justify-center gap-4 pt-4 mt-4 border-t border-white/5">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-neutral-400 hover:text-blue-400 transition"
              >
                <Github className="size-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-neutral-400 hover:text-blue-400 transition"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 text-neutral-400 hover:text-blue-400 transition"
              >
                <Mail className="size-5" />
              </a>
            </div>

            <a
              href={profile.resumeUrl}
              download
              className="block mono text-center text-xs px-4 py-3 mt-2 border border-blue-500/50 text-blue-400 rounded-md"
            >
              Download Resume.pdf
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;