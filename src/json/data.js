import fitness from "../assets/fitness.jpg";
import face_recognition from "../assets/face_recognition.jpg";
import quiz_gen from "../assets/quiz-gen.jpg";
import doctor_appointment from "../assets/doctor_appointment.jpg";
import narratemm from "../assets/narratemm.jpg";
import moviefinder from "../assets/moviefinder.png";
import document_organizer from "../assets/document-organizer.png";

export const projects = [
  {
    title: "Document Organizer",
    subtitle: "AI-Powered Document Management with Privacy-First Architecture",
    period: "2026",
    featured: true,
    blurb:
      "Full-stack platform for managing visas, passports, and important documents. Uses AI for OCR, auto-extracts expiry dates, generates proactive insights, and provides a contextual AI assistant — all while keeping user files in their own Google Drive for full PDPA compliance.",
    description:
      "Document Organizer solves a real problem foreigners face: important documents scattered across email, phone photos, and folders with no way to track expiry dates. I architected this as three separate services — a Spring Boot backend, a Python FastAPI AI sidecar, and a React frontend — each deployed independently on Google Cloud Run and Vercel. The biggest architectural decision was PDPA compliance: instead of storing user files on my servers (creating a honeypot for hackers), files stay in each user's own Google Drive, and I only store metadata + AI embeddings + insights. The AI pipeline is multi-stage: Google Vision extracts text (handles stamps, handwriting, English + Thai), Groq's Llama LLM intelligently parses messy OCR to find expiry dates, generates structured JSON insights (summary, next actions, warnings, timeline), and powers a RAG-based chat assistant that answers questions using pgvector semantic search over user documents. Every AI response is categorized as DOC (grounded), NOT FOUND, or GENERAL (with 'verify with official sources' warnings) — because AI transparency matters more than false confidence.",
    tags: ["spring-boot", "react", "AI", "microservices", "java"],
    features: [
      "Google Vision OCR with multi-language support (English + Thai)",
      "LLM-powered date extraction that handles decorative stamps and messy OCR",
      "Auto-generated AI insights per document (summary, urgency, timeline, warnings)",
      "Two AI chat modes: global RAG search + document-scoped context chat",
      "Response categorization (DOC / NOT FOUND / GENERAL) with confidence badges",
      "Files stored in user's own Google Drive — never on our servers",
      "Cascade delete extends to Google Drive (no orphaned data)",
      "Semantic search via pgvector with user-scoped isolation",
      "Daily expiry email notifications (30, 14, 7, 3, 1 days before)",
      "Async background processing for OCR + embeddings + insights",
      "Resizable chat panel with keyboard shortcuts (Ctrl/Cmd+J)",
      "Dark-first design system with custom purple accent"
    ],
    tech: {
      backend: ["Java 21", "Spring Boot 3.5", "Spring Security", "JPA", "JWT"],
      frontend: ["React 19", "Vite 7", "Material-UI v7", "React Router v7"],
      aiSidecar: ["Python 3.11", "FastAPI", "sentence-transformers", "PyTorch"],
      database: ["PostgreSQL 16", "pgvector (384-dim embeddings)", "Neon (managed)"],
      ai: ["Google Cloud Vision API", "Groq API (Llama 3.1)", "RAG architecture"],
      storage: ["Google Drive API v3"],
      auth: ["Google OAuth 2.0", "JWT (jjwt)"],
      deployment: ["Google Cloud Run", "Vercel", "Docker (multi-stage)"],
      devops: ["Cloud Build (CI/CD)", "Google Secret Manager", "Artifact Registry"]
    },
    role: "Sole architect & full-stack developer",
    highlights: [
      "Architected 3-service system (Java + Python + React) deployed across 4 platforms",
      "Designed PDPA-compliant architecture — user files never touch our servers",
      "Built multi-stage AI pipeline: OCR → LLM extraction → insights → semantic search",
      "Implemented RAG with pgvector for user-scoped semantic document search",
      "Created response categorization (DOC/NOTFOUND/GENERAL) for AI transparency",
      "Set up production CI/CD: git push → Cloud Build → auto-deploy in 5 minutes",
      "Managed enterprise secrets flow using Google Secret Manager across services"
    ],
    links: {
      repo: "https://github.com/zarn-chalamet/document-organizer",
      live: "https://document-organizer-bice.vercel.app"
    },
    image: document_organizer,
    status: "Active"
  },
  {
    title: "MovieFinder",
    subtitle: "AI-Powered Movie Identifier for Social Media Clips",
    period: "2026",
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
    period: "2026",
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