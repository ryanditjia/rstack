# rstack

Ryan's portable agent-skill stack. It combines a rigorous engineering workflow adapted from Lauren Tan's pstack, a decision-grilling workflow, and small conversation controls for plain language, critical facts, request confirmation, and session recaps.

The skills use the open Agent Skills directory format. They do not require a Codex, Claude Code, Cursor, or OpenCode plugin.

## Install

Install every skill globally for the agents you use:

```bash
npx -y skills@latest add /path/to/rstack \
  --skill '*' \
  --agent codex \
  --agent claude-code \
  --agent opencode \
  --global \
  --yes
```

After publishing the repository, replace `/path/to/rstack` with `ryanditjia/rstack`.

Update installed skills with:

```bash
npx -y skills@latest update --global --yes
```

The installer records the source repository, so `skills update` can pull future rstack releases after this directory is published as a Git repository. Run `scripts/check-upstream` before a release to see whether pstack has moved; upstream changes still need a human portability review.

## Entry points

- `rstack-mode` routes non-trivial engineering work through the adapted pstack playbooks.
- `grill-me` interviews the user until a plan or decision has no hidden branches.
- `bro`, `facts`, `readback`, and `recap` are explicit conversation controls.
- The remaining skills are focused engineering workflows and principles used directly or through `rstack-mode`.

## Portability

Skills describe host capabilities instead of assuming one agent product. Pull request stacks are the exception: rstack uses GitHub's native stacked pull requests and prefers the `gh stack` extension. Read `skills/rstack-mode/references/host-capabilities.md` for the fallback contract. Run `scripts/check-portability` before publishing.

## Attribution

The engineering skills are adapted from pstack. See `UPSTREAMS.md` and `LICENSE-PSTACK`. The conversation-control skills are independently authored for rstack.
