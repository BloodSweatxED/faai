---
title: Tool Engineering
section: 06-builder-track
yield: low
status: draft
created: 2026-06-16
---

# B3 — Tool Engineering: Giving the Model Hands

**HY-1**

---

## Bottom Line

A tool is anything that lets the model act beyond producing text: search, calculate, read a file, call an API. Tool engineering is mostly about boundaries, not capability: deciding what the model is allowed to touch, what it can change, and building the connection so it can never reach further than its job.

---

## The Concept

Without tools, a model can only talk. With tools, it can do: query a database, run a calculation, send a request, write a file. The line between a chatbot and an agent is tools.

The mechanism is function calling. You describe a capability, the model decides when to call it, and your code runs it and hands back the result. The model never touches your systems directly. It asks your code to act, and your code decides whether and how. That gap is where all your control lives.

MCP, the Model Context Protocol, is the emerging open standard for this connection: a common way to expose tools and data to any model, so an integration you build once works across products instead of being soldered to one vendor (F4). Preferring the open standard is how the work survives a product you will eventually leave.

The engineering itself is almost entirely about boundaries. The hard questions are not "can the model do this" but "what can this tool reach, what can it change, and what must it never be able to do." A read-only tool over lab values is one level of risk. A tool that can place an order is a different category entirely (D2).

Least privilege is the whole rule. Give the tool the narrowest access the job requires. A tool that can do more than its task is both an accident surface and an attack surface, especially once external content enters and prompt injection becomes possible.

---

## Clinical Anchor

A clinician builds a tool that lets the model pull a patient's recent labs into the window: read-only, de-identified, from a sanctioned source. The model can now reason over real values instead of ones the clinician retyped from memory.

The capability is small on purpose. It can read; it cannot write, order, or message anyone. That restraint is the design, not a limitation of it. The clinician built exactly the door the task needed and not one inch more, so the worst thing a bad day can produce is a wrong read, never a wrong action.

---

## What To Do

1. Start read-only. A tool that only reads can be wrong, but it cannot act wrongly.
2. Grant the narrowest access the task requires. Least privilege is not paranoia. It is the specification.
3. Put a human checkpoint in front of any tool that commits an action (D2, D10). Agency is earned, never the default.
4. Assume external inputs are hostile. If the model reads content you did not write, it can be injected, and a tool with reach plus an injection is a real exposure.
5. Prefer the open standard over one-vendor wiring, so an integration outlives the product it started in (F4).

---

## How It Fails

A tool with more reach than its job, on the day the input is poisoned. The model reads a document carrying hidden instructions, follows them, and the over-privileged tool does something nobody asked for. The quieter version: a write-capable tool runs inside a pipeline, an upstream step degrades, and the tool commits the bad result before any human reads it (D3). Cost: a real action taken in a real system, by a tool you built, that you never reviewed and did not intend.

---

## Cross-refs

- D2 — Stakes and Reversibility (the risk grid for what a tool may do)
- D3 — From Prompts to Pipelines (tools running unattended in a workflow)
- D10 — The Signature Rule (the human checkpoint before action)
- F4 — The Wrapper Is Not the Model (why the open standard outlasts the vendor)

---

tags: [faai, builder-track]
