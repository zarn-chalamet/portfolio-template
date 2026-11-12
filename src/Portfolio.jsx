import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import resume_file from "./assets/Zarni_Tun_Fullstack_Java_Developer.pdf";

const PROFILE = {
  name: "Zarni Tun",
  role: "Software Engineer · Java & Full-Stack",
  tagline: "Spring Boot APIs, React/Angular UIs, and production-ready systems",
  summary:
    "Software Engineering graduate (GPA 3.84, July 2026). Java Spring Boot, secure REST APIs, React/Angular. Production work at Be1 Digital; built SlipCheck (payments, AES-256-GCM, Telegram/LINE). Bangkok — available immediately.",
  location: "Bangkok, Thailand",
  availability: "Available immediately",
  email: "zarnn872@gmail.com",
  phone: "+66 94 545 8487",
  github: "https://github.com/zarn-chalamet",
  linkedin: "https://www.linkedin.com/in/zarni-tun-3ab45b332",
  resumeUrl: resume_file,
  initials: "ZT",
  visaNote: "Non-Ed Plus — eligible for direct Non-B transition"
};

const TAGS = [
  { key: "all", label: "All Projects" },
  { key: "spring-boot", label: "Spring Boot" },
  { key: "react", label: "React / Angular" },
  { key: "microservices", label: "Microservices" },
  { key: "AI", label: "AI Integration" },
  { key: "mern", label: "MERN" }
];

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-neutral-100 antialiased">
      <Navbar profile={PROFILE} />
      <Hero profile={PROFILE} />
      <Introduction profile={PROFILE} />
      <Experience />
      <Projects tags={TAGS} />
      <Skills />
      <Education />
      <Contact profile={PROFILE} />
      <Footer profile={PROFILE} />
    </div>
  );
}