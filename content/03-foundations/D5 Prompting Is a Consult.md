---
title: "Prompting Is a Consult"
description: "Prompt like you are consulting a brilliant colleague who has never met your patient and forgets everything when the call ends. You already know how to do this. You do it every shift."
type: Spread
section: 03-foundations
yield: high
status: draft
created: 2026-06-11
tags:
  - faai
---
# D5 — Prompting Is a Consult

<div class="hy-badge hy-3">HY-3 · High Yield</div>

---

## Bottom Line

Prompt like you are consulting a brilliant colleague who has never met your patient and forgets everything when the call ends. You already know how to do this. You do it every shift.

---

## The Concept

You have been trained in exactly this skill. A good consult request names who you are, who the patient is, what you need, and by when. A bad one is "patient in 12, can you take a look?" The consultant's quality matters less than the quality of the question, and every clinician learns this in the first month of residency.

A prompt is a consult to a colleague with two specific impairments: total amnesia and no access to the chart. Brilliant, endlessly patient, and starting from absolute zero, every time. Structure the call accordingly. Five parts:

- **Role.** Who the model should be: "You are reviewing this as an EM attending writing for a patient with a sixth-grade reading level." Role sets register, depth, and what gets assumed versus explained.
- **Context.** The patient, the situation, the documents. Everything from D4. This is the bulk of a good prompt, just as the one-liner and relevant history are the bulk of a good consult call.
- **Task.** The specific ask, as a verb: draft, compare, extract, translate, critique. "Thoughts on this?" is not a task. Consultants hate that question and the model handles it worse than they do, because it answers it anyway.
- **Constraints.** The hard rules: formulary, length, reading level, what to exclude, what to do with uncertainty ("if information is missing, ask rather than assume").
- **Output format.** What the deliverable looks like: a table with these columns, a paragraph for the chart, a list ordered by urgency.

Two principles govern all five. Specificity beats length: ten precise lines outperform forty vague ones, and padding actively hurts (D4, the heavy window). And examples beat adjectives: "warm but direct, like this: [example]" outperforms three sentences describing the tone you want. Showing is a stronger instruction than telling, because the model completes patterns, and an example is a pattern.

---

## Clinical Anchor

Weak: *"Write discharge instructions for a diabetic foot infection."*

The output is competent and generic: keep the wound clean, take your antibiotics, follow up with your doctor. Reads fine. Says nothing this patient needed.

Strong: *"You are an EM attending writing discharge instructions at a sixth-grade reading level. Patient: 52-year-old man, new diabetic foot ulcer, started on amoxicillin-clavulanate, works on his feet as a line cook, lives alone. Wound care follow-up is in 3 days at our clinic. Task: write discharge instructions covering wound care he can do alone, work modification, and the specific foot findings that mean return to the ED now. Constraints: no medical jargon, under 250 words. Format: short paragraphs with bolded warning signs."*

The second output tells a line cook how to stay off the foot at a job that does not allow it, what daily wound care looks like for a man with no one to help, and which three changes in the foot mean come back tonight. Same model. The difference is that the second one received a consult and the first received a topic.

---

## What To Do

1. Build the prompt in five parts: role, context, task, constraints, format. Out loud or on the screen, same order every time, until it is automatic.
2. Replace adjectives with examples wherever output quality matters. One sample of the format you want is worth a paragraph describing it.
3. Add the uncertainty constraint to anything clinical: "if you are missing information you need, ask me instead of assuming."
4. Read your prompt back as if you were the consultant receiving it. If you would page back with questions, the model needed those answers too. It just will not page.

---

## How It Fails

Vague prompts return confident, generic answers, and the confidence gets mistaken for quality. This is the failure that teaches the wrong lesson: the clinician gets a fluent reply to a lazy prompt, concludes the tool works fine, and never learns what the strong version would have produced. There is no error message for a weak consult. The cost is generic medicine dressed as tailored advice, delivered to a specific patient, indefinitely, because nothing in the workflow ever reveals the gap.

---

## Cross-refs

- D4 — Context Is Everything (the context component, in full)
- D6 — Standing Orders for Your AI (the parts of the consult you stop retyping)
- D8 — Judging the Output (what to do when the consult comes back)
- D9 — The Iteration Loop (the first output is a draft of your instructions)

---

