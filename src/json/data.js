import fitness from "../assets/fitness.jpg";
import face_recognition from "../assets/face_recognition.jpg";
import quiz_gen from "../assets/quiz-gen.jpg";
import doctor_appointment from "../assets/doctor_appointment.jpg";
import narratemm from "../assets/narratemm.jpg";
import moviefinder from "../assets/moviefinder.png";

export const projects = [
  {
    title: "MovieFinder",
    subtitle: "AI-Powered Movie Identifier for Social Media Clips",
    period: "2025",
    featured: true,
    blurb:
      "Full-stack AI platform that identifies movies from TikTok, YouTube, Instagram, and Facebook clips using Google Gemini's multimodal AI — with confidence scoring, streaming availability, and full support for English, Thai, and Burmese.",
    description:
      "MovieFinder solves a real daily frustration: seeing a movie clip on social media and not knowing what movie it is. Users paste any TikTok, YouTube, Instagram, or Facebook link, and the platform uses a smart multi-strategy pipeline to identify the film in under 10 seconds. The system routes videos through different analysis paths based on content type — recap videos get 120-second downloads with audio analysis, scene clips try hashtag and metadata matching first, and Chinese short dramas get redirected to appropriate platforms. The biggest engineering challenge was building an honest AI that admits uncertainty rather than showing wrong answers — I implemented a confidence scoring system (CERTAIN/LIKELY/UNCERTAIN/UNKNOWN) and country-aware TMDB search that correctly identifies Korean K-dramas, Chinese films, and other non-English content that generic search tools get wrong.",
    tags: ["spring-boot", "react", "AI", "typescript", "java"],
    features: [
      "Multi-strategy identification pipeline (hashtag → metadata → vision analysis)",
      "Recap video detection with 120-second audio + frame analysis",
      "Country-aware TMDB search for non-English films (Korean, Chinese, Japanese)",
      "Confidence scoring system with 4 honesty levels",
      "Full internationalization: English, Thai (ภาษาไทย), Burmese (မြန်မာ)",
      "Chinese short drama detection with platform redirects (ShortMax, DramaBox)",
      "Real-time streaming provider lookup via TMDB",
      "Multiple candidate suggestions when AI is uncertain",
      "Local watchlist (no signup required)"
    ],
    tech: {
      frontend: ["React 18", "TypeScript", "Vite", "Tailwind CSS 4", "Framer Motion", "Zustand"],
      backend: ["Java 17", "Spring Boot 3.2", "Spring WebFlux", "Lombok", "Jackson"],
      ai: ["Google Gemini 2.0 (multimodal)", "TMDB API"],
      processing: ["yt-dlp", "FFmpeg", "FFprobe", "Jsoup"],
      caching: ["Caffeine In-memory Cache"]
    },
    role: "Sole architect & full-stack developer",
    highlights: [
      "Built a multi-strategy AI pipeline that routes content through 5+ different analysis paths",
      "Solved wrong-country matches with a scoring system (+100 native language, -80 wrong country)",
      "Designed a confidence system that admits uncertainty — 'I don't know' beats wrong answers",
      "Full multi-language support with proper Burmese and Thai typography",
      "Handled edge cases like Chinese short dramas that aren't in traditional movie databases"
    ],
    links: {
      repo: "https://github.com/zarn-chalamet/moviefinder"
    },
    image: moviefinder,
    status: "Active"
  },
  {
    title: "NarrateMM",
    subtitle: "AI-Powered Burmese Video Recap Generator",
    period: "2025",
    featured: true,
    blurb:
      "Full-stack AI video processing platform that transcribes, summarizes, and generates narrated recaps in Burmese using Whisper, Gemini, and a custom Java rendering engine.",
    description:
      "NarrateMM is my most technically ambitious project — a full-stack video processing platform built with Spring Boot, React/TypeScript, and a Python/Flask microservice. It handles the entire pipeline: uploading raw videos, extracting audio with FFmpeg, transcribing speech via Groq Whisper, generating structured Burmese scripts through Google Gemini AI, and rendering the final subtitled recap. The biggest engineering challenge was correctly rendering complex Myanmar Unicode subtitles onto video frames — I solved this by building a custom subtitle renderer using Java AWT Graphics2D, handling font ligatures and stacking marks that FFmpeg alone could not render properly.",
    tags: ["spring-boot", "react", "AI", "microservices", "java"],
    features: [
      "End-to-end video processing pipeline from raw upload to rendered output",
      "High-accuracy speech-to-text using Groq Whisper API",
      "AI-generated structured recaps via Google Gemini",
      "Custom Java AWT Graphics2D renderer for Myanmar Unicode subtitles",
      "Separate Python/Flask microservice for Edge TTS voice generation",
      "FFmpeg-based audio extraction and video composition",
      "JWT-secured authentication and user session management"
    ],
    tech: {
      backend: ["Java 21", "Spring Boot", "Spring Security", "JWT"],
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      ai: ["Groq Whisper", "Google Gemini AI", "Edge TTS"],
      processing: ["FFmpeg", "Java AWT Graphics2D"],
      microservice: ["Python", "Flask"]
    },
    role: "Sole architect & full-stack developer",
    highlights: [
      "Solved Myanmar Unicode subtitle rendering — a problem no off-the-shelf tool could handle",
      "Designed and implemented a multi-service architecture combining Java and Python",
      "Integrated 3 different AI services (Whisper, Gemini, Edge TTS) into a single cohesive pipeline"
    ],
    links: {
      repo: "https://github.com/zarn-chalamet/NarrateMM"
    },
    image: narratemm,
    status: "Active"
  },
  {
    title: "AI Fitness Analysis Platform",
    subtitle: "Event-Driven Microservices with Spring Cloud",
    period: "2025",
    featured: true,
    blurb:
      "Production-grade microservices platform for fitness tracking with Keycloak authentication, RabbitMQ event streaming, and Gemini AI-powered personalized recommendations.",
    description:
      "A full microservices architecture built on Spring Cloud demonstrating enterprise-grade backend patterns. The system includes an API Gateway for routing, Eureka for service discovery, Spring Cloud Config for centralized configuration, Keycloak for OAuth2/OIDC authentication, and RabbitMQ for asynchronous event-driven communication between services. When users log activities, events are published to RabbitMQ; the AI service consumes them and generates personalized recommendations using Google Gemini, storing results in MongoDB while user data lives in MySQL. Each service owns its own database — true separation of concerns.",
    tags: ["spring-boot", "microservices", "AI", "java"],
    features: [
      "API Gateway routing with Spring Cloud Gateway",
      "Service discovery via Netflix Eureka",
      "Centralized configuration with Spring Cloud Config",
      "OAuth2/OIDC authentication using Keycloak",
      "Event-driven communication with RabbitMQ",
      "AI recommendations powered by Google Gemini",
      "Database-per-service pattern (MySQL + MongoDB)",
      "Containerized with Docker Compose"
    ],
    tech: {
      core: ["Java 21", "Spring Boot", "Spring Cloud", "Maven"],
      security: ["Keycloak (OAuth2 / OIDC)"],
      infrastructure: ["Eureka", "Config Server", "API Gateway"],
      messaging: ["RabbitMQ"],
      ai: ["Google Gemini API"],
      databases: ["MySQL", "MongoDB"],
      devops: ["Docker", "Docker Compose"]
    },
    role: "Backend architect & developer",
    highlights: [
      "Implemented true event-driven architecture with RabbitMQ pub/sub",
      "Applied database-per-service pattern with polyglot persistence",
      "Full Keycloak integration for enterprise-grade authentication"
    ],
    links: {
      repo: "https://github.com/zarn-chalamet/fitness-ms"
    },
    image: fitness,
    status: "Active"
  },
  {
    title: "Face Recognition Attendance",
    subtitle: "Multi-Service App with AI & Geolocation",
    period: "2025",
    featured: true,
    blurb:
      "Secure attendance system combining Spring Boot backend, Python DeepFace face recognition service, and geolocation validation — deployed across GCP, Railway, and Vercel.",
    description:
      "A multi-service attendance platform that verifies employee identity using facial recognition and validates their location within a 200-meter geofence. The Spring Boot backend handles authentication and business logic, a separate Python service using DeepFace performs face matching, and the React frontend provides real-time clock-in interfaces. The distributed deployment showcases production-ready DevOps: frontend on Vercel, backend on Railway, and the compute-heavy face recognition service on Google Cloud Run for auto-scaling.",
    tags: ["spring-boot", "react", "AI"],
    features: [
      "Face verification using DeepFace deep learning models",
      "Geolocation-based clock-in enforcement (200m radius)",
      "JWT-secured RESTful API",
      "Admin dashboard for attendance oversight",
      "Multi-region deployment across three cloud providers"
    ],
    tech: {
      backend: ["Spring Boot", "JWT", "Spring Security"],
      frontend: ["React", "Tailwind CSS"],
      ai: ["Python", "DeepFace"],
      database: ["MySQL"],
      deployment: ["Vercel", "Railway", "Google Cloud Run"]
    },
    role: "Full-stack developer & DevOps",
    highlights: [
      "Architected multi-service app across 3 cloud platforms",
      "Integrated deep learning face recognition with backend business logic",
      "Solved geolocation validation and secure clock-in workflow"
    ],
    links: {
      repo: "https://github.com/zarn-chalamet/attendance-tracking",
      live: "https://attendance-tracking-three.vercel.app"
    },
    image: face_recognition,
    status: "Active"
  },
  {
    title: "QuizGenAI",
    subtitle: "AI-Powered Learning Platform",
    period: "2025",
    blurb:
      "Learning platform that generates quizzes and flashcards from uploaded PDF/DOC files using Spring Boot, Apache PDFBox, and Google Gemini AI.",
    description:
      "QuizGenAI helps students turn any document into interactive study material. Upload a PDF or DOC, and the Spring Boot backend uses Apache PDFBox and POI to extract text, then sends it to Google Gemini to generate high-quality quizzes and flashcards. Users can also create study material manually, take quizzes with instant scoring, and study with a flip-card learning mode. Authentication is handled through Clerk for a smooth JWT-based login flow.",
    tags: ["spring-boot", "react", "AI"],
    features: [
      "PDF/DOC document parsing with Apache PDFBox and POI",
      "AI-generated quizzes and flashcards via Google Gemini",
      "Flip-card learning mode with progress tracking",
      "Instant quiz scoring and feedback",
      "Clerk authentication with JWT",
      "Configurable question quantity per generation"
    ],
    tech: {
      backend: ["Java 17", "Spring Boot", "Maven"],
      frontend: ["React", "Tailwind CSS"],
      ai: ["Google Gemini API"],
      parsing: ["Apache PDFBox", "Apache POI"],
      auth: ["Clerk (JWT)"]
    },
    role: "Full-stack developer",
    highlights: [
      "Built end-to-end document-to-quiz AI pipeline",
      "Handled complex PDF/DOC text extraction with layout preservation",
      "Designed intuitive learning UX with flip-card and quiz modes"
    ],
    links: {
      repo: "https://github.com/zarn-chalamet/quiz-gen"
    },
    image: quiz_gen,
    status: "Active"
  },
  {
    title: "Doctor Appointment System",
    subtitle: "MERN Stack with OAuth2",
    period: "2025",
    blurb:
      "Full-stack MERN application with role-based access for patients, doctors, and admins — featuring OAuth2 login, appointment management, and profile control.",
    description:
      "A complete appointment booking platform built with the MERN stack. Three distinct user roles — patients, doctors, and admins — each with tailored dashboards and permissions. Patients register (with Google OAuth2 or email), search doctors, and book/cancel appointments. Doctors manage their schedules, update profiles, and mark appointments complete. Admins oversee everything: creating doctor accounts and moderating appointments. Authentication uses both JWT and OAuth2 for flexibility.",
    tags: ["mern", "react"],
    features: [
      "Three-tier role-based access control",
      "Google OAuth2 + JWT dual authentication",
      "Doctor search and appointment booking",
      "Doctor profile and schedule management",
      "Admin dashboard for user and appointment oversight"
    ],
    tech: {
      frontend: ["React", "Tailwind CSS", "Context API"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      auth: ["OAuth2 (Google)", "JWT"]
    },
    role: "Full-stack developer",
    highlights: [
      "Designed multi-role permission architecture",
      "Integrated Google OAuth2 alongside JWT for flexibility",
      "Built role-specific dashboards with tailored UX"
    ],
    links: {
      repo: "https://github.com/zarn-chalamet/doctor-appointment-booking"
    },
    image: doctor_appointment,
    status: "Active"
  }
];