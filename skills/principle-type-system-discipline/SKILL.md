---
name: principle-type-system-discipline
description: "Use when designing typed contracts, parsing external data, or eliminating impossible states."
---

# type system discipline

Model legal states directly. Use variants instead of optional-field combinations that admit contradictions; derive synchronized flags from one source.

Construct valid values instead of carving them from a loose type. A non-empty list can be a head plus a rest; a valid range can be a start plus a duration.

Distinguish semantic primitives when confusing arguments would cause errors. Validate at creation, then trust the type downstream.

Parse external JSON, RPC, IPC, configuration, environment variables, and storage data into domain types. Keep transport representations at the boundary.

Do not bypass the compiler with unchecked casts or assertions. Validate, narrow, or improve the representation. Isolate and acknowledge an unavoidable unsafe boundary.

Make variant matching exhaustive so adding a case causes a compile failure where handling is missing. Derive types from authoritative schemas instead of duplicating shapes.

Strengthen a type where an operation would otherwise be partial, then stop. Summing an empty list is defined, so it needs no non-empty type. Reading its head is partial and does.

Check for contradictory fields, interchangeable primitive arguments, unhandled variants, duplicated schemas, and assertions that signal a weak contract.
