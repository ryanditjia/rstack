# Review a named interface

Use only for an explicit `$ui-design review` request. Produce findings without changing files, application state, or external systems beyond the reversible interactions needed to inspect the requested path. Review does not authorize implementation.

## Establish evidence

Identify the user's task, the named screen or flow, and any supplied concern. Read relevant project guidance and the target implementation. Inspect shared tokens or neighboring screens only when they explain an inconsistency. Missing design documentation is not a reason to invent an identity or block the review.

Open the real interface with available browser or app-control tools. Walk the primary task at representative viewport sizes. Inspect the states the task can actually encounter, such as loading, empty content, validation errors, or a long label. Reuse current captures when they show the required evidence. Verify their route, theme, size, and loading state before judging them.

Exercise controls to assess keyboard operation, focus order, recovery, and feedback. Screenshots support visual findings, not claims that a control works. If execution is unavailable, inspect current committed captures and source. Explain what that evidence cannot establish. Never claim to have tested unavailable interactions.

## Prioritize findings

Start with obstacles to the user's task: hidden actions, misleading state, inaccessible controls, unreadable content, or broken recovery. Then consider information order, grouping, density, responsive layout, and consistency with neighboring screens. Evaluate decorative differences only when they affect the request or a stated design goal.

Make each finding concrete:

- Identify the screen, state, and element.
- Describe the observed problem and its consequence for the user.
- Cite the capture, implementation location, or interaction that supports it.
- Recommend the smallest useful correction and state uncertainty when evidence is incomplete.

Group repeated instances under their shared cause. Separate observed defects from optional preferences. Do not assign numerical taste scores or prescribe a new visual identity without a redesign request.

## Finish

Deliver the few findings that change the decision, ordered by impact, followed by the inspected scope and any verification gap. When there are no material findings, say so at the scope actually inspected. Do not start repairs, generate images, run reviewers, or load the redesign reference. A subsequent implementation request supplies its own authorization and scope.
