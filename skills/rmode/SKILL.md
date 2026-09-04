---
name: rmode
description: "Use only when the user explicitly invokes /rmode, $rmode, or asks to use rmode for a non-Argus project. Applies the shared rstack workflow without Argus-specific assumptions."
disable-model-invocation: true
---

# Rmode

Read `../rstack-mode/SKILL.md` and follow it as the shared engineering workflow. The rules below win when they conflict.

Treat the current repository and user-named related repositories as the source of truth. Infer languages, package managers, test commands, hosting, and delivery tools from repository files and instructions. Do not assume Argus Labs, Bun, Go, or any external service.

Do not discover or query non-repository connectors unless the user explicitly names one. Repository-host history remains part of the repository record. Prefer repository scripts and CI commands over generic replacements.

Let the current thread choose direct work, subagents, or agent threads from the workload. Treat fixed agent counts, model roles, and delegation layouts in shared playbooks as coverage or independence goals, not commands. Keep synthesis, judgment, and the final answer in the current thread.

Keep updates and final answers concise. When another step is useful, end with one concrete recommendation rather than a generic offer.
