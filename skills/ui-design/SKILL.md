---
name: ui-design
description: "Use for a requested spacing, alignment, typography, or color adjustment to a named existing UI component or screen. Also use when explicitly invoked as $ui-design. Do not auto-select for general frontend coding, new pages, redesigns, broad audits, or backend work."
---

# UI design

## Route the request

Automatic invocation runs **tune** only. Never load either reference automatically.

- `$ui-design tune <target>`: follow the workflow below.
- `$ui-design review <target>`: read [review](references/review.md) only. Report findings without editing.
- `$ui-design redesign <target>`: read [redesign](references/redesign.md) only. Use for new pages or substantial changes.

Review and redesign require the user to explicitly invoke this skill with that mode. A bare invocation defaults to tune only when the request fits its narrow scope. Otherwise explain the available modes without starting either workflow.

## Tune the named interface

Read the target implementation and relevant shared tokens or neighboring components. Use existing project guidance. Preserve the established identity, factual copy, behavior, and scope. Do not turn a local adjustment into a new design system.

Inspect the rendered target with an available browser or app-control capability before editing. Use current screenshots and source when the app cannot run, and state the verification gap. Do not infer interactive behavior from an image.

Make the requested adjustment at the level that owns it. Reuse established spacing, type, and color roles. Judge hierarchy and legibility against the actual content. No universal font bans, fixed aesthetic, or added animation.

Inspect the affected state and relevant viewport sizes in one batch after editing. Exercise the interaction if the change affects it, including keyboard focus where relevant. Open captures to confirm the route, theme, viewport, and completed loading. Fix observed defects in one batch, then confirm the fixes. Stop cosmetic iteration after that confirmation. Report unresolved issues honestly; do not call broken behavior complete.

Finish with the change, evidence, and any remaining limitation. Do not run broad audits, generate images, spawn reviewers, write design documents, or load another design skill as a side effect of tune.
