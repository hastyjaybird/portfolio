import { awards, patents, publications } from "@/lib/content";

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-10 text-3xl font-bold tracking-tight">
        Research & Recognition
      </h1>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold">Publications</h2>
        <ul className="space-y-4">
          {publications.map((pub) => (
            <li
              key={pub.title}
              className="border-l-2 border-zinc-200 pl-4 dark:border-zinc-700"
            >
              <p className="font-medium">{pub.title}</p>
              <p className="text-sm text-zinc-500">
                {pub.venue} ({pub.year})
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold">Patents</h2>
        <ul className="space-y-3">
          {patents.map((pat) => (
            <li key={pat.number} className="text-sm">
              <span className="font-medium">{pat.number}</span> — {pat.title} (
              {pat.year})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Awards</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          {awards.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
