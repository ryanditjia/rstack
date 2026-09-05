---
name: principle-outcome-oriented-execution
description: "Use for planned migrations with explicit verification boundaries and scoped temporary breakage."
---

# outcome oriented execution

Name the intended end state and where temporary breakage is acceptable. Keep that breakage scoped and reversible; avoid disposable compatibility code introduced solely to keep every intermediate edit green.

Check actively touched behavior at declared boundaries. Complete the required static and runtime verification before declaring the migration done. Outside an explicitly planned boundary, preserve independently verifiable units.
