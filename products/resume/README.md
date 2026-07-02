# Resume — Awesome-CV (local)

Template: **[Awesome-CV](https://github.com/posquit0/Awesome-CV)** — 27k+ GitHub stars, sans-serif (Source Sans 3 + Roboto), designed for professional job applications.

## Build

```bash
cd resume
make              # → pdf/resume.pdf
make supplement   # → pdf/publications-supplement.pdf
make view         # open in PDF viewer
```

First-time setup (fonts + LuaLaTeX):

```bash
./scripts/install-texlive.sh
```

Or build via Docker (no local install):

```bash
cd resume && make docker
```

## Edit content

| File | Section |
|------|---------|
| `resume.tex` | Header: name, email, phone, LinkedIn |
| `sections/summary.tex` | Summary paragraph |
| `sections/experience.tex` | Work history |
| `sections/honors.tex` | XPrize, patents, grants |
| `sections/skills.tex` | Skills |
| `sections/education.tex` | Degrees |

Template class: `awesome-cv.cls` (from `vendor/Awesome-CV/`)

## Legacy layouts

Previous attempts archived in `archive/`.

## Viewing

PDFs are binary — use `make view` or your file manager, not the Cursor text editor.
