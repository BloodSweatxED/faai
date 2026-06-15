#!/usr/bin/env node
// Sync FAAI spread source-of-truth files from the LIFE vault into Quartz content/.
// The vault is authoritative; content/ is generated and should not be hand-edited.
//
// Usage: node scripts/sync-faai.mjs
import fs from "node:fs"
import path from "node:path"

const VAULT = "/Users/andre/Desktop/Vaults/Life/16-FAAI"
const DEST = path.join(process.cwd(), "content")

// Section folders to publish (in order). Anything else in the vault is ignored.
const SECTIONS = [
  "01-getting-started",
  "02-legal-compliance",
  "03-foundations",
  "04-clinical-applications",
]

// Files we never publish.
const SKIP_NAMES = new Set(["TOPIC-TEMPLATE.md", ".DS_Store"])
const SKIP_INCLUDES = ["Full Draft"] // the compiled draft is a generated artifact, not a page

const YIELD_BADGE = {
  "HY-3": { cls: "hy-3", label: "HY-3 · High Yield" },
  "HY-2": { cls: "hy-2", label: "HY-2 · Medium Yield" },
  "HY-1": { cls: "hy-1", label: "HY-1 · Lower Yield" },
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) return { fm: {}, fmRaw: "", body: raw }
  const fmRaw = m[1]
  const body = m[2]
  const fm = {}
  for (const line of fmRaw.split("\n")) {
    const mm = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (mm) fm[mm[1]] = mm[2].trim()
  }
  return { fm, fmRaw, body }
}

function deriveDescription(body) {
  // Prefer the Bottom Line paragraph; fall back to first real paragraph.
  const bl = body.match(/##\s*Bottom Line\s*\n+([^\n#][^\n]*(?:\n[^\n#][^\n]*)*)/)
  let text = bl ? bl[1] : ""
  if (!text) {
    for (const para of body.split(/\n\s*\n/)) {
      const t = para.trim()
      if (t && !t.startsWith("#") && !t.startsWith("---") && !t.startsWith("**HY")) {
        text = t
        break
      }
    }
  }
  text = text.replace(/\s+/g, " ").replace(/[*_`>]/g, "").trim()
  if (text.length > 200) text = text.slice(0, 197).trimEnd() + "..."
  return text
}

function badgeFromBody(body) {
  const m = body.match(/^\*\*(HY-[123])\*\*\s*$/m)
  return m ? m[1] : null
}

function transform(srcPath, section) {
  const raw = fs.readFileSync(srcPath, "utf-8")
  const { fm, body } = parseFrontmatter(raw)
  const name = path.basename(srcPath, ".md")

  const hy = badgeFromBody(body)
  const description = fm.description || deriveDescription(body)
  const status = fm.status || "draft"
  const isStub = status === "seed" || status === "incomplete"

  // Rebuild a clean frontmatter block (OKF-friendly: title, description, type, tags).
  const title = fm.title || name
  const type = "Spread"
  const tags = (fm.tags || "[faai]").replace(/^\[|\]$/g, "").split(",").map((s) => s.trim()).filter(Boolean)

  const fmLines = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `type: ${type}`,
    `section: ${section}`,
    `yield: ${fm.yield || (hy ? { "HY-3": "high", "HY-2": "medium", "HY-1": "low" }[hy] : "")}`,
    `status: ${status}`,
    fm.created ? `created: ${fm.created}` : null,
    `tags:`,
    ...tags.map((t) => `  - ${t}`),
    "---",
    "",
  ].filter((l) => l !== null)

  // Body transforms.
  let outBody = body

  // Strip the trailing in-body "tags: [...]" footer line (it lives in frontmatter now).
  outBody = outBody.replace(/\n+tags:\s*\[[^\]]*\]\s*$/m, "\n")

  // Replace the bare **HY-x** line with a styled badge div.
  if (hy) {
    const b = YIELD_BADGE[hy]
    outBody = outBody.replace(
      /^\*\*HY-[123]\*\*[ \t]*$/m,
      `<div class="hy-badge ${b.cls}">${b.label}</div>`,
    )
  }

  // Stub banner for incomplete sections (e.g. FERPA).
  if (isStub) {
    const banner =
      "> [!warning] Stub — incomplete\n" +
      "> This spread is a placeholder. The content below is not yet written and is deferred to the full edition. Treat it as a flag, not guidance.\n\n"
    // Insert right after the first H1.
    outBody = outBody.replace(/^(#\s.*\n)/m, `$1\n${banner}`)
  }

  return fmLines.join("\n") + outBody.trimStart() + "\n"
}

function rmContent() {
  if (fs.existsSync(DEST)) fs.rmSync(DEST, { recursive: true, force: true })
  fs.mkdirSync(DEST, { recursive: true })
}

function main() {
  rmContent()
  let count = 0

  for (const section of SECTIONS) {
    const srcDir = path.join(VAULT, section)
    if (!fs.existsSync(srcDir)) continue
    const destDir = path.join(DEST, section)
    fs.mkdirSync(destDir, { recursive: true })
    for (const file of fs.readdirSync(srcDir)) {
      if (!file.endsWith(".md")) continue
      if (SKIP_NAMES.has(file)) continue
      if (SKIP_INCLUDES.some((s) => file.includes(s))) continue
      const out = transform(path.join(srcDir, file), section)
      fs.writeFileSync(path.join(destDir, file), out)
      count++
    }
  }

  // Home page from the master index.
  const indexSrc = path.join(VAULT, "00-index", "FAAI-Index.md")
  if (fs.existsSync(indexSrc)) {
    fs.copyFileSync(indexSrc, path.join(DEST, "index.md"))
    count++
  }

  // License page (CC BY-SA 4.0).
  fs.copyFileSync(path.join(process.cwd(), "scripts", "license.md"), path.join(DEST, "license.md"))
  count++

  console.log(`Synced ${count} files into content/`)
}

main()
