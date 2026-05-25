# Strategy Cadet — Exemplar Slide Set

**Built:** 2026-05-25 evening
**Purpose:** Cloneable HTML templates that ARE the visual spec for Strategy Cadet decks (Kantar BrandZ register). The rebuild agent reads `REFERENCE-kantar-register-guide_2026-05-25.md` AND these exemplars; it clones HTML from the matching exemplar and populates with the target brand's data.

Brand throughout: Lululemon Athletica (as a realistic example). Replace with target-brand data when cloning.

---

## The 10 exemplars

| # | File | Pattern(s) demonstrated | When to clone for |
|---|---|---|---|
| 1 | `01-exemplar-quick-facts-gradient.html` | K.1 big-number / K.2 multi-color tiles / K.4 bolder fills / K.7 gradient-slide / Section 3 4-col | Quick Facts (slide ~04) |
| 2 | `02-exemplar-aaker-radar.html` | K.4 bolder fills (40% alpha overlap radar) / K.6 light-blue cards / K.9 finding headline / K.11 chip palette | Brand Personality radar (~15) |
| 3 | `03-exemplar-esov-binet-field-scatter.html` | K.4 solid dots + halo + fair-share diagonal + quadrant labels — THE classic strategy chart | ESOV Positioning (~36) |
| 4 | `04-exemplar-kpi-tree.html` | K.4 gradient root + solid branches + curved connectors | Strategic Goal + KPI Tree (~40) |
| 5 | `05-exemplar-initiatives-quadrant.html` | K.4 solid tier-coloured dots / STRATEGIC BETS highlight / DO FIRST dashed | Initiatives 2x2 (~41) |
| 6 | `06-exemplar-roadmap-gantt.html` | K.4 solid tier bars / D60 gate marker / D90 stage-gate / day axis | Roadmap (~42) |
| 7 | `07-exemplar-audience-persona.html` | K.5 distinct abstract silhouette / K.6 light-blue cards / hero band / purchase-driver bars | Audience profiles (~18, 19, 20) |
| 8 | `08-exemplar-confidence-donut.html` | K.4 SOLID donut segments (no transparency) / K.11 new chip palette in legend | Confidence Donut (~63) |
| 9 | `09-exemplar-kantar-4col-category-focus.html` | Section 3 full 4-col / K.7 gradient-slide / K.8 hairline cols — MOST IMPORTANT EXEMPLAR | ~25-30 slides per Stuart lock #4 |
| 10 | `10-exemplar-personalised-divider.html` | K.12 Mode B "Prepared for [Name]" | All dividers when deck is personalised |

---

## Cloning checklist

When the rebuild agent (or a human) clones an exemplar:

1. **Replace brand placeholders** — Lululemon → target brand (name, revenue, founded year, store count, etc.)
2. **Update CSS class scope** if needed — exemplar uses `.qf-grad`, `.bp`, `.esov` etc. as slide-specific class scopes; rename per slide
3. **Update `data-screen-label`** to match the deck's actual slide number + section name
4. **Update `<title>` tag** to match brand
5. **Update `data-page` + `data-of`** in the `_chrome.js` script tag
6. **Update citations** — replace `[2][3][4]` etc. with the deck's actual citation numbers
7. **Update source line** — `p. NN · Part XX · Source: ...` per the deck's structure
8. **Update narrative text** to be brand-specific (the strategic finding, not the example's Lululemon finding)
9. **Keep the chart structure intact** — DO NOT lift the chart fill philosophy (solid vs 40% radar) — Kantar register depends on it
10. **Run `bash ../slides/_verify-deck.sh`** on the destination deck after all slides cloned

---

## Pattern reference (cross-link to Kantar Register Guide)

| Pattern | Where to read | Demonstrated in exemplar(s) |
|---|---|---|
| K.1 Big-number hero | Kantar guide §2 K.1 | 01 |
| K.2 Multi-color KPI tiles | Kantar guide §2 K.2 | 01 |
| K.3 Section-label small caps | Kantar guide §2 K.3 | All 10 |
| K.4 Bolder Kantar fills (REVISED) | Kantar guide §2 K.4 | 02, 03, 04, 05, 06, 08, 09 |
| K.5 Distinct abstract silhouettes | Kantar guide §2 K.5 | 07 |
| K.6 Light-blue card + left rule | Kantar guide §2 K.6 | 02, 05, 07, 09 |
| K.7 Gradient-slide approach (REVISED) | Kantar guide §2 K.7 | 01, 09, 10 |
| K.8 Hairline rules between columns | Kantar guide §2 K.8 | 01, 07, 09 |
| K.9 Editorial finding headline | Kantar guide §2 K.9 | 01, 02, 03, 04, 05, 06, 07, 08 |
| K.10 Source line discipline | Kantar guide §2 K.10 | All 9 content slides (10 is a divider) |
| K.11 New chip palette (teal + purple) | Kantar guide §2 K.11 | 02, 07, 08 |
| K.12 Personalisation Mode B | Kantar guide §2 K.12 | 10 |
| Section 3 4-col Category-Focus | Kantar guide §3 | 09 (canonical), 01 (gradient variant) |

---

## Anti-patterns the exemplars demonstrate AVOIDING

- Wireframe `fill="none"` on chart polygons (exemplar 02 uses 40% alpha, exemplar 03 uses solid dots — NOT wireframe)
- Generic stick-figure silhouettes (exemplar 07 has distinct A1 shape; comment block documents A2 + A3 variations)
- All-blue KPI tile rows (exemplar 01 uses 4 different border accent colours)
- Inline `style="font-size:Npx"` overrides on body elements (all exemplars use design tokens via classes)
- Em-dashes (zero across all 10 exemplars after sed pass)
- Internal pipeline tags (no Agent A-F, Apify, pytrends, etc.)
- Old chip colours (amber + orange retired; teal + purple used in K.11 demos)
- Agency logo embed on personalised decks (exemplar 10 demonstrates Mode B text-only)

---

*Built as part of Kantar codification 2026-05-25 evening (Stuart out, autonomous build window). The exemplar set unblocks the Fleetwood Build 02 dispatch tomorrow.*
