---
title: "Same Question, Different Answer"
description: "The model is probabilistic. Ask the same question twice and you can get different answers, both fluent, both confident. Consistency is something you engineer, not something you get."
type: Spread
section: 03-foundations
yield: medium
status: draft
created: 2026-06-11
tags:
  - faai
---
# Same Question, Different Answer

<div class="hy-badge hy-2">HY-2 · Medium Yield</div>

---

## Bottom Line

The model is probabilistic. Ask the same question twice and you can get different answers, both fluent, both confident. Consistency is something you engineer, not something you get.

---

## The Concept

Prediction does not mean picking one fixed answer. At every word, the model holds a probability distribution over what comes next, and most products sample from it. A setting called temperature controls how adventurous the sampling is: low temperature sticks close to the most likely word, high temperature explores. You usually cannot see or set it in clinical products.

The consequence: the same prompt, run twice, can produce different outputs. Usually the differences are cosmetic. Sometimes they are not. A borderline judgment call can land on different sides on different runs, because the underlying distribution was genuinely split and the sampler broke the tie differently each time.

This has three clinical implications.

**A single output is a single draw.** You saw one sample from a distribution, not the model's verdict. If the question is consequential and the answer surprising, asking again is cheap and informative. Wide variation across runs is the closest thing the model has to telling you it is uncertain.

**Reproducibility is not guaranteed.** The output you verified yesterday is not binding on the output generated today, even with an identical prompt. This matters for anything you standardize: patient instructions, protocol summaries, QI reports.

**Variation compounds with everything else that moves.** Sampling variability sits on top of model swaps and wrapper updates (see F4). A workflow can drift for three different reasons that all look the same from the outside.

The mitigation is structural. Templates, standing instructions, and grounding documents narrow the distribution by constraining the window. The tighter the input, the less room the sampler has to wander.

---

## Clinical Anchor

A residency program uses a chatbot to generate practice oral-board cases. Two residents enter the identical prompt. One gets a case where the examiner expects early intubation; the other gets the same stem resolving with noninvasive ventilation. Neither output is wrong. The prompt underdetermined the answer, and the sampler filled the gap differently each time. The residents spend the next hour arguing about which one is "what the AI says," which is the wrong question. There is no "what the AI says." There are draws.

---

## What To Do

1. For consequential, borderline questions, run the prompt more than once. Agreement across runs is mild reassurance; disagreement is a flag that the question is underdetermined or contested.
2. Never cite a single chatbot output as "the AI's answer" in a clinical discussion. It is one sample.
3. For anything you reuse, freeze the output, not the prompt. Verify a specific text once and save that text. Regenerating is re-rolling.
4. Constrain when consistency matters: templates, examples, source documents in the window.

---

## How It Fails

The failure is treating the model as an oracle with one answer per question. A clinician verifies an output, trusts the prompt that produced it, and shares the prompt with colleagues as if it were the verified artifact. Each colleague now generates their own unverified draw and attributes the original verification to it. The cost is a department full of people who believe they are using a vetted tool, holding outputs nobody vetted.

---

## Cross-refs

- F1 — The Four Primitives (prediction as distribution)
- F4 — The Wrapper Is Not the Model (the other sources of drift)
- D3 — From Prompts to Pipelines (freezing verified outputs into workflows)
- D9 — The Iteration Loop (regenerating with intent vs re-rolling)

---

