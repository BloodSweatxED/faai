---
title: "Judging the Output"
description: "The model answers the question you asked, for the patient you described. If you described no one, it answered for everyone. Fluency tells you nothing about accuracy. Verification is not optional."
type: Spread
section: 03-foundations
yield: high
status: draft
created: 2026-06-09
tags:
  - faai
---
# D8 — Judging the Output

<div class="hy-badge hy-3">HY-3 · High Yield</div>

-----

## Bottom Line

The model answers the question you asked, for the patient you described. If you described no one, it answered for everyone. Fluency tells you nothing about accuracy. Verification is not optional.

-----

## The Concept

The model does not know what it does not know. More precisely: it has no way to flag that a critical piece of context was missing, because from its position, the context window was complete. It had everything you gave it. It answered accordingly.

This is not hallucination. Hallucination is when the model generates something that does not exist: a citation, a drug, a statistic it invented from pattern completion. That happens, and it matters, but it is the easier failure to catch because the artifact is fabricated.

The harder failure is context blindness. The model answered correctly for a patient it assumed. That patient was not yours.

The output looks right because it is right, for someone. Discernment is the work of determining whether that someone is the patient in front of you.

-----

## Clinical Anchor

A clinician asks an AI tool for vancomycin dosing guidance. The patient has an AKI. No creatinine was included in the prompt.

The model returns a specific, formatted, confident answer. The interval is correct for moderate renal impairment, which is the most common case in the training data. The patient’s creatinine puts her in severe impairment. The answer was not fabricated. It was not wrong in a way that looks wrong. It was wrong in a way that required knowing what the model was never given.

Nothing in the output flagged the gap. The model had no creatinine, so it assumed one. It did not say so.

This is the failure mode that does not announce itself. The citation that does not exist is easier to catch than the dose that was almost right.

-----

## What To Do

Three moves, in order.

**1. Verify everything you did not provide.**
Every number, every dose, every named fact the model generated without you supplying it first. Not sampled. Every one. The model’s confidence carries zero information about accuracy. A wrong answer and a right answer arrive in identical prose.

**2. When the output doesn’t match your expectation, say so.**
Give the model your reasoning and ask where it diverged from yours. This is the move that makes the invisible visible.

*“I would have dosed this at X given her renal function. What did you assume, and does that change your answer?”*

The model will usually surface exactly what it was missing. “I did not have a creatinine value and assumed normal renal function.” That is context blindness named, and it tells you precisely what to add before you act on the output. A beginner does this when something looks off. An advanced user does it as a final check even when the output looks right.

**3. Calibrate over time.**
Track how the tool performs on your actual cases. Not in theory, not on the vendor’s benchmark, on yours. A tool that performs well on general medicine prompts may perform differently on the specific patient population you see. You will not know until you have checked enough outputs against enough ground truth to have a read on its sensitivity and specificity in your hands.

-----

## How It Fails

Verification gets sampled. The first few outputs were right, so the checking becomes lighter. Volume compounds this: when you are moving fast and the outputs keep looking good, the hundred-and-first goes through on the pattern of the hundred before it.

The other failure is subtler. Clinicians interrogate the model only when the output surprises them. If the output matches their prior, they move on. But the cases where the model’s assumption aligns with yours are exactly the cases where shared blindness is possible. You both assumed the same wrong thing. Neither of you flagged it.

Discernment is not a feeling that something looks right. It is a check against something real.

-----

## Cross-refs

- F1 — The Four Primitives (why the model cannot know what was not in the window)
- Spread 0 — The 4D Model (Discernment as one of four decisions)
- D4 — Context Is Everything (putting the right patient in the window before the output is generated)
- D5 — Prompting Is a Consult (how to give the model what it needs)
- D10 — The Signature Rule (Diligence: owning the output after Discernment)

-----

