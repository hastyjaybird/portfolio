import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/projects"
        className="mb-8 inline-block text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← All projects
      </Link>
      <p className="mb-2 text-sm text-zinc-500">
        {project.org} · {project.year}
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight">{project.title}</h1>
      <p className="mb-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        {project.summary}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
