import React from 'react'
import { motion} from "framer-motion";
import { Rocket, ChevronRight, Download, MapPin, Mail, ServerCog, Dot } from 'lucide-react';

const Hero = ({profile}) => {

  const Container = ({ children, className = "" }) => (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );

  const Badge = ({ children, className = "" }) => (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium tracking-wide bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10 ${className}`}>{children}</span>
  );

  const Button = ({ as:As = "button", className = "", children, ...props }) => (
    <As className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-semibold shadow-sm ring-1 ring-inset ring-black/5 bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 transition ${className}`} {...props}>
      {children}
    </As>
  );

  const Card = ({ children, className = "" }) => (
    <div className={`rounded-2xl shadow-sm ring-1 ring-black/5 bg-white dark:bg-neutral-900 ${className}`}>{children}</div>
  );

  return (
    <div>
      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(600px_300px_at_10%_20%,theme(colors.blue.400/.3),transparent),radial-gradient(400px_200px_at_90%_10%,theme(colors.purple.400/.3),transparent)]" />
        <Container className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4"><Rocket className="mr-2 size-3" /> Open to backend internships</Badge>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight">
                Backend‑leaning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Full‑Stack</span> Developer
              </h1>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {profile.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button as="a" href="#projects"><ChevronRight className="size-4"/> See projects</Button>
                <Button as="a" href={profile.resumeUrl} download className="bg-white text-black ring-black/10 dark:bg-neutral-800 dark:text-black dark:ring-white/10">
                  <Download className="size-4"/> Download résumé
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
                <span className="inline-flex items-center gap-2"><MapPin className="size-4"/>{profile.location}</span>
                <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${profile.email}`}><Mail className="size-4"/>{profile.email}</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><ServerCog className="size-5"/> What I love building</h3>
                <ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start gap-3"><Dot/> 
                    Resilient REST/GraphQL APIs with Spring Boot
                  </li>
                  <li className="flex items-start gap-3"><Dot/> 
                    Event-driven microservices with Kafka or RabbitMQ
                  </li>
                  <li className="flex items-start gap-3"><Dot/> 
                    AI integrations with Google Gemini, Deepseek
                  </li>
                  <li className="flex items-start gap-3"><Dot/> 
                    Chrome extensions with smart backend integrations
                  </li>
                  <li className="flex items-start gap-3"><Dot/> Service discovery & config with Eureka/Spring Cloud</li>
                  <li className="flex items-start gap-3"><Dot/> Containerized builds, CI/CD and basic K8s deploys</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Hero