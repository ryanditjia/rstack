---
name: principle-minimize-reader-load
description: "Use when code is hard to trace because of indirection or hidden mutable state."
---

# minimize reader load

Check both layers to trace and state to remember. A flat file full of mutable globals can be as difficult as a deep call chain.

Collapse pass-through layers and one-caller wrappers that hide no meaningful decision. Prefer derived values over synchronized state, locals over fields, and narrow ownership over globals. Keep an invariant at its owning boundary. Ask where a value comes from and what can change it.
