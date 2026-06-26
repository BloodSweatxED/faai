---
title: "PHI — What Counts and What Doesn't"
description: "PHI is health information plus anything that could identify the patient, and the list of identifiers is longer than your intuition says. Removing the name removes one identifier out of eighteen."
type: Spread
section: 02-legal-compliance
yield: high
status: draft
created: 2026-06-09
tags:
  - faai
---
# L1 — PHI: What Counts and What Doesn't

<div class="hy-badge hy-3">HY-3 · High Yield</div>

---

## Bottom Line

PHI is health information plus anything that could identify the patient, and the list of identifiers is longer than your intuition says. Removing the name removes one identifier out of eighteen.

---

## The Concept

Protected health information is the combination that matters: information about health or healthcare, linked to something that could identify the person. Either half alone is fine. A creatinine of 4.2 belongs to nobody. A name with no clinical content is a phone book. Together, they are PHI, and everything in HIPAA attaches to them.

HIPAA names eighteen identifier categories, and the de-identification standard requires removing all of them. The ones clinicians forget:

- **Dates.** All dates tied to the person: admission date, procedure date, date of death, any date more specific than the year. "Presented on March 14th" is an identifier.
- **Ages over 89.** "A 94-year-old" is an identifier by itself.
- **Geography smaller than a state.** The hospital name, the town, "our small community ED in [county]."
- **The long tail.** MRN, account numbers, device serial numbers, photos, license plates, IP addresses.
- **The catch-all.** Any other unique identifying characteristic. This is the one that catches case descriptions: the circus performer with the unusual injury is identifiable to everyone who heard about the case, no name required.

The clinical habit that matters: rare combination equals identification. A diagnosis, an age, a date, and a town can pin a person precisely when the combination is unusual, and unusual combinations are exactly what makes a case interesting enough to type into a chatbot.

Why this spread sits in front of the AI book: every prompt is a disclosure to whoever operates the tool. The PHI question has to be answered before the typing, every time. De-identification is something you do, deliberately, against the list. It is not what is left over after you skip the name.

<div class="faai-box do-not-do-this">
  <div class="faai-box-label">Do Not Do This</div>
  <p>Do not treat "no name, no MRN" as de-identified. Dates, location, age over 89, rare mechanisms, and unusual clinical stories can identify the patient by combination.</p>
</div>

---

## Clinical Anchor

A resident asks a public chatbot for help with a presentation: "67-year-old man, presented to our ED on June 3rd after a tractor rollover at his farm in [town], now with this complication..."

No name, no MRN. He would tell you it is de-identified. Count the identifiers: age, date, mechanism, town, and a catch-all-grade unique circumstance. In a town of four thousand, this is a positive identification with a sentence of effort. It went to a third-party server, under a consumer terms-of-service, from a personal account. That is a reportable breach assembled entirely from details that each felt harmless.

---

## What To Do

1. Learn the categories that bite: names, dates, geography below state level, ages over 89, unique circumstances. Audit every prompt against them before sending.
2. De-identify by abstraction, not deletion: "a man in his 60s, several days after a crush mechanism." Keep the clinical physics, drop the fingerprints.
3. For rare presentations, abstract harder. The more interesting the case, the more identifying its details.
4. When the clinical question genuinely requires the specifics, that is not a de-identification problem. That is a "use the institutionally covered tool" problem (L2).

---

## How It Fails

De-identification gets equated with anonymization-by-name-removal, because the name feels like the identity. The other seventeen categories ride through in prompts, presentations, and posts, and the combination does the identifying. The failure is invisible at the moment of disclosure; nothing bounces, nothing warns. It becomes visible when the patient, the family, or the compliance office recognizes the case, and by then the question is not whether PHI was disclosed but how far it traveled. Cost: a breach investigation centered on a prompt you cannot recall and the tool retained.

---

## Cross-refs

- L2 — HIPAA Basics (where the rules attach and what "covered tool" means)
- L4 — Consent and Disclosure (telling patients about AI in their care)
- D6 — Standing Orders for Your AI (a no-PHI rule that fires when you forget)

---
