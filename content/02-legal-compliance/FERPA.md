---
title: "FERPA and Medicine"
description: "The other privacy law: learner records, campus clinics, and the paste that doesn't trigger the PHI reflex."
type: Spread
section: 02-legal-compliance
yield: medium
status: draft
created: 2026-06-09
updated: 2026-07-07
tags:
  - faai
---

# L5 — FERPA and Medicine: The Other Privacy Law

**HY-2**

---

## Bottom Line

HIPAA protects your patients' records. FERPA protects your learners', and at a campus clinic it can even govern the chart itself. If you teach, the evaluation you are about to paste into a chatbot is a protected record too.

---

## The Concept

FERPA, the Family Educational Rights and Privacy Act, is the federal privacy law for education records at any institution that takes federal education funds. If you teach students, you handle records it protects: grades, exam scores, clerkship evaluations, remediation plans, professionalism concerns, the MSPE.

It reaches medicine in two places. The first is medical education. The narrative evaluation, the competency-committee summary, the struggling-learner file are education records, and disclosing them outside the institution without consent is the same category of act as disclosing a chart. The second is the counterintuitive one: at student health services, the campus clinic's chart on a student is typically a FERPA "treatment record," excluded from HIPAA entirely. The privacy regime follows the institution, not the stethoscope.

The AI angle is that FERPA has no BAA. The lawful route for a vendor to touch education records runs through the institution's contracts, under what the law calls the school-official exception. A consumer chatbot you signed up for on your own is not a school official, so pasting learner records into it is a disclosure, exactly as pasting PHI into it would be.

And de-identification is harder for learners than for patients, because cohorts are small. "The intern who failed the airway assessment on this rotation" identifies one person to everyone who matters, with no name attached.

---

## Clinical Anchor

MSPE season. A clerkship director pastes three years of narrative evaluations for one student into a consumer chatbot and asks for a synthesis. Her PHI hygiene is perfect; she would never do this with a chart. But the learner file did not trigger the reflex, because it is not patient data.

Everything in that paste was an education record: the grades, the narratives, the remediation note from second year. It is now retained under consumer terms, outside the institution, outside any contract. And the student has a federal right to inspect their own file, which means the file's travels can surface in a way a patient chart's rarely does: the moment the record is disputed, everyone who handled it gets asked how.

---

## What To Do

1. Extend the PHI reflex to learner data. Before pasting, ask about an evaluation exactly what you would ask about a chart.
2. Know which regime governs the record in front of you: patient chart, HIPAA; learner record, FERPA; campus-clinic student chart, usually FERPA, not HIPAA.
3. Use institution-sanctioned tools for learner work. The school-official exception runs through contracts, and your personal chatbot is not in one.
4. De-identify for cohort, not just name. In a class of eight, the rotation plus the deficiency is an identifier.
5. Draft with identity out, add identity after, inside the sanctioned system. The model never needed the name to help you write.

---

## How It Fails

The clinician with flawless patient-privacy habits treats learner data as fair game precisely because it is not PHI. The struggling-learner summary goes into a consumer tool, works beautifully, and becomes routine. Then the learner exercises the right FERPA gives them, requests their file, disputes the record, and the question "who has seen this" gets asked formally. Cost: a protected record sitting in a system the institution never sanctioned, a violation with your login on the upload, and a trust breach with someone whose career you hold in your hands.

---

## Cross-refs

- L1 — PHI: What Counts (the reflex this spread extends to learners)
- L2 — HIPAA Basics (the regime FERPA is not)
- L4 — Consent & Disclosure (surprise as the failure state)
- D11 — Owning the Record (you own what you disclosed)

---

tags: [faai, legal-compliance]
