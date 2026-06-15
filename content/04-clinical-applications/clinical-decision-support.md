---
title: "AI Clinical Decision Support"
description: "AI-era CDS fails the same way alert-era CDS failed, plus two new ways: its reasoning is opaque, and its accuracy quietly depends on data quality and drift nobody at the bedside can see. Treat every..."
type: Spread
section: 04-clinical-applications
yield: medium
status: draft
created: 2026-06-11
tags:
  - faai
---
# C2 — AI Clinical Decision Support

<div class="hy-badge hy-2">HY-2 · Medium Yield</div>

---

## Bottom Line

AI-era CDS fails the same way alert-era CDS failed, plus two new ways: its reasoning is opaque, and its accuracy quietly depends on data quality and drift nobody at the bedside can see. Treat every recommendation as a consult from a service that will not show its work.

---

## The Concept

Clinical decision support has been in the EHR for decades as rules: if potassium high and patient on spironolactone, fire alert. The rules were dumb but inspectable; you could read the logic and decide where it was wrong.

The new generation is predictive and generative: machine-learning risk scores (deterioration, readmission, sepsis), imaging flags queued for your attention, and increasingly, language-model summaries and suggestions woven into the chart. Three properties changed, and each changes your job.

**The logic went opaque.** A rule could be audited; a model's output is a score with, at best, a list of contributing features. You cannot inspect your way to trust. Trust has to come from performance data, ideally on your institution's population, which means the right to ask for that data is now part of the bedside skillset (D8: calibration).

**The input is the chart, and the chart is dirty.** These models consume documentation: vitals charted late, problem lists never reconciled, copy-forward text. Garbage in is now invisible garbage in, because the model does not flag that its inputs were stale. A score computed on bad data looks identical to a score computed on good data.

**The model drifts.** Performance degrades as practice patterns, populations, and documentation habits shift under it; the model validated at deployment is not the model's accuracy today (the sepsis spread, C3, is the canonical story). Recalibration is the institution's job, but knowing that drift exists is yours.

What stays constant from the old era: alert fatigue is the dominant failure mode of all CDS, and the liability cuts both ways (L3): following a bad flag off the standard of care and dismissing a good flag undocumented are both losing positions.

---

## Clinical Anchor

A deterioration score pages you about bed 14: risen overnight, now above threshold. You eyeball the patient: comfortable, vitals fine, eating breakfast. The score has cried wolf three times this week, and the temptation is a one-click dismiss.

The defensible move costs ninety seconds: why did it fire? The contributing factors show a creatinine bump and a heart rate trend buried across two shifts of charting; nobody had connected them. The patient is in early AKI from the diuretic adjustment, caught a day early by a model that was right for inspectable reasons and would have been dismissed on vibes.

Next week the same score fires on bed 9 because a CNA charted a manual blood pressure taken during a coughing fit. Same score, same threshold, garbage input. The skill is not trusting or distrusting the tool. It is the ninety seconds: interrogate the inputs, decide, document.

---

## What To Do

1. Treat the score as a consult, not a verdict: a prompt to look, never a substitute for looking, and never a reason to act against your exam without resolving the conflict.
2. Interrogate before you dismiss or obey: what inputs drove this, and are they real, current, and about this patient?
3. Document engagement either way, one line (L3): why you acted, or why you reasonably did not.
4. Ask the deployment questions once per tool: validated on what population, performance at our site, who monitors drift, when was it last recalibrated. No answers is an answer.
5. Report the misfires. Drift gets caught by aggregated bedside reports long before the annual review does.

---

## How It Fails

Alert fatigue, now with a worse credibility curve. The model fires often, is usually ignorable, and trains the floor to dismiss it; then drift degrades it further, dismissal becomes universal, and the one true flag dies in a queue of forty. The new twist is misplaced deference at the other pole: the score's mathematical costume earns it more trust than a colleague's verbal concern would get, so clinicians override their own exam to follow a number computed from a mischarted blood pressure. Both poles share the cost: the patient the tool was deployed to catch, missed, with an audit log proving the flag fired and was waved off in four seconds.

---

## Cross-refs

- C3 — The Epic Sepsis Model (drift and validation, the case study)
- D8 — Judging the Output (calibration as a clinical skill)
- L3 — Liability When the AI Is Wrong (both edges of the alert)
- F4 — The Wrapper Is Not the Model (the tool changing under you)

---

