# Upstreams

## pstack

- Source: https://github.com/cursor/plugins/tree/main/pstack
- Imported commit: `efa2a531985e0a8084d36ff3cf87233be8a9f34b`
- License: MIT, copyright Lauren Tan. The required notice is preserved in `LICENSE-PSTACK`.
- Adaptation: renamed the mode and setup entry points, removed Cursor-only packaging, replaced host-specific tools and hard-coded models with capability-based behavior, and preserved portable scripts.
- Review note: pstack 0.14.4 added `grokbot/make-bot-ui`. Rstack does not port it because it depends on Cursor Grok Bot routines, Cursor's secret-request flow, `update_state`, and a local Tailscale host. The supported Agent Skills hosts do not share those capabilities.
- Review note: pstack 0.14.6 made its PR workflows forge-neutral and added schema-first TypeScript boundary guidance. Rstack ports the workflow changes as a GitHub-native policy that uses `gh stack`, with a connected-GitHub fallback that preserves the same base-branch chain. It does not port Cursor model defaults or Cursor-only skill frontmatter.
- Review note: pstack 0.14.7 only added Cursor plugin packaging and a logo. Rstack has no Cursor plugin manifest, so no logo asset is imported.

## HumanLayer show-me

- Source: https://github.com/humanlayer/skills/tree/main/plugins/show-me/skills/show-me
- Imported commit: `3c2629142c5d437428269b1b722b08c0b87f574d`
- License: MIT, copyright HumanLayer. The required notice is preserved in `LICENSE-SHOW-ME`.
- Adaptation: replaced the macOS-only `Bash(open ...)` instruction with the host's file or artifact viewer and tightened the final guidance without changing the supported visual formats.

## Conversation controls

The ideas behind `bro`, `facts`, `readback`, and `recap` were informed by the public `backnotprop/bro` collection. Their rstack instructions were written independently because that repository did not contain a license at the time of this import.
