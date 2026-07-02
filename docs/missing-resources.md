# Missing Resources — Master Tracker

**Purpose:** A single running list of media/assets we know are missing, incomplete, or need Jay's direct input, gathered while sorting experience folders. **Surface this file when we start building the portfolio website** — every item here represents either a gap to fill before launch or a decision needed about what to do without it.

Last updated: 2026-07-01

---

## Unrecoverable (confirmed dead ends — no further automated searching will help)

- **German TV/Spiegel Online video of APL** (`all-power-labs`) — traced to a real 2009-era video by German journalist Joerg Pfeiffer for Spiegel Online.
  - Source article naming the video: https://www.allpowerlabs.com/v30/gek-is-the-new-altair-8800.html
  - Dead original video page: http://km42.spiegel.de/home/index.php?directid=4187 (domain no longer resolves)
  - Wayback Machine snapshot of that page (HTML only, not the video): https://web.archive.org/web/20190529150637/http://km42.spiegel.de:80/home/index.php?directid=4187
  - The actual video file referenced in that snapshot (never archived, confirmed via Wayback's availability API): `km42.spiegel.de/bilder/trackbilder/20090514/videos/MVI_R0017369.flv`
  - **Only path forward: ask Jay or APL alumni (e.g., Jim Mason) if anyone kept a personal copy.**
- **"Escape from Berkeley" Colbert Report clip** (`all-power-labs`) — confirmed via Reason.com that Colbert Report mocked the 2008 rally, but the actual clip isn't on YouTube or anywhere else searchable.
  - https://reason.com/2008/10/12/escape-from-berkeleyby-any-non/
  - https://reason.com/2008/10/24/racing-to-a-non-petroleum-futu/
  - Comedy Central's own paywalled archive (https://www.cc.com/) is the only likely remaining source, not worth further open-web searching.

## Needs a JS-capable browser or manual visit (not a dead end, just couldn't automate)

- **Full APL press/media list** (`all-power-labs`) — https://www.allpowerlabs.com/media advertises Time Magazine + NPR coverage, but the article list is JavaScript-rendered and didn't come through static fetches (tried both `curl` and the WebFetch tool). Worth a manual visit in an actual browser, or asking Jay for a personal press-clippings list from her APL years (2009–2017 specifically, since anything post-2017 postdates her tenure). One item confirmed from page metadata alone: Time Magazine's "Best Inventions of 2020" entry on "Water, Water Anywhere: Skysource WEDEW" (Nov 19, 2020) — exact Time Magazine URL not yet located, would need to search Time's own site directly.

## Ambiguous images from the Wix export — need Jay to identify (31 files)

Extracted from `Site Files.zip` (Jay's Wix image export) on 2026-07-01. 94 of 125 images were placed into experience folders with reasonable confidence (by filename + visual inspection). These 31 remain unplaced — mostly generic camera filenames (`IMAG*`, `download*`, `image*`) with no clear subject-matter signal, still sitting in the scratchpad extraction, not yet copied anywhere:

- `2011-08-27_RoadTrip 017_edited.jpg` — Jay next to a red Honda Insight by a desert lake (possibly Pyramid Lake, NV) — road trip, unclear which one
- `Cross Slope Measurement 2_edited.jpg` — stock-looking photo of a road/pavement cross-slope surveying rig — doesn't obviously match any known client (QSTView? a road-engineering client?)
- `hardware.jpg` / `hardware_edited.jpg` — homemade electronics assembly (resistors, capacitors, wired plug) — possibly a Category H side project (Distributed Wireless Power Monitor?)
- `shopjay.jpg` — Jay using a bandsaw/grinder in a workshop — generic, could be APL, Bay Area MakerFarm, or personal
- `IMG_20170926_161602854_2.jpg` — black-and-white personal portrait, no experience signal
- `22289759_10155636713087660_4363742421839660633_o.jpg`, `24c2a9c6-fe4d-41ea-b5fe-e6eb63cf1fba_edited.jpg`, `28716603831_501b61f038_h.jpg`, `41713013_340414710033965_122304450793570304_n.jpg` — social-media-style numeric filenames, not yet opened/identified
- `FullSizeRender.jpg`, `FullSizeR.jpg`, `image.png`, `image001_edited.png`, `image001_edited_edited.png` — generic export names, not yet opened/identified
- `download.png`, `download.jpeg`, `download (1).png`, `download_edited.png`, `download_edited_edited.jpg` — generic download-cache names, likely logos or reference images pulled from the web, not yet opened/identified
- `IMAG0106.jpg` / `IMAG0106_edited.jpg`, `IMAG0875_edited.jpg`, `IMAG0898_edited.jpg`, `IMAG0906.JPG`, `IMAG0916.jpg`, `IMAG1022.JPG`, `imag1324.jpg` — old Android-camera-style filenames (pre-2013 naming convention), likely APL-era or PhD-era, not yet opened/identified
- `signal-2017-08-09-160202.jpg` — Signal app screenshot, Aug 2017 — timing is close to the Aurora Network blockchain work, unconfirmed
- `padi_edited.png` — PADI diving certification logo — personal certification, not tied to any employer; may belong in a general skills/bio section rather than an experience folder
- `python-logo-master-v3-TM.png`, `2000px-Arduino_Logo.svg_edited.png` — generic skill-badge icons (Python, Arduino) — likely belong in a skills section, not an experience folder
- `secondary_usage.png` — not yet opened/identified

**Location:** these are still sitting in the scratchpad at `/tmp/claude-1000/-home-jaybird-jayprograms-portfolio/948f48be-41f5-48ec-ae92-ae8a11dc96b4/scratchpad/wix_extract/` — that path is session-specific and will be cleaned up eventually, so **don't rely on it surviving** — if these matter, they should be re-extracted from `/home/jaybird/Downloads/Site Files.zip` (the original zip, which does persist) before the scratchpad is gone.

## Per-experience action items FOR JAY — things no amount of searching can resolve (updated as each experience is reviewed)

This section is a standing human TODO list, separate from AI research gaps — only things where the next step genuinely requires Jay to go find/remember/ask something (a photo that may only exist on her phone, a conversation with a former colleague, a personal decision). Updated every time an experience goes through the review loop (per `docs/experience-review-plan.md` step 2c).

- **`red-cross-lab`** — no action needed; no personal photos are expected to exist (FDA lab, no photography allowed) and everything else is resolved.
- **`portland-biodiesel`** — no action needed; small 2008 operation likely never had a logo, nothing further to chase.
- **`all-power-labs`** — **[ACTION]** reconcile the 39-vs-~50 employee count (Wix says 39, Jay's memory says ~50) — check old payroll/records or just confirm from memory which is right. *(Deferred: this whole experience is intentionally saved for last per Jay's 2026-07-01 request.)*
- **`nanosulf`** — **[ACTION]** ask Devinder Mahajan directly for his own retrospective/lessons-learned on the venture, if that relationship is still warm enough to ask. **[ACTION]** think of a second failure-story example for the intellectual-honesty narrative (case study #6 currently only has NanoSulf).
- **`cpwater-tech`** — **[ACTION]** if a dedicated CPWaterTech logo ever existed (separate from Stony Brook/I-GIT branding), track it down. **[ACTION]** if Jay is still in touch with Mahajan or Stony Brook's Center for Clean Water Technology, worth asking directly whether the CPWaterTech patent application was ever granted and what number it has (searches so far have hit two false-positive unrelated patents with similar titles).
- **`corvidae`** — **[ACTION]** confirm whether Corvidae, LLC is actually wound down or still has residual activity (Venmo `@corvidae` and the GoDaddy domain showed signs of 2026 activity in an earlier session — only Jay can say what that actually is).
- **`neoh2o`** — **[ACTION]** find/create a logo or image for Neo-H2 itself; none found yet.
- **`scarab-tech`** — **[ACTION]** confirm whether Jay had any continued involvement when Scarab Tech raised its 2022 seed round, or if her advisory work had fully ended by then.
- **`charm-industrial`** — **[ACTION]** confirm the exact scope/deliverables of the 2018 engineering design consulting work, if Jay remembers specifics beyond "biomass-to-hydrogen."
- **`celeres`** — **[ACTION]** confirm whether the retainer covered any review targets beyond Blume Distillation (dates are now resolved: June 2019–March 2020; firm background/AUM/team also now researched). **[ACTION]** logo image still needed — website (celerescapital.com) and LinkedIn page are confirmed, just need to actually grab/save the logo asset.
- **`genmoji`** — logo found and saved; SP Medflix confirmed as a San Juan hospital microgrid project. **[ACTION]** still need an actual photo/image of the Airmoji product itself (only the logo is in hand). **[ACTION]** name of the boys-and-girls school for the second microgrid project. **[ACTION]** confirm whether Jay's 2021 PREB regulatory-docket presence was still Genmoji-related or had shifted to another PR role.
- **`c-change-labs`** — resolved: real scope was a gasifier/ammonia feasibility study, not carbon-accountability software; logo already in hand. **[ACTION]** confirm whether any further work happened with Phil Northcott after Feb 2018.
- **`max-energy-lab`** — **[ACTION]** Jay flagged (2026-07-01) that no contract or payment ever happened here — confirmed via Gmail/Drive search, no invoice/contract/PayPal record found anywhere (unlike every other Corvidae client). Recharacterized as informal/unpaid advisory, not a completed engagement. **[ACTION]** confirm whether the invited NSF SBIR Phase I proposal was ever actually submitted after the May 2020 invitation. **[ACTION]** identify "Robert," the Puerto Rico-based partner Max mentioned in Oct 2019.
- **`teamhouse`** — **[ACTION]** any personal photos of the physical TeamHouse/HackerHouse space or community events Jay attended — this seems like exactly the kind of thing that might only exist in her own phone/social media, not in Drive. **[ACTION]** confirm whether Jay was an equity co-founder of Team House LLC or a paid EIR/advisor. **[ACTION]** confirm whether the Adam Krim at symbionet.co is the same person as Celeres Capital's Adam Krim.
- **`cat5-solar-microgrids`** — **[ACTION]** confirm whether the UPR student-housing proposal or the Vieques project were ever actually built. **[ACTION]** confirm how the ~$15K unpaid balance (as of Sept 2019) was resolved and how the relationship ended. **[ACTION]** any documentation of the crowdsourced crypto raise mechanism itself.
- **`parallel-18`** — resolved: got its own folder; the P18-agreement question was accelerator business-plan research, not cohort exploration. **[ACTION]** any photos/documentation from in-person Parallel18 presence (a July 2019 email places David Geeter physically at P18's space). **[ACTION]** whether ACEPR's water-cooperative collaboration exploration with the PR Science Trust ever went anywhere concrete.
- **`skysource-xprize`** — **[ACTION]** confirm whether Jay personally attended the Visioneering 2018 announcement ceremony (Oct 22, LA) — if so, any personal photos/video from that event would likely only exist on her phone/social accounts, not in Drive.
- **`boxpower`** — **[ACTION]** any personal photos from the actual 10-day Humacao installation trip — likely only exist on Jay's phone/personal accounts, not in Drive or on YouTube.
- **`volunteer-work`** — **[ACTION]** personal trip photos for all 5 entries (La Finca de Hamberto, Sail Relief/Cape Town, Fenix/Uganda, Terraqua Barranca/Peru, Earthwatch Patagonia) — none found in Drive after a full date-range search; these almost certainly live in Google Photos or on Jay's phone (no Google Photos tool is available in this environment, so this needs to be pulled manually by Jay).
- **`iogs`**, **`eklutna-10power`**, **`side-projects`**, **`resilient-markets-maxeta`** — not yet reached in the review loop; check each README's own "Still needed" section once reviewed, and this file will get a proper entry for each at that point.

---

## For the portfolio website build specifically

When we get to building the actual site, come back to this file first — it's the fastest way to know:
1. What images/videos/articles are confirmed in-hand and ready to use (see each experience folder's `images/`, `videos/`, `articles/`, `pdfs/`)
2. What's confirmed missing/unrecoverable (don't waste time searching again)
3. What still needs Jay's input before a case-study page can be finalized
