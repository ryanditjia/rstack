---
name: principle-build-the-lever
description: "Use for repeatable edits or checks whose result needs a rerunnable tool."
---

# build the lever

Build the smallest script, codemod, generator, or check that makes the work repeatable. First prove the recipe on one unit, then compare the tool's output and make reruns safe.

Use an existing tool before adding one. A deterministic pass can replace manual fan-out. Commit the tool when future work needs it. Trivial edits need no new artifact.
