#!/usr/bin/env bash
# Install LaTeX + sans-serif fonts for Awesome-CV (local build, no Overleaf).
set -euo pipefail
sudo apt-get update
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y \
  texlive-latex-base \
  texlive-latex-recommended \
  texlive-latex-extra \
  texlive-fonts-recommended \
  texlive-luatex \
  fonts-roboto \
  fonts-adobe-source-sans3 \
  fontconfig
fc-cache -fv
echo "LuaLaTeX: $(lualatex --version | head -1)"
echo "Fonts: $(fc-list | grep -iE 'source sans|roboto' | head -3)"
