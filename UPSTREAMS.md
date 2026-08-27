# Upstreams

## pstack

- Source: https://github.com/cursor/plugins/tree/main/pstack
- Imported commit: `799151d91b6e12ee7dbd09f708eec108d7de9b3b`
- License: MIT, copyright Lauren Tan. The required notice is preserved in `LICENSE-PSTACK`.
- Adaptation: renamed the mode and setup entry points, removed Cursor-only packaging, replaced host-specific tools and hard-coded models with capability-based behavior, and preserved portable scripts.
- Review note: pstack 0.14.4 added `grokbot/make-bot-ui`. Rstack does not port it because it depends on Cursor Grok Bot routines, Cursor's secret-request flow, `update_state`, and a local Tailscale host. The supported Agent Skills hosts do not share those capabilities.

## Conversation controls

The ideas behind `bro`, `facts`, `readback`, and `recap` were informed by the public `backnotprop/bro` collection. Their rstack instructions were written independently because that repository did not contain a license at the time of this import.
