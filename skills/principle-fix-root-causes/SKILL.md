---
name: principle-fix-root-causes
description: "Use when diagnosing or fixing a bug, especially failures after restart."
---

# fix root causes

Reproduce the symptom or instrument the failing path before guessing. Trace the cause; avoid guards that merely hide it. Search for the same defect elsewhere within scope.

For restart-only failures, inspect persisted configuration, caches, locks, and serialized state. Clearing state is diagnostic evidence, not necessarily the repair.

A diagnosis request ends with evidence and cause. Implement only when authorized, then verify the original symptom.
