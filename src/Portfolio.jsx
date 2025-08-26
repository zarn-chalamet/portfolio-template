import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import profile_p from "./assets/profile.png"
import resume_file from "./assets/resume-zarn.pdf"
import { label } from "framer-motion/client";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-sm ring-1 ring-black/5 bg-white dark:bg-neutral-900 ${className}`}>{children}</div>
);

const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium tracking-wide bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10 ${className}`}>{children}</span>
);

const Button = ({ as:As = "button", className = "", children, ...props }) => (
  <As className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-semibold shadow-sm ring-1 ring-inset ring-black/5 bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 transition ${className}`} {...props}>
    {children}
  </As>
);

// --- Data you can edit quickly ---
const PROFILE = {
  name: "Zarni Tun",
  role: "Final-year Software Engineering Student",
  summary:
    "Final-year Software Engineering student passionate about full-stack development, AI/ML, and creating intuitive digital solutions. Exploring microservices, cloud, and modern DevOps practices to expand my craft.",
  location: "Chiang Rai, Thailand",
  email: "zarnn872@gmail.com",
  github: "https://github.com/zarn-chalamet",
  linkedin: "https://www.linkedin.com/in/zarni-tun-3ab45b332",
  resumeUrl: resume_file,
  initials: "ZT",
  photo: profile_p
};

const TAGS = [
  { key: "all", label: "All" },
  { key: "AI", label: "Ai"},
  { key: "spring-boot", label: "Spring Boot" },
  { key: "microservices", label: "Microservices" },
  { key: "react", label: "React" },
  { key: "mern", label: "MERN" },
  { key: "nodejs", label: "Node js" },
];

export default function Portfolio() {
  const [dark, setDark] = useState(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    // If no saved preference, check system preference
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  // Toggle theme function
  const toggleTheme = () => {
    setDark(prevDark => {
      const newDark = !prevDark;
      // Save preference to localStorage
      localStorage.setItem('theme', newDark ? 'dark' : 'light');
      return newDark;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  // Add theme toggle to the Navbar props
  const navbarProps = {
    profile: PROFILE, 
    dark, 
    toggleTheme  // Changed from setDark to toggleTheme
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300">
      
      {/* Nav bar */}
      <Navbar {...navbarProps} />

      {/* Hero section */}
      <Hero profile={PROFILE}/>

      {/* Introduction */}
      <Introduction profile={PROFILE}/>

      {/* About section */}
      {/* <About profile={PROFILE}/> */}

      {/* Projects */}
      <Projects tags={TAGS}/>

      {/* Skills */}
      <Skills/>

      {/* Experience */}
      {/* <Experience/> */}

      {/* Education */}
      <Education/>

      {/* Contact */}
      <Contact profile={PROFILE}/>

      <Footer profile={PROFILE}/>
    </div>
  );
}