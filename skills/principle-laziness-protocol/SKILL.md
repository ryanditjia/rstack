---
name: principle-laziness-protocol
description: "Use when a proposed refactor adds indirection, abstractions, or signal threading."
---

# laziness protocol

Choose the smallest change that reaches the intended result. Prefer deletion and remove pass-through wrappers, duplicated choices, and representation leaks.

Before threading a signal through multiple layers, look for a more direct path. Consolidate decisions at one owner. Flatten layers that add tracing without hiding meaningful complexity; a rich interface can still have a short call chain. Do not add abstractions for imagined future consumers.
