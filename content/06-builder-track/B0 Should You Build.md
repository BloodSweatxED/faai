---
title: Should You Build?
section: 06-builder-track
yield: medium
status: draft
created: 2026-06-16
---

# B0 — Should You Build? The Build-vs-Buy Decision

**HY-2**

---

## Bottom Line

Most clinicians should use, configure, and integrate before they build anything. Building is the right call only when the workflow is genuinely yours, recurring, unserved by any vendor, and you can own the maintenance after launch day.

---

## The Concept

The build-vs-buy decision is the Delegation Decision (D1) one level up. Before you decide what to hand the AI, decide whether to build the thing that does the handing off at all.

There is a ladder here, and the cheapest rung that does the job is the right one.

- **Use it as-is.** The tool, out of the box, with no setup. Most needs stop here and should.
- **Configure it.** Instruction files, projects, custom commands (D6). Most of what feels like "I need to build" is actually "I need to configure."
- **Integrate it.** Connect tools that already exist so they talk to each other. No new code, just wiring.
- **Build it.** Net-new software with your name on it. The top rung, and the one people reach for first because building is now easy.

That is the trap. The model writes the first version of almost anything in an afternoon, so the build feels free. It is not. The first version was never the cost. The cost is maintenance: the model updates, the API changes, the workflow drifts, the source moves, and a tool with your judgment baked in that quietly breaks is worse than no tool at all.

So the real question is not "can I build this." You can. The question is whether the workflow earns its upkeep: is it recurring, specific to your practice, unserved by anything you could buy, verifiable in its output, and owned by someone past the day it ships.

---

## Clinical Anchor

A clinician spends a Saturday building a discharge-instruction generator for a common presentation. It works beautifully by Sunday night. Six weeks later the model behind it is updated, the tone drifts, the reading level creeps up, and nobody notices because the tool still runs and the output still looks fine. A dozen patients get instructions that read wrong before anyone catches it.

The build was the easy weekend. The ownership was the actual job, and it was never assigned to anyone. A tool nobody maintains is not an asset. It is a liability with a user interface.

---

## What To Do

1. Start at the bottom rung and climb only when forced. Can an existing tool, configured, do this? Usually yes.
2. Name the maintainer before you write a line. If the answer is "nobody, really," do not build it.
3. Build only verifiable workflows. If you cannot check the output, you cannot safely automate it (D1, D8).
4. Prototype in an afternoon, decide in a week. If it is not clearly earning its maintenance cost after a week of real use, kill it without ceremony.
5. Write down what it depends on: which model, which source, which API. That list is what you will check when it breaks, and it will break.

---

## How It Fails

The demo works, so it ships, and the maintenance never gets budgeted. Builder tools rot silently: a model swap, a deprecated API, a changed source, and the output degrades while the tool still appears to run (D3). The clinician who built it has moved on to the next thing, but the tool keeps producing, keeps signing outputs with their standard attached. The failure is discovered downstream, by the people who trusted the output, long after the person who built it stopped watching. Cost: a pipeline failure wearing your name, found by everyone except you.

---

## Cross-refs

- D1 — The Delegation Decision (the screen this sits one level above)
- D3 — From Prompts to Pipelines (silent degradation, the maintenance you owe)
- D11 — Owning the Record (you still own what your tool produced)
- B5 — Evals: Testing What You Built (how you catch the rot before it ships)

---

tags: [faai, builder-track]
