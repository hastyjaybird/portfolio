# Repo structure

Three layers, each with a different job. The flow is one-directional: raw material → synthesized narrative → tailored product.

```
experiences/     Raw material, one folder per distinct role/project/venture.
       ↓
content/         Synthesized, cross-referenced narrative (single source of truth for facts).
       ↓
products/        Tailored deliverables for a specific audience or career path.
```

## `experiences/` — raw material library

One folder per distinct experience (employer, venture, project). Each folder holds everything related to that experience and nothing else:

```
experiences/<name>/
  README.md          Org, role, dates, key verified facts (with sourcing), STAR notes
  urls.md            Reference URLs not worth downloading in full
  articles/          Press, news coverage
  web-exports/        Scraped/downloaded web pages (company sites, Wix exports, etc.)
  pdfs/              Papers, patents, grant docs, old CVs, contracts
  images/            Photos, logos, screenshots
  videos/            Video assets
```

Copy `experiences/_TEMPLATE/` to start a new one. This is the layer to update first when new facts, documents, or sources come in — everything downstream should trace back to a folder here.

## `content/` — synthesized narrative

Cross-references and reconciles facts across multiple `experiences/` folders into the story-ready form:

- `master-profile.md` — single source of truth: contact info, elevator pitches, career summary table, STAR case studies, skills, publications, patents, awards. **This is what every product should pull from**, not `experiences/` directly, since this is where conflicting numbers/dates across sources get resolved.
- `experience-database.md` — more granular, sourced fact log (every claim cites where it came from).
- `anthropic-role-map.md` — role-fit analysis for Anthropic specifically.
- `interviews/` — discovery session transcripts/notes that fed the above.

## `products/` — tailored deliverables

Each subfolder is a finished or in-progress output for a specific audience. Adding a new career path means adding a new file/variant here — it should never require touching `experiences/`.

```
products/
  resume/            LaTeX resume — sections/ (shared) + variants/ (career-path-specific: domain-scaling, life-sciences, ...)
  bios/              Short/medium/long bio variants for different purposes
  linkedin/          LinkedIn profile draft(s)
  website/           Next.js portfolio site
  applications/      Role-specific application packages (e.g. applications/anthropic/)
```

To tailor to a new career path: add a new resume variant under `products/resume/variants/`, a new bio under `products/bios/`, or a new folder under `products/applications/<company>/` — each pulling facts from `content/master-profile.md` and citing back to `experiences/` for verification.

## Anonymity / sensitivity notes

Some `experiences/` folders contain a "do not name" instruction (e.g. `acepr/README.md`) — specific communities/projects that must only be described generically in any product. Check an experience's README before quoting names out of its source documents into `content/` or `products/`.

## Where things live now

- `docs/` — process docs, setup guides, this file
- `bin/`, `scripts/` — tooling (Gmail/Drive MCP auth, TeX install, etc.) — unaffected by this structure
