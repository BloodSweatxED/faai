# FAAI — Working Notes for Claude

First Aid for AI: a clinician's field manual, shipped as a single self-contained
`index.html` (the living HTML). `content/` holds the canonical markdown drafts;
`DESIGN.md` holds the visual schema. The Quartz tree is legacy scaffolding — the
deployed site is `index.html` only.

## Output language standard

All reader-facing copy follows this standard. It was established in the PR #3
rebuild; when in doubt, match the existing spreads in `index.html`.

- **US English. Plain, direct, second person.** Declarative sentences. No hype,
  no marketing voice, no "delve".
- **Jargon is defined in the same sentence it first appears.** ("MCP, the Model
  Context Protocol, is…")
- **No code prefixes in titles, navigation, or headings.** F2/D10/B1 codes stay
  in the markdown drafts and may appear as inline parenthetical cross-refs in
  body prose ("(D4)"), matching existing spreads. See Also chips use plain
  titles, never codes.
- **Yield codes translate to plain badges:** HY-3 → "This Week" (`badge b3`,
  solid red), HY-2 → "This Quarter" (`badge b2`, solid navy), HY-1 →
  "Background" (`badge b1`, outlined).
- **Mono labels are terse, telegraphic, uppercase** ("READ-THIS-WEEK",
  "NO WRONG DOOR"). Display headlines are declarative sentences with a period.
- **Every spread keeps the same anatomy, no exceptions:** Bottom Line (one
  sentence) → The Concept → Clinical Anchor (concrete scenario, `div.anch`) →
  What To Do (numbered protocol) → How It Fails (ends with the cost) → See Also.

## HTML conventions (index.html)

- Articles are `<article id="SLUG" class="page" data-title="TITLE">` using the
  markup skeleton of any existing spread. Hash routing + search are driven by
  the `SLUGS` array in the bottom script — every new article must be appended
  there.
- Prev/next chain (`nav.an`) is manual: stitch the previous last article to the
  new one; the final article's Next points to `#/` (Home).
- Counts are manual: the stat bar and the depth-chooser card state the total
  spread count; the library group states its own spread count.
- Visual rules live in `DESIGN.md`: cream + navy + red only, red is scarce,
  hard edges, no soft shadows.
