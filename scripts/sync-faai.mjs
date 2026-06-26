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

const TEACHING_BOXES = {
  "The Four Primitives": {
    marker:
      "**Prompt.** You have no access to the model’s internals. The only surface you can touch is what you put in front of it. Instructions, examples, context, constraints: all of it is prompt. Input quality determines output quality, fully and without exception.",
    box:
      '<div class="faai-box eli-andre">\n' +
      '  <div class="faai-box-label">ELI André</div>\n' +
      "  <p>Think of the model like a consult resident with no chart access unless you hand over the chart. The context window is the packet you send. Tokens are the page limit. The prompt is the consult question plus the relevant history.</p>\n" +
      "</div>",
  },
  "D4 Context Is Everything": {
    marker:
      "Context engineering is selection in both directions: putting in what matters, leaving out what does not. The chart dump and the bare question fail the same way, for opposite reasons.",
    box:
      '<div class="faai-box clinical-translation">\n' +
      '  <div class="faai-box-label">Clinical Translation</div>\n' +
      "  <p>A context window is not memory. It is the information on the screen right now. If a brilliant consultant could not answer from that packet alone, the model will fill the missing pieces with assumptions.</p>\n" +
      "</div>",
  },
  "F2 Confabulation": {
    marker:
      "**Grounding reduces it, nothing eliminates it.** Giving the model the source document to work from (see D7) cuts fabrication sharply, because the right answer is now in the window. It does not cut it to zero.",
    box:
      '<div class="faai-box failure-mode">\n' +
      '  <div class="faai-box-label">Failure Mode</div>\n' +
      "  <p>Confabulation is most dangerous when the answer is formatted perfectly. The danger signal is not weirdness. The danger signal is an exact dose, citation, number, or named fact that you did not provide and have not checked.</p>\n" +
      "</div>",
  },
  "D7 Grounding RAG and the Second Brain": {
    marker:
      "But understand what grounding does not do. The model has no loyalty to the source. If retrieval pulls the wrong document, an outdated version, or nothing at all, the model does not stop and say so. It answers anyway, from training memory, in exactly the same voice. Grounded and ungrounded answers are indistinguishable on the surface, which means the failure mode of a grounding system is invisible by default.",
    box:
      '<div class="faai-box use-this-today">\n' +
      '  <div class="faai-box-label">Use This Today</div>\n' +
      '  <p>When you attach a guideline, ask the tool to quote the exact passage it used and to say "not addressed in the source" when the answer is not in the document. Then spot-check the quote.</p>\n' +
      "</div>",
  },
  "F4 The Wrapper Is Not the Model": {
    marker:
      'None of this is scandal. It is how the industry works. But it means your trust should attach to a product version at a point in time, not to a brand name, and it means the question "what model is this and what gets sent to it" is a fair question for any vendor. A vendor who cannot answer it has told you something.',
    box:
      '<div class="faai-box clinical-translation">\n' +
      '  <div class="faai-box-label">Clinical Translation</div>\n' +
      "  <p>The wrapper is the hospital workflow. The model is the underlying physiology. Same physiology, different workflow, different outcome. Ask what data enters the wrapper and what model sits underneath it.</p>\n" +
      "</div>",
  },
  "D3 From Prompts to Pipelines": {
    marker:
      "Which is why the rule for pipelines is the inversion of the rule for prompts. With a one-off prompt, you verify the output. With a pipeline, you verify the system, then keep verifying it on a schedule, because the system sits on moving parts: the model behind it (F4), the sampling on top of it (F5), and the data sources underneath it can each shift without any visible change to the pipeline itself.",
    box:
      '<div class="faai-box failure-mode">\n' +
      '  <div class="faai-box-label">Failure Mode</div>\n' +
      "  <p>An agent is a pipeline that can keep acting. Each step becomes context for the next step. One bad extraction early can become a polished final report five steps later.</p>\n" +
      "</div>",
  },
  "ambient-scribes": {
    marker:
      "Two non-negotiables ride along: recording consent, every visit (L4), and the signature rule at full strength (D10), because this is the one AI output that becomes legal testimony with your name on it every single time you use it.",
    box:
      '<div class="faai-box do-not-do-this">\n' +
      '  <div class="faai-box-label">Do Not Do This</div>\n' +
      "  <p>Do not sign a scribe note by vibe. Line-check the exam, laterality, numbers, medications, negatives, and anything the visit did not explicitly contain.</p>\n" +
      "</div>",
  },
  "PHI-definition": {
    marker:
      "Why this spread sits in front of the AI book: every prompt is a disclosure to whoever operates the tool. The PHI question has to be answered before the typing, every time. De-identification is something you do, deliberately, against the list. It is not what is left over after you skip the name.",
    box:
      '<div class="faai-box do-not-do-this">\n' +
      '  <div class="faai-box-label">Do Not Do This</div>\n' +
      '  <p>Do not treat "no name, no MRN" as de-identified. Dates, location, age over 89, rare mechanisms, and unusual clinical stories can identify the patient by combination.</p>\n' +
      "</div>",
  },
  "HIPAA-basics": {
    marker:
      'What HIPAA does not do: care how good the tool is. There is no accuracy exception, no "it improved care" defense, no carve-out for tools everyone at the conference was praising. The analysis is plumbing, not merit: where does the data go, and is that destination bound to protect it?',
    box:
      '<div class="faai-box use-this-today">\n' +
      '  <div class="faai-box-label">Use This Today</div>\n' +
      "  <p>Before entering patient details, ask one question: is this specific account inside my institution's covered environment with a BAA? If you do not know, treat it as no.</p>\n" +
      "</div>",
  },
}

function applyTeachingBox(body, name) {
  const teachingBox = TEACHING_BOXES[name]
  if (!teachingBox || body.includes(teachingBox.box)) return body
  if (!body.includes(teachingBox.marker)) return body
  return body.replace(teachingBox.marker, `${teachingBox.marker}\n\n${teachingBox.box}`)
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
  text = text
    .replace(/\s+/g, " ")
    .replace(/[*_`>]/g, "")
    .trim()
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
  const tags = (fm.tags || "[faai]")
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)

  const fmLines = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `type: ${type}`,
    `section: ${section}`,
    `yield: ${fm.yield || (hy ? { "HY-3": "high", "HY-2": "medium", "HY-1": "low" }[hy] : "")}`,
    `status: ${status}`,
    isStub ? "unlisted: true" : null,
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

  outBody = applyTeachingBox(outBody, name)

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

function learnerHomePage() {
  return `---
title: First Aid for AI
description: "The AI onboarding clinicians never got: a practical field manual for using AI around patient care without pretending the risk is theoretical."
status: active
created: 2026-06-09
updated: 2026-06-26
---

<div class="faai-home-hero">
  <div class="faai-kicker">First Aid for AI</div>
  <h1>The AI onboarding clinicians never got.</h1>
  <p class="faai-promise">FAAI is a clinical field manual for using AI around patient care. It teaches the mental model, the failure modes, and the verification habits that should have come before the tools arrived in your workflow.</p>
  <p class="faai-subcopy">Built for clinicians, educators, trainees, and clinical leaders who need practical judgment more than hype.</p>
</div>

<div class="faai-cta-grid">
  <a class="faai-cta internal-link" href="./01-getting-started/the-five-minute-model">
    <strong>Start with the 5-minute model</strong>
    <p>The fastest useful explanation of what the model is doing.</p>
  </a>
  <a class="faai-cta internal-link" href="./one-hour-read">
    <strong>Take the one-hour read</strong>
    <p>The HY-3 curriculum path for a defensible baseline.</p>
  </a>
  <a class="faai-cta internal-link" href="#workflow-lookup">
    <strong>Look up a tool in my workflow</strong>
    <p>Scribes, inbox drafts, CDS, chatbots, and patient data.</p>
  </a>
</div>

<div class="faai-start-strip">
  <strong>If you have 10 minutes:</strong> read <a class="internal-link" href="./01-getting-started/the-five-minute-model">The Five-Minute Model</a>, then <a class="internal-link" href="./03-foundations/f2-confabulation">Confabulation</a>. That gives you the mechanism and the core safety problem.
</div>

## What This Is

FAAI is not a digital garden. It is an onboarding path for clinicians who are already being asked to trust, supervise, or sign work shaped by AI.

The goal is simple: know what the tool can do, know where it fails, and know what you must verify before your name touches the output.

## What To Read First

<div class="faai-task-grid">
  <div class="faai-task">
    <strong>I have 10 minutes.</strong>
    <p>Read <a class="internal-link" href="./01-getting-started/the-five-minute-model">The Five-Minute Model</a> and <a class="internal-link" href="./03-foundations/f2-confabulation">Confabulation</a>.</p>
  </div>
  <div class="faai-task">
    <strong>I have one hour.</strong>
    <p>Take <a class="internal-link" href="./one-hour-read">The One-Hour Read</a>. It is the visible FAAI curriculum.</p>
  </div>
  <div class="faai-task">
    <strong>I am signing AI-generated notes.</strong>
    <p>Read <a class="internal-link" href="./03-foundations/d10-the-signature-rule">The Signature Rule</a> and <a class="internal-link" href="./04-clinical-applications/ambient-scribes">Ambient AI Scribes</a>.</p>
  </div>
  <div class="faai-task">
    <strong>I want to paste patient details.</strong>
    <p>Read <a class="internal-link" href="./02-legal-compliance/phi-definition">PHI: What Counts and What Does Not</a> and <a class="internal-link" href="./02-legal-compliance/hipaa-basics">HIPAA Basics</a>.</p>
  </div>
</div>

## The Core Model

1. [[you-were-never-onboarded|You Were Never Onboarded]]
2. [[the-five-minute-model|The Five-Minute Model]]
3. [[The Four Primitives|The Four Primitives]]
4. [[F2 Confabulation|Confabulation]]
5. [[D0 The 4D Model|The 4D Model]]
6. [[D1 The Delegation Decision|The Delegation Decision]]
7. [[D2 Stakes and Reversibility|Stakes and Reversibility]]
8. [[D4 Context Is Everything|Context Is Everything]]
9. [[D5 Prompting Is a Consult|Prompting Is a Consult]]
10. [[D8 judging the output|Judging the Output]]
11. [[D10 The Signature Rule|The Signature Rule]]

## Patient Data And Liability

1. [[PHI-definition|PHI: What Counts and What Does Not]]
2. [[HIPAA-basics|HIPAA Basics]]
3. [[liability-when-ai-is-wrong|Liability When the AI Is Wrong]]

## Workflow Lookup

<div id="workflow-lookup" class="faai-workflow-grid">
  <div class="faai-workflow">
    <strong>Ambient AI scribes</strong>
    <p>What can go wrong when the note sounds right: <a class="internal-link" href="./04-clinical-applications/ambient-scribes">read the scribe guide</a>.</p>
  </div>
  <div class="faai-workflow">
    <strong>Inbox drafting</strong>
    <p>How drafts turn editors into approvers: <a class="internal-link" href="./04-clinical-applications/inbox-drafting">read inbox drafting</a>.</p>
  </div>
  <div class="faai-workflow">
    <strong>Clinical decision support</strong>
    <p>Where prediction meets the bedside: <a class="internal-link" href="./04-clinical-applications/clinical-decision-support">read AI CDS</a>.</p>
  </div>
  <div class="faai-workflow">
    <strong>Patient-facing chatbots</strong>
    <p>How the AI consult goes underground: <a class="internal-link" href="./04-clinical-applications/patient-facing-chatbots">read patient chatbots</a>.</p>
  </div>
  <div class="faai-workflow">
    <strong>PHI and HIPAA</strong>
    <p>When patient details can enter a tool: <a class="internal-link" href="./02-legal-compliance/hipaa-basics">read HIPAA basics</a>.</p>
  </div>
</div>
`
}

function oneHourReadPage() {
  return `---
title: The One-Hour Read
description: "The HY-3 FAAI curriculum path for clinicians who need a practical baseline before using or supervising AI in clinical work."
status: active
created: 2026-06-26
updated: 2026-06-26
---

# The One-Hour Read

This is the FAAI baseline. Read these in order and stop. You will understand what the model is doing, where it fails, when to delegate, what patient data can enter a tool, and what you must verify before signing.

## Start Here

1. [[you-were-never-onboarded|You Were Never Onboarded]]
2. [[the-five-minute-model|The Five-Minute Model]]
3. [[The Four Primitives|The Four Primitives]]
4. [[F2 Confabulation|Confabulation]]

## Use The 4D Model

5. [[D0 The 4D Model|The 4D Model]]
6. [[D1 The Delegation Decision|The Delegation Decision]]
7. [[D2 Stakes and Reversibility|Stakes and Reversibility]]
8. [[D4 Context Is Everything|Context Is Everything]]
9. [[D5 Prompting Is a Consult|Prompting Is a Consult]]
10. [[D8 judging the output|Judging the Output]]
11. [[D10 The Signature Rule|The Signature Rule]]

## Protect The Patient And The Record

12. [[PHI-definition|PHI]]
13. [[HIPAA-basics|HIPAA Basics]]
14. [[liability-when-ai-is-wrong|Liability]]

## Apply It To Tools Already Arriving

15. [[ambient-scribes|Ambient AI Scribes]]
16. [[inbox-drafting|Inbox Drafting]]

## The Five Questions You Should Be Able To Answer

<div class="faai-task-grid">
  <div class="faai-task">
    <strong>Can I paste patient details into ChatGPT?</strong>
    <p>Only if the tool is institutionally covered for PHI. Otherwise strip or abstract.</p>
  </div>
  <div class="faai-task">
    <strong>What does context window mean clinically?</strong>
    <p>It is the whole chart the model can see. If it is not in the window, it is not part of the answer.</p>
  </div>
  <div class="faai-task">
    <strong>What can go wrong with AI scribes?</strong>
    <p>Silence becomes normal findings. The note can document things that never happened.</p>
  </div>
  <div class="faai-task">
    <strong>What should I verify before signing?</strong>
    <p>Every clinical fact, especially exam findings, doses, dates, negatives, and patient-facing instructions.</p>
  </div>
</div>
`
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

  // Learner-facing product pages. The vault remains source of truth for spreads.
  fs.writeFileSync(path.join(DEST, "index.md"), learnerHomePage())
  count++

  fs.writeFileSync(path.join(DEST, "one-hour-read.md"), oneHourReadPage())
  count++

  // License page (CC BY-SA 4.0).
  fs.copyFileSync(path.join(process.cwd(), "scripts", "license.md"), path.join(DEST, "license.md"))
  count++

  console.log(`Synced ${count} files into content/`)
}

main()
