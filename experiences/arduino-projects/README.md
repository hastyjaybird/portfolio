# Hardware/Software Hobby Projects (Arduino and beyond)

| Field | Value |
|---|---|
| Organization | Personal — with father John Hasty (QstView, see `../qstview/README.md`) and, for one project, Sudo Room hackerspace |
| Role/title | Requirements/design input, hardware debugging, testing, architecture decisions — see honesty note below |
| Dates | 2007/2008 (Windward origin) – ongoing (Ambo project active through July 2025) |
| Location | Remote collaboration (family) / Sudo Room, Oakland |
| One-line summary | A genuine, multi-year hardware/software hobby practice — real electronics debugging, architecture decisions, and cloud-integration learning — tracing back to pre-Arduino microcontroller work at Windward and carrying through professional gasifier-control work at APL. |

## Honesty note on role (2026-07-04)

**Across this entire corpus, your father John consistently writes and attaches the actual `.ino`/code — you are not the primary code author on the family projects.** Your real, well-documented contribution is requirements-definition, hands-on hardware debugging, testing, and genuine architecture decisions (e.g., vetoing a Raspberry Pi migration, specifying exact wiring dimensions). This is a real and legitimate technical contribution, but it should be framed honestly — as hardware/systems debugging and design judgment, not as "I wrote this code," except where noted otherwise below (Distributed Wireless Power Monitor and the Windward/APL work were yours directly).

## Kept: projects with real, substantive involvement (2026-07-05 deep dive)

1. **"Ambo" Collision Prevention / Current Measuring Project (Nov 2023–ongoing through at least July 2025)** — the biggest, most active project: an Arduino Mega-based system for a vehicle, with:
   - Ultrasonic collision-avoidance sensors + LCD/TFT display — **you personally gave exact dimensional specs** for the display/wiring layout ("distance from lcd to microcontroller 40" minimum... distance from microcontroller 65" minimum").
   - Current/voltage sensors for LiFePO4 battery monitoring, graphing voltage curves, SD card + RTC data logging.
   - **You personally diagnosed a hardware bug yourself**: "ah! i got the screen to work. im pretty sure it was from the voltage drop from those long cables you sent. plugged in a really short one and it worked immediately" — independent hardware troubleshooting, not passive observation.
   - **A real architecture decision**: your father attempted to port the current-monitoring code to a Raspberry Pi for better graphing (Dec 2024); **you rejected it** — "Yeah that all sounds too complicated! Nah let's ditch it!" — keeping the system on Arduino.
   - GPIO/pin-conflict troubleshooting (TFT LCD vs. SD card module conflicts), custom PCBs, potentiometers, laser/ultrasonic sensors.
2. **ESP8266/WiFi + Arduino NTP time-sync experiments (March 2020)** — real hands-on debugging ("Ok Im screwing around with it.. let me see if I can get all my parts together and fired up"), schematics on file (`ESP8266_mega.jpg`, `MegaWithGenericESP8266.jpg`).
3. **Distributed Wireless Power Monitor** (Aug 2016, Sudo Room hackerspace, Oakland) — **your own standalone project**, independent of family collaboration: a Flask/Python + ESP8266 proof-of-concept for managing distributed AC power monitors.
4. **Arduino Yun / Temboo cloud-integration learning (2014)** — a real, hands-on exercise wiring an Arduino Yun (WiFi + embedded Linux board) to Google Sheets via the Temboo cloud API. You set up your own dedicated test account (`jaysarduinoyun@gmail.com`) for this — a genuine, self-directed cloud/API integration exercise, even though the sensor value itself was a placeholder (`analogRead(A0)`) rather than a finished real-world sensor.
5. **Flask/Python introduced into the Ambo project** — your father's own words: "finally getting to understand a little better the nuance of the Arduino and Flask code you downloaded for me" — you sourced/introduced Python/Flask into a project he was otherwise running in Arduino C/C++.
6. **Origin — Windward, 2007–2008** (see `../windward/README.md`): the **AVR Butterfly** (a pre-Arduino Atmel microcontroller board) — monitoring/controlling an off-grid solar/wind hybrid power system, including your own compiled firmware file literally named `JayPump.hex`. Windward's own director, Walt Patrick, later independently learned Arduino himself (Oct 2009), meaning this work sat right at the AVR-to-Arduino hobbyist transition.
7. **ALL Power Labs carryover** — a "nifty NEMA box" you built for the gasifier control unit (referenced in a Jan 2010 APL email) — the same electronics skill set applied professionally.

## Excluded per Jay's explicit request (2026-07-05): not much of a role

- Well pump current/pressure monitor (Jan 2021) — John's project.
- Attic Fan WiFi control (Dec 2021) — John's project.
- Ceiling Fan Project (Jan 2023) — John's project.
- Freezer/refrigerator temperature monitor (July 2023) — John's project.
- Ryan's independent Arduino learning (Dec 2024) — Ryan's own practice projects.
- **Garage ultrasonic parking-sensor project** (April 2020) — confirmed via deep dive to be John's own project; you explicitly deprioritized helping ("Ill take a look at it dad!... Im super busy with this NSF grant right now").
- **"PurseLight_1"** — an empty, abandoned folder/stub (a wearable light-up-purse idea from 2015) — never actually built, no files ever saved into it.

## Also found, not a hobby project: a separate academic/research cluster

A 2026-07-05 deep dive also surfaced a distinct Drive folder cluster (IDEATE, bugpower/BSFL, Biogas, ammonia, artificial leaf, Batteries, a "Devinder and Jay Shared Folder") tied to Stony Brook-era sustainability engineering and Prof. Devinder Mahajan — this is **grant/research/professional work, not hobby electronics**, and is being investigated separately (see IDEATE section being added to `content/experience-database.md` and/or its own folder). Do not conflate this cluster with the personal Arduino hobby projects above.

## Why this is compelling

A genuine, honestly-framed multi-generational thread: microcontroller/electronics exposure that started at Windward in 2007-2008 (AVR Butterfly, your own named firmware), carried through professional gasifier-control work at APL, and continues today as an active hobby where you contribute real hardware debugging and architecture judgment (rejecting an over-complicated Raspberry Pi migration, specifying exact wiring layouts) rather than writing every line of code yourself. Pairs well with the QstView/Cursor-Claude-Code story as a second example of technical exchange within the family, in the opposite direction — your father taught you electronics fundamentals decades ago; you're teaching him modern AI-assisted coding now.

## Open questions for Jay

1. Any photos of the physical Ambo hardware or the Arduino Yun/Temboo test setup?
2. Is "Ambo" the same 2005 Ford E350 ambulance-conversion vehicle referenced in the QstView folder's mechanic thread, or a different vehicle?

## Used in

- [ ] Consider for the professional resume/portfolio given the honest hardware/systems-debugging framing and the direct electronics-engineering throughline to APL — likely best as a supporting "hands-on technical hobbyist" detail, not a headline item.

## Still needed

- Photos of the physical Ambo hardware, or the Arduino Yun/Temboo test setup.
- Confirmation on the "Ambo" vehicle identity.
