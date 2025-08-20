import React, { useEffect, useState } from "react";
import {
  Mail,
  Download,
  GraduationCap,
  Calendar,
  Sun,
  Moon,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

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
    "Final-year Software Engineering student who loves building resilient microservices, AI-powered tools, and developer-friendly APIs. Comfortable with Spring Boot, Kafka, Eureka/Service Discovery, RabbitMQ, Docker, and CI/CD. Also ship clean, responsive UIs in React and Vue.",
  location: "Chiang Rai, Thailand",
  email: "zarnn872@gmail.com",
  github: "https://github.com/zarn-chalamet",
  linkedin: "https://www.linkedin.com/in/yourhandle/",
  resumeUrl: "/resume.pdf", // public/resume.pdf
  initials: "ZT"
};


const PROJECTS = [
  {
    title: "Sports Complex Platform (Microservices)",
    period: "2025",
    blurb:
      "A university sports complex platform split into auth, booking, payments, and notifications services. Central scoreboard, live updates, and PDPA‑aware design.",
    tags: ["backend", "spring-boot", "microservices", "kafka", "eureka"],
    links: {
      repo: "https://github.com/yourhandle/sports-complex-platform",
      live: "https://your-deploy-url.example",
    },
  },
  {
    title: "AR Interior Design App (APIs + Web)",
    period: "2024",
    blurb:
      "RESTful APIs for session management, assets, and analytics. Frontend in React with WebGL viewer, role‑based access, and Stripe test integration.",
    tags: ["backend", "react", "api", "docker"],
    links: { repo: "https://github.com/yourhandle/ar-interior-platform" },
  },
  {
    title: "Quiz Builder (Vue + Firebase + AI)",
    period: "2024",
    blurb:
      "Vue SPA that ingests PDFs and generates quizzes. Rate‑limit aware AI calls, Cloud Functions for long‑running jobs.",
    tags: ["frontend", "vue", "firebase"],
    links: { repo: "https://github.com/yourhandle/quiz-builder" },
  },
  {
    title: "Chat App (Spring + WebSocket)",
    period: "2023",
    blurb:
      "STOMP WebSocket messaging with Kafka as a buffer, JWT auth, and media storage. Delivered responsive UI in React.",
    tags: ["backend", "spring-boot", "kafka", "react"],
    links: { repo: "https://github.com/yourhandle/chat-app" },
  },
];

const TAGS = [
  { key: "all", label: "All" },
  { key: "backend", label: "Backend" },
  { key: "spring-boot", label: "Spring Boot" },
  { key: "microservices", label: "Microservices" },
  { key: "kafka", label: "Kafka" },
  { key: "react", label: "React" },
  { key: "vue", label: "Vue" },
  { key: "frontend", label: "Frontend" },
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

      {/* About section */}
      {/* <About profile={PROFILE}/> */}

      {/* Projects */}
      <Projects tags={TAGS}/>

      {/* Skills */}
      <Skills/>

      {/* Experience */}
      <Experience/>

      {/* Education */}
      <Education/>

      {/* Contact */}
      <Contact profile={PROFILE}/>

      <Footer profile={PROFILE}/>
    </div>
  );
}


function Dot() {
  return <span className="mt-1 size-2.5 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />;
}

function DatabaseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4" {...props}>
      <path d="M4 6c0-1.657 3.582-3 8-3s8 1.343 8 3-3.582 3-8 3-8-1.343-8-3Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 10c0 1.657 3.582 3 8 3s8-1.343 8-3M4 14c0 1.657 3.582 3 8 3s8-1.343 8-3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}