---
title: "HIPAA Basics"
description: "HIPAA permits PHI in AI tools under exactly one condition: a business associate agreement between your institution and the vendor. No BAA, no PHI, no exceptions for how useful the tool is."
type: Spread
section: 02-legal-compliance
yield: high
status: draft
created: 2026-06-09
tags:
  - faai
---
# L2 — HIPAA Basics: Where the Chatbot Fits

<div class="hy-badge hy-3">HY-3 · High Yield</div>

---

## Bottom Line

HIPAA permits PHI in AI tools under exactly one condition: a business associate agreement between your institution and the vendor. No BAA, no PHI, no exceptions for how useful the tool is.

---

## The Concept

Strip HIPAA to the parts that govern your AI use and three concepts remain.

**Covered entities and the chain of trust.** You and your institution are covered: bound to protect PHI. A vendor handling PHI on your behalf must be bound into the same chain by a business associate agreement, a contract making the vendor legally responsible for safeguarding what you send. The BAA is the entire dividing line between tools. The enterprise AI scribe your hospital deployed has one. The consumer chatbot on your phone does not. Identical model, possibly the same company; the legal status of typing a patient's details into each could not be more different.

**Consumer tools are not covered, and their terms say so.** Free-tier chatbots may retain your prompts, use them for training, and have humans review them, per terms of service nobody reads. Sending PHI into one is disclosure to an uncovered third party. That it was convenient, well-intentioned, and clinically helpful changes nothing about its status as a breach.

**Minimum necessary still applies.** Even inside a covered tool, use the least PHI the task requires. The habit from L1 does not retire when the BAA appears; the BAA changes what is legal, not what is wise. Less PHI in the window is also better context discipline (D4). The law and the craft point the same direction.

What HIPAA does not do: care how good the tool is. There is no accuracy exception, no "it improved care" defense, no carve-out for tools everyone at the conference was praising. The analysis is plumbing, not merit: where does the data go, and is that destination bound to protect it?

<div class="faai-box use-this-today">
  <div class="faai-box-label">Use This Today</div>
  <p>Before entering patient details, ask one question: is this specific account inside my institution's covered environment with a BAA? If you do not know, treat it as no.</p>
</div>

---

## Clinical Anchor

Two attendings, same hallway, same minute.

One opens the institution's deployed AI assistant, behind single sign-on, covered by a BAA, and pastes the relevant chart excerpt to draft a peer-to-peer appeal letter. Routine use of a covered tool.

The other hits the enterprise tool's clunky interface, gives up, and pastes the same excerpt into the consumer chatbot in a personal browser tab, because it is faster and honestly better at letters. Same excerpt, same purpose, same sixty seconds. This one is a reportable breach with the patient's data now retained by an uncovered company under consumer terms.

The clinical judgment in both rooms was identical. The plumbing was the whole difference, and the second attending never thought about plumbing once.

---

## What To Do

1. Sort every AI tool you touch into two bins: institutionally covered (BAA, deployed for you, sanctioned for PHI) and everything else. If you do not know a tool's bin, it is in the second bin.
2. PHI goes only into the first bin. Strip and abstract per L1 for everything else.
3. The shadow-use trap is real and predictable: when the covered tool is worse than the consumer one, the gap fills with breaches. If the sanctioned tool is unusable, escalate that as the patient-safety issue it is, rather than quietly routing around it.
4. Personal accounts on covered platforms do not count. The BAA covers the institution's tenant, not the same product with your personal login.

---

## How It Fails

The breach does not feel like a breach. It feels like working late. The consumer tool is faster, better at the task, and one tab away, and the prompt that crosses the line reads like every compliant prompt before it. Nothing alerts; the workflow rewards itself daily. Discovery comes later and sideways: an OCR audit, a vendor's training-data disclosure, a patient who finds their case described by a chatbot. By then the question is volume: how many prompts, over how many months, from how many clinicians who all reasoned the same way. Cost: a breach measured in patients, with your login on it.

---

## Cross-refs

- L1 — PHI: What Counts and What Doesn't (what you are protecting)
- L3 — Liability When the AI Is Wrong (the malpractice side of the ledger)
- F4 — The Wrapper Is Not the Model (knowing where the data actually goes)
- D6 — Standing Orders for Your AI (engineering the rule so fatigue cannot break it)

---
