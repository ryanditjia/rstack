---
name: principle-sequence-verifiable-units
description: "Use for multi-step changes that need independently checkable execution and delivery units."
---

# sequence verifiable units

Choose coherent units with known starting conditions and an observable result. Verify each unit before building on it; do not defer all checks to the end.

Order commits so a reviewer can replay the evidence: baseline then treatment, subtraction then reshape, or a deliberately failing regression test then its fix. State expected red states and scoped migration boundaries. Keep unrelated changes out; rebasing or rewriting history still needs applicable authorization.
