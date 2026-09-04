---
name: architect
description: "Sketch types, signatures, and module structure before code, then stay in the loop while implementation fills in. Use for /architect, 'architect this', 'design this', or non-trivial work where jumping to code would lock in the wrong shape."
---

# Architect

Design the shape before filling in the code. Sketch caller usage, data structures, signatures, and module boundaries. Implement against that sketch, and redesign when implementation disproves it.

## Ground

Build a working model of every existing system the design touches. Use `how` to trace behavior and ownership. Use `why` when changing an existing boundary or design decision so its rationale becomes a constraint rather than a guess.

Skip grounding only for genuinely isolated greenfield work.

## Sketch

Write the caller's usage first. Show realistic call sites, then derive the types and signatures from them. Use `not implemented` bodies or brief pseudocode where logic affects the design.

Cover these questions:

- What data structures fit the dominant reads and writes?
- How does runtime flow through them, including state transitions and failure paths?
- Which configuration changes behavior, and who owns its defaults, parsing, and validation?
- Which module owns each invariant and state transition?
- What crosses each boundary, and where is external data parsed?
- Which invalid states can the types prevent?
- What is the single source of truth for each fact?
- Can concurrent actors avoid shared writable state?
- What happens on retries, partial failure, and repeated execution?
- How much complexity does the public interface hide from callers?

Read `references/design-red-flags.md` and revise shapes with shallow modules, leaked information, temporal decomposition, or pass-through methods.

Choose the exploration method from the workload and uncertainty. Work directly, delegate bounded design angles to subagents or agent threads, or use `arena` when competing concrete designs would change the decision. When delegating, use `references/runner-prompt.md` with a specific focus. Explore structurally distinct alternatives when the design space is open; do not force a candidate count when the constraints already select one shape.

The current thread compares alternatives, chooses the design, and fills `references/rationale-template.md`. Do not delegate synthesis or the final recommendation.

## Checkpoint when requested

Proceed into implementation by default. If the user asks for a checkpoint, present the chosen sketch and pause before writing implementation code. Treat pushback as new grounding evidence and redesign before continuing.

## Implement against the sketch

Replace the empty bodies and pseudocode with working code. Keep usage, types, signatures, and module ownership aligned with the chosen design.

Treat deviations as evidence. When implementation needs a new parameter, escape hatch, shared lock, or caller-visible rule, decide whether the sketch missed a requirement or the implementation is overreaching. Update the design deliberately rather than adding the deviation silently.

## Redesign when the shape is wrong

One hard case does not condemn a design. Repeated friction does. Redesign when the same workaround appears in several places, types need repeated casts or impossible optional states, unexpected sharing recurs, or callers must learn internal rules.

Re-ground on what implementation taught you. Subtract the failed assumptions, redesign with the new constraints as foundational, and return to the sketch.

## Output

For a small change, produce caller usage, types, and signatures in one design file. For a larger change, add a module map with runtime flow and configuration ownership. Keep the rationale beside the sketch with the chosen shape, rejected alternatives, accepted tradeoffs, open risks, and first implementation step.
