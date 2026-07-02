# Awesome CV (posquit0/Awesome-CV) — sans-serif, Source Sans 3 + Roboto
# https://github.com/posquit0/Awesome-CV

MAIN = resume
SUPPLEMENT = publications-supplement
PDFDIR = pdf
LUALATEX = lualatex
PDFLATEX = pdflatex
LATEX_FLAGS = -interaction=nonstopmode -output-directory=$(PDFDIR)

.PHONY: all rebuild view supplement clean docker

all: $(PDFDIR)/$(MAIN).pdf

rebuild: clean all supplement

$(PDFDIR)/$(MAIN).pdf: $(MAIN).tex awesome-cv.cls sections/*.tex
	@mkdir -p $(PDFDIR)
	-$(LUALATEX) $(LATEX_FLAGS) $(MAIN).tex
	-$(LUALATEX) $(LATEX_FLAGS) $(MAIN).tex
	@test -f $(PDFDIR)/$(MAIN).pdf

supplement: $(PDFDIR)/$(SUPPLEMENT).pdf

$(PDFDIR)/$(SUPPLEMENT).pdf: $(SUPPLEMENT).tex
	@mkdir -p $(PDFDIR)
	-$(PDFLATEX) $(LATEX_FLAGS) $(SUPPLEMENT).tex
	-$(PDFLATEX) $(LATEX_FLAGS) $(SUPPLEMENT).tex
	@test -f $(PDFDIR)/$(SUPPLEMENT).pdf

docker:
	@mkdir -p $(PDFDIR)
	./compile-docker.sh $(MAIN).tex lualatex $(PDFDIR)

view:
	xdg-open $(PDFDIR)/$(MAIN).pdf 2>/dev/null || true

clean:
	rm -rf $(PDFDIR)/*.pdf $(PDFDIR)/*.aux $(PDFDIR)/*.log $(PDFDIR)/*.out
	rm -f *.aux *.log *.out *.synctex.gz
