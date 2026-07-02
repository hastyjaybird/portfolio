# Discovery Search Queries

Run these in Gmail and Google Drive once MCP is connected. Save notable results to `content/exports/`.

## Gmail queries

### Grants and awards

```
from:(nsf.gov OR usaid.gov OR energy.gov) OR subject:(grant OR "award letter" OR SBIR OR STTR)
```

```
subject:(NSF OR USAID OR "National Science Foundation") (gasifier OR gasification OR microgrid OR water)
```

### XPrize and SkySource

```
subject:(XPrize OR XPRIZE OR "Water Abundance" OR SkySource)
```

### Key employers and clients

```
(MaxETA OR "Puerto Rico Energy Bureau" OR SolSolutions OR "Land Art Generator" OR LAGI OR "Fly Ranch" OR "New Power Industries" OR 10Power OR Corvidae)
```

```
(ALL Power Labs OR "All Power Labs" OR Box Power OR NanoSulf OR CPWater)
```

### Alaska / tribal energy (10Power)

```
(Eklutna OR "Alaska Native" OR "energy plan" OR tribal) (10Power OR "10 Power")
```

### Puerto Rico microgrid work

```
(Puerto Rico OR ACEPR OR IOGS OR hurricane Maria OR microgrid) (Corvidae OR "Resilient Markets")
```

### Patents and publications

```
subject:(patent OR US8829695 OR US9476352 OR publication OR journal)
```

### Invoices and deliverables (scope / impact proof)

```
subject:(invoice OR SOW OR "statement of work" OR deliverable OR contract) (microgrid OR energy OR water OR biomass)
```

### Recent work (last 3 years)

```
after:2023/01/01 (energy OR microgrid OR biomass OR water OR policy OR grant)
```

## Google Drive queries

Search Drive for filenames and full text:

| Query | Purpose |
|-------|---------|
| `Eklutna energy plan` | 10Power deliverable |
| `Puerto Rico Energy Bureau` | MaxETA policy work |
| `microgrid proposal` | Client proposals with scope |
| `grant application NSF` | Grant narratives with impact metrics |
| `XPrize SkySource` | Competition documentation |
| `gasifier biochar` | ALL Power Labs technical docs |
| `resume OR CV` | Older resume versions |
| `Corvidae invoice` | Client list and project dates |

## Output checklist

For each hit worth keeping:

- [ ] Save PDF/export to `content/exports/`
- [ ] Note date, role, client, and 1-line impact in `content/interviews/session-02-impact.md`
- [ ] Flag metrics (dollars, kW, homes, team size) for master profile
