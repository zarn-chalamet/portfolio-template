import React from "react";
import { Heart, ArrowUp, Mail, Github, Linkedin } from "lucide-react";

const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-neutral-900 to-black text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">{profile?.initials || 'JD'}</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {profile?.name || 'Your Name'}
              </span>
            </div>
            <p className="text-neutral-400 text-sm mb-6 max-w-xs">
              Passionate software engineer specializing in backend development, AI solutions, and creating impactful digital experiences.
            </p>
            <div className="flex gap-3">
              <a
                href={profile?.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-neutral-800 hover:bg-blue-600 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-neutral-400 group-hover:text-white" />
              </a>
              <a
                href={profile?.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-neutral-800 hover:bg-blue-600 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-white" />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile?.email}`} 
                target="_blank"
                className="p-2.5 rounded-xl bg-neutral-800 hover:bg-blue-600 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-neutral-400 group-hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="md:ml-auto">
            <h3 className="font-semibold text-lg mb-4 text-white">Navigation</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-neutral-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Get in Touch</h3>
            <div className="space-y-3">
              <p className="text-neutral-400 text-sm">
                Interested in working together or have questions?
              </p>
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile?.email}`} 
                target="_blank"
                className="block text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
              >
                {profile?.email || 'your.email@example.com'}
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 mt-4 text-neutral-400 hover:text-blue-400 transition-colors duration-200 group"
              >
                <span className="text-sm">Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm flex items-center gap-1">
            © {currentYear} {profile?.name || 'Your Name'}. Made with <Heart className="w-4 h-4 text-red-500 inline mx-1" /> and React
          </p>
          <p className="text-neutral-500 text-sm">
            Designed with focus on accessibility and performance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;