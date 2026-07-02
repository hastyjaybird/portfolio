import Link from "next/link";
import { highlights, projects, siteConfig } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500">
          Materials Scientist · Clean Energy · Water Systems
        </p>
        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Rigorous science deployed at global scale
        </h1>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {siteConfig.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            View projects
          </Link>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-zinc-200 p-4 text-center dark:border-zinc-800"
          >
            <p className="text-2xl font-bold">{item.value}</p>
            <p className="text-sm text-zinc-500">{item.label}</p>
          </div>
        ))}
      </section>

      <section>
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Selected work</h2>
          <Link
            href="/projects"
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            All projects →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
