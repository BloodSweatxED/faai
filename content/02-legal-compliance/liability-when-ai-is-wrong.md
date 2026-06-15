---
title: "Liability When the AI Is Wrong"
description: "When AI contributes to patient harm, the malpractice analysis runs through you, not the tool. The standard of care is still the measure, your judgment is still the subject, and the vendor's contrac..."
type: Spread
section: 02-legal-compliance
yield: high
status: draft
created: 2026-06-11
tags:
  - faai
---
# L3 — Liability When the AI Is Wrong

<div class="hy-badge hy-3">HY-3 · High Yield</div>

---

## Bottom Line

When AI contributes to patient harm, the malpractice analysis runs through you, not the tool. The standard of care is still the measure, your judgment is still the subject, and the vendor's contract already pointed the arrow at you.

---

## The Concept

The legal landscape for clinical AI is unsettled at the edges and brutally settled at the center. The center: malpractice asks whether a reasonable clinician would have done what you did. The tool's involvement does not change the question. It changes the evidence.

Three structural facts to hold.

**The vendor is shielded by design.** Clinical AI contracts uniformly state the tool is informational, does not practice medicine, and leaves all decisions with the clinician. Courts have historically treated clinical software as a tool of the learned professional rather than a product that can commit malpractice, and the "learned intermediary" between the software and the patient is you. Suing the vendor is hard, slow, and rare. Suing the physician is the established path. Plaintiff's counsel takes the established path.

**Liability cuts both ways, and that is the trap.** Today, following the AI off the standard of care is indefensible: "the model recommended it" mitigates nothing. But the other edge is sharpening. As AI tools become standard equipment, ignoring an accurate AI flag becomes its own exposure: the sepsis alert that fired, was dismissed without documentation, and preceded a deterioration is already plaintiff-exhibit material. The defensible position is not "always trust" or "always ignore." It is documented judgment: engaged with the flag, reasoned about it, decided, recorded why.

**The record is the battlefield.** Audit logs preserve what fired, what you saw, how long you looked, what you overrode (D11). Cases will be reconstructed from that scaffolding. Undocumented reasoning, in that reconstruction, is indistinguishable from no reasoning.

---

## Clinical Anchor

A CDS tool flags a drug interaction as low-severity based on incomplete renal data; the true severity for this patient is high. The clinician, alert-fatigued through forty flags that shift, accepts the classification without opening the detail view. The patient is harmed.

At deposition, the questions are not about the algorithm. The algorithm's error is established and largely irrelevant to the physician's case. The questions are: Doctor, what did the patient's renal function show? Did you know the tool lacked that value? Would a reasonable physician, prescribing this combination in renal failure, have checked? The tool being wrong does not answer any of them. The tool was wrong in a way the physician was positioned, trained, and paid to catch. That is the whole case, and it is the standard malpractice case with a software chapter, not a software case at all.

---

## What To Do

1. Treat AI output as information you weigh, never as cover. "The tool said" has no defensive value; "I considered the flag, checked it against X, and concluded Y" has all of it.
2. Document overrides of AI recommendations with one line of reasoning, especially for alerts that later prove right. The undocumented dismissal is the discoverable one.
3. Know which tools in your workflow are FDA-regulated devices versus unregulated informational software. It changes institutional duties and, increasingly, what the standard of care assumes you had available.
4. Apply the D1 screen with liability eyes: never delegate to AI a judgment you could not defend independently, because independently is exactly how you will be asked to defend it.

---

## How It Fails

Clinicians import a consumer intuition: when the product is defective, the manufacturer answers. It is how cars and toasters work, so the assumption transfers silently, and a quiet sense of shared responsibility creeps into daily decisions: lighter checks, faster accepts, the tool as a colleague who holds part of the bag. The tool holds none of the bag. The contract saw to it before deployment, and the discovery arrives at the deposition, where the vendor's lawyer is not in the room and the named defendant is. Cost: the standard of care applied to you alone, retroactively, on decisions made as if it were shared.

---

## Cross-refs

- D10 — The Signature Rule (verification as the liability shield that actually works)
- D11 — Owning the Record (audit logs and the deposition lens)
- L2 — HIPAA Basics (the other legal exposure, separate ledger)
- Clinical section — CDS and sepsis models (alert fatigue in the wild)

---

