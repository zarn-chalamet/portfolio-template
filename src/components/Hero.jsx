import React from 'react';
import { motion } from "framer-motion";
import { Rocket, ChevronRight, Download, MapPin, Mail, ServerCog, Dot, Sparkles, Code, Cpu, Database, Cloud, Zap } from 'lucide-react';

const Hero = ({ profile }) => {

  const Container = ({ children, className = "" }) => (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );

  const Badge = ({ children, className = "", icon: Icon = Rocket }) => (
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium tracking-wide bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-700/30 ${className}`}
    >
      <Icon className="mr-1.5 size-3.5" /> {children}
    </motion.span>
  );

  const Button = ({ as: As = "button", className = "", children, variant = "primary", ...props }) => {
    const baseClasses = "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 group";
    
    const variants = {
      primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg",
      secondary: "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white ring-1 ring-neutral-200 dark:ring-neutral-700 hover:ring-blue-300 dark:hover:ring-blue-500 hover:shadow-sm"
    };
    
    return (
      <As className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
        {children}
      </As>
    );
  };

  const Card = ({ children, className = "" }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`rounded-xl bg-gradient-to-br from-white/70 to-white/40 dark:from-neutral-900/70 dark:to-neutral-800/40 backdrop-blur-md border border-white/50 dark:border-neutral-700/30 shadow-lg shadow-blue-500/5 dark:shadow-blue-400/5 p-6 ${className}`}
    >
      {children}
    </motion.div>
  );

  const techIcons = [
    { icon: Code, color: "text-blue-500" },
    { icon: Cpu, color: "text-purple-500" },
    { icon: Database, color: "text-cyan-500" },
    { icon: Cloud, color: "text-green-500" },
  ];

  return (
    <div className="relative">
      {/* Background elements - more subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>
      
      {/* Hero */}
      <section id="home" className="relative py-16 md:py-20 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="mb-6">
                <Badge icon={Rocket} className="mb-4">
                  Open to backend internships
                </Badge>
                
                <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                  Backend‑focused <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Full‑Stack</span> Developer
                </h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 text-sm md:text-base"
                >
                  {profile.summary}
                </motion.p>
                
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Button as="a" href="#projects" variant="primary">
                    <ChevronRight className="size-3.5 group-hover:translate-x-0.5 transition-transform"/> 
                    View Projects
                  </Button>
                  <Button as="a" href={profile.resumeUrl} download variant="secondary">
                    <Download className="size-3.5"/> 
                    Download CV
                  </Button>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="inline-flex items-center gap-1.5 bg-white/50 dark:bg-neutral-800/50 px-2.5 py-1.5 rounded-md"
                  >
                    <MapPin className="size-3.5 text-blue-500"/> {profile.location}
                  </motion.span>
                  <motion.a 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center gap-1.5 bg-white/50 dark:bg-neutral-800/50 px-2.5 py-1.5 rounded-md hover:text-blue-600 dark:hover:text-blue-400 transition-colors" 
                    href={`mailto:${profile.email}`}
                  >
                    <Mail className="size-3.5 text-purple-500"/> {profile.email}
                  </motion.a>
                </div>
              </div>
              
              {/* Tech stack indicators */}
              <div className="flex items-center gap-3 mt-8">
                <span className="text-xs text-neutral-500">Tech I work with:</span>
                <div className="flex gap-1.5">
                  {techIcons.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + (index * 0.1) }}
                        className={`p-1.5 rounded-md bg-white/70 dark:bg-neutral-800/70 shadow-xs ${item.color}`}
                      >
                        <IconComponent className="size-3.5" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <Card className="relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -translate-y-12 translate-x-12"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      <ServerCog className="size-5" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">What I Build</h3>
                  </div>
                  
                  <ul className="space-y-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                    <motion.li 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-start gap-2 p-2 rounded-md hover:bg-white/50 dark:hover:bg-neutral-800/50 transition-colors"
                    >
                      <div className="mt-1 p-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <Dot className="size-4 text-blue-500" />
                      </div>
                      <span>Resilient REST/GraphQL APIs with Spring Boot</span>
                    </motion.li>
                    
                    <motion.li 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-start gap-2 p-2 rounded-md hover:bg-white/50 dark:hover:bg-neutral-800/50 transition-colors"
                    >
                      <div className="mt-1 p-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30">
                        <Dot className="size-4 text-purple-500" />
                      </div>
                      <span>Event-driven microservices with Kafka/RabbitMQ</span>
                    </motion.li>
                    
                    <motion.li 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-start gap-2 p-2 rounded-md hover:bg-white/50 dark:hover:bg-neutral-800/50 transition-colors"
                    >
                      <div className="mt-1 p-0.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30">
                        <Dot className="size-4 text-cyan-500" />
                      </div>
                      <span>AI integrations with Google Gemini, Deepseek</span>
                    </motion.li>
                    
                    <motion.li 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-start gap-2 p-2 rounded-md hover:bg-white/50 dark:hover:bg-neutral-800/50 transition-colors"
                    >
                      <div className="mt-1 p-0.5 rounded-full bg-green-100 dark:bg-green-900/30">
                        <Dot className="size-4 text-green-500" />
                      </div>
                      <span>Chrome extensions with backend integrations</span>
                    </motion.li>
                    
                    <motion.li 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex items-start gap-2 p-2 rounded-md hover:bg-white/50 dark:hover:bg-neutral-800/50 transition-colors"
                    >
                      <div className="mt-1 p-0.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                        <Dot className="size-4 text-yellow-500" />
                      </div>
                      <span>Service discovery with Eureka/Spring Cloud</span>
                    </motion.li>
                  </ul>
                </div>
              </Card>
              
              {/* Floating elements - smaller and fewer */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-3 -left-3 p-2 rounded-lg bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-white/50 dark:border-neutral-700/30 shadow-md"
              >
                <Sparkles className="size-4 text-yellow-500" />
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Hero;