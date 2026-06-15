---
title: "The Delegation Decision"
description: "Triage the task before you hand it off: can I verify this output, and do I own the consequence? Two yeses and it can go to the model. Anything else stays with you."
type: Spread
section: 03-foundations
yield: high
status: draft
created: 2026-06-11
tags:
  - faai
---
# D1 — The Delegation Decision

<div class="hy-badge hy-3">HY-3 · High Yield</div>

---

## Bottom Line

Triage the task before you hand it off: can I verify this output, and do I own the consequence? Two yeses and it can go to the model. Anything else stays with you.

---

## The Concept

Delegation is the first decision and the one most often skipped. The tool is open, the task is annoying, so the task goes in. That is not a decision. That is a reflex.

What models do well maps to a short list: transformation (this format into that format), summarization, drafting, pattern recall, translation between registers (clinician language into patient language and back). The common thread is that the source material exists and the output can be checked against it.

What you keep is also a short list, and it is non-negotiable: final clinical judgment, anything you cannot verify, anything you would not sign.

The screen is two questions.

**Can I verify this output against something real?** Not "does it look right." Verify, against the chart, the source document, your own knowledge, a reference. If no ground truth exists for you to check against, you cannot discern (D8), which means errors pass through you untouched. A task you cannot verify is a task you cannot delegate, no matter how good the tool is.

**Do I own the consequence if it is wrong?** If yes, the task can still go to the model, but the verification burden is yours and it scales with the stakes (D2). If you are tempted to delegate specifically because you do not want to own the output, stop. That is the clearest contraindication there is.

Notice what the screen does: it sorts by verifiability, not difficulty. Some easy-feeling tasks fail the screen. Some hard-feeling ones pass.

---

## Clinical Anchor

Two residents, same shift, same tool.

The first has a transfer patient with a med list from three sources. She pastes all three in and asks for a reconciled summary table, then checks the table against the sources. Transformation of material she provided, verified against ground truth she holds. Good delegation. It saved her twenty minutes and the verification took three.

The second has a complex dosing question on a patient with interacting comorbidities. He asks the model what dose to give. The answer is specific and confident. But he asked precisely because he did not know, which means he cannot verify the answer; he can only find it plausible. The task that drove him to the tool is the exact task the screen excludes. The model produced an answer. It could not produce the judgment, and judgment was the thing being delegated.

Same tool. The difference was the decision made before typing.

---

## What To Do

1. Run the two-question screen before you open the window: can I verify it, do I own it.
2. If you cannot verify, do not delegate the answer. You can still delegate the legwork around it: summarize the relevant guideline you provide, lay out the considerations, draft the consult question. Keep the judgment.
3. If the reason you want to delegate is fatigue with the consequence, treat that as a red flag, not a use case.
4. Passed the screen? Now pick the mode (automation, augmentation, agency) using stakes and reversibility (D2).

---

## How It Fails

The dangerous tasks are the ones that feel verifiable but are not. A summary of a chart you have not read feels checkable; checking it requires reading the chart, which is the work you delegated away. Fluent output masks unverifiable content, and "I would have caught it" goes untested because nothing forces the catch. The cost is errors that read as polished, passing through a clinician who believed they were the safety check while doing none of the checking.

---

## Cross-refs

- Spread 0 — The 4D Model (Delegation as the first of four decisions)
- D2 — Stakes and Reversibility (choosing the mode once a task passes)
- D8 — Judging the Output (the verification you just committed to)
- D10 — The Signature Rule (what owning the consequence means)

---

