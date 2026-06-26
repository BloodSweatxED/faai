---
title: "The Four Primitives"
description: "An AI model does one thing: it predicts the next word based on everything in front of it right now. Every capability, every failure, and every lever you have traces back to that."
type: Spread
section: 03-foundations
yield: high
status: draft
created: 2026-06-09
tags:
  - faai
---
# F1 — The Four Primitives

<div class="hy-badge hy-3">HY-3 · High Yield</div>

-----

## Bottom Line

An AI model does one thing: it predicts the next word based on everything in front of it right now. Every capability, every failure, and every lever you have traces back to that.

-----

## The Concept

There are four things to understand. Everything else is a named pattern built from these.

**Prediction.** The model’s only job is to predict the most likely next token given everything before it. There is no reasoning engine, no database, no logic system underneath. It is extraordinarily sophisticated pattern completion over language. When it seems to think, it is predicting what thinking looks like in text.

**Context.** The model exists entirely inside a context window: the block of text it can see at any given moment. It has no memory between sessions. It does not know your patient, your institution, or your last conversation unless you put that information in front of it. The context window is the room. Everything the model knows is whatever is currently in the room.

**Tokens.** Everything is broken into tokens, roughly three-quarters of a word each. All cost, speed, and capacity limits are denominated in tokens. A 200,000-token context window is a large room. A phone-based clinical chatbot may give you a small one. Token limits are the reason you cannot paste an entire chart and expect a summary of the whole thing.

**Prompt.** You have no access to the model’s internals. The only surface you can touch is what you put in front of it. Instructions, examples, context, constraints: all of it is prompt. Input quality determines output quality, fully and without exception.

<div class="faai-box eli-andre">
  <div class="faai-box-label">ELI André</div>
  <p>Think of the model like a consult resident with no chart access unless you hand over the chart. The context window is the packet you send. Tokens are the page limit. The prompt is the consult question plus the relevant history.</p>
</div>

-----

## Clinical Anchor

Two attendings ask the same AI tool about empiric antibiotic coverage for a febrile neutropenic patient.

The first types: *“Empiric abx for febrile neutropenia?”*

The second types: *“I have a 58-year-old on cycle 4 of carboplatin/paclitaxel, ANC 180, temp 38.4, no localizing symptoms, allergy to penicillin. My hospital formulary is [attached]. What empiric regimen fits our protocol?”*

Same model. Different context windows. Entirely different outputs. The second clinician did not use a better tool. She engineered the context.

-----

## What To Do

When an output disappoints, run through the four primitives before blaming the tool:

1. **Prediction problem?** The task may be outside what pattern completion can reliably do. Judgment calls, novel synthesis, and decisions requiring facts the model was never trained on are prediction-limited.
2. **Context problem?** Is the relevant information actually in the window? Patient details, institutional constraints, the document you want it to reference. If you did not put it there, it is not there.
3. **Token problem?** Is the input too long, the output getting cut off, or the window too small for what you are asking? Trim the input or break the task.
4. **Prompt problem?** Are the instructions specific? Is the output format defined? Are there examples? Vague input produces confident, generic output.

Most failures are context problems. Knowing this is worth knowing.

-----

## How It Fails

Clinicians assume the model knows things it cannot know. They ask about their patient without describing the patient. They ask about their hospital’s protocol without providing it. They ask follow-up questions as if the model remembers the last session. It does not.

The output arrives fluent and confident either way. Fluency carries no information about accuracy. The model predicts what a correct-sounding answer looks like, not whether the answer is correct.

This is not a flaw to be patched in the next version. It is the mechanism. Build your workflows accordingly.

-----

## Cross-refs

- D4 — Context Is Everything (the context window in practice)
- D5 — Prompting Is a Consult (the prompt surface in detail)
- D7 — Grounding: RAG and the Second Brain (injecting your documents into context)
- D8 — Judging the Output (why fluency is not accuracy)

-----
