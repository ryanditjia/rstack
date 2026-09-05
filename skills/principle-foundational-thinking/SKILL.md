---
name: principle-foundational-thinking
description: "Use when choosing core data structures or ordering shared foundations before dependent work."
---

# foundational thinking

Choose core types from invariants and access patterns before writing dependent logic. Consolidate the structure without abstracting every similar line.

Remove dead weight before adding foundations. Build shared types, checks, or infrastructure first when later units depend on them. Each increment should establish a coherent abstraction, not distribute special cases across callers.

Before sharing mutable state, ask what another actor can change; isolate independent ownership.
