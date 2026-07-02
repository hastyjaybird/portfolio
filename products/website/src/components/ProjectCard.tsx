import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  org: string;
  year: string;
  summary: string;
  tags: string[];
};

export function ProjectCard({
  slug,
  title,
  org,
  year,
  summary,
  tags,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-zinc-200 p-6 transition-shadow hover:shadow-md dark:border-zinc-800">
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold">
          <Link href={`/projects/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <span className="shrink-0 text-sm text-zinc-500">{year}</span>
      </div>
      <p className="mb-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        {org}
      </p>
      <p className="mb-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {summary}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
