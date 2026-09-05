---
name: principle-subtract-before-you-add
description: "Use when adding or reshaping functionality on top of obsolete or redundant structure."
---

# subtract before you add

Remove dead code, orphan references, redundant validation, and speculative features before building on them. Delete a reference with no unique content instead of leaving a stub.

Choose structures for observed use. New persistence, retries, or migration features bring validation and maintenance costs; do not add them without a requirement. Simplify instructions as well as code. Keep the smallest change that delivers the requested result.
