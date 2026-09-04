---
name: argus-mode
description: "Use only when the user explicitly invokes /argus-mode, $argus-mode, or asks to use Argus mode for an Argus Labs project. Applies rstack with Argus repository, language, tooling, and delivery conventions."
disable-model-invocation: true
---

# Argus mode

Read `../rstack-mode/SKILL.md` and follow it as the shared engineering workflow. The rules below specialize it for repositories controlled by Argus Labs and win when they conflict.

## Source of truth

Treat code, tests, configuration, repository docs, Git history, and GitHub discussion as the record. Follow concrete dependencies into other Argus-controlled repositories when a schema, protocol, generated package, service contract, or commit reference crosses repositories.

Do not discover or query non-repository connectors unless the user explicitly names one. GitHub repository history remains part of the repository record. Do not infer a product decision from an external system when that record answers it.

If the current repository is not controlled by Argus Labs, say so before applying Argus-specific assumptions.

## Languages and tools

Inspect the repository before choosing commands.

- For TypeScript, read `../typescript-best-practices/SKILL.md`. Use Bun when the lockfile, scripts, or repository instructions select it.
- For Go, read `../go-best-practices/SKILL.md`. Use the module's Go version and repository commands.
- For mixed TypeScript and Go changes, trace the schema or protocol at the boundary and verify both consumers.
- Prefer repository scripts and CI commands over generic replacements.

Use GitHub and `gh` for pull requests. Use `gh stack` for a real stacked change when available, with the rstack GitHub fallback otherwise. Do not assume Graphite.

## Working style

Let the current thread choose direct work, subagents, or agent threads from the workload. Treat fixed agent counts, model roles, and delegation layouts in shared playbooks as coverage or independence goals, not commands. Keep synthesis, judgment, and the final answer in the current thread.

Keep updates and final answers concise. When another step is useful, end with one concrete recommendation rather than a generic offer.
