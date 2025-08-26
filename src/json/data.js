import chat_bot from "../assets/chat_bot.jpg";
import email_generator from "../assets/email_generator.jpg";
import file_share from "../assets/file_share.jpg";
import fitness from "../assets/fitness.jpg";
import research_assistant from "../assets/research-assistant.jpg";
import stability_ai from "../assets/stability_ai.jpg";
import url_shorten from "../assets/url_shorten.jpg";
export const projects = [
  {
    title: "AI-Powered Email Auto Reply Generator",
    period: "2025",
    blurb:
      "A Chrome Extension integrated with a Spring Boot backend and Google Gemini API to generate professional, context-aware email replies directly in Gmail.",
    description:
      "This productivity tool enhances Gmail by adding an 'AI Reply' button inside the compose interface. It automatically extracts the latest incoming email content, sends it to a Spring Boot backend, and leverages Google Gemini AI to generate professional and contextually accurate replies ready to send.",
    tags: ["chrome-extension", "spring-boot", "gmail", "AI", "google-gemini"],
    features: [
      "AI Reply button integrated into Gmail compose interface",
      "Automatic extraction of latest incoming email content",
      "Backend-powered AI reply generation using Google Gemini API",
      "Instant insertion of AI-generated reply into Gmail draft",
    ],
    flows: {
      emailReplyFlow: [
        "User clicks AI Reply in Gmail",
        "Extension extracts latest email content",
        "Content sent to Spring Boot backend",
        "Backend calls Google Gemini API for AI response",
        "Reply inserted into Gmail draft",
      ],
    },
    tech: {
      frontend: ["Chrome Extension APIs", "JavaScript", "HTML", "CSS"],
      backend: ["Spring Boot", "REST APIs"],
      ai: ["Google Gemini API"],
    },
    role: "Fullstack developer (extension UI integration, backend AI integration, Gmail automation)",
    highlights: [
      "Seamless Gmail integration",
      "AI-generated context-aware replies",
      "Time-saving productivity tool",
    ],
    links: {
      repo: "https://github.com/zarn-chalamet/email-assistant-ai",
      author: "https://github.com/zarn-chalamet",
    },
    image: email_generator,
    screenshots: [
      "https://github.com/user-attachments/assets/ab94910f-814b-40c9-a5ff-26defd536e90",
      "https://github.com/user-attachments/assets/df569c2b-d7f9-4e83-85ba-4a96e806688a",
      "https://github.com/user-attachments/assets/70544893-3578-452e-b907-19360c85f810",
    ],
    license: "MIT",
    status: "Active",
    futureImprovements: [
      "Multi-language reply generation",
      "Smart tone adjustment (formal, casual, concise)",
      "Integration with other email providers (Outlook, Yahoo)",
    ],
  },
  {
    title: "URL Shortener Web Application",
    period: "2025",
    blurb:
      "A full-stack URL shortener built with Spring Boot, MySQL, and React.js that provides secure authentication, link shortening with expiration, and detailed click analytics.",
    description:
      "A modern URL shortener platform where users can register, log in, and generate short URLs with a fixed expiration period. The system includes JWT-based authentication, secure password storage, and click analytics tracking daily usage. Built with a React + Tailwind frontend and a Spring Boot + MySQL backend, the application provides a clean and responsive interface with a dashboard for link management and analytics.",
    tags: ["spring-boot", "mysql", "react", "tailwind", "analytics"],
    features: [
      "JWT-based user authentication with encrypted password storage",
      "Generate shortened URLs with a fixed expiration time",
      "Responsive, mobile-friendly interface styled with Tailwind CSS",
      "Daily click tracking and historical analytics dashboard",
      "Seamless redirection from shortened URLs",
      "Secure backend with Spring Security and JPA/Hibernate",
    ],
    flows: {
      userFlow: [
        "Register with secure JWT-based authentication",
        "Log in and access dashboard",
        "Enter a long URL to generate a shortened version",
        "Share the shortened link with others",
        "Track daily clicks and analytics in the dashboard",
      ],
    },
    tech: {
      frontend: ["React.js", "Tailwind CSS", "Axios"],
      backend: [
        "Java",
        "Spring Boot",
        "Spring Security (JWT)",
        "JPA/Hibernate",
      ],
      database: ["MySQL"],
    },
    role: "Full-stack developer (frontend, backend, and database integration)",
    highlights: [
      "Secure authentication system with JWT",
      "Interactive analytics dashboard for tracking link usage",
      "Scalable architecture ready for future features like custom aliases and public APIs",
    ],
    links: {
      repo: "https://github.com/zarn-chalamet/url_shortener",
    },
    image: url_shorten,
    screenshots: [
      "https://github.com/user-attachments/assets/f80fb68c-9d6c-4105-aa94-e1a245f4f8a9",
      "https://github.com/user-attachments/assets/2fd436ef-e715-49ea-8150-d05deb7192f8",
      "https://github.com/user-attachments/assets/70e849e6-1a26-4e7a-bbe5-6f645088b904",
    ],
    license: "MIT",
    status: "Active",
    futureImprovements: [
      "Customizable expiration times",
      "User-defined short link aliases",
      "Public API for programmatic URL shortening",
      "Email notifications before link expiration",
    ],
  },
  {
    title: "AI Chat Application",
    period: "2025",
    blurb:
      "A full-stack AI-powered chat platform with secure authentication, multi-conversation management, and AI integration using DeepSeek via OpenRouter.",
    description:
      "An intelligent chat application built with React and Spring Boot that allows users to securely register, log in, and manage multiple AI-powered conversations. Each user maintains a personal chat history, with JWT-based authentication and password recovery via email. The system integrates DeepSeek AI through OpenRouter for generating high-quality responses, offering a smooth, secure, and responsive chat experience.",
    tags: [
      "fullstack",
      "react",
      "tailwind",
      "spring-boot",
      "mysql",
      "ai",
      "openrouter",
      "deepseek",
      "chat-app",
    ],
    features: [
      "JWT-based authentication with secure session handling",
      "User registration, login, logout, and password recovery",
      "Multiple AI-powered chat conversations per user",
      "Persistent chat history stored in MySQL",
      "Responsive UI built with Tailwind CSS",
      "Secure password hashing and token validation",
    ],
    flows: {
      authentication: [
        "User registers with email and password",
        "Passwords stored securely via hashing",
        "Login generates JWT for session management",
        "Forgot password triggers email reset link",
      ],
      chat: [
        "User starts a new AI conversation",
        "Chat messages sent to backend",
        "Backend forwards request to DeepSeek via OpenRouter",
        "AI response returned and stored in user chat history",
      ],
    },
    tech: {
      frontend: ["React", "Tailwind CSS", "Axios"],
      backend: [
        "Java",
        "Spring Boot",
        "Spring Security (JWT)",
        "Java Mail Sender",
      ],
      database: ["MySQL"],
      ai: ["DeepSeek via OpenRouter.ai"],
      security: [
        "Password hashing",
        "JWT validation",
        "Secure password reset flow",
      ],
    },
    role: "Full-stack developer (frontend, backend, AI integration, and authentication security)",
    highlights: [
      "DeepSeek AI integration for intelligent chat responses",
      "User-specific multi-conversation management",
      "Robust authentication and secure password recovery flow",
    ],
    links: {
      repo: "https://github.com/zarn-chalamet/chatbot-deepseek",
      author: "https://github.com/zarn-chalamet",
    },
    image: chat_bot,
    screenshots: [
      "https://github.com/user-attachments/assets/5afa1fed-dc20-4ee9-a988-1c87b0356b99",
      "https://github.com/user-attachments/assets/3867f9ce-389c-4483-aa4d-b3a1921d767d",
      "https://github.com/user-attachments/assets/45d09317-74ba-414e-9463-dbd33cb27435",
    ],
    license: "MIT",
    status: "Active",
    futureImprovements: [
      "Support for multiple AI models",
      "Real-time typing indicators",
      "Chat export and download feature",
      "Dark mode UI",
    ],
  },
  {
    title: "AI-Powered Research Assistant",
    period: "2025",
    blurb:
      "A Chrome Extension that summarizes highlighted text from any webpage using Google Gemini AI, providing instant insights inside a sidebar tool.",
    description:
      "This Chrome Extension improves research efficiency by allowing users to highlight text on any webpage and instantly receive concise AI-generated summaries. The selected content is sent to a Spring Boot backend, which integrates with Google Gemini API to generate context-aware summaries that are displayed directly in the extension sidebar.",
    tags: [
      "chrome-extension",
      "spring-boot",
      "Ai",
      "google-gemini",
      "research",
    ],
    features: [
      "Highlight text on any webpage for instant summarization",
      "Seamless extension sidebar integration",
      "AI-powered summaries generated via Google Gemini API",
      "Fast and context-aware insights for researchers and professionals",
    ],
    flows: {
      researchAssistantFlow: [
        "User highlights text on webpage",
        "Clicks Summarize in extension sidebar",
        "Selected text sent to Spring Boot backend",
        "Backend calls Google Gemini API for summary",
        "Summary displayed in sidebar",
      ],
    },
    tech: {
      frontend: ["Chrome Extension APIs", "JavaScript", "HTML", "CSS"],
      backend: ["Spring Boot", "REST APIs"],
      ai: ["Google Gemini API"],
    },
    role: "Fullstack developer (extension sidebar design, backend AI integration, summarization workflow)",
    highlights: [
      "Instant AI-powered text summarization",
      "Boosts research productivity",
      "Smooth integration into browser workflow",
    ],
    links: {
      repo: "https://github.com/zarn-chalamet/email-assistant-ai",
      author: "https://github.com/zarn-chalamet",
    },
    image: research_assistant,
    screenshots: [
      "https://github.com/user-attachments/assets/3e32cffc-71c1-4759-b6aa-757c7bdeb837",
    ],
    license: "MIT",
    status: "Active",
    futureImprovements: [
      "Multi-language summarization support",
      "Export summaries to notes apps (Notion, Obsidian, Google Keep)",
      "Voice summary playback",
    ],
  },
  {
    title: "FileShare – Modern File Sharing Platform",
    period: "2025",
    blurb:
      "A secure and modern file-sharing platform with authentication, public/private file toggles, and real-time analytics built with Spring Boot, React, and Clerk.",
    description:
      "FileShare is a modern file-sharing solution that enables users to upload, manage, and share files with fine-grained visibility controls. The platform supports both private storage and public file sharing via unique URLs, with a responsive dashboard that displays real-time analytics including total files, storage size, downloads, and recent uploads. Built on Spring Boot and MongoDB with Clerk authentication, FileShare combines secure file management with a clean, modern UI.",
    tags: [
      "react",
      "tailwind",
      "spring-boot",
      "mongodb",
      "clerk-auth",
      "file-sharing",
    ],
    features: [
      "Upload and manage multiple files simultaneously",
      "Toggle file visibility between public and private",
      "Secure file download with authentication",
      "Public files accessible via unique shareable URLs",
      "Dashboard with total files, storage usage, and download analytics",
      "Recent uploads overview with real-time updates",
      "Responsive UI with TailwindCSS and lucide-react icons",
    ],
    flows: {
      fileManagement: [
        "User selects files to upload",
        "Files sent to Spring Boot backend via REST API",
        "Backend stores files and updates MongoDB database",
        "Dashboard reflects updated file statistics in real-time",
      ],
      publicFileSharing: [
        "User toggles a file to public",
        "Backend generates a unique shareable URL",
        "Anyone with the link can view and download the file without login",
      ],
    },
    tech: {
      frontend: [
        "React",
        "React Router",
        "Clerk React SDK",
        "Axios",
        "TailwindCSS",
        "lucide-react",
      ],
      backend: ["Java 21", "Spring Boot", "Spring Security (JWT)"],
      database: ["MongoDB"],
      other: ["REST APIs", "Real-time backend integration"],
    },
    role: "Full-stack developer (design, implementation, integration, and deployment)",
    highlights: [
      "Seamless file upload and management system",
      "Integrated Clerk authentication for secure access",
      "Unique public file links for easy sharing",
      "Real-time dashboard with live statistics",
    ],
    links: {
      repo: "https://github.com/zarn-chalamet/fileshare",
      author: "https://github.com/zarn-chalamet",
    },
    image: file_share,
    screenshots: [
      "https://github.com/user-attachments/assets/placeholder-fileshare-dashboard.jpg",
      "https://github.com/user-attachments/assets/placeholder-fileshare-upload.jpg",
      "https://github.com/user-attachments/assets/placeholder-fileshare-public.jpg",
    ],
    license: "MIT",
    status: "Active",
    futureImprovements: [
      "Support for large file chunk uploads",
      "File versioning and rollback",
      "Advanced analytics with filters and sorting",
      "Drag-and-drop file upload functionality",
      "Integration with cloud storage providers (S3, GCP, Azure)",
    ],
  },
  {
    title: "GenAI Image Generator",
    period: "2025",
    blurb:
      "A Spring Boot backend service that integrates Stability AI’s Stable Diffusion models to generate and transform images from text prompts and existing images.",
    description:
      "GenAI Image Generator is a backend application that harnesses Stability AI’s cutting-edge Stable Diffusion models to produce high-quality images from text prompts and manipulate existing images with style or content modifications. Exposed via a RESTful API, this project provides clean endpoints for seamless integration with frontend clients or third-party services, making it suitable for creative applications, design tools, or AI-powered media platforms.",
    tags: [
      "spring-boot",
      "java",
      "AI",
      "stability-ai",
      "image-generation",
      "stable-diffusion",
    ],
    features: [
      "Text-to-image generation from natural language prompts",
      "Image-to-image transformation guided by text instructions",
      "RESTful API endpoints for integration with client apps",
      "Stability AI integration with Stable Diffusion models",
      "Clean architecture with Spring Boot and Maven",
    ],
    flows: {
      textToImage: [
        "User sends a text prompt to the backend API",
        "Backend forwards the prompt to Stability AI",
        "Stability AI generates a high-quality image",
        "Generated image returned to the client",
      ],
      imageToImage: [
        "User uploads an image and provides a guiding text prompt",
        "Backend sends image and prompt to Stability AI",
        "Stability AI modifies the original image based on instructions",
        "Transformed image returned to the client",
      ],
    },
    tech: {
      backend: ["Spring Boot", "Java", "Maven"],
      ai: ["Stability AI (Stable Diffusion)"],
      httpClient: ["RestClient"],
    },
    role: "Backend developer (API design, Stability AI integration, and system architecture)",
    highlights: [
      "Integration with Stability AI’s cutting-edge image generation models",
      "RESTful endpoints ready for frontend or third-party service integration",
      "Support for both creative text-to-image and transformative image-to-image workflows",
    ],
    links: {
      repo: "https://github.com/zarn-chalamet/gen-ai",
      author: "https://github.com/zarn-chalamet",
    },
    image: stability_ai,
    screenshots: [
      "https://github.com/user-attachments/assets/a26fd6d9-d3b6-43f2-a4c0-a0a4a3edca45",
      "https://github.com/user-attachments/assets/6baf6695-8f9f-46bb-a3e8-8dc31dd8d56b",
      "https://github.com/user-attachments/assets/37b58e7c-73b5-4668-acf6-7c8451940082",
    ],
    license: "MIT",
    status: "Active",
    futureImprovements: [
      "Add support for inpainting (object removal and replacement)",
      "Enable style presets (e.g., anime, realism, sketch)",
      "Batch generation for multiple images per request",
      "User management and authentication for API access",
    ],
  },
  {
    title: "AI-Powered Fitness Analysis & Recommendation Platform",
    period: "2025",
    blurb:
      "A Java Spring Boot microservices platform that analyzes user activity data and delivers personalized fitness recommendations using Google Gemini AI.",
    description:
      "This project is a modern, scalable fitness platform built on a microservices architecture with Spring Boot. It securely manages users, tracks fitness activities, and leverages Google Gemini AI to provide personalized improvement tips. The architecture ensures scalability, fault-tolerance, and modularity, integrating Eureka for service discovery, Spring Cloud Config for centralized configuration, RabbitMQ for asynchronous communication, and Keycloak for authentication and authorization.",
    tags: [
      "spring-boot",
      "microservices",
      "java",
      "fitness",
      "google-gemini",
      "AI",
      "keycloak",
      "rabbitmq",
    ],
    features: [
      "Secure authentication & authorization with Keycloak",
      "User profile synchronization between user-service and Keycloak",
      "Activity tracking for running, cycling, gym workouts, and more",
      "Asynchronous messaging with RabbitMQ for event-driven architecture",
      "AI-powered recommendations via Google Gemini",
      "Service discovery with Eureka",
      "Centralized configuration management with Spring Cloud Config",
      "Single secure entry point with API Gateway",
      "Dedicated database per service (MySQL, MongoDB)",
    ],
    flows: {
      authentication: [
        "User logs in via API Gateway integrated with Keycloak",
        "User profile synced in user-service and Keycloak",
      ],
      activityTracking: [
        "User submits activity data",
        "activity-service stores data and publishes event to RabbitMQ",
      ],
      aiAnalysis: [
        "ai-service consumes RabbitMQ events",
        "Google Gemini API generates personalized recommendations",
        "Recommendations stored in ai-service database",
      ],
      userFeedback: ["Recommendations delivered back to user via API Gateway"],
    },
    tech: {
      backend: ["Java 21", "Spring Boot", "Spring Cloud", "Maven"],
      authentication: ["Keycloak (OpenID Connect / OAuth2)"],
      serviceDiscovery: ["Eureka"],
      configuration: ["Spring Cloud Config Server"],
      gateway: ["Spring Cloud API Gateway"],
      messaging: ["RabbitMQ"],
      ai: ["Google Gemini API"],
      databases: ["MySQL", "MongoDB"],
      containerization: ["Docker", "Docker Compose"],
    },
    role: "Backend & architecture engineer (microservices design, AI integration, security setup, messaging flow)",
    highlights: [
      "Scalable and secure microservices architecture",
      "AI-driven personalized fitness recommendations",
      "Asynchronous event-driven communication with RabbitMQ",
      "Full separation of concerns with dedicated databases per service",
    ],
    links: {
      repo: "https://github.com/zarn-chalamet/fitness-ms",
      author: "https://github.com/zarn-chalamet",
    },
    image: fitness,
    screenshots: [
      "https://github.com/user-attachments/assets/89dee6a4-9696-4595-b056-dff2ea916c64",
    ],
    license: "MIT",
    status: "Active",
    futureImprovements: [
      "Mobile app integration",
      "Real-time activity tracking from wearable devices",
      "Comprehensive analytics dashboard",
      "Multi-language support for AI recommendations",
    ],
  },
];
