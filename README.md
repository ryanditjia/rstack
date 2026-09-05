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

The installer records the source repository, so `skills update` can pull future rstack releases after this directory is published as a Git repository. Run `scripts/check-upstream` before a release to see whether a tracked source has moved. Upstream changes still need a human portability review.

## Entry points

- `rmode` applies the repository-first engineering workflow. It infers the language and toolchain from the project, including Bun, TypeScript, and Go.
- `grill-me` interviews the user until a plan or decision has no hidden branches.
- `show-me` explains the current topic with diagrams, code-shape sketches, and focused HTML artifacts.
- `bro`, `facts`, `readback`, and `recap` are explicit conversation controls.
- `typescript-best-practices` and `go-best-practices` apply language-specific guidance when their source files are in scope.
- The remaining skills are focused engineering workflows and principles used directly or through `rmode`.

## Portability

Skills describe host capabilities instead of assuming one agent product. Pull request stacks are the exception: rstack uses GitHub's native stacked pull requests and prefers the `gh stack` extension. Read `skills/rmode/references/host-capabilities.md` for the fallback contract. Run `scripts/check-portability` before publishing.

## Attribution

The engineering skills are adapted from pstack. The `show-me` skill is adapted from HumanLayer. See `UPSTREAMS.md`, `LICENSE-PSTACK`, and `LICENSE-SHOW-ME`. The conversation-control skills are independently authored for rstack.
