import React from 'react'
import { Calendar } from 'lucide-react';

const EXPERIENCE = [
  {
    org: "InnoSpace (Capstone)",
    role: "Backend Lead • Microservices",
    start: "Jan 2025",
    end: "Present",
    points: [
      "Designed service boundaries (Auth, Booking, Payments, Notifications) with Spring Cloud and Eureka",
      "Implemented idempotent payment flows; outbox pattern for Kafka producers",
      "Containerized services with Docker; GitHub Actions for CI and K8s deploy stubs",
    ],
  },
  {
    org: "Open Source",
    role: "Contributor",
    start: "2023",
    end: "2024",
    points: [
      "Contributed bugfixes to OSS Spring libraries and React tooling",
      "Wrote docs/examples that reduced onboarding time for new users",
    ],
  },
];

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-sm ring-1 ring-black/5 bg-white dark:bg-neutral-900 ${className}`}>{children}</div>
);


const Experience = () => {
  return (
    <div>
        {/* Experience */}
        <section id="experience" className="py-16 md:py-24">
            <Container>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8">Experience</h2>
                <div className="space-y-6">
                    {EXPERIENCE.map((e) => (
                    <Card key={e.org} className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <div className="text-lg font-semibold">{e.role} · {e.org}</div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-2"><Calendar className="size-4"/>{e.start} – {e.end}</div>
                        </div>
                        <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
                        {e.points.map((p, i) => (
                            <li key={i}>{p}</li>
                        ))}
                        </ul>
                    </Card>
                    ))}
                </div>
            </Container>
        </section>

    </div>
  )
}

export default Experience