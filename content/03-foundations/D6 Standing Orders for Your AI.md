---
title: "Standing Orders for Your AI"
description: "Anything you find yourself typing into every prompt belongs in an instruction file: the standing orders your AI runs under by default, written once, enforced every time."
type: Spread
section: 03-foundations
yield: medium
status: draft
created: 2026-06-11
tags:
  - faai
---
# D6 — Standing Orders for Your AI

<div class="hy-badge hy-2">HY-2 · Medium Yield</div>

---

## Bottom Line

Anything you find yourself typing into every prompt belongs in an instruction file: the standing orders your AI runs under by default, written once, enforced every time.

---

## The Concept

Every serious AI tool has a place for persistent instructions: custom instructions in the chatbot, project files, system prompts, files like CLAUDE.md in developer tools. Whatever the name, the mechanism is the same. The contents get loaded into the context window at the start of every session, before you type anything. It is the one exception to "the model remembers nothing": not memory, but a protocol sheet taped to the inside of the door.

The clinical analogy is exact. Standing orders exist so that the things which should always happen do not depend on someone remembering to order them. Same here. Three categories belong in the file:

- **Your role.** Who you are, what you practice, who you write for. "EM attending, academic site, writes patient materials at a sixth-grade level." Every output calibrates against this without being told.
- **Your defaults.** Format and style preferences you would otherwise repeat: concise over thorough, tables for comparisons, generic drug names, US units.
- **Your hard rules.** The non-negotiables: never include patient identifiers, flag uncertainty explicitly instead of guessing, cite a source or say there is none, ask before assuming missing clinical values.

The payoff is consistency under fatigue. At hour ten of a shift you will not remember to add "flag your uncertainty" to a prompt. The file does not get tired. It is also where corrections go to persist: the model will not remember Tuesday's feedback on Wednesday (F3), but an instruction file does.

One discipline: keep it short. Instruction files are context (D4), and a bloated one degrades output like any other heavy window. A page of rules you mean beats five pages of rules you copied.

---

## Clinical Anchor

A hospitalist sets three hard rules in her chatbot's custom instructions: no PHI in any output even if I paste it in carelessly; flag any claim you are uncertain about with [VERIFY]; if I ask a clinical question without the values you need, ask for them instead of assuming.

Two weeks later, tired, she pastes a question about dosing without the weight. The model does not produce a confident answer for an assumed 70-kilogram patient. It asks for the weight, because the standing order told it to. The rule fired exactly when she was least likely to have typed it: that is the entire value proposition. The file is the version of her that is never post-call.

---

## What To Do

1. Watch your own prompts for a week. Anything you type more than twice goes in the file.
2. Write the three sections: role, defaults, hard rules. Keep the whole thing under a page.
3. Put the safety rules in imperative, testable language. "Flag uncertainty with [VERIFY]" is enforceable. "Be careful about accuracy" is decoration.
4. Test the rules on purpose. Paste a fake identifier, ask an underdetermined question, and watch what happens. A standing order you have never seen fire is a standing order you are trusting on faith.
5. Re-read the file quarterly. Your defaults drift, and stale instructions conflict with new habits.

---

## How It Fails

Instructions silently conflict with a specific request, and the model picks one without telling you. You ask for a detailed mechanism explanation; the file says "always concise"; the output splits the difference and drops the half you needed. Worse, the conflict can land on a safety rule: a sufficiently insistent prompt can override "always flag uncertainty," and nothing announces the override. The cost is a rule you thought was enforced, was not, discovered only when the output it should have caught gets through. Standing orders reduce reliance on vigilance. They do not retire it.

---

## Cross-refs

- D4 — Context Is Everything (the file is context, loaded first)
- D5 — Prompting Is a Consult (what stays in the prompt vs moves to the file)
- F3 — Training Data and the Cutoff (why corrections do not persist on their own)
- F4 — The Wrapper Is Not the Model (the vendor's hidden instructions above yours)

---

