import React from 'react'
import { Github, Linkedin, Sun, Moon} from "lucide-react";

const Navbar = ({profile,dark,setDark}) => {


  const Container = ({ children, className = "" }) => (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );

  const Button = ({ as:As = "button", className = "", children, ...props }) => (
  <As className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-semibold shadow-sm ring-1 ring-inset ring-black/5 bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 transition ${className}`} {...props}>
    {children}
  </As>
);


  return (
    <header className="sticky top-0 z-40 border-b border-black/5 dark:border-white/10 backdrop-blur bg-white/70 dark:bg-neutral-950/70">
      <Container className="flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-2 font-bold">
          <div className="size-8 rounded-xl bg-black dark:bg-white" />
          <span>{profile.name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:opacity-70" href="#projects">Projects</a>
          <a className="hover:opacity-70" href="#experience">Experience</a>
          <a className="hover:opacity-70" href="#skills">Skills</a>
          <a className="hover:opacity-70" href="#education">Education</a>
          <a className="hover:opacity-70" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">
            <Github className="size-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">
            <Linkedin className="size-5" />
          </a>
          <Button onClick={() => setDark((d) => !d)} className="!px-2 !py-2">
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
