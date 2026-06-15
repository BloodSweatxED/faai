---
title: "The Wrapper Is Not the Model"
description: "Your scribe, your inbox drafter, and the chatbot on your phone may all be the same model wearing different clothes. The wrapper decides what goes in the window, and the wrapper can change without t..."
type: Spread
section: 03-foundations
yield: medium
status: draft
created: 2026-06-11
tags:
  - faai
---
# The Wrapper Is Not the Model

<div class="hy-badge hy-2">HY-2 · Medium Yield</div>

---

## Bottom Line

Your scribe, your inbox drafter, and the chatbot on your phone may all be the same model wearing different clothes. The wrapper decides what goes in the window, and the wrapper can change without telling you.

---

## The Concept

Almost no clinical AI product is a model. It is a wrapper around one: a layer of software that takes your input, adds its own instructions and context, sends the package to a general-purpose model built by one of a handful of companies, and formats what comes back.

What the wrapper controls is exactly the list of things that determine output quality:

**The hidden instructions.** Every product front-loads the window with a system prompt you never see: the tone, the guardrails, the format, the things it refuses to do. Two products on the same model behave differently because their hidden instructions differ.

**The context plumbing.** The wrapper decides what else enters the window: the transcript from the room mic, the last three messages of the patient thread, a retrieved chunk of your formulary. When a product "knows" something, the wrapper put it there.

**The model behind the curtain.** Vendors swap underlying models for cost or capability, often silently. The product that performed one way in the demo may be running different machinery by go-live, or by next quarter.

**The update cadence.** Wrapper updates change behavior too: a new feature, a new default, a reworded hidden prompt. The tool you validated is a moving target.

None of this is scandal. It is how the industry works. But it means your trust should attach to a product version at a point in time, not to a brand name, and it means the question "what model is this and what gets sent to it" is a fair question for any vendor. A vendor who cannot answer it has told you something.

---

## Clinical Anchor

Your hospital pilots an AI scribe in March. It performs well. In August, notes start running longer, with a new tendency to insert pertinent negatives nobody said aloud. Nothing in your workflow changed. The vendor had switched underlying models in a routine update, announced in a release note nobody clinical ever sees. The product name, the interface, and your habits were identical. The machinery was not.

---

## What To Do

1. For any tool touching patient care, find out what it sends, where, and to which model. This belongs in procurement questions, not fine print.
2. Date your trust. "This tool was reliable on my cases as of version X" is a real statement. "This tool is reliable" is not.
3. Watch for behavior drift after updates, and treat drift as a signal to re-verify, not a quirk to ignore.
4. When a tool behaves strangely, remember you can only see your input, not the full window. The hidden instructions may be fighting your request (see D6).

---

## How It Fails

Trust gets attached to the brand and then auto-renews. The tool earned confidence in month one, and that confidence silently extends across model swaps, prompt rewrites, and feature changes, none of which were announced in any channel a clinician reads. The cost is a validated workflow that is no longer the workflow you validated, discovered only when the output quality drops far enough to be visible, which is far past where it started to matter.

---

## Cross-refs

- F1 — The Four Primitives (the window the wrapper is filling)
- D3 — From Prompts to Pipelines (silent degradation of working systems)
- D6 — Standing Orders for Your AI (instruction layers and their conflicts)
- D10 — The Signature Rule (your name outlives every vendor update)

---

