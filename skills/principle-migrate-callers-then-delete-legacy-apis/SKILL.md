---
name: principle-migrate-callers-then-delete-legacy-apis
description: "Use when replacing an internal API whose callers can migrate together."
---

# migrate callers then delete legacy apis

Inventory callers, migrate them, and delete the old API in the same coordinated change. Update tests for the new contract and remove tests protecting obsolete implementation details.

Use this only when external consumers do not require compatibility. Respect public versioning and rollout contracts. If an adapter is necessary, name its consumer and removal condition; do not preserve two paths merely to postpone migrating owned callers.
