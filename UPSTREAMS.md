# Upstreams

## pstack

- Source: https://github.com/cursor/plugins/tree/main/pstack
- Imported commit: `c1c0a32802223f4be824112dd83d33ad29a8b26c`
- License: MIT, copyright Lauren Tan. The required notice is preserved in `LICENSE-PSTACK`.
- Adaptation: renamed the mode entry point to `rmode` and `setup-pstack` to `setup-rstack`, removed Cursor-only packaging, replaced Cursor tools and hard-coded model rosters with host-capability behavior and opencode role agents, and preserved portable scripts.
- Local adaptation: removed `make-bot-ui` because it depends on Cursor Grok Bot routines, Cursor's secret-request flow, `update_state`, and a local Tailscale host. Removed the Cursor agent definitions (`poteto-agent`, `comment-sicko`) in favor of opencode agents. Dropped the local `how` Critic/Critique modes in favor of upstream's explainer prompt. Do not restore these without a portability review.
- Review note: imported from upstream main through 2026-09-14, including the two principle leaves added by `#329` (`principle-attack-the-premise`, `principle-test-behavior-not-implementation`) and the prose passes in `#331`, `#341`, and `#362`.
- Rstack addition: `go-best-practices` applies the shared type and boundary principles to Go. It has no pstack counterpart.
- Review note: pstack 0.14.4 added `grokbot/make-bot-ui`. Rstack does not port it because it depends on Cursor Grok Bot routines, Cursor's secret-request flow, `update_state`, and a local Tailscale host. The supported Agent Skills hosts do not share those capabilities.
- Review note: pstack 0.14.6 made its PR workflows forge-neutral and added schema-first TypeScript boundary guidance. Rstack ports the workflow changes as a GitHub-native policy that uses `gh stack`, with a connected-GitHub fallback that preserves the same base-branch chain. It does not port Cursor model defaults or Cursor-only skill frontmatter.
- Review note: pstack 0.14.7 only added Cursor plugin packaging and a logo. Rstack has no Cursor plugin manifest, so no logo asset is imported.

## OpenCode adaptation

- Role agents: `flash` (DeepSeek V4.1 Flash), `luna` (GPT-5.6 Luna), `glm` (GLM-5.3-Flash), and `muse` (Muse Spark 1.3 Contributor) run in `~/.config/opencode/opencode.jsonc`, each at its configured reasoning effort. `rmode` routes roles to agents; `setup-rstack` rewrites the mapping.
- Skill permissions: opencode ignores `disable-model-invocation`, so explicit-only policies live in the config's `permission.skill` map instead.
- Tool mapping: Cursor `AskQuestion` becomes opencode's `question` tool, `run_in_background`/`environment` are dropped, `create-skill` becomes the host's skill-authoring guidance, `deslop` becomes `unslop` over the diff, `control-ui`/`control-cli` become host UI and CLI control capabilities, `/loop` becomes the persistent-work mechanism, and Origin merge flows normalize to `gh`.

## HumanLayer show-me

- Source: https://github.com/humanlayer/skills/tree/main/plugins/show-me/skills/show-me
- Imported commit: `3c2629142c5d437428269b1b722b08c0b87f574d`
- License: MIT, copyright HumanLayer. The required notice is preserved in `LICENSE-SHOW-ME`.
- Adaptation: replaced the macOS-only `Bash(open ...)` instruction with the host's file or artifact viewer and tightened the final guidance without changing the supported visual formats.

## Conversation controls

The ideas behind `bro`, `facts`, `readback`, and `recap` were informed by the public `backnotprop/bro` collection. Their rstack instructions were written independently because that repository did not contain a license at the time of this import.
