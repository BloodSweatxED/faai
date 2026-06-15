---
title: "The Five-Minute Model"
description: "A model predicts the next word based only on what is in front of it right now, and you control everything through what you put there."
type: Spread
section: 01-getting-started
yield: high
status: draft
created: 2026-06-11
tags:
  - faai
---
# The Five-Minute Model

<div class="hy-badge hy-3">HY-3 · High Yield</div>

---

## Bottom Line

A model predicts the next word based only on what is in front of it right now, and you control everything through what you put there.

---

## The Concept

That sentence is the whole technology. Five minutes to unpack it.

**It predicts.** A large language model is a pattern completion engine trained on enormous amounts of text. Given everything written so far, it produces the most plausible next word, then the next, then the next. There is no database lookup, no reasoning module, no fact checker underneath. When the output reads like thinking, the model is predicting what thinking looks like in text.

**It only sees the window.** The model works inside a context window: the block of text it can see at this moment. Your prompt, the conversation so far, any documents you attached. That is the entire universe. It has no memory of your last session, no knowledge of your patient, no access to your hospital's protocols unless those things are in the window right now.

**Plausible is not the same as true.** Because the engine is prediction, the output is always fluent and always confident. A correct answer and a fabricated one arrive in identical prose. Confidence is a property of the text, not evidence about accuracy.

**You hold one lever.** You cannot reach into the model. The only control surface is the input: what you put in the window and how you ask. Input quality determines output quality. Fully.

That is the model. Everything else in this book is the clinical application of those four facts.

---

## Clinical Anchor

You ask a chatbot: "What's the dose adjustment for this patient's renal function?"

It answers, instantly and specifically. But look at what was in the window: one sentence. No creatinine, no weight, no drug, no patient. The model predicted what a dose-adjustment answer looks like, because that is the only thing it can do with what you gave it. The answer is plausible. Whether it is true for your patient was never in play, because your patient was never in the room.

---

## What To Do

1. Before you ask, ask yourself: is everything the model needs in the window? If you have not provided it, the model does not have it.
2. Treat fluency as zero evidence. Judge the output the way you judge a test result, not the way you judge a colleague's tone of voice.
3. When output disappoints, fix the input first. It is the only lever you have, and it is usually the problem.

---

## How It Fails

Clinicians map the chatbot onto things they already trust: a search engine, a reference text, a colleague. It is none of these. A search engine retrieves. A reference is curated. A colleague knows when to say "I'm not sure." The model predicts, always, with the same confidence, whether the window holds everything or nothing. The cost of the wrong mental model is misplaced trust, and misplaced trust is the root of nearly every failure mode in this book.

---

## Cross-refs

- F1 — The Four Primitives (this spread, at full depth)
- D4 — Context Is Everything (the window in practice)
- D8 — Judging the Output (what to do about fluency)

---

