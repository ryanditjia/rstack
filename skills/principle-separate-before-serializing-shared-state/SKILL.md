---
name: principle-separate-before-serializing-shared-state
description: "Use when concurrent actors may write the same mutable object."
---

# separate before serializing shared state

Identify shared files, keys, branches, and state. First ask whether the actors need one canonical mutable object.

Give independent facts separate owned files, keys, or branches and combine them when reading. Different fields in one rewritten JSON file still share a write target.

When one object is a real invariant, enforce serialization with exclusive ownership, locks, atomic updates, or a single writer. Instructions to take turns are not concurrency control.
