import React from "react";
import { Mail, Download, Linkedin, Github } from "lucide-react";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const ContactCard = ({ children, className = "" }) => (
  <div className={`relative rounded-2xl p-6 shadow-lg bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-800/50 ring-1 ring-black/5 dark:ring-white/10 ${className}`}>
    {children}
  </div>
);

const IconButton = ({ as: As = "a", className = "", icon, children, ...props }) => (
  <As
    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition bg-white dark:bg-neutral-800 text-black dark:text-white shadow-sm hover:shadow-md hover:scale-105 ring-1 ring-black/5 dark:ring-white/10 ${className}`}
    {...props}
  >
    {icon} {children}
  </As>
);

const Contact = ({ profile }) => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white/80 dark:bg-neutral-900/70 border-y border-black/5 dark:border-white/10">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold">Let’s Build Something Together</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm md:text-base">
            I’m open to internship opportunities in backend, full-stack, or AI-focused development.
          </p>
        </div>
        <ContactCard className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">📧 Email: <a href={`mailto:${profile.email}`} className="underline hover:text-blue-500">{profile.email}</a></p>
            <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">💼 LinkedIn: <a href={profile.linkedin} target="_blank" className="underline hover:text-blue-500">{profile.linkedin}</a></p>
            <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">🐙 GitHub: <a href={profile.github} target="_blank" className="underline hover:text-blue-500">{profile.github}</a></p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-end mt-4 md:mt-0">
            <IconButton as="a" href={`mailto:${profile.email}`} icon={<Mail className="w-5 h-5" />}>
              Email Me
            </IconButton>
            <IconButton as="a" href={profile.resumeUrl} download icon={<Download className="w-5 h-5" />}>
              Download Résumé
            </IconButton>
          </div>
        </ContactCard>
      </Container>
    </section>
  );
};

export default Contact;
