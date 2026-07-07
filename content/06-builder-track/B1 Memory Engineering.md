---
title: Memory Engineering
section: 06-builder-track
yield: medium
status: draft
created: 2026-06-16
---

# B1 — Memory Engineering: Giving the Model Durable Context

**HY-2**

---

## Bottom Line

Memory is not something the model has. It is context you re-supply. Engineering memory means deciding what the model should always know, what it should know for a given job, and building the durable place that knowledge lives so the right facts load at the right time.

---

## The Concept

Every product that advertises memory is doing the same trick: storing text and injecting it into the context window at the start of a session (D4). The model itself remembers nothing between conversations (F3). So engineering memory is engineering what gets injected, from where, and when.

Think in three layers, increasing in durability and decreasing in how often they should load.

- **Instruction files.** The role and the standing rules that load every single session (D6). Smallest layer, always present. Your standing orders.
- **Project memory.** Facts scoped to one body of work: this study's protocol, this initiative's constraints. Carried across the sessions of that work, absent everywhere else.
- **The knowledge base.** Your notes, protocols, and references, retrieved on demand rather than always loaded (D7). The library, not the desk.

The discipline is curation, not accumulation. Memory bloats by default, and a twenty-page instruction file degrades output exactly like any other heavy window (D4). The skill is keeping the always-loaded layer small and pushing everything else into retrieval, where it scales.

Provenance is the part people skip. A memory that injects a stale fact is worse than no memory, because the fact arrives with false authority and you stop checking it. Date what you store. Let retrieval pull the current version instead of freezing last month's.

---

## Clinical Anchor

A clinician building a research assistant sets up three layers deliberately. One instruction file holds her role and her standing rules. A project memory holds this specific study's protocol and inclusion criteria. A retrieval layer sits over her paper library. When she asks for a methods paragraph, the model writes one that reflects this study's actual design, because the design was in memory, not assumed.

The craft was the boundary between the layers: what must always load, what loads only for this study, what gets fetched when a question touches it. Get those boundaries right and the model feels like it knows her work. Get them wrong and it either knows nothing or drowns in everything.

---

## What To Do

1. Sort every fact into always-load, this-project, or fetch-when-relevant. Most of it belongs in the third bucket.
2. Keep the always-load layer under a page (D6). It is context, and context is finite.
3. Date and version stored facts. A memory with no date is a future hallucination carrying a credential.
4. Prefer retrieval over stuffing (D7). The library scales. The desk does not.
5. Audit memory like a medication list. Review what is stored on a schedule, and deprescribe what has gone stale.

---

## How It Fails

Memory accumulates until it poisons. A fact that was true in March gets injected confidently in June, the output inherits it, and because the system "has memory" nobody re-verifies the premise. This is worse than the empty model, which at least announces that it knows nothing. The failure is invisible precisely because the system feels more capable, not less. Cost: confident output built on a premise no human checked, because the machine appeared to remember it.

---

## Cross-refs

- D4 — Context Is Everything (memory is context re-supplied, nothing more)
- D6 — Standing Orders for Your AI (the always-load instruction layer)
- D7 — Grounding: RAG and the Second Brain (the retrieval layer)
- F3 — Training Data and the Cutoff (why the model itself never updates)

---

tags: [faai, builder-track]
