---
title: Skill Engineering
section: 06-builder-track
yield: low
status: draft
created: 2026-06-16
---

# B2 — Skill Engineering: Codifying a Workflow Once

**HY-1**

---

## Bottom Line

A skill is a workflow you have done well enough, often enough, to write down once and reuse. Engineering skills means turning your best prompt into a named, repeatable capability instead of retyping it and hoping for the same result.

---

## The Concept

A one-off prompt solves today's instance. A skill captures the pattern behind it: the role, the steps, the constraints, the output format, packaged so it runs the same way every time. It is the move from prompts to pipelines (D3), made reusable and given a name you can trigger.

Every modern tool exposes this under a different label: custom commands, saved prompts, skills, project templates, custom GPTs. The mechanism underneath is identical. A unit you trigger, that loads its own instructions on demand and runs them.

The value is consistency and transfer. The skill encodes your judgment once, so the tenth use is as good as the first, and a colleague who runs your skill gets your standard rather than their improvisation. That is also the quiet power of it: a skill carries expertise to people who do not yet have it.

A skill is also the right home for failure controls. The verification step, the de-identification rule, the "ask before assuming" instruction can live inside the skill so they fire on every run, instead of depending on whoever is at the keyboard to remember them.

One discipline governs all of it: scope. A skill that tries to do everything triggers at the wrong times and does nothing well. One skill, one job, one clear trigger.

---

## Clinical Anchor

An educator writes a skill that turns a rough clinical case into a structured teaching script: the learning objective, the stem, the discriminating findings, the debrief questions, in a fixed format every time. Run it on any case and the shape comes out the same.

The judgment about what makes a teaching script good was made once, encoded into the skill, and now it transfers to every resident who runs it, including the ones who do not yet have that judgment themselves. The skill is the senior educator, available at 2 a.m., applied identically to the hundredth case as to the first.

---

## What To Do

1. Find the prompt you keep retyping. That repetition is your first skill, already identified.
2. Write it as role, steps, constraints, format (D5). Put the safety checks inside it, not beside it.
3. Give it one job and a clear trigger. Resist the all-in-one skill that does six things adequately.
4. Test it on a hard case, not an easy one. A skill that only works on the obvious case is a demo, not a tool.
5. Version it deliberately. When you improve the skill, the improvement reaches every future use at once. That is the point, and it is also the risk.

---

## How It Fails

A skill encodes a judgment, and a bad judgment encoded is a bad judgment at scale. The flawed step that was harmless when you ran it once now fires on every use, silently, with your standard attached. And because the skill "works," nobody re-examines the logic inside it. The error is systematic, identical across everything the skill touched, and traceable to one assumption you wrote down months ago and never looked at again. Cost: a uniform mistake distributed across every output the skill produced, by every person who trusted it.

---

## Cross-refs

- D3 — From Prompts to Pipelines (the workflow a skill formalizes)
- D5 — Prompting Is a Consult (the prompt structure a skill encodes)
- D6 — Standing Orders for Your AI (rules that live inside the skill)
- B5 — Evals: Testing What You Built (catching the encoded error before it scales)

---

tags: [faai, builder-track]
