# Resume Template — Awesome-CV (local)

We use **[Awesome-CV](https://github.com/posquit0/Awesome-CV)** — the most-starred professional LaTeX resume template (~27k GitHub stars).

- **Sans-serif only:** Source Sans 3 (body) + Roboto (headers)
- **No Overleaf:** builds locally with LuaLaTeX or Docker
- **ATS-friendly:** single-column, semantic structure

## Alternatives considered

| Template | Why not chosen |
|----------|----------------|
| Deedy | Serif-adjacent fonts; you rejected it |
| sb2nov/resume | Computer Modern serif default |
| Custom sidebar/executive | You rejected all three |
| ProResume | Good but less community adoption than Awesome-CV |

## Clone / update vendor copy

```bash
cd resume
rm -rf vendor/Awesome-CV
git clone --depth 1 https://github.com/posquit0/Awesome-CV.git vendor/Awesome-CV
cp vendor/Awesome-CV/awesome-cv.cls .
```

License: LPPL-1.3c (Awesome-CV)
