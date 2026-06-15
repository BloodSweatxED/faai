---
title: "The Iteration Loop"
description: "The first output is a draft of your instructions, not a verdict on the tool. Iterate in order: context, then task framing, then constraints. Three failed loops means the task was mis-delegated. Go..."
type: Spread
section: 03-foundations
yield: medium
status: draft
created: 2026-06-11
tags:
  - faai
---
# D9 — The Iteration Loop

<div class="hy-badge hy-2">HY-2 · Medium Yield</div>

---

## Bottom Line

The first output is a draft of your instructions, not a verdict on the tool. Iterate in order: context, then task framing, then constraints. Three failed loops means the task was mis-delegated. Go back to D1.

---

## The Concept

Clinicians quit AI tools at exactly the wrong moment: after the first mediocre output. The first output was never going to be the deliverable. It is diagnostic information about what your instructions failed to convey, and reading it that way is the core operating skill of working with these tools.

The loop is describe, judge, re-describe. What separates skilled iteration from flailing is knowing what to change, and the order is fixed because the failure rates are not equal.

**Context first.** Most misses are context misses (D4). The output is generic, or it answered for the wrong patient, or it ignored a constraint it never knew existed. Fix: put the missing facts in the window. Not a rephrase. Facts.

**Task framing second.** The model did the wrong job well: you wanted a critique and got a summary, wanted options and got a recommendation. Fix: restate the task as a sharper verb with a clearer deliverable (D5).

**Constraints last.** Right job, right patient, wrong shape: too long, wrong register, buried lead. Fix: add the specific constraint, ideally with an example of the shape you want.

Two operating rules. Tell the model what was wrong, specifically; "the warning signs need to be specific to her wound, not generic" outperforms "try again" by a mile, because the correction becomes context. And know the stop rule: three iterations without convergence is not a prompting problem. It means the task was mis-delegated, usually because the output is not actually verifiable by you or the task needed judgment the model cannot supply. Stop polishing. Go back to D1 and re-triage.

---

## Clinical Anchor

A discharge instruction for a 74-year-old woman going home on apixaban after a new afib diagnosis, refined across three passes.

Pass one: *"Discharge instructions for new afib started on apixaban."* Output: generic anticoagulation boilerplate. Diagnosis: context miss. Nothing about her in the window.

Pass two, context added: her age, her fall last year, the stairs at home, her daughter who manages the pillbox, follow-up already booked with cardiology Tuesday. Output: now about her, but organized as a wall of paragraphs with the bleeding warning signs in the middle. Diagnosis: constraint miss.

Pass three, constraints added: *"Under 200 words, sixth-grade level, bleeding warning signs as a bolded list at the top, address the fall risk directly since she will worry about it."* Output: usable. Edited lightly, signed.

Three passes, four minutes total. Each pass changed one identifiable thing, which is why each pass got better.

---

## What To Do

1. Read a bad output as a differential, in order of prevalence: missing context, wrong task framing, missing constraints. Fix the one you find, not all three at once.
2. Make corrections specific and concrete. Name what was wrong and what right looks like.
3. Count your iterations. At three without convergence, stop and re-run the delegation screen (D1).
4. When an output is wrong in a surprising way, interrogate before re-rolling: "what did you assume about X?" The answer usually names the missing context for you (D8).

---

## How It Fails

Iteration becomes negotiation. You came in with a plan, the output disagrees or hedges, and you keep regenerating, not to fix the instructions but until the model produces the answer you already had. With enough iterations it always will; it is a prediction engine, and your increasingly leading prompts are the pattern it completes. The cost is the model converted into a yes-machine: a fluent second opinion that is actually your first opinion in a different font, now carrying the false weight of independent confirmation.

---

## Cross-refs

- D1 — The Delegation Decision (where three failed loops sends you)
- D4 — Context Is Everything (the first thing to fix)
- D5 — Prompting Is a Consult (the second and third things to fix)
- D8 — Judging the Output (judging, the other half of each loop)

---

