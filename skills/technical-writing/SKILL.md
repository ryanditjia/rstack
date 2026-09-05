---
name: technical-writing
description: "Use when writing or reviewing documentation, RFCs, READMEs, PR descriptions, or commit messages. Load detailed guidance only for the task."
---

# Technical writing

Write for the reader's task. Use real symbols, paths, flags, and established terminology. Put conditions before instructions. Preserve uncertainty and verify factual claims, including counts and the commands that regenerate them.

Keep one name per concept. Follow repository formatting conventions in code examples. Product UI strings follow the product's copy guidance.

Use unslop's everyday rules when available; this skill remains usable alone. Cut filler, use plain words, and preserve meaning.

Choose only the applicable references:

- Commit messages, small PR descriptions, and local sentence edits need no reference. State the concrete problem, changed behavior, and material verification. Follow repository title conventions.
- New documents, substantial rewrites, or document-set restructuring: [document structure](references/document-structure.md).
- Tutorials, procedures, warnings, or branching instructions: [procedures](references/procedures.md).
- Translation-facing text or requested ambiguity review: [Global English](references/global-english.md).
- Explicit `$technical-writing deep-review`: [deep review](references/deep-review.md), then only the references relevant to the artifact.

Do not load every style system for a short message. Fix sentences that mislead or slow the reader; leave clear wording alone.
