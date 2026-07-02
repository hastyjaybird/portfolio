#!/usr/bin/env bash
# Compile resume PDFs via Docker (includes fonts for Awesome-CV).
set -euo pipefail
cd "$(dirname "$0")"
FILE="${1:-resume.tex}"
ENGINE="${2:-lualatex}"
OUTDIR="${3:-pdf}"
mkdir -p "$OUTDIR"
IMAGE="${TEXLIVE_IMAGE:-texlive/texlive:latest}"
docker run --rm -v "$PWD:/work" -w /work "$IMAGE" \
  sh -c "$ENGINE -interaction=nonstopmode -output-directory=$OUTDIR $FILE && $ENGINE -interaction=nonstopmode -output-directory=$OUTDIR $FILE"
