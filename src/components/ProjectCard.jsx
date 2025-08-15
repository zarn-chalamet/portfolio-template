import { Github, ExternalLink } from "lucide-react";

export function ProjectCard({ project }) {

  const Card = ({ children, className = "" }) => (
    <div className={`rounded-2xl shadow-sm ring-1 ring-black/5 bg-white dark:bg-neutral-900 ${className}`}>{children}</div>
  );

  const Badge = ({ children, className = "" }) => (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium tracking-wide bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10 ${className}`}>{children}</span>
  );
  

  return (
    <Card className="p-5 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg leading-tight">{project.title}</h3>
          <div className="text-xs mt-1 text-neutral-500 dark:text-neutral-400">{project.period}</div>
        </div>
      </div>
      <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300 line-clamp-3">{project.blurb}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        {project.links?.repo && (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm hover:underline"
          >
            <Github className="size-4"/> Code
          </a>
        )}
        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm hover:underline"
          >
            <ExternalLink className="size-4"/> Live
          </a>
        )}
      </div>
    </Card>
  );
}