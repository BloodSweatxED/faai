# First Aid for AI (FAAI)

The clinician's road map to AI in medicine, published as a living public website.

Built with [Quartz 5](https://quartz.jzhao.xyz/). Content is authored as Obsidian
spreads in the LIFE vault and published here as a static site with wikilinks,
backlinks, graph view, and full-text search.

## How content flows

The **LIFE vault is the source of truth.** This repo's `content/` directory is a
generated artifact — do not hand-edit it.

```
LIFE vault /16-FAAI/  ──(scripts/sync-faai.mjs)──►  content/  ──(quartz build)──►  public/
```

To pull the latest spreads from the vault:

```bash
node scripts/sync-faai.mjs   # copies + transforms vault spreads into content/
npx quartz build --serve     # preview at http://localhost:8080
```

The sync script:

- Publishes `01-getting-started`, `02-legal-compliance`, `03-foundations`,
  `04-clinical-applications`, plus the master index as the home page.
- Skips the compiled full draft (a generated artifact) and the topic template.
- Rebuilds frontmatter (title, description, type, tags) for clean metadata.
- Renders the `**HY-3 / HY-2 / HY-1**` yield markers as styled badges.
- Adds a "Stub — incomplete" banner to any spread with `status: seed` (e.g. FERPA).

## Local setup

Requires Node 22+.

```bash
npm ci
npx quartz plugin install   # fetches Quartz community plugins into .quartz/
node scripts/sync-faai.mjs
npx quartz build --serve
```

## Deploying

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which builds the
site and deploys it to GitHub Pages. Enable Pages → Source: GitHub Actions in the
repo settings. Set `baseUrl` in `quartz.config.yaml` to the published domain.

`content/` is committed so CI can build without access to the private vault. Run
the sync locally and commit the result whenever the vault changes.

## License

Content is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
The Quartz framework retains its own MIT license (`LICENSE.txt`). Upstream Quartz
docs are preserved in `QUARTZ-README.md`.
