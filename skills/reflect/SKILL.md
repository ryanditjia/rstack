---
name: reflect
description: Review the active conversation from three independent lenses, surface durable learnings, and route each to a concrete skill improvement. Use when the user says reflect.
---

# Reflect

Mine the current conversation for durable learnings, then route them into skill edits.

## When to invoke

- The user said "reflect" or "/reflect".
- A complex task (5+ tool calls) just landed cleanly and the recipe is worth keeping.
- The agent hit dead ends, found the working path, and the path generalizes.
- The user corrected the agent's approach mid-task.
- A non-trivial workflow emerged that isn't captured anywhere.

Skip when the conversation is trivial, off-topic, or already covered by an existing skill the parent followed correctly. One-offs are not learnings.

## Process

### 1. Obtain the active conversation

Use the host's task-history or transcript interface if it is available and scoped to the active workspace. Do not search unrelated workspaces. If the host does not expose a transcript, write a tight digest from the current conversation and use that as the review input.

### 2. Run three independent reviews

Use parallel delegation when the host supports it; otherwise run the lenses sequentially. Reviewers may use available read-only context tools for cited tickets, chat threads, or traces, but they must not edit files. The coordinating agent applies approved edits. Optional model preferences live in `~/.config/rstack/models.md`; otherwise inherit the current model.

| Lens | `model` | Prompt template |
|---|---|---|
| Judgment | `reflect-judgment` when configured | `references/judgment-reviewer.md` |
| Tooling | `reflect-tooling` when configured | `references/tooling-reviewer.md` |
| Divergent | `reflect-divergent` when configured | `references/divergent-reviewer.md` |

Pass each template verbatim, substituting the transcript path or digest where marked. Reviewers return findings in the delegated result body.

### 3. Synthesize

Synthesize the three reviews, delegating to an independent reviewer when supported. Use `references/synthesizer.md` with each reviewer's full output inlined where marked. Spot-check citations through available read-only tools. Return a structured Accepted / Rejected / Backlog list.

### 4. Structural enforcement check

Sanity-check the synthesizer's Accepted list. For any item that would be enforced more reliably by a lint rule, script, metadata flag, or runtime check, move it from Accepted to Backlog. The synthesizer already applies this criterion; this is a final pass before edits land. See the **encode-lessons-in-structure** principle skill.

### 5. Apply

Before applying any Accepted edit, present the synthesizer's full Accepted/Rejected/Backlog output to the user and wait for explicit approval. The user picks which subset to apply and may redirect routings. Skill changes affect every future agent in the org; do not auto-apply.

Do not file backlog items or make skill edits without the user's approval. After approval, file tracker items only when the user has authorized that external action.

For each approved Accepted item, follow the Routing field exactly:

- Trivial existing-skill edit (a one-line bullet, a tightened sentence, a stale fact corrected): parent does directly.
- Substantive existing-skill edit (a new section, a new pattern table, more than ~10 lines): use the host's available skill-authoring guidance and run its draft / test / iterate loop.
- `tune description: <skill path>` (the skill exists but did not trigger when it should have): use the host's skill-authoring workflow and run its description-optimization loop.
- `new skill: <kebab-name>`: use the host's skill-authoring workflow. Do not invent the shape ad hoc.

If your environment ships a SKILL.md validator, run it on every touched skill before declaring done. Skip this step if it doesn't.

### 6. Summarize for the user

Short list, no preamble:

- Edits applied: `<skill path>`. What changed, one line each.
- New skills created: `<skill path>`. One line each (rare).
- Backlog filed to the devex tracker: `<issue title>` (`<tags>`). One line each.
- Dropped: one line per rejected finding + reason from the synthesizer.
