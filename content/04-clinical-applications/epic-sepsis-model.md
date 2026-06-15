---
title: "The Epic Sepsis Model"
description: "The most widely deployed sepsis prediction model in American medicine missed two-thirds of sepsis cases in independent validation while burying clinicians in false alerts. Every lesson in this book..."
type: Spread
section: 04-clinical-applications
yield: medium
status: draft
created: 2026-06-11
tags:
  - faai
---
# C3 — The Epic Sepsis Model: A Case Study

<div class="hy-badge hy-2">HY-2 · Medium Yield</div>

---

## Bottom Line

The most widely deployed sepsis prediction model in American medicine missed two-thirds of sepsis cases in independent validation while burying clinicians in false alerts. Every lesson in this book about validation, drift, and vendor claims is in this one story.

---

## The Concept

The Epic Sepsis Model shipped inside the most widely used EHR in the country and was adopted by hundreds of hospitals, largely on the vendor's internal performance claims. It became the natural experiment the field needed, and the results are the syllabus.

**External validation versus internal claims.** In 2021, University of Michigan researchers published an independent validation (Wong et al., JAMA Internal Medicine): in their hospitalized cohort, the model identified a third of sepsis cases, missed the rest, and generated alerts on a large fraction of all hospitalized patients to do even that. The vendor's reported numbers were dramatically better. Neither party was exactly lying; the gap was the methodology, most notoriously that aspects of the model's development tangled the prediction with the clinical recognition it was supposed to precede. A model can score well by predicting that sepsis will be diagnosed around the time clinicians are already diagnosing it. That is a circular victory with no bedside value.

**The workload denominator.** A model that flags everyone catches everyone. Sensitivity without the false-alert denominator is marketing, not evidence. The bedside question is always paired: what does it catch, and what does it cost in alerts per true catch?

**The aftermath is the hopeful part.** The scrutiny worked. The vendor rebuilt the model, institutions learned to demand local validation before deployment, and the episode pushed the field toward exactly the posture this book teaches. The system corrected because someone external checked, which is Discernment operating at institutional scale: the same move as D8, with a research budget.

Why this spread exists in a field edition: not to dunk on one vendor, but because you will sit in committee meetings where the next model is pitched on internal numbers, and you should recognize the shape.

---

## Clinical Anchor

A community hospital deploys the model in 2019. The alerts fire constantly; the floor nurses develop the dismiss reflex within a month, the hospitalists within two. A few genuinely early catches happen and become the anecdotes that justify the noise.

Then the 2021 paper circulates. The sepsis committee pulls local data and finds their own numbers match Michigan's: most of their sepsis cases were never flagged before clinical recognition, and the alert burden was enormous. The uncomfortable inventory: two years of alert fatigue, workflow built around a tool performing far below assumption, and, most quietly damaging, the cases everyone assumed were being watched for by the algorithm and therefore watched for less themselves. The safety net that underperforms its reputation is worse than no net, because nets change how people climb.

---

## What To Do

1. For any predictive tool, ask for external validation, not vendor numbers. If none exists, the deployment is the experiment, and someone should be running it as one, with local performance measured against ground truth.
2. Always get the pair: detection rate and alert burden. Refuse to evaluate either alone.
3. Ask what the model actually predicts. "Sepsis" might mean a billing code, an antibiotic order, or a clinical event. The label defines the usefulness.
4. Never subtract your own surveillance because a model is watching. The model's sensitivity is not your sensitivity; the net is not the climber.
5. When credible external evidence lands on a tool you use, pull your local numbers. The literature is the alarm; your data is the answer.

---

## How It Fails

Institutional automation bias: the deployment itself becomes the evidence. The hospital bought it, IT integrated it, the committee approved it, so the floor reasonably assumes somebody validated it, while every party in that chain assumed the same thing about a different party. The vendor's internal numbers pass through procurement unchallenged and emerge at the bedside wearing institutional authority. The cost is years-long: a workforce trained to ignore the tool, patients assumed covered by a net that was not there, and the discovery outsourced to academic researchers who happened to check. The fix in one line: trust attaches to validation, never to deployment.

---

## Cross-refs

- C2 — AI Clinical Decision Support (the general framework this case teaches)
- D8 — Judging the Output (calibration: the same skill at personal scale)
- F4 — The Wrapper Is Not the Model (vendor claims vs delivered machinery)
- L3 — Liability When the AI Is Wrong (the dismissed-alert record)

---

