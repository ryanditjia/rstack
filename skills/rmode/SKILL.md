---
name: rmode
description: Simple code, focused changes, and proportionate verification. Use for implementation, debugging, code review, and technical specs.
---

# Rmode

Apply the baseline below, then read principle details only when they would change a concrete decision. For plans and specs, use relevant design guidance; implementation and runtime checks wait until implementation is authorized.

## Coding baseline

- **Keep it simple.** Choose data shapes around actual invariants and access patterns. Make the smallest coherent change that meets the requirement. Avoid speculative features, single-use abstractions, unnecessary configuration, and checks for impossible states.
- **Keep changes surgical.** Match existing style. Every changed line should serve the request. Remove what your changes make unused; mention unrelated dead code rather than deleting it.
- **Verify the outcome.** For multi-step work, give a brief plan with meaningful checks. Reproduce bugs before fixing them; check behavior before and after refactors. Test observable outcomes, not implementation details or trivial edits. Run appropriate checks and required repository gates. Stop when evidence is sufficient; repeat or broaden checks only for changes, failures, or unresolved risks.
- **Write for humans.** A reader should understand the code without knowing the discussion that produced it. Use consistent domain terms, and name helpers so their actions and return values are clear. Add concise comments before non-obvious blocks to explain their purpose, constraints, or consequences. In tests, explain the scenario and what each meaningful group of assertions protects; split independent behaviors when they obscure the test’s intent. Prefer clearer names and structure over lengthy explanations, and avoid comments that merely repeat the syntax.

## Additional principles

All entries below are installed sibling skills. A name `X` resolves to `../principle-X/SKILL.md` relative to this file. Before relying on an additional principle to make a decision, read its leaf `SKILL.md` in full, even when its metadata excludes automatic discovery. The user does not need to invoke it. Reuse guidance already read while it remains in context; reread only after it changes or the detail is lost. Do not read extra principles just to populate the reply.

Choose entries whose conditions actually apply, not every entry associated with the task category. The baseline is sufficient for routine edits. Follow a leaf's cross-references only when their detail is needed for the current decision.

| Concrete concern | Principle name |
|---|---|
| Choosing core structures or sequencing shared foundations | `foundational-thinking` |
| Stateful logic, repeated branches, or duplicated shape assumptions | `model-the-domain` |
| New layers, wrappers, or a signal threaded through many callers | `laziness-protocol` |
| Simplifying an affected area before an addition or refactor | `subtract-before-you-add` |
| Code is hard to trace or holds too much hidden mutable state | `minimize-reader-load` |
| A new requirement strains the existing design | `redesign-from-first-principles` |
| Two fixes sharing a premise fail the same gate | `attack-the-premise` |
| Product scope or user experience trades off against implementation convenience | `experience-first` |
| A consequential unfamiliar design remains uncertain after inspecting precedent | `exhaust-the-design-space` |
| A script or codemod would reduce repeated work or make verification reproducible | `build-the-lever` |
| Parsing external input, placing validation, or separating framework wiring | `boundary-discipline` |
| Designing types, signatures, variants, or invariants | `type-system-discipline` |
| Mutations must recover from retries, restarts, or partial runs | `make-operations-idempotent` |
| Replacing an internal API whose callers can be migrated together | `migrate-callers-then-delete-legacy-apis` |
| Concurrent actors might write the same mutable state | `separate-before-serializing-shared-state` |
| A defect needs diagnosis beyond the baseline reproduction | `fix-root-causes` |
| Choosing trustworthy evidence for runtime, integration, or delegated work | `prove-it-works` |
| Choosing meaningful assertions or evaluating weak tests | `test-behavior-not-implementation` |
| A sweep or migration needs independently checkable units | `sequence-verifiable-units` |
| Planning a rewrite's target state and acceptable intermediate states | `outcome-oriented-execution` |
| Large outputs or repeated reads threaten useful context | `guard-the-context-window` |
| An execution decision risks an unnecessary permission pause | `never-block-on-the-human` |
| A recurring correction could become a type, lint, or other structural check | `encode-lessons-in-structure` |

When implementing or reviewing TypeScript, read `../typescript-best-practices/SKILL.md`. For a spec, read it only when TypeScript contracts or language-specific choices matter. Read its examples only when needed.

## Keep effort proportional

When using these principles through rmode, this baseline and effort policy qualify their instructions, including absolute wording:

- Use the cheapest adequate evidence. Build competing prototypes only when a consequential uncertainty needs an experiment; a sketch or existing precedent may suffice. Build a tool when its reuse or verification benefit earns its cost.
- Prefer focused searches and bounded outputs for context management. Delegate only when permitted and the expected benefit exceeds coordination and review cost. A principle does not require a subagent, panel, or extra review pass.
- Keep verification units coherent; do not mechanically rerun a suite after every individual edit. Existing authorization and repository policy determine commits, rebases, and PRs.
- Principle references to other workflow skills do not activate those workflows. This skill depends only on the 23 principle skills and TypeScript guidance. The other installed conversation controls keep their own invocation rules.
- Respect task scope, compatibility requirements, authorization, and host security boundaries. A principle grants no additional permission and creates no obligation to fix unrelated problems.
- In your reply, name each additional principle that materially shaped a decision and explain the specific choice it changed. Attribute only principles whose leaf `SKILL.md` you actually read and applied in this session. Tie each reference to a concrete design choice, implementation change, or verification step, not a generic claim of compliance. Keep the explanation concise; do not list principles that had no effect.
