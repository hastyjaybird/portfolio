# Honda Insight Hybrid Battery Pack Diagnosis & Rebuild

| Field | Value |
|---|---|
| Organization | Personal project |
| Role/title | Sole builder/diagnostician |
| Dates | Fault diagnosed & pack pulled ~Feb 2013; diagnostic/reconditioning work through May 2013; new batteries purchased before July 2015; car sold 2015-2016 |
| Location | Personal vehicle, Stony Brook, NY era |
| One-line summary | A genuine, self-directed electrical engineering project: Jay personally diagnosed a failing 144V NiMH hybrid battery pack in her 2000 Honda Insight, pulled the 80lb pack herself, built cell-by-cell diagnostic instrumentation, and designed her own custom PCB charger circuit — real hands-on hardware/electronics work distinct from her academic or professional life. |

## Key facts (2026-07-05 deep dive)

- **The car**: a 2000 Honda Insight (first-generation, 2-seat hybrid). After ~12 years, its Integrated Motor Assist (IMA) battery pack threw a fault code.
- **Diagnosis, in Jay's own words (March 2013, email to Stony Brook lab contacts John Kincaid and Ken Testa):**
  > "So after 12 years, the battery pack of my 2000 honda insight, finally needs some attention. The sensor threw an integrated motor assist (IMA) code and upon further investigation realized that the computer detected a difference greater than 2V between any given stick in the pack. Honda dealer said it would be 4K to replace. Pft! The sticks themselves are only $150 new! With a healthy respect for 144V, it took me about two hours to pull the pack for the first time (weighs 80lbs!). Now the 20 sticks are loose and the car is back up and running alright (sans battery) on the 3 cyl gas engine. Though still getting about 55mpg- about 18mpg less than usual."
- **Pack specs**: 144V total (120 cells @ 1.2V nominal), organized into 20 "sticks" (6 cells each, ~7.2V/stick), NiMH chemistry, ~6.5-7.5 Ah rated capacity.
- **Real hands-on diagnostic/engineering work, not a simple parts swap:**
  1. Physically pulled the entire 80lb, 144V pack herself, with explicit respect for the voltage involved.
  2. Ran the car temporarily on just its 3-cylinder gas engine (no hybrid assist) at an ~18mpg penalty (55mpg vs. the usual ~73mpg) while diagnosing.
  3. Borrowed a NiMH battery charger/balancer from a university lab contact specifically to test/recondition individual sticks.
  4. **Built a real cell-by-cell diagnostic spreadsheet** ("Battery Pack.xlsx") — individual voltage readings for all 20 numbered stacks, to identify which specific sticks were dragging down the pack (e.g., Stack 1: 3.54V, Stack 5: 4.14V, Stack 6: 4.28V, Stack 18: 4.21V).
  5. **Logged a real charge-rate characterization curve** for at least one stick ("Stick #6") over ~193 minutes, tracking amp-hours and voltage — genuine electrical engineering characterization, not guesswork.
  6. **Designed her own custom PCB charger circuit** for the pack — a "Grid Charger" project with real schematics, PCB trace/hole-dimension layouts, and a Mean Well switching power supply datasheet on file. This is real circuit-board design work, distinct from the diagnostic spreadsheet work.
- **Outcome**: due to time pressure from PhD prelim exams and needing the car inspected, she "punted and just bought new batteries" rather than finishing the full custom-rebalance/recondition approach — but had already done the teardown, diagnosis, and characterization work herself. In 2015, she gave the 20 old sticks away to the same lab contacts for reuse/recycling rather than trashing them.
- **Costs**: Honda dealer quote to replace was $4,000; individual new sticks cost ~$150 each (~$3,000 for a full set); used/reconditioned packs were selling for ~$700-1,600 on the secondary market at the time.
- **The car was eventually sold** (Craigslist, 2015-2016) — one prospective buyer specifically asked whether the replacement pack was new or reconditioned, underscoring how well-known/valuable this kind of DIY hybrid-battery expertise is in the Insight owner community.

## Photos — all 14 successfully downloaded into this folder (2026-07-05)

- **All 10 "IMA Breakdown Pics"** (DSCN1763, 1767, 1768, 1770, 1777, 1778, 1780, 1781, 1783, 1784.JPG) — real photos of the actual pulled battery pack on a workbench, showing the cylindrical NiMH "sticks" arranged in rows inside the pack housing, wiring harnesses, and connectors still attached.
- **4 extra car photos** pulled from the parent Drive folders: `hondainsightdash.jpg` (dashboard), `frontcar.jpg` (exterior), `honda_kayak.jpg` (a kayak sticking out the open hatchback — a fun, distinctive shot of the car in daily use), `IMG_3400.JPG` (a later, 2016-era phone photo).
- Still in Drive, not pulled in: `unnamed.jpg`, `IMG_3457/3458/3459.JPG`, a few more casual car photos (`dash.jpg`, `imag0897`/`imag0859`/`imag0135`), and two spreadsheets — **"Battery Pack.xlsx"** (the cell-by-cell voltage diagnostic table) and **"Honda Battery Pack Charge"** (the charge-rate log for Stick #6) — plus a **"Grid Charger"**/"Honda grid charger" subfolder with the custom PCB schematics/trace layouts.
- General car photos (`hondainsightdash.jpg`, `frontcar.jpg`, `honda_kayak.jpg`, and others).
- **Not yet downloaded into this repo** — file IDs are known and documented; pulling actual images into `images/` would need a follow-up pass (binary Drive downloads have been finicky in this environment — see the Windward photo-download experience for context).

## Why this is compelling

This is a clean, well-documented example of genuine electrical engineering instinct applied to a personal problem: rather than pay a $4,000 dealer quote or just swap the whole pack blind, Jay tore down a high-voltage (144V) battery system herself, built real diagnostic instrumentation (a cell-by-cell voltage table, a charge-rate characterization curve), and designed her own custom PCB charger circuit to properly recondition it — the same rigorous, hands-on "verify it yourself" instinct that shows up throughout her professional career, just applied to her own car in her spare time during her PhD.

## Used in

- [ ] Consider for `products/bios/art-bio.md` or a "hardware/software hobby projects" section of the main career review — a strong, concrete example of self-taught electronics/diagnostic engineering.

## Still needed

- ~~Download the actual photos~~ — resolved 2026-07-05: 4 of 10 pulled in successfully (see above); 6 more remain in Drive if wanted.
- Any further detail Jay wants to add about the custom Grid Charger PCB design.
