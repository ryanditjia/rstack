---
name: setup-rstack
description: Configure optional rstack model roles for hosts that support explicit subagent model selection. Use when the user explicitly asks to configure rstack models.
---

# Setup rstack

Rstack works without model configuration. When the current host supports explicit model selection, store confirmed identifiers in `~/.config/rstack/models.md`. Otherwise use `inherit-parent` for every role.

1. Discover model identifiers through the current host's supported model listing or delegation interface. Do not invent identifiers or copy defaults from another host.
2. Read the existing configuration if present.
3. Ask the user only about roles with a meaningful choice. Recommend inheritance when routing provides no clear benefit.
4. Write the file idempotently. A scalar selects one model. A comma-separated list requests independent reviewers on each model. `inherit-parent` is always valid.
5. Verify every non-inherited identifier against the current host before finishing.

Use this shape:

```markdown
# rstack model roles
fast-code: inherit-parent
precise-code: inherit-parent
judgment: inherit-parent
alternate-judgment: inherit-parent
how-critics: inherit-parent
arena-runners: inherit-parent
arena-judge: inherit-parent
swarm-workers: inherit-parent
interrogate-reviewers: inherit-parent
reflect-reviewers: inherit-parent
```

If a skill cannot use a configured value, it falls back to the parent model and reports the fallback. Configuration never makes a model available.
