# The Copy Department — project overview

A fully autonomous, multi-agent website copywriting system built for Claude Code, modeled after a Claude-platform "hyperagent" the user originally built (called CopyForge, then The Copy Atelier, now The Copy Department), rebuilt here using Claude Code's real subagent architecture (`.claude/agents/*.md` + a skill that orchestrates them via the `Agent` tool).

## What it does

Takes a client brief and produces finished, conversion-optimized, SEO/AEO/GEO/AIO-ready website copy, delivered as plain markdown in chat, with zero mid-pipeline questions. The user reviews once, at the end.

## Where things live

- **`.claude/skills/copy-department/SKILL.md`** — the orchestrator. All pipeline logic, rules, QA-failure routing, and cost discipline live here. This is the authoritative spec; read it first when working on the system itself.
- **`.claude/agents/*.md`** — the eight named subagents (see below). Each is a standalone specialist with its own scoped tools and instructions.
- **`.claude/skills/copy-department/reference/`** — shared reference docs (`schema-stack.md`, `ai-search-tactics.md`) the subagents load on demand, plus per-client project context files for resuming a specific client job in a new chat.

## The team

| Name | Role | File |
|---|---|---|
| Loren | Research & Audience | `.claude/agents/loren.md` |
| Mina | Site Architecture | `.claude/agents/mina.md` |
| Nadia | Offer & Psychology | `.claude/agents/nadia.md` |
| Jasmin | Strategy & Structure | `.claude/agents/jasmin.md` |
| Dulce | Visual/UX Layout Brief | `.claude/agents/dulce.md` |
| Raegan | Copy Drafting (pure human persuasion, no technical SEO) | `.claude/agents/raegan.md` |
| Charli | Google & Multi-Surface Compliance Engine | `.claude/agents/charli.md` |
| Vera | Compliance QA | `.claude/agents/vera.md` |

## How a job runs

**Foundation phase (once per job, covers every page):** Intake (orchestrator itself) → Loren (research, once for the whole brand) → Mina (full-site architecture, self-audits) → Nadia (offer structure + psychology brief for all pages, locking the offer and persuasion beats before structure is built) → Jasmin (strategy/positioning/outlines for all pages, self-audits, built to deliver Nadia's beats as headers) → Dulce (visual/UX layout brief for all pages).

**Per-page phase (repeats per page or small batch):** Raegan (drafts pure persuasion copy) → deterministic pre-lint → Charli (audits live Google Search Central documentation, injects keyword/entity/AEO/AIO structure, overwrites the draft) → deterministic pre-lint → Vera (final QA gate, fixes everything herself, in place) → deliver.

Raegan is deliberately freed from technical SEO, keyword balancing, and algorithmic layout engineering; that work is Charli's alone, so drafting can focus entirely on brand voice and persuasion, and compliance optimization can focus entirely on search-surface mechanics without competing priorities inside a single dispatch.

This two-phase split exists specifically to avoid re-paying for brand-level research and strategy on every single page — see "Design history" below for why.

## Core design rules (all live in SKILL.md, this is a summary not a replacement)

- No mid-pipeline questions to the user; front-load everything at intake.
- Every stage passes full verbatim text to the next, never summarized or paraphrased.
- Every hand-off is announced in one plain-language line before it happens (e.g. "Handing off to Mina, she's building the site architecture").
- QA findings are severity-tagged (hard/soft) and routed to the specific specialist who owns the fix, with a bounded retry cap (3 rounds hard, 2 rounds soft-only) so the pipeline never stalls waiting for perfection.
- No fabrication, ever, including to satisfy a soft QA finding, if real material doesn't exist to support a claim, the finding stays open rather than being papered over.
- No em dashes or en dashes anywhere in delivered copy.
- Never publishes HTML/PDF/slide decks/webpages unless the user explicitly asks, default deliverable is markdown-in-chat.

## Design history (why it looks like this)

This system went through real iteration and testing before being trusted for production client work. Worth knowing before modifying it:

1. **Started as a port of a Claude-platform "hyperagent" prompt** (then called CopyForge) that ran 11 stages inline as personas in one context, with a Working Doc staging system for a different platform's memory model. That staging complexity was deliberately dropped, Claude Code doesn't need it.
2. **Collapsed from ~12 granular stages to 6** after a deliberate design audit, on the reasoning that fewer, denser subagent calls produce more coherent output than many thin ones, and cut latency/cost significantly.
3. **Two human checkpoints became self-audit gates** (Mina and Jasmin both self-check their own output against a hard/soft checklist before returning), because the user wanted a fully hands-off pipeline with no approval-waiting.
4. **Live-tested on a real client brief**, which surfaced and fixed several real failure modes, now hardened into the rules:
   - Summarizing a prior stage's output instead of pasting it verbatim caused false QA findings, fixed by making full-verbatim-passing a hard rule with no exceptions.
   - The drafter hallucinated wrong list items (invented "Water Wave" texture that didn't exist) when writing from memory instead of the source list, fixed with a mandatory pre-write fact-check restatement step.
   - A soft QA finding ("could use one more quotable line") led the drafter to fabricate an unsourced quote, fixed by extending the no-fabrication rule explicitly to soft findings.
   - QA-failure routing needed a rule distinguishing structural-impact errors (route to Mina first) from prose-only errors (route to Raegan alone).
   - Running full foundation work (Mina/Loren/Jasmin/Nadia) per page instead of once per job burned a large percentage of a session's usage building a single page, fixed by splitting into the foundation/per-page phases described above.
   - Hand-retyping prior content into a new dispatch (instead of copying it exactly) reintroduced a previously-fixed factual error during a small polish-only revision, fixed with an explicit rule against reconstructing text from memory.

## Extending this system

- New subagent: add a `.claude/agents/<name>.md` with a real first name, YAML frontmatter (`name`, `description`, `tools`), and instructions written at the same concrete-rules-plus-checklist level of detail as the existing eight, not vague "you are an expert at X" framing.
- New client project: copy `.claude/skills/copy-department/reference/CLIENT-CONTEXT-TEMPLATE.md` to `<client>-context.md` in that same folder and fill it in as the job progresses, capturing business facts, hard guardrails with the mistakes that made them necessary, open questions, delivery status, and resume notes.
- Changing pipeline behavior: edit `SKILL.md` directly, it's the single source of truth the orchestrator actually reads.
