---
title: "From Prompts to Pipelines"
description: "When a task recurs three times, stop re-prompting and build a pipeline: fixed steps, fixed inputs, and one named place where a human verifies. Loops amplify quality and error equally."
type: Spread
section: 03-foundations
yield: medium
status: draft
created: 2026-06-11
tags:
  - faai
---
# D3 — From Prompts to Pipelines

<div class="hy-badge hy-2">HY-2 · Medium Yield</div>

---

## Bottom Line

When a task recurs three times, stop re-prompting and build a pipeline: fixed steps, fixed inputs, and one named place where a human verifies. Loops amplify quality and error equally.

---

## The Concept

A prompt is a one-off conversation. A pipeline is a saved, repeatable workflow: the same instructions, the same input format, the same checks, run every time the task comes around. The third time you find yourself reconstructing the same prompt from memory, you have found a pipeline candidate.

The upgrade buys you three things. Consistency: the prompt that worked is frozen, not re-improvised at a lower energy level each week. Quality: you tune the instructions once, properly, instead of settling for whatever today's version produced. And a defined verification point: the pipeline has one step, named in advance, where a human checks output against ground truth. Ad hoc prompting has no such step, which means verification happens when you feel like it, which trends toward never.

The agentic version goes further. An agent runs a loop in plain language: plan the step, act, observe the result, feed it back into the window, repeat. This is what lets a tool pull the data, run the analysis, and draft the report in one pass. Understand what the loop does to error: each cycle's output becomes the next cycle's input. A small mistake in step two is not a small mistake by step six; it is the foundation everything after it was built on. Loops amplify whatever they are given, quality and error alike.

Which is why the rule for pipelines is the inversion of the rule for prompts. With a one-off prompt, you verify the output. With a pipeline, you verify the system, then keep verifying it on a schedule, because the system sits on moving parts: the model behind it (F4), the sampling on top of it (F5), and the data sources underneath it can each shift without any visible change to the pipeline itself.

---

## Clinical Anchor

The monthly QI data pull: door-to-needle times, formatted into the committee table.

Done by hand, it is forty minutes of copy-paste and a prompt rebuilt from memory, slightly different each month. Done as a pipeline, it is a saved workflow: same extraction steps, same prompt file, same output template, and one defined check before the table goes out: spot-validate five cases against the chart.

Month four, the source report adds a column and shifts the rest. The pipeline does not error. It produces a clean, plausible table with the wrong values in two fields. The five-case check catches it in ninety seconds, because catching exactly this is what the check is for. Without it, the committee acts on a quarter of quiet garbage.

---

## What To Do

1. Apply the rule of three: third recurrence, save it as a pipeline. Write the prompt down, fix the input format, store both where you will find them.
2. Name the verification step when you build it, not after. Decide what gets checked against what, every run, and make it cheap enough that you will actually do it.
3. Schedule re-validation. Monthly pipelines get a quarterly deep check against ground truth. Anything feeding a decision gets more.
4. Before granting any tool an agentic loop, ask whether you could audit it mid-run. If you cannot tell a healthy run from a sick one, you are not ready to delegate the loop (D2).

---

## How It Fails

Pipelines fail by succeeding. The workflow runs clean for six months, the verification step starts feeling like ritual, and it gets skipped, precisely because nothing has gone wrong yet. Then a model update or a source change degrades the output, silently, and nobody is watching a thing that "already works." The cost is weeks of bad numbers with your name on them, and the discovery comes from the audience, not from you.

---

## Cross-refs

- D1 — The Delegation Decision (the screen still applies to recurring tasks)
- D2 — Stakes and Reversibility (agency mode and the audit bar)
- F4 — The Wrapper Is Not the Model (why working pipelines drift)
- F5 — Same Question, Different Answer (freeze verified outputs, not prompts)

---

