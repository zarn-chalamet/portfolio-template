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
import profile_p from "./assets/profile-holland.png";
import resume_file from "./assets/ZarniTun_Resume.pdf";

const PROFILE = {
  name: "Zarni Tun",
  role: "Backend Software Engineer",
  tagline: "Building scalable systems with Java, Spring Boot & AI",
  summary:
    "Software Engineering graduate specialized in Java, Spring Boot, and distributed microservices. I've architected event-driven systems with RabbitMQ, integrated production AI pipelines with Gemini and Whisper, and shipped enterprise APIs during my internship at Be1 Digital. Fluent in English, based in Bangkok — ready to build reliable backend systems for your team.",
  location: "Bangkok, Thailand",
  availability: "Open to Full-Time Roles",
  email: "zarnn872@gmail.com",
  phone: "+66 94 545 8487",
  github: "https://github.com/zarn-chalamet",
  linkedin: "https://www.linkedin.com/in/zarni-tun-3ab45b332",
  resumeUrl: resume_file,
  initials: "ZT",
  photo: profile_p
};

const TAGS = [
  { key: "all", label: "All Projects" },
  { key: "spring-boot", label: "Spring Boot" },
  { key: "microservices", label: "Microservices" },
  { key: "AI", label: "AI Integration" },
  { key: "react", label: "React" },
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