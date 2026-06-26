---
title: "Context Is Everything"
description: "The model knows exactly what is in the window right now and nothing else. Description is mostly the work of deciding what goes in the window."
type: Spread
section: 03-foundations
yield: high
status: draft
created: 2026-06-11
tags:
  - faai
---
# D4 — Context Is Everything

<div class="hy-badge hy-3">HY-3 · High Yield</div>

---

## Bottom Line

The model knows exactly what is in the window right now and nothing else. Description is mostly the work of deciding what goes in the window.

---

## The Concept

This is the umbrella concept for everything in Description. Get this one and D5 through D7 become applications of it.

The model has no memory of your patient, your last session, or your institution. It does not know what specialty you practice, what your formulary covers, or what you meant yesterday. The context window (F1) is the whole universe: your prompt, the conversation so far, whatever you attached. If a fact is not in the window, then for the purposes of this output, the fact does not exist.

Clinicians find this hard to internalize because every other entity they consult has standing context. The pharmacist knows the formulary. The consultant can pull up the chart. The colleague remembers last week's conversation. The model has none of that, every single time, and gives no sign of the absence. Asked a question with missing context, it does not say "I'd need to know her creatinine." It assumes a creatinine, silently, and answers for the patient it assumed.

So the skill is context engineering: deciding what goes in the window. Four components, every time:

- **The question.** What you actually want, stated as the thing it is.
- **The relevant facts.** This patient, not the generic one. The values, the history, the constraints of the real situation.
- **The constraints.** What must be true of the answer: reading level, formulary, your institution's pathway, what to do when uncertain.
- **The format.** What the output should look like, so you are not iterating on structure after the fact.

Relevant is the operative word in component two, which brings up the other half of the skill.

> **When the window gets too heavy**
>
> More context is not always better context. A model given an entire chart, a 40-page protocol, or a long conversation with competing instructions starts losing precision. Information buried in the middle of a long context window is processed less reliably than what appears at the beginning or end.
>
> The output still arrives fluent and confident. The degradation is invisible.
>
> Keep context focused. Give the model what it needs for this task, not everything that exists. If you are getting inconsistent outputs on a task that used to work, a bloated context window is the first thing to check.

Context engineering is selection in both directions: putting in what matters, leaving out what does not. The chart dump and the bare question fail the same way, for opposite reasons.

<div class="faai-box clinical-translation">
  <div class="faai-box-label">Clinical Translation</div>
  <p>A context window is not memory. It is the information on the screen right now. If a brilliant consultant could not answer from that packet alone, the model will fill the missing pieces with assumptions.</p>
</div>

---

## Clinical Anchor

The same question, asked twice.

Bare: *"Outpatient treatment for community-acquired pneumonia?"*

The answer is a competent recitation: amoxicillin or doxycycline for healthy adults, respiratory fluoroquinolone or beta-lactam plus macrolide for comorbidities. True, generic, and useless at the bedside, because the decision was never "what does the guideline say." The decision was about her.

With the window loaded: *"68-year-old woman, CAP confirmed on imaging, CURB-65 of 1. COPD on tiotropium, eGFR 38, on warfarin for afib. Lives alone, reliable daughter nearby, can afford generics only. Recommend an outpatient regimen and flag interactions with her med list: [list]."*

Now the output engages the actual problem: the warfarin interaction that rules out the macrolide route, the renal dosing, the COPD that changes her risk class, a regimen she can fill for four dollars. Same model. Same disease. The second answer exists because the second patient does. The first answer was for a patient who does not.

---

## What To Do

1. Before sending, audit the window with one question: could a brilliant stranger answer correctly with only what is on this screen? If not, the gap in the window becomes an assumption in the output.
2. Load the four components: question, relevant facts, constraints, format.
3. Select, do not dump. The relevant labs, not the chart. The pathway section that applies, not the binder.
4. Start a fresh session when the topic changes. A long conversation full of dead ends is a heavy window, and the leftovers contaminate the next answer.
5. When an output goes generic on you, fix the window before blaming the model. Generic out usually means generic in.

---

## How It Fails

You assume it remembers. It does not. The clinician who described the patient thoroughly on Tuesday asks a follow-up on Wednesday, in a new session, and gets an answer for nobody, because the Tuesday context is gone and nothing in the reply says so. Or the same failure inside one session: the conversation drifted long, the early details fell out the back of the window or sank into its middle, and the model is now answering from a digest it never announced it was making. The cost is the same both ways: advice generated for a generic patient, applied to yours.

---

## Cross-refs

- F1 — The Four Primitives (the window as the model's whole universe)
- D5 — Prompting Is a Consult (structuring what goes in)
- D6 — Standing Orders for Your AI (context you should never have to retype)
- D7 — Grounding: RAG and the Second Brain (documents as context)
- D8 — Judging the Output (catching the assumptions the window forced)

---
