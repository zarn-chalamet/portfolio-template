import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Sun, Moon, Menu, X } from "lucide-react";

const Navbar = ({ profile, dark, setDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  
  // Get navbar height for scroll offset
  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, [isMenuOpen]); // Recalculate when menu opens/closes as height may change

  // Function to handle scroll and detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // Account for navbar height in calculation
        if (window.scrollY >= sectionTop - navbarHeight - 20 && 
            window.scrollY < sectionTop + sectionHeight - navbarHeight - 20) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarHeight]); // Re-run when navbarHeight changes

  const toggleTheme = () => {
    setDark(!dark);
  };

  // Function to handle smooth scrolling with offset
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const Container = ({ children, className = "" }) => (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );

  return (
    <header 
      ref={navbarRef}
      className="sticky top-0 z-50 border-b border-black/10 dark:border-white/15 backdrop-blur-lg bg-white/95 dark:bg-neutral-950/95 transition-all duration-300"
    >
      <Container className="flex items-center justify-between py-3">
        {/* Logo/Brand */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 group"
        >
          <div className="size-9 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
            <span className="text-white font-bold text-sm">{profile.initials || 'JD'}</span>
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-black to-black/70 dark:from-white dark:to-white/70 bg-clip-text text-transparent transition-all duration-300 group-hover:translate-x-0.5">
            {profile.name}
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group ${
                activeSection === item.id
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white'
              }`}
            >
              {item.label}
              <span 
                className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'w-4/5 bg-blue-500' 
                    : 'w-0 bg-blue-500 group-hover:w-4/5'
                }`}
              ></span>
            </button>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 group"
            aria-label="Toggle theme"
          >
            {dark ? (
              <Sun className="size-5 text-neutral-700 dark:text-neutral-300 group-hover:rotate-12 transition-transform duration-300" />
            ) : (
              <Moon className="size-5 text-neutral-700 dark:text-neutral-300 group-hover:rotate-12 transition-transform duration-300" />
            )}
          </button> */}

          {/* Social Links */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 group hidden sm:block"
            aria-label="GitHub profile"
          >
            <Github className="size-5 text-neutral-700 dark:text-neutral-300 group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 group hidden sm:block"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="size-5 text-neutral-700 dark:text-neutral-300 group-hover:scale-110 transition-transform duration-300" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 ml-1"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="size-5 text-neutral-700 dark:text-neutral-300" />
            ) : (
              <Menu className="size-5 text-neutral-700 dark:text-neutral-300" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-black/10 dark:border-white/15 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-lg transition-all duration-300">
          <Container className="py-3">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 flex items-center ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-semibold'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="ml-2 w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  )}
                </button>
              ))}
              
              <div className="flex items-center gap-2 pt-2 border-t border-gray-200 dark:border-gray-800 mt-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Github className="size-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Linkedin className="size-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;