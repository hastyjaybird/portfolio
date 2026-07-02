# PDF outputs

Built resume PDFs live here. Regenerate with `make` from the parent `resume/` directory.

| File | Description |
|------|-------------|
| `resume.pdf` | Primary 1-page résumé (Awesome-CV) |
| `publications-supplement.pdf` | Publications, patents, and awards |

```bash
cd ..
make              # resume.pdf
make supplement   # publications-supplement.pdf
make view         # open resume.pdf
```

These files are gitignored (generated artifacts).
