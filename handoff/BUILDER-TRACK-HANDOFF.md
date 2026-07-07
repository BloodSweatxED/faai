# Handoff: Integrate the Builder Track + FERPA into index.html

**For:** the integration session (Sonnet 5)
**Scope:** splice pre-written content into `index.html`. No writing, no redesign.
**Sources of truth:** `handoff/builder-track-spreads.html` (all content, final),
`DESIGN.md` (visual schema), `CLAUDE.md` (language standard),
`content/06-builder-track/` and `content/02-legal-compliance/FERPA.md`
(canonical markdown drafts — reference only, do not re-adapt).

## What this adds

Six new spreads, total 29 → 35.

**1. The Builder Track** — a sixth section, after Clinical Applications: five
spreads for the clinician who has outgrown configuring.

**2. FERPA** — a fifth spread in the existing Legal & Compliance section:
`ferpa-and-medicine`, "FERPA: The Other Privacy Law", This Quarter (`b2`),
3 min, seated between Consent & Disclosure and Ambient Scribes.

Builder Track order and metadata:

| # | Slug | Title | Badge | Read time |
|---|------|-------|-------|-----------|
| 01 | `should-you-build` | Should You Build? | This Quarter (`b2`) | 3 min |
| 02 | `memory-engineering` | Memory Engineering | This Quarter (`b2`) | 3 min |
| 03 | `skill-engineering` | Skill Engineering | Background (`b1`) | 3 min |
| 04 | `tool-engineering` | Tool Engineering | Background (`b1`) | 3 min |
| 05 | `evals-testing-what-you-built` | Evals: Testing What You Built | This Quarter (`b2`) | 3 min |

Badges map from the source drafts' yield codes: HY-2 → This Quarter, HY-1 → Background.
`Background` is the outlined `b1` badge — the CSS class already exists; no style
changes are needed anywhere in this task.

Note: the source series is B0–B5 with **no B4** (not yet written). The section
ships as five spreads numbered 01–05. If a B4 arrives later it slots in before
Evals and the counts below get redone.

## Integration steps

All blocks referenced below live in `handoff/builder-track-spreads.html`.
Copy them verbatim — the copy is final and already in house voice.

1. **Articles (Block B).** Insert the five `<article>` blocks after the closing
   `</article>` of `#ai-inbox-drafting`, before `</main>`.
2. **Library group (Block A).** Insert the `<details class="lg">` block after the
   closing `</details>` of the Clinical Applications group inside `section#library`.
3. **Stitch the prev/next chain (C1).** In `#ai-inbox-drafting`'s bottom nav, change
   Next from `#/` (Home) to `#should-you-build`. The new spreads carry their own
   chain and Evals ends with Next → Home.
4. **Routing/search (C2).** Append the five slugs to the `SLUGS` array in the
   bottom script. This is the only JS change; search indexes from SLUGS automatically.
5. **Counts (C3, C4).** Stat bar 29 → 35. Depth-chooser card "29 Spreads" → "35
   Spreads", description per C4 (≈110 minutes). The one-hour path is untouched —
   none of the new spreads is "This Week".
6. **Library legend (C5).** Extend the badge legend with Background.
7. **The map (C6).** In the "How to Use This Book" article: "Five sections" →
   "Six sections", and add the Builder Track paragraph after Clinical Applications.
8. **FERPA article (Block D).** Insert the `#ferpa-and-medicine` article between
   the `#consent-and-disclosure` and `#ambient-scribes` articles.
9. **FERPA library row (D1).** Add row 05 to the Legal & Compliance group;
   update that group's count to "5 spreads" and its description to include FERPA.
10. **FERPA chain stitch (D2).** Consent & Disclosure's Next → FERPA;
    Ambient Scribes' Previous → FERPA.
11. **FERPA slug (D3).** Insert `"ferpa-and-medicine"` into SLUGS between
    `"consent-and-disclosure"` and `"ambient-scribes"`.
12. **FERPA in the map (D4).** Add FERPA to the Legal paragraph of
    "How to Use This Book".

## Acceptance checklist

Verify in a browser (Chromium is preinstalled; open `index.html` directly):

- [ ] `#should-you-build` … `#evals-testing-what-you-built` and
      `#ferpa-and-medicine` each deep-link cold (paste URL with hash, article
      renders, document title updates).
- [ ] Prev/next walks: AI Inbox Drafting → Should You Build? → … → Evals → Home.
- [ ] Prev/next walks: Liability → Consent & Disclosure → FERPA → Ambient Scribes.
- [ ] Library shows "The Builder Track · 5 spreads" and
      "Legal & Compliance · 5 spreads"; all new rows navigate.
- [ ] Search for "evals", "least privilege", and "FERPA" returns the new spreads.
- [ ] Stat bar reads 35; depth card reads 35 Spreads.
- [ ] One-hour path still lists exactly 12 spreads.
- [ ] No console errors; back button still works.

## Boundaries

- Do not edit the CSS, the design tokens, or any existing article prose beyond
  the exact old → new strings listed in blocks C and D.
- Do not rewrite, trim, or "improve" the pre-written copy.
- Do not add the new spreads to the one-hour path or the situational cards.
- Commit to the designated branch and push; do not open a PR unless asked.
