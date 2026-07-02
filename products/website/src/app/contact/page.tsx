import { siteConfig } from "@/lib/content";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mb-10 text-zinc-600 dark:text-zinc-400">
        Open to conversations about research, deployment, and roles in AI safety
        and life sciences.
      </p>

      <div className="space-y-6 rounded-lg border border-zinc-200 p-8 dark:border-zinc-800">
        <div>
          <p className="text-sm font-medium text-zinc-500">Email</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-lg hover:underline"
          >
            {siteConfig.email}
          </a>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-500">Phone</p>
          <p className="text-lg">{siteConfig.phone}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-500">Location</p>
          <p className="text-lg">{siteConfig.location}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-500">LinkedIn</p>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:underline"
          >
            linkedin.com/in/dr-jay
          </a>
        </div>
      </div>
    </div>
  );
}
