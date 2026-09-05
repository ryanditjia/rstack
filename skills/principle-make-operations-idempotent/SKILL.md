---
name: principle-make-operations-idempotent
description: "Use when operations must survive retries, crashes, or partially completed runs."
---

# make operations idempotent

Ask what happens on a second run and after failure at each mutation boundary. Re-execution should reconcile partial state and converge to the intended result.

Adopt valid existing work, distinguish stale artifacts from live owners, and compare content rather than creation order. Do not treat a PID alone as proof of ownership. Test interrupted and repeated execution, including cleanup and scheduling. Preserve authorization for external mutations.
