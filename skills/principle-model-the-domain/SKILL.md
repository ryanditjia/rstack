---
name: principle-model-the-domain
description: "Use when repeated branching, synchronized flags, or shape assumptions suggest a missing domain model."
---

# model the domain

Start with invariants and access patterns. A state machine, discriminated union, lookup table, reducer, or owned model can remove scattered branches and invalid combinations.

Organize modules around domain knowledge, not processing phases that repeat ownership across steps. Choose the structure that fits actual reads and writes.

Keep boring local code when it is already clear. An abstraction must remove branches, duplicated assumptions, invalid states, or lifecycle risk.
