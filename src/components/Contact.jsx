import React from "react";
import { Mail, Download, Linkedin, Github, MessageCircle, ArrowRight } from "lucide-react";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const ContactCard = ({ children, className = "" }) => (
  <div className={`relative rounded-3xl p-6 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 shadow-2xl shadow-blue-500/10 dark:shadow-blue-400/5 border border-neutral-200/80 dark:border-neutral-700/50 backdrop-blur-sm ${className}`}>
    {children}
  </div>
);

const IconButton = ({ as: As = "a", className = "", icon, children, ...props }) => (
  <As
    className={`group flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 ${className}`}
    {...props}
  >
    {icon} 
    <span className="text-sm">{children}</span>
    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
  </As>
);

const ContactInfoItem = ({ icon, label, value, href }) => (
  <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50/50 dark:bg-neutral-800/50 hover:bg-neutral-100/70 dark:hover:bg-neutral-700/50 transition-all duration-300 group">
    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">{label}</p>
      <a 
        href={href} 
        target={href.startsWith('http') ? '_blank' : ''} 
        rel={href.startsWith('http') ? 'noreferrer' : ''}
        className="text-sm text-neutral-800 dark:text-neutral-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        {value}
      </a>
    </div>
  </div>
);

const Contact = ({ profile }) => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 relative overflow-hidden">
      {/* Decorative elements - slightly reduced */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <Container>
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1.5 text-xs font-medium text-blue-700 dark:text-blue-300 mb-4">
            <MessageCircle className="w-4 h-4 mr-1.5" />
            Let's Connect
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="mt-3 text-md text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            I'm currently looking for internship opportunities in backend, full-stack, or AI-focused development.
          </p>
        </div>
        
        <ContactCard className="grid md:grid-cols-2 gap-6 relative">
          {/* Left side - Contact information */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Contact Information</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Feel free to reach out through any of these channels.
            </p>
            
            <div className="space-y-3 mt-2">
              <ContactInfoItem 
                icon={<Mail className="w-4 h-4" />}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              
              <ContactInfoItem 
                icon={<Linkedin className="w-4 h-4" />}
                label="LinkedIn"
                value="Connect professionally"
                href={profile.linkedin}
              />
              
              <ContactInfoItem 
                icon={<Github className="w-4 h-4" />}
                label="GitHub"
                value="View my projects"
                href={profile.github}
              />
            </div>
          </div>
          
          {/* Right side - CTA buttons */}
          <div className="flex flex-col justify-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Ready to collaborate?</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Send me an email or download my resume to learn more.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 mt-2">
              <IconButton 
                as="a" 
                href={`mailto:${profile.email}`} 
                icon={<Mail className="w-4 h-4" />}
              >
                Send an Email
              </IconButton>
              
              <IconButton 
                as="a" 
                href={profile.resumeUrl} 
                download 
                icon={<Download className="w-4 h-4" />}
                className="bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 hover:from-purple-700 hover:to-purple-800 dark:hover:from-purple-600 dark:hover:to-purple-700"
              >
                Download Résumé
              </IconButton>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-3 mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </ContactCard>
      </Container>
    </section>
  );
};

export default Contact;