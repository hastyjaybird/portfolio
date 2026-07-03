# ClimateDash

| Field | Value |
|---|---|
| Organization | Personal/independent project (not affiliated with any employer or client) |
| Role/title | Builder / independent developer |
| Dates | Dec 2025–present |
| Location | Remote |
| One-line summary | Personal multi-agent AI prototype for climate-tech research and deal-flow discovery, built as an independent demonstration project. |

## Key facts (verified)

- 9+ specialized agents orchestrated via n8n.
- Claude (Haiku/Sonnet) used for quality gating and analysis.
- Ingests patents, SEC filings, news, RSS, and social media into a knowledge graph with entity extraction.
- Human-in-the-loop approval workflows via Telegram.
- Full-stack deployment: Hetzner VPS, Docker, Caddy, Supabase.
- Python: intermediate — AI-assisted production development (Cursor + Claude) building the FastAPI/Supabase backend.
- Status: MVP deployed, actively iterating.

## Origin story (2026-07-03, per Jay)

ClimateDash is Jay's own independent personal/technical project — **not** work done for or on behalf of any VC firm, and not a paid engagement of any kind. The idea came from proximity, not a client relationship: Jay's partner works in venture capital, and she'd observed (informally, as someone he lives with, not as anyone with a role at his firm) how much manual effort goes into VC research and deal-flow organization — technology taxonomies built and maintained by hand in tools like Coda, long operational back-and-forth between GPs/LPs and diligence teams that looked ripe for AI augmentation. That observation is what prompted her to build something and see for herself.

She built ClimateDash as a prototype to demonstrate what a Cursor/Claude-based alternative to a Coda-style research system could look like — specifically: a RAG system replacing manually-managed technology taxonomies, and a bounded "deep research" pattern (a "rabbit hole" search that runs until it hits a saturation point, with monitoring, rather than running indefinitely). The multi-agent n8n pipeline, knowledge-graph entity extraction, and Telegram human-in-the-loop approval flow (see "Key facts" above) all grew out of that demonstration.

**Important boundaries, stated explicitly by Jay and preserved in all materials:**
- Jay does not work for, consult for, or hold any role at her partner's firm — the personal relationship there makes that a clear conflict of interest, and she has never been paid by or contracted to the firm for this or anything else.
- ClimateDash itself was never adopted or deployed inside that firm — it stayed a personal prototype, not a vendored tool, consistent with the firm's own strict internal tooling practices.
- The firm's team has since begun building some of their own tooling independently, informed by a handful of ideas Jay had explored — but she is not involved in that effort in any capacity. This should always be described as "ideas later adopted independently by his team," never as an ongoing collaboration or engagement.

## Values/character — the deeper "why" (2026-07-03, per Jay)

Jay connects this directly to her broader thinking on AI and empowerment (`content/ai-reflections.md`): VCs are the mechanism that makes money flow toward climate solutions, and climate needs funding to move fast — but she's long felt an "uncomfortable... impedance mismatch" between founders and VCs during due diligence. Founders can get strung along by timing mismatches and a process that isn't built for how they actually communicate, and there's real gatekeeping in venture — a small number of people "dangling money with inflated egos" acting as a bottleneck. Her read is that a well-built AI third party sitting in that gap — helping surface and structure the right information faster, on both sides — could genuinely speed up the clean-tech movement and save founders who fail not because their technology doesn't work, but because they couldn't get through to the right VC in the right way, or fast enough. She frames it as wanting to help "break that dam" so money moves faster and with fewer human bottlenecks at the top.

## Summary — why this is compelling

ClimateDash shows Jay doing to her own adjacent-to-VC observations exactly what she's done throughout her career with hands-on technical problems: notice a real inefficiency, then go build a working prototype to prove out a better way, on her own initiative and her own time. It's also a clean, current demonstration of applied AI judgment — she didn't reach for an off-the-shelf wrapper; she built a bounded "research until saturation" pattern and a RAG-based alternative to manual taxonomy work, the same kind of "know when to stop trusting the automation" instinct that shows up in her `content/ai-reflections.md` thinking about AI as an amplifier of judgment rather than a replacement for it. The fact that this stayed a personal, unpaid project — with real, deliberate boundaries around conflict of interest and confidentiality — is itself part of the story: she built it to prove a point, not to extract value from a relationship.

And it isn't just a technical exercise for her — it's a direct expression of her belief that AI should reduce human gatekeeping, not entrench it. She sees VC due diligence as a place where a real "impedance mismatch" between founders and funders can quietly kill good climate technology — not because it doesn't work, but because a founder couldn't navigate the process fast enough or in the right way. ClimateDash is her own small-scale bet that a well-built AI intermediary could narrow that gap and let climate funding move faster, with fewer bottlenecked human gatekeepers standing between good technology and the money it needs.

## Evaluation (2026-07-03)

- **Resume/portfolio strength:** solid as a technical-initiative story (multi-agent orchestration, RAG, bounded autonomous research) — this should be framed purely on the technical build and the "noticed an inefficiency, built a prototype" instinct, never on the VC-firm connection itself.
- **Anthropic alignment angle:** directly usable as a "why AI + domain judgment matters" beat (already in the cover letter) — the saturation-point/monitoring design is a concrete, small-scale example of building in a stopping condition rather than letting an agent run unchecked.
- **Handle with care:** any write-up must avoid naming the firm or Jay's partner, avoid implying employment or a contracted relationship, and avoid any suggestion that confidential deal information was used as raw material for the build. Frame the origin as general proximity/observation, not access to specifics.

## Used in

- [x] `content/master-profile.md`
- [x] `content/experience-database.md`
- [x] `products/resume/sections/experience.tex`
- [x] `products/linkedin/profile-draft.md`
- [x] `products/applications/anthropic/cover-letter.md` (used as the "why AI + domain judgment matters" closing narrative beat)
