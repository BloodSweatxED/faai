---
title: "Training Data and the Cutoff"
description: "The model's knowledge is a frozen snapshot of its training data: enormous, uneven, and ending months before today. Anything after the cutoff, and anything underrepresented before it, has to come th..."
type: Spread
section: 03-foundations
yield: medium
status: draft
created: 2026-06-11
tags:
  - faai
---
# Training Data and the Cutoff

<div class="hy-badge hy-2">HY-2 · Medium Yield</div>

---

## Bottom Line

The model's knowledge is a frozen snapshot of its training data: enormous, uneven, and ending months before today. Anything after the cutoff, and anything underrepresented before it, has to come through the window.

---

## The Concept

A model learns during training, once, on a fixed corpus of text. After that, its weights are frozen. Using the model does not teach it anything. Your conversations do not update it. The next version of the model is a new training run, not your model having learned.

Three properties of that snapshot matter clinically.

**It has a date.** Every model has a knowledge cutoff, typically six to eighteen months before you are using it. A guideline revised after the cutoff does not exist for the model, and the model will not tell you that. Asked about current recommendations, it confidently produces the recommendations that were current when its data ended.

**It is uneven.** The training corpus is the internet plus licensed text. Common conditions, US-centric practice, and well-published topics are densely represented. Rare diseases, local practice patterns, non-English literature, and anything paywalled into obscurity are thin. Where the data is thin, prediction degrades and confabulation rises (see F2). The model's competence map does not match the textbook's table of contents, and there is no legend telling you which regions are thin.

**It absorbed the disagreements.** The corpus contains contradicting guidelines, outdated practices, and confident wrong answers, all of it. The model averages over what it saw. On settled questions, the average is fine. On contested ones, you can get either side of the argument depending on how you phrase the question.

The fix for all three is the same: anything time-sensitive, local, or contested goes in the window. Current guideline, your protocol, the actual paper. The window overrides the snapshot.

---

## Clinical Anchor

A hospitalist asks a chatbot for the current anticoagulation recommendation in a scenario where the major society guideline changed eight months ago. The model gives the old recommendation, fluently, with the old rationale. Nothing in the answer says "as of my training data." The answer was correct in the year the model was trained. The patient is being treated in this one.

---

## What To Do

1. Know the cutoff of the tools you use, the way you know a reference book's edition year.
2. For anything guideline-driven, supply the guideline. Do not ask the model what is current; tell it what is current and ask it to apply it.
3. Treat rare-disease and niche-topic output with a higher index of suspicion. Thin training data is where fabrication concentrates.
4. Remember that the model does not learn from you. The correction you gave it yesterday is gone. If a correction must persist, it belongs in your standing instructions (see D6).

---

## How It Fails

The failure is silent staleness. The model never says "my information may be outdated" unless that phrase happens to be the plausible pattern, and a stale answer reads exactly like a current one. Clinicians who would never quote a 2019 edition of a guideline will accept a chatbot answer without asking what edition it was trained on. The cost arrives when practice has moved and the model has not, on exactly the kind of question where you reached for the tool because you had not kept up either.

---

## Cross-refs

- F1 — The Four Primitives (training vs the window)
- F2 — Confabulation (what happens where data is thin)
- D4 — Context Is Everything (the window overrides the snapshot)
- D6 — Standing Orders for Your AI (making corrections persist)

---

