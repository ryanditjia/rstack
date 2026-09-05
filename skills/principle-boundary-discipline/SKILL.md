---
name: principle-boundary-discipline
description: "Use when parsing external data or adapting frameworks. Validate once at boundaries; keep domain logic independent."
---

# boundary discipline

Parse external data into domain types at CLI, configuration, network, and storage boundaries. Validate there; propagate errors internally without redundant checks on already-validated values.

Keep business logic in pure functions and framework wiring thin. Public contracts expose domain concepts, not transport or storage representations. Trust internal types only after the boundary has established their invariants.
