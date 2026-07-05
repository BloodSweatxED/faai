# BLOODSWEATXED Design Schema

The visual system used by First Aid for AI (`index.html`), adapted from the
bloodsweatxed.com identity. Reuse this schema for future builds.

## Palette

| Token | Value | Use |
|---|---|---|
| `--paper` | `#F2EFE8` | Page background (warm cream) |
| `--card` | `#F7F5EF` | Card / panel surfaces |
| `--ink` | `#101B2D` | Primary text, borders, near-black navy |
| `--ink2` | `#3B4658` | Body text |
| `--muted` | `#6E7687` | Secondary text, metadata |
| `--red` | `#C8102E` | The one accent. Kickers, badges, EKG, hover states |
| `--line` / `--line2` | `#D9D3C4` / `#C6BFAD` | Hairline borders on cream |
| `--navy` | `#101B2D` | Inverted blocks (stat bar, footer, bottom-line panels) |
| `--on-navy` / `--on-navy2` | `#EDE9DD` / `#8B96A8` | Text on navy |

Rules: cream + navy + red only. No blues, greens, or grays outside the ramp.
Red is scarce — it marks priority, danger, and interaction, nothing else.

## Typography

| Role | Font | Treatment |
|---|---|---|
| Display | **Anton** (fallback Arial Narrow) | Uppercase, `line-height: .95–.98`, huge (`clamp(36px, 6vw, 58px)` for article titles, up to `clamp(52px, 9.5vw, 118px)` for hero) |
| Labels / meta | **IBM Plex Mono** | Uppercase, letter-spacing `.14em–.28em`, 9–12px |
| Body | **IBM Plex Sans** | 15–16px, `line-height: 1.6–1.75` |

Loaded from Google Fonts with system fallbacks; the page must remain readable
if fonts fail.

## Signature motifs

- **EKG line** — inline SVG heartbeat trace in red. Full-strength on navy
  (stat bar, footer), ~10% opacity as a watermark behind the hero.
- **Stat bar** — navy strip above the header: bold number over a mono
  uppercase label, 3px red bottom border.
- **Slab section headers** — 3px solid ink top border, Anton title, mono
  right-aligned annotation.
- **Hard edges** — no border radius except pill chips/tags (`border-radius: 999px`).
- **Invert on hover** — interactive blocks flip to navy with cream text;
  cards may translate `-2px,-2px` with a hard offset shadow
  (`box-shadow: 4px 4px 0 rgba(16,27,45,.15)`), never a soft blur.
- **Outlined pills** — mono uppercase chips (`1.5px` ink border) for roles,
  tags, and cross-references.

## Components (see index.html for reference implementations)

- Sticky header: wordmark (Anton, one word red) + mono nav links + search.
- Depth-chooser cards: 2px ink border, giant Anton number, red mono unit label.
- Badges: solid red = urgent ("This Week"), solid navy = important
  ("This Quarter"), outlined = background.
- Bottom-line panel: navy block, 4px red left border, red mono label.
- Callouts: 3px left border, tinted background (`rgba` of red or ink), mono label.
- Prev/next: paired 2px-bordered blocks, invert on hover.

## Voice

Mono labels are terse and telegraphic ("READ-THIS-WEEK", "NO WRONG DOOR").
Display headlines are declarative sentences with a period ("BUILT ON SHIFT.",
"THE AI ONBOARDING YOU NEVER GOT."). Body copy is plain, direct, second person.
