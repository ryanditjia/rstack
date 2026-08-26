---
name: no-comments
description: Audit changed code for comments and suppressions that should be removed or encoded in code, types, tests, or lint rules. Use before review or when explicitly requested.
---

# No comments

Review the caller's files or the current diff against its base branch.

1. Ask an independent read-only reviewer to identify comments that narrate the code, preserve dead paths, hide complexity, or assert unenforced constraints. If delegation is unavailable, perform a separate review pass yourself.
2. Verify every finding against the surrounding code. Preserve comments that explain a non-obvious external constraint, safety property, interoperability requirement, or reason the code cannot express.
3. Delete narration and stale commentary. Replace real constraints with the cheapest reliable type, runtime check, test, or lint rule when that work remains in scope.
4. Treat lint and type suppressions as findings unless their exact necessity is proven and narrowly scoped.
5. Do not edit outside the requested scope. Do not turn comment cleanup into an unrelated refactor.
6. Report deletions, preserved comments with reasons, encoded constraints, and unresolved items.
