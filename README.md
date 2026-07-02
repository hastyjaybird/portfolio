# Portfolio — Dr. Julia Hasty

Career materials and application package targeting Anthropic (San Francisco, $200k+) — built to be reusable for future products (other resumes, bios, career paths).

## Structure

```
experiences/      Raw material library — one folder per role/venture (articles, PDFs, images, videos, URLs)
content/          Synthesized narrative — master profile, interview notes, role maps (single source of truth)
products/         Tailored deliverables — resume, bios, LinkedIn, website, applications
docs/             Setup guides, structure docs
```

See `docs/STRUCTURE.md` for the full explanation of how the three layers relate and how to add a new experience, resume variant, or application package.

## Install TeX (local — no Overleaf)

Template: **Awesome-CV** (sans-serif). See `docs/resume-template-options.md`.

```bash
./scripts/install-texlive.sh          # sudo once — adds LuaLaTeX + Roboto + Source Sans 3
cd products/resume && make            # → products/resume/pdf/resume.pdf
```

Or: `cd products/resume && make docker` (no local install)

### Website

```bash
cd products/website
npm install
npm run dev
```

## Workflow

1. Discovery interviews → `content/interviews/`
2. Raw material per experience → `experiences/<name>/`
3. Master profile (resolves conflicts, single source of truth) → `content/master-profile.md`
4. Anthropic role map → `content/anthropic-role-map.md`
5. Tailored resume, bio, LinkedIn, site, and application package → `products/`
