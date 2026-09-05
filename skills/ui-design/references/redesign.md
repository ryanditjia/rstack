# Design or redesign an interface

Use only for an explicit `$ui-design redesign` request. Handle new pages and meaningful changes to structure or visual identity. Read this reference alone; do not load the review reference or another design skill by default.

## Establish the task and constraints

Identify who uses the interface, what they need to accomplish, and what the requested change must improve. Read existing product and design guidance when present. Inspect the incumbent interface and a representative neighboring screen through available browser or app-control tools. Read the implementation, tokens, and assets that constrain the requested work. An absent design document does not erase an established visual system.

Preserve product facts, content meaning, working behavior, accessibility, and explicit brand commitments. Separate the elements the user wants replaced from those that must remain. Use the existing request to resolve routine choices. Ask only when an unanswered decision materially changes the outcome, and continue independent work while awaiting it. A planning request ends with a plan; this mode does not turn it into implementation authority.

## Compare concrete approaches

When the direction is open, compare two viable compositions before implementation. Show where the primary action, navigation, key information, and supporting content sit. Small wireframes or short descriptions are enough when they make the choice clear. Explain which approach better supports the user's task and why, then proceed with that choice within the user's authorization. Do not require approval for a reversible choice already in scope.

A precise supplied design may settle the composition. Preserve it instead of manufacturing alternatives. If the user explicitly requests alternatives, provide them even when you have a preference.

Choose typography, color, density, imagery, and motion from the content, audience, usage conditions, and existing brand. An operational screen should make state and action easy to find. A reading page should support comprehension. A marketing page should make its offer and evidence understandable. These are task criteria, not mandated visual styles.

Avoid universal font bans, arbitrary palette formulas, mandatory animation, and novelty without a user benefit. Use distinctive choices when they serve the brief. Do not invent customers, prices, metrics, testimonials, or product capabilities. Mark demonstration data when readers could mistake it for real evidence.

Record only decisions needed to implement and assess this change. A short note in the response is sufficient. Update an existing project design document when the requested work changes a durable convention; do not create a documentation system for a single page.

## Build and inspect

Implement the chosen composition using project conventions and reusable components where they fit. Keep semantics, accessible names, focus visibility, reading order, and responsive behavior intact. Cover the states that matter for the requested task. Do not expand into unrelated flows or rewrite surrounding code merely for uniformity.

Use image generation only when an asset or visual exploration materially improves the requested result and an appropriate capability is available. Routine layout work needs no generated mockup. Use the available image-generation guidance when producing assets. Preserve actual provenance through project conventions and verify sourced assets resolve. Do not install tools, fetch stock collections, or require raster comps automatically. If an essential asset is unavailable, explain the gap and continue work that does not depend on it.

Inspect the built interface at the relevant viewport sizes in one batched round. Include the user's viewport when known. Check the actual primary interaction and keyboard path. Validate captures before judging them: correct route, state, theme, dimensions, completed loading, and settled animation. If execution is unavailable, use current committed captures and source, and state the resulting limits.

Fix observed material defects in one batch and confirm them in one final inspection. Avoid repeated cosmetic searches. Functional failures still require a truthful resolution or a clear blocker; a round limit never makes a broken task successful.

## Optional independent review

Use at most one independent reviewer, only when a meaningful redesign changes navigation, page structure, or visual identity and a fresh review would add confidence. Small adjustments and routine new components do not qualify. Review is optional, never an automatic finish toll.

Use the host's delegation mechanism when available. On Codex, set `fork_turns: "none"`. Do not pass conversation history or an instruction to endorse your choice. Supply this self-contained brief:

> Review the implemented interface against the following user request and constraints: [request and constraints]. Inspect [artifact paths] and [current screenshot paths, viewport and state for each]. Interaction evidence: [actions and observed results]. Report only material failures affecting the requested task, with location, evidence, consequence, and a proposed correction. Separate missing evidence from defects. Do not edit files, spawn agents, or expand the scope. Return the inspected scope and any unresolved verification limits.

Include enough raw evidence for the reviewer to judge the result independently. Fix supported findings in one batch and verify those corrections. Do not spawn replacements or launch a reviewer loop. Without delegation, perform a separate pass if useful and disclose that independent context was unavailable.

## Deliver

Report the chosen approach, the implemented result, actual verification, and remaining gaps. Distinguish a visual inspection from tested behavior. Name unresolved material issues without claiming a complete pass. External publication or deployment still follows the user's authorization; this skill grants none on its own.
