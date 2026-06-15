---
title: "Confabulation — Why Models Make Things Up"
description: "The model does not lie and does not know it is wrong. It fills gaps with plausible text because filling gaps with plausible text is the only thing it does."
type: Spread
section: 03-foundations
yield: high
status: draft
created: 2026-06-11
tags:
  - faai
---
# Confabulation: Why Models Make Things Up

<div class="hy-badge hy-3">HY-3 · High Yield</div>

---

## Bottom Line

The model does not lie and does not know it is wrong. It fills gaps with plausible text because filling gaps with plausible text is the only thing it does.

---

## The Concept

The industry calls it hallucination. The better clinical word is confabulation: confident, coherent, fabricated detail produced without any awareness of the fabrication. Like a Korsakoff patient telling you about the breakfast he did not eat, the model is not deceiving you. It is completing a pattern.

Here is the mechanism, and it matters that you actually hold it. The model generates the most plausible next word given the window. When the true answer was common in its training data, the most plausible continuation is usually also the correct one. When the true answer is rare, absent, or specific to your patient, the model does not stop. It cannot stop. It produces what a correct answer would look like: a citation with a real journal name and a fabricated page range, a drug interaction that sounds right, a statistic with one decimal place of false precision.

The output quality is identical in both cases. That is the trap. There is no change in tone, no hedge, no flag. The fabricated citation is formatted exactly like the real one because both were produced by the same process: predicting what citations look like.

Two corollaries worth keeping:

**Confabulation concentrates at the edges.** Common knowledge is reproduced reliably. Specifics fail first: exact doses, exact citations, exact numbers, recent events, rare diseases, your institution's protocols.

**Grounding reduces it, nothing eliminates it.** Giving the model the source document to work from (see D7) cuts fabrication sharply, because the right answer is now in the window. It does not cut it to zero.

---

## Clinical Anchor

A resident asks a chatbot for the evidence behind a TXA indication and gets three citations. Two are real. The third has a real journal, a plausible author list, a year that fits, and a DOI that resolves to nothing. It survived two readers because everything about it was formatted like truth. It was caught at the journal-submission stage by an editor who looked it up, which is the difference between embarrassment and retraction.

Nothing about the fake citation looked different. That is the point. It was produced by the same machinery as the real ones.

---

## What To Do

1. Verify every fact the model produced that you did not supply. Citations, numbers, doses, named studies. Every one, not a sample (see D8).
2. Expect fabrication where specifics meet rarity. The more precise and less common the claim, the higher the prior that it is confabulated.
3. Ground when you can. If a source document exists, put it in the window and ask the model to answer from it.
4. Never use absence of hedging as reassurance. The model hedges when hedging is the plausible pattern, not when it is uncertain.

---

## How It Fails

Clinicians learn about hallucination, catch one fake citation early, and conclude they can spot them. They cannot, and neither can anyone else, because there is nothing to spot. Detection by inspection fails by design: the fabrication is constructed from the same patterns as the truth. The only reliable detector is checking the claim against something real. The cost of believing you have a feel for it is the fourth citation, the one you did not check, in the manuscript with your name on it.

---

## Cross-refs

- F1 — The Four Primitives (prediction, the mechanism underneath)
- D7 — Grounding: RAG and the Second Brain (the strongest mitigation)
- D8 — Judging the Output (the verification protocol)

---

