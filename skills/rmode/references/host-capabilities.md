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

## GitHub pull request stacks

Use GitHub's native stacked pull requests for every rstack stack. Prefer the `gh stack` extension for stack creation, submission, inspection, synchronization, rebasing, and merging. Do not use another stack manager.

GitHub stacks require branches in one repository. If the host cannot run `gh stack`, keep the same GitHub stack shape through the connected GitHub tools or API: the root PR targets trunk, and each child PR targets its parent branch. State that the extension was unavailable. Do not change to another forge.

Use GitHub's PR, check, review-thread, and merge interfaces for details that `gh stack` does not expose. Treat `gh stack merge` as a merge operation. Run it only when the relevant playbook authorizes merging.

## UI and CLI verification

Use an available browser, computer-control, simulator, or CLI-testing capability that matches the real surface. If none exists, use the closest executable harness and name the verification gap.

## Authorization

A workflow does not grant permission for external writes. Posting messages, changing tickets, pushing branches, resolving review threads, merging, deploying, or deleting data requires authorization from the user's request or later explicit approval.
