# Host capability contract

Rstack runs on any Agent Skills host. Discover the current host's capabilities at runtime. Never assume a branded command, path, model name, or plugin exists.

## Delegation

When a workflow asks for independent agents, use the host's delegation mechanism. Run independent work in parallel when supported. If delegation is unavailable, perform separate passes sequentially and state that model or context independence was unavailable.

Use model roles from `~/.config/rstack/models.md` only when the host supports explicit model selection. Otherwise inherit the current model. Reject unavailable configured models and fall back to inheritance instead of guessing another identifier.

## Persistent work

For monitoring or long-running work, use the host's goal, loop, continuation, automation, or wait mechanism. If none exists, use bounded polling in the active turn. Do not create an unbounded shell sleep loop. Preserve the playbook's terminal condition.

## Task history

Use the host's task-history or transcript interface only when it is exposed for the current workspace. Do not guess private filesystem locations or scan other workspaces. When task history is unavailable, use the current conversation plus repository state and disclose the missing evidence.

## Skill authoring and discovery

Prefer the shared `.agents/skills/<name>/SKILL.md` project layout for portable skills. A host may also expose a user-level skill directory or authoring workflow. Use it only when the user asks for a user-level installation.

## UI and CLI verification

Use an available browser, computer-control, simulator, or CLI-testing capability that matches the real surface. If none exists, use the closest executable harness and name the verification gap.

## Authorization

A workflow does not grant permission for external writes. Posting messages, changing tickets, pushing branches, resolving review threads, merging, deploying, or deleting data requires authorization from the user's request or later explicit approval.
