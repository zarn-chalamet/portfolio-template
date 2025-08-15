import React from 'react'
import { GraduationCap } from 'lucide-react';

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-sm ring-1 ring-black/5 bg-white dark:bg-neutral-900 ${className}`}>{children}</div>
);


const EDUCATION = [
  {
    school: "Mae Fah Luang University",
    degree: "B.Eng. in Software Engineering",
    start: "2021",
    end: "2025",
    info: ["GPA: 3.5/4.0", "Relevant: DSA, Distributed Systems, Cloud"],
  },
];

const Education = () => {
  return (
    <div>
        {/* Education */}
        <section id="education" className="py-16 md:py-24 bg-white/60 dark:bg-neutral-900/60 border-y border-black/5 dark:border-white/10">
            <Container>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8">Education</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {EDUCATION.map((ed) => (
                    <Card key={ed.school} className="p-6">
                        <div className="flex items-center gap-3 mb-1">
                        <GraduationCap className="size-5"/>
                        <div className="font-semibold">{ed.school}</div>
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-300">{ed.degree} · {ed.start} – {ed.end}</div>
                        <ul className="mt-3 text-sm text-neutral-700 dark:text-neutral-300 list-disc pl-5 space-y-1">
                        {ed.info.map((i) => <li key={i}>{i}</li>)}
                        </ul>
                    </Card>
                    ))}
                </div>
            </Container>
        </section>
    </div>
  )
}

export default Education