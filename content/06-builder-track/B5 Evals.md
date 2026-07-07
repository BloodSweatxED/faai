---
title: Evals — Testing What You Built
section: 06-builder-track
yield: medium
status: draft
created: 2026-06-16
---

# B5 — Evals: Testing What You Built

**HY-2**

---

## Bottom Line

An eval is a repeatable test of whether your AI tool still does its job. Without one, you find out it broke from the people downstream of it. With one, you find out before they do.

---

## The Concept

Software you write either works or visibly fails. AI tools do neither. They degrade quietly: a model update, a changed source, a drifted prompt, and the output gets subtly worse while the tool keeps running and keeps sounding right (D3, F4). Nothing throws an error. An eval is how you make that silent failure loud.

An eval is a set of known cases with known good answers, run against your tool on a schedule. It is the unit test for something that does not behave the same way twice (F5). You are not asking "did it pass." You are watching a rate across many cases, and watching that rate move when something underneath changes.

Build the eval from real failures. Every time the tool gets something wrong, that case becomes a permanent test. The eval set is your tool's memory of its own mistakes, the one thing standing between it and making the same error twice unnoticed.

The highest-value moment to run an eval is immediately after anything changes: a model version, a prompt edit, a new data source. That is exactly when clinicians assume "it still works," and exactly when it often does not.

---

## Clinical Anchor

A clinician who built a discharge-instruction generator keeps twenty real cases with the correct output written out for each. Every time the model updates, she reruns the twenty.

One update, three of them come back with a subtly wrong medication instruction. The tool still ran. The output still read like every correct instruction before it. Without the eval, those three would have shipped to patients, and the first signal would have been a phone call or worse. The test she built before she trusted the tool caught what no error message ever would have.

---

## What To Do

1. Before you trust a tool, build its test set. Twenty real cases beat a thousand imagined ones.
2. Turn every failure into a permanent case. The eval set grows from real mistakes, not guesses.
3. Rerun after every change: model version, prompt, data source. Change is the trigger.
4. Track the rate, not the single run. Probabilistic output needs a denominator (F5).
5. Set a floor. If the pass rate drops below it, the tool comes down until it is fixed. No exceptions for how useful it is.

---

## How It Fails

No eval, so the only detector left is harm. The tool degrades after a silent model swap (F4), the outputs stay fluent, and the first signal is a person downstream catching a mistake that had been running for weeks. The version with extra steps: the eval exists, but nobody reruns it after changes, which is the same failure dressed up as diligence. Cost: the degradation window, measured in everything the tool produced between the day it quietly broke and the day a human happened to notice.

---

## Cross-refs

- D3 — From Prompts to Pipelines (the silent degradation evals exist to catch)
- D8 — Judging the Output (discernment, made systematic and scheduled)
- F4 — The Wrapper Is Not the Model (the model swap under your tool)
- F5 — Same Question, Different Answer (why testing is statistical, not pass-fail)

---

tags: [faai, builder-track]
