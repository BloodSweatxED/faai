---
title: "The 4D Model"
description: "Every AI interaction is four decisions. Most clinicians only make one. The other three are where the harm lives."
type: Spread
section: 03-foundations
yield: high
status: draft
created: 2026-06-09
tags:
  - faai
---
# The 4D Model

<div class="hy-badge hy-3">HY-3 · High Yield</div>

---

## Bottom Line

Every AI interaction is four decisions. Most clinicians only make one. The other three are where the harm lives.

---

## The Concept

When you hand a task to AI, you are not just writing a prompt. You are making four consecutive decisions whether you realize it or not.

**Delegation.** Should this go to AI at all, and in which mode? Not every task belongs there. Of the ones that do, some should be automated with verification, some require you and the model working together, and some should never run without you in the loop at every step.

**Description.** What exactly are you asking for, and does the model have everything it needs to do it? This is the prompt, plus the context behind it. Most clinicians start here. It is the third most important decision.

**Discernment.** Is what came back actually correct? Fluent is not accurate. Complete-looking is not complete. Appropriate for a generic patient is not appropriate for yours.

**Diligence.** You own the output the moment you use it. Verification scales with stakes. Your name on a document means you are accountable for every sentence in it, regardless of who or what drafted it.

The three modes of delegation:

- **Automation.** AI does it, you verify. Fast, appropriate for low-stakes reversible tasks.
- **Augmentation.** You and AI iterate together. Right for anything patient-facing or clinically consequential.
- **Agency.** AI acts in loops on your behalf with minimal check-ins. Earned, never assumed. Reserved for tasks you understand deeply enough to audit at any point.

Mode determines how much scrutiny the other three Ds require. Pick the wrong mode and the rest of the framework fails.

---

## Clinical Anchor

58-year-old male, Medicaid, no PCP. Chest pain workup negative. You are discharging him and you open the AI tool to draft discharge instructions.

You type: *"Discharge instructions for chest pain rule-out."*

The output arrives in thirty seconds. It is clean, well-formatted, appropriately cautious. It says to avoid strenuous activity, follow a heart-healthy diet, and follow up with a cardiologist within one week. Return to the ED if chest pain returns or worsens.

You read it. It looks right. You sign it. He goes home.

What the model did not know, because you did not put it in the window: there are no cardiology appointments available for six weeks. He does not have a way to get there if he did. He does not know that "return to the ED" is a real instruction, not a legal disclaimer. And he does not know what symptoms should actually bring him back, because the instruction used the same words as his original complaint.

The instruction was not wrong. It was written for a generic patient. Yours was not generic.

Walk it back through the four Ds:

**Delegation:** discharge instructions are a reasonable AI task, low-stakes, reversible before signing. Augmentation was the right mode. You used automation.

**Description:** the prompt contained no patient context. No age, no insurance, no social situation, no specific symptom profile, no follow-up reality. The model predicted what a correct discharge instruction looks like. It had no way to predict what this patient needed.

**Discernment:** the output looked complete, so it read as complete. You did not ask whether it was correct for him. You asked whether it looked right. Those are different questions.

**Diligence:** you signed it. It is yours. If he comes back in three days with an MI and a lawyer, the instruction you handed him is exhibit A.

---

## What To Do

Before you open the tool, answer two questions:

1. Can I verify this output against something real?
2. Do I own the consequence if it is wrong?

If both answers are yes, you are in the right place. Now pick your mode. Patient-facing clinical content defaults to augmentation until you have characterized how the tool performs on your patient population.

When you prompt, put the patient in the window. Not the generic patient. This one. Age, relevant history, the actual follow-up plan that exists, the thing they need to understand to stay safe. The model will write for whoever you describe. If you describe nobody, it writes for everyone, which means it writes for no one.

Before you sign, read it as if you wrote it. Not for grammar. For accuracy to this patient in this situation.

---

## How It Fails

Clinicians treat Description as the whole framework. They learn to write better prompts and assume that solves the problem. It improves the output. It does not replace the other three decisions.

The published AI harms in medicine are not mostly prompting failures. They are Delegation failures (wrong mode, wrong task) and Diligence failures (signed without verification). The prompt was often fine. The decision around it was not.

A better prompt on a mis-delegated task still produces a mis-delegated task, faster and with more confidence.

---

## Cross-refs

- F1 — The Four Primitives (why the model cannot know what you did not provide)
- D1 — The Delegation Decision (how to triage a task before handing it off)
- D2 — Stakes and Reversibility (the risk matrix for choosing your mode)
- D5 — Prompting Is a Consult (Description in full)
- D8 — Judging the Output (Discernment operationalized)
- D10 — The Signature Rule (Diligence in full)

---

