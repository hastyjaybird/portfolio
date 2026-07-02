import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-3 text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mb-10 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Case studies from two decades of research, engineering, and deployment
        in clean energy and water systems.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}
