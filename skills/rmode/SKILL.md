---
name: rmode
description: "Use only when the user explicitly invokes /rmode, $rmode, or asks to use rmode. Routes non-trivial engineering work through repository-first investigation, design, implementation, verification, review, and delivery playbooks."
disable-model-invocation: true
---

# Rmode

## Repository first

Treat the current repository as the source of truth. Use code, tests, configuration, repository docs, Git history, and repository-host discussions as evidence.

When invoked as `/rmode argus <request>`, treat `argus` as a profile selector, use the remaining text as the request, and follow concrete dependencies into relevant Argus repositories.

Infer languages, package managers, and test commands from repository files and instructions. Apply the matching language skills, including TypeScript and Go, only when those files are in scope. Prefer repository scripts and CI commands over generic replacements.

Do not discover or query non-repository connectors unless the user explicitly names one. Repository-host history is part of the repository record.

## Orchestration

Astra owns investigation, implementation, synthesis, and the final answer. Work directly by default. Delegate a bounded task when independent work or a fresh review justifies the extra context and coordination. Start with one delegate; add more only for a named coverage gap or independent workstream. Reuse completed findings instead of repeating exploration.

This policy replaces fixed worker counts, model rosters, mandatory implementation delegation, and separate synthesis agents in routed skills. Preserve their coverage, comparison, and verification criteria. When a workflow requires independent review, use a reviewer who did not write the artifact. Self-review does not satisfy that requirement. Explicit requests for a multi-model review or arena retain those workflows.

Keep updates and final answers concise. When another step is useful, end with one concrete recommendation.

## Non-negotiables

Track multi-step work with a short plan that names the required evidence and completion checks. Read applicable principle skills when their guidance changes a decision; do not recite the catalog or cite principles as a reporting requirement.

Triggers:

- Nontrivial change, architecture decision, or "are we sure?" → the **how** skill.
- Before asking the user to choose an approach, classify the fork. Observe facts by running a safe experiment. Ask only when the choice is a genuine preference, product decision, or risk tradeoff that evidence cannot settle.
- Any code → name the data shape first, and choose its organizing structure per **principle-model-the-domain**.
- Code crossing a function boundary → the **architect** skill, design the caller-facing shape before implementing and explore alternatives when the shape is genuinely open.
- Parallel fan-out → the **swarm** skill for coverage matrices, races, gauntlets, and exploration partitions. Use **arena** for design or code bakeoffs with base selection and grafting.
- Contested design → the **interrogate** skill (multi-model adversarial) before shipping.
- Before delegation → identify blocking steps, independent workstreams, shared writes, and the smallest safe decomposition (Feature step 3).
- Agent-facing prose follows the host's skill-authoring guidance when available.
- Before commit → inspect the diff for generated clutter, needless comments, and prose that does not match the repository.
- Before review → the **no-comments** skill (the no-comments skill).
- Shipping UI / IDE / CLI → use the matching host control capability. For bug fixes, reproduce first on the same surface.
- Any PR-status or PR-feedback request → the **Babysit** playbook (`playbooks/babysit.md`). That includes "babysit this", "get it green", "address the review comments", "address the Bugbot, Codecov, or Sentry feedback", and "check on PR X". Never trigger it merely because a PR opened. Declare its mode before polling; the playbook's step 1 owns the request-to-mode mapping. Reaching for `drive` inside a phase agent stops that agent finishing its turn.
- Asked to land or ship a green stack → the **Shipping** playbook (`playbooks/shipping.md`). Green is not safe. Nothing gets armed before an independent per-PR verdict, and only the contiguous verified run from the root lands.
- Bugbot or the agentic security review commented → skeptical posture. They catch real bugs and also file non-issues and nitpicks, so assess each on its merits and dismiss noise with a concrete reason instead of churning code. Triage fix / dismiss / ask per `references/bugbot-triage.md`.
- Broken skill mid-task → fix it in its own PR. Don't block. Don't silently work around it.
- Long, autonomous, or multi-phase work, or any task the user steps away from to review later ("going to bed", "trust it when i'm back", "persistent continuation until X") → a decision trail via the **show-me-your-work** skill. Commit it when stakes need an auditable record; keep it local otherwise.

## Authorization

The user's request defines the allowed scope. Do not treat this skill as permission to post messages, change tickets, push branches, resolve review threads, merge, deploy, delete data, or make other external writes. Pause before a materially different action or any irreversible operation unless the user already authorized it.

**Session overrides:** "Don't stop" / "going to bed" / "run until done" / "be fully autonomous" → keep going.

**No is an acceptable answer.** Asked whether to do something, invited to add scope, or shown an approach, reply with your real judgment. Decline, push back, or say "this doesn't earn its place" when true. A recommendation is a judgment, not a validation. Agreement is not the default, candor over sycophancy.

## Subagents

Before delegating, read [references/host-capabilities.md](references/host-capabilities.md). Pass the task, success criteria, and file pointers instead of copying the full conversation. Give writers disjoint files or worktrees. Review delegated changes and verify the result yourself.

## Writing

Use `no-comments` before review. Keep prose plain and concise. Keep evidence, tradeoffs, and unresolved decisions in the reply. Link only artifacts you produced or inspected.

## Playbooks

Read the matched playbook. Keep its success criteria and verification gates in the task plan; explain any inapplicable gate briefly. Do not copy the playbook verbatim. Apply the Orchestration policy above to its staffing instructions.

A large or cross-cutting effort (a migration across many call sites, an ambitious multi-part change), or work the user steps away from to trust later, routes to the **figure-it-out** skill even when a narrower playbook like Feature fits. Use **figure-it-out** whenever no bundled playbook fits. It designs a bespoke, rigorous playbook for the task. A standing project-scale program (multi-day, many stacked PRs, a fleet of subagents under one coordinator) routes to **Orchestrate** instead; figure-it-out designs one bespoke run, orchestrate runs the program.

- **Investigation.** Read-only question: how does X work, why was Y built this way, are we sure about Z, should we do X or Y. `playbooks/investigation.md`.
- **Bug fix.** A reported defect to reproduce, root-cause, and fix with runtime evidence. `playbooks/bug-fix.md`.
- **Perf issue.** A measured slowness to trace and improve against a baseline. `playbooks/perf-issue.md`.
- **Hillclimb.** Sustained, scientific improvement of one metric against a target: loop hypotheses with before/after measurement, a decision log, and one commit per accepted win. Distinct from Perf issue, which is a one-off fix. `playbooks/hillclimb.md`.
- **Runtime forensics.** Diagnose a runtime symptom (leak, idle-CPU spin, glitch) from live instrumentation. The deliverable is a diagnosis, not a fix. `playbooks/runtime-forensics.md`.
- **Trace forensics.** Diagnose a captured profiling artifact (cpuprofile, trace, spindump, heap snapshot) handed to you after the fact. The deliverable is a diagnosis, not a fix. `playbooks/trace-forensics.md`.
- **Feature.** New or changed behavior, built from a named data shape. `playbooks/feature.md`.
- **Refactoring.** A behavior-preserving change to structure or shape (rename, extract, inline, dedupe, move). `playbooks/refactoring.md`.
- **Prototype.** A throwaway sketch to make a design or behavioral decision cheaply, or to settle an empirical fork by observing it instead of asking the human ("prototype", "mock it up", "try this layout", "sketch it to decide"). `playbooks/prototype.md`.
- **Visual parity.** Pixel-exact UI equivalence: matching two implementations or migrating a styling system. `playbooks/visual-parity.md`.
- **Authoring or modifying a skill.** Writing or editing a SKILL.md. `playbooks/authoring-a-skill.md`.
- **Eval.** Testing how a skill, structure, or prompt change affects agent behavior before promoting it. `playbooks/eval.md`.
- **Babysit.** Driving a PR or a stack to merge-ready: conflicts, review threads, CI. `playbooks/babysit.md`.
- **Shipping.** The half after Babysit. Independently verifying a green stack, then landing the contiguous verified run through GitHub Stack. `playbooks/shipping.md`.
- **Autonomous run.** A long task to drive to completion without stopping ("run until done", "persistent continuation until X"). `playbooks/autonomous-run.md`.
- **Orchestrate.** A standing project handed to one coordinator chat: multi-day, many stacked PRs, dozens to hundreds of subagents, minimal human turns ("run this whole project", "own this migration until it lands"). Distinct from Autonomous run, which drives one task to a predicate; work one agent could finish inside the session's budget routes there, not here, however program-shaped the phrasing sounds. `playbooks/orchestrate.md`.
- **Autopilot-full.** A queue of independent PRs run to merged with full autonomy: one owner per PR carries build through merge, and the root swarm-verifies each merge-ready head before its owner merges ("autopilot this queue", "full autopilot", one-owner-per-PR programs). `playbooks/autopilot-full.md`.
- **Autopilot-stack.** A queue of changes built and verified with full autonomy, delivered as one linear reviewed GitHub stack the operator lands herself ("autopilot-stack", "stack them, don't ship", "build the stack, I'll land it"). `playbooks/autopilot-stack.md`.
- **Session pickup.** Resuming or taking over a prior agent's in-flight work from a transcript, cloud-agent URL, or pushed branch. `playbooks/session-pickup.md`.
- **Pause safely.** Suspending in-flight work cleanly so it can be resumed, on an explicit pause, going offline, a host restart, or imminent context compaction. The complement to Session pickup. Full steps: `playbooks/pause-safely.md`.
- **Multi-phase or multi-PR plan.** Work that spans phases or stacked PRs. `playbooks/multi-phase-plan.md`.
- **Worktree and simulator cleanup.** Reclaiming local disk by pruning merged or abandoned git worktrees and stale iOS simulators ("what's using my disk", "clean up worktrees", "prune safe-to-prune worktrees", "free up space", "delete old simulators"). `playbooks/worktree-cleanup.md`.
- **Opening a PR.** Invoked at the end of every other playbook. `playbooks/opening-a-pr.md`.
