import React from "react";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const About = ({ profile }) => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white/80 dark:bg-neutral-900/70 border-y border-black/5 dark:border-white/10"
    >
      <Container>
        <h2 className="text-3xl font-extrabold mb-6">About Me</h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
          I’m <strong>{profile.name}</strong>, a final-year Software Engineering student with a passion for solving real-world problems through scalable software solutions.
        </p>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
          My projects range from AI-powered productivity tools to distributed backend systems. I focus on building secure, high-performance services with clean APIs, and pairing them with intuitive UIs.
        </p>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
          Currently seeking an internship where I can grow as a developer, contribute to impactful projects, and collaborate with a great team.
        </p>
      </Container>
    </section>
  );
};

export default About;
