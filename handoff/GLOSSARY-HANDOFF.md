# Handoff: FAAI Glossary Integration

**For:** the next session (starting fresh on Andre's Mac, where the source
file is actually reachable).
**Context:** this session (cloud/remote container) does not have filesystem
access to `/Users/andre/...`. The glossary source lives locally at:

    /Users/andre/Desktop/Vaults/Life/16-FAAI/07-back-matter/FAAI-Glossary.md

Read that file first. Everything below is scaffolding, not a substitute for it.

## What happened in this session

1. Found that a prior session's Builder Track + FERPA integration work had
   landed on branch `claude/handoff-section-plan-n7jt8q` instead of the
   designated branch — the designated branch was empty/stale. Rebuilt the
   designated branch from that commit.
2. Spliced the pre-written Builder Track (5 spreads) and FERPA (1 spread)
   content into `index.html`, following `handoff/BUILDER-TRACK-HANDOFF.md`
   step by step. Verified with a headless-Chromium script: all new slugs
   deep-link, both prev/next chains walk end-to-end, search finds the new
   spreads, counts reconcile, one-hour path still 12, no console errors.
3. Committed (`ecfa659`) and merged to `main` (fast-forward, no conflicts).
   GitHub Pages redeploys automatically on push to `main`
   (`.github/workflows/deploy-pages.yml`), so this should already be live at
   the site's Pages URL.
4. Caught and fixed one loose end while double-checking line numbers: the
   top stat-bar's "Cover to Cover" figure still said "&#8776;90 min" after
   the spread count went 29 → 35; the depth-chooser card had already been
   updated to "About 110 minutes." Changed the stat bar to match
   (`&#8776;110 min`). This is included in the same state as above — check
   `git log -1` on `main` to confirm it's there before doing anything else.

**Current repo state:** `main` is up to date with everything above. No open
branches with unmerged work as of this handoff.

## What's outstanding: the glossary

The user has a glossary file that isn't in the repo yet:
`07-back-matter/FAAI-Glossary.md` (per its vault path, this is meant to be
FAAI's back matter — i.e., a new section after the existing six, not folded
into an existing one).

Nobody has read this file's actual content yet — no term list, no format,
no term count is known from this session. The next session needs to open it
fresh and figure out real scope before proposing an integration plan.

### How to approach it (mirror the Builder Track pattern)

`handoff/BUILDER-TRACK-HANDOFF.md` is the reference for how a new section
gets spliced into this single-file site. The mechanics will be the same
shape for the glossary:

1. Read `FAAI-Glossary.md` and decide its structure:
   - Is it one long spread (a single glossary article), or many small
     entries? A traditional A–Z glossary is unusual for FAAI's "spread"
     format (Bottom Line → Concept → Clinical Anchor → What To Do → How It
     Fails → See Also per `CLAUDE.md`) — glossary entries won't fit that
     anatomy cleanly. Decide with the user whether it's:
     (a) one new spread titled something like "Glossary" that breaks the
         usual anatomy (needs sign-off, since `CLAUDE.md` currently says
         "every spread keeps the same anatomy, no exceptions"), or
     (b) a new non-"spread" page type (back matter, not counted in the
         35-spread total), or
     (c) folded into "How to Use This Book" or similar.
   - **Ask the user before picking.** This is a real content-model decision,
     not a mechanical one.
2. Once the shape is settled, follow the same mechanical checklist as
   `BUILDER-TRACK-HANDOFF.md`:
   - New `<article id="..." class="page" data-title="...">` block(s),
     inserted in the appropriate place in `index.html`.
   - Library group entry in `section#library` if it should be browsable
     there.
   - Prev/next chain stitched on both sides.
   - `SLUGS` array in the bottom `<script>` updated (search indexes off
     this array automatically).
   - Stat bar / depth-card counts updated **only if** the glossary counts
     as a "spread" — if it's back matter, it may intentionally sit outside
     the 29→35→N count. Decide this before touching counts.
   - "How to Use This Book" map paragraph, if a new section is added.
3. Verify the same way this session did: headless-Chromium check for
   deep-links, nav chain walk, search hits, no console errors, and the
   one-hour path still exactly 12. (See this session's transcript / the
   `check*.js` pattern if useful — Playwright is globally installed in the
   remote sandbox at `/opt/node22/lib/node_modules/playwright`, Chromium
   binary at `/opt/pw-browsers/chromium-*/chrome-linux/chrome`; on Andre's
   Mac, a normal local Playwright/Chrome install or just opening the file
   in a browser works fine.)

### Key reference files

- `handoff/BUILDER-TRACK-HANDOFF.md` — the exact playbook this session
  followed; best template for the next integration.
- `CLAUDE.md` — output language standard and HTML conventions (article
  anatomy, SLUGS-driven routing, manual prev/next, manual counts).
- `DESIGN.md` — visual schema (cream + navy + red, hard edges, no soft
  shadows). No CSS changes should be needed for a glossary unless it needs
  a genuinely new layout (e.g., a term/definition list), in which case
  check with the user before adding new CSS.
- `index.html` — the only deployed artifact. Everything else (`content/`,
  `handoff/`) is source/reference material, not shipped.

## Boundaries (carried over from the last handoff, still apply)

- Don't edit CSS/design tokens without checking in first.
- Don't rewrite the user's glossary copy — splice it, adapt formatting only
  as needed to fit the HTML shell.
- Don't add anything to the one-hour path unless asked.
- Confirm before merging to `main` again (this session merged directly only
  because the user explicitly said "Merge").
