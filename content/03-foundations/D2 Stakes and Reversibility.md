---
title: "Stakes and Reversibility"
description: "Cross stakes against reversibility before you pick a mode. Low-stakes and reversible: automate freely. High-stakes or committed: you stay in the loop, fully. Agency is earned, never default."
type: Spread
section: 03-foundations
yield: high
status: draft
created: 2026-06-11
tags:
  - faai
---
# D2 — Stakes and Reversibility

<div class="hy-badge hy-3">HY-3 · High Yield</div>

---

## Bottom Line

Cross stakes against reversibility before you pick a mode. Low-stakes and reversible: automate freely. High-stakes or committed: you stay in the loop, fully. Agency is earned, never default.

---

## The Concept

Once a task passes the delegation screen (D1), the question becomes how much supervision it runs under. Two axes answer it.

**Stakes.** Who gets hurt if this is wrong, and how badly? Internal scaffolding (a first draft of a lecture, a reformatted spreadsheet) sits low. Anything patient-facing sits high, automatically. Anything clinical-decision-adjacent sits higher.

**Reversibility.** Is the output a draft you will review before it becomes real, or a committed action? A drafted message is reversible until sent. A sent message, a signed note, an order placed: committed.

Cross them and the modes assign themselves:

- **Low stakes, reversible:** automation. Let the model run, verify on review. This is where the time savings live, and most of your eligible workload sits here.
- **High stakes, reversible:** augmentation. You and the model iterate; the draft never becomes real without your full review. Patient-facing content lives here.
- **Low stakes, committed:** automation with a sampling audit. Fine until volume makes errors compound; check a fraction routinely.
- **High stakes, committed:** the danger quadrant. If an AI output becomes a committed, patient-affecting action without a human between draft and commitment, you have built a machine that acts in your name without you. Augmentation only, full verification, or do not do it at all.

Agency mode (the model acting in loops on your behalf) is a separate decision on top of this grid, and the bar is high: you grant it only for tasks you understand well enough to audit at any point, in quadrants you have personally characterized. Nobody starts there. Tools that start you there have made the decision for you, which is exactly the problem.

One more thing the grid is for: tasks move. Re-run the grid when anything changes, especially the tool itself.

---

## Clinical Anchor

Your inbox tool drafts replies to patient messages. As shipped, it is high-stakes but reversible: every draft waits for your edit and your send. Augmentation. Fine.

A quarterly update adds a convenience feature: messages the tool classifies as routine can be auto-sent. One toggle, default on for "low-risk" categories. The task did not change. The tool moved it from reversible to committed, and the classifier deciding what counts as routine is itself a model output nobody is reviewing.

The patient who messages "still having the chest tightness but the appointment portal isn't working" and gets an auto-sent scheduling reply is the cost of a quadrant change you never agreed to.

---

## What To Do

1. Place the task on the grid before picking a mode. Two questions: who gets hurt, and is there a review between output and reality?
2. Default patient-facing content to augmentation, regardless of how reliable the tool has been.
3. Audit your committed-action surfaces. List every place an AI output can become real without your eyes on it. That list should be short, deliberate, and known to you. If you cannot produce the list, that is the finding.
4. Re-run the grid after every tool update. Read the release notes for one thing only: did anything move from draft to auto?

---

## How It Fails

Tools quietly move your tasks between quadrants. A draft feature becomes an auto-send feature in an update. A suggestion becomes a default. A default becomes an action. Each step ships as convenience, each is individually small, and the sum is a committed pipeline where there used to be a checkpoint. The cost is a committed action you never reviewed, discovered after it reached a patient, with your name attached because the toggle was in your settings.

---

## Cross-refs

- D1 — The Delegation Decision (the screen that runs before this grid)
- D3 — From Prompts to Pipelines (when tasks become standing workflows)
- D10 — The Signature Rule (verification scaling with stakes)
- F4 — The Wrapper Is Not the Model (why tools change underneath you)

---

