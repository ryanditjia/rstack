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

For the published repository, replace `/path/to/rstack` with `ryanditjia/rstack`. To install only the UI design skill, use that source with `--skill ui-design` and the same agent flags. For changes on a non-default branch, append `#branch-name` to the quoted source, for example `'ryanditjia/rstack#audit/merged-rstack-skills'`.

Update installed skills with:

```bash
npx -y skills@latest update --global --yes
```

The installer records the source repository. Use `npx -y skills@latest update ui-design --global --yes` to update only UI design. Develop and commit changes here, then install from the published source instead of editing installed copies. Run `scripts/check-upstream` before a release to see whether a tracked source has moved. Upstream changes still need a human portability review.

## Entry points

- `rmode` automatically applies a compact engineering baseline for implementation, debugging, code review, and technical specs. It routes to relevant principles and TypeScript guidance as needed.
- `grill-me` is an explicit control that interviews the user until a plan or decision has no hidden branches.
- `show-me` explains the current topic with diagrams, code-shape sketches, and focused HTML artifacts.
- `ui-design` automatically handles requested spacing, alignment, typography, or color adjustments to a named existing interface. Use `$ui-design tune the billing form spacing`, `$ui-design review the checkout flow`, or `$ui-design redesign the analytics overview`. Review reports findings without editing. Review and redesign require an explicit invocation with that mode.
- `bro`, `facts`, `readback`, and `recap` are explicit conversation controls. `manual-review` is explicit-only as well.
- `typescript-best-practices` and `go-best-practices` apply language-specific guidance when their source files are in scope.
- The remaining workflow skills can be invoked separately. `rmode` does not automatically activate them.

### Lightweight Codex setup

Install `rmode` together with all 23 `principle-*` skills and `typescript-best-practices`. Other skills are optional. Rmode supports this selected installation without requiring the rest of rstack.

Keep personal preferences and general authorization rules in `~/.codex/AGENTS.md`. The coding baseline lives in rmode; replace duplicated coding guidelines with this activation rule:

```markdown
For implementation, debugging, code review, and implementation plans or technical
specs, read `~/.agents/skills/rmode/SKILL.md` and use the relevant principles.
Skip it for ordinary conversation and read-only explanations unless explicitly
requested. Reuse it while its instructions remain in context.
```

Rmode allows implicit invocation in `agents/openai.yaml`; the principle leaves and TypeScript skill retain their explicit-only discovery policy. Rmode reads those files by relative path when relevant. Its effort policy qualifies upstream procedures so a principle does not automatically trigger prototypes, scripts, subagents, or more verification. Routing is model-followed guidance, not an executable classifier.

The rmode package contains only `SKILL.md` and `agents/openai.yaml`. Its former playbooks, scripts, and workflow references have been removed. `setup-rstack` configures OpenCode role agents for optional workflows; it does not select the Codex model or affect lightweight rmode.

## Portability

Skills describe host capabilities instead of assuming one agent product. The optional full workflows use GitHub's native stacked pull requests through `gh`, with `gh stack` preferred when present. Those workflows route through four opencode subagents (`flash`, `luna`, `glm`, `muse`); `setup-rstack` writes each role's model and reasoning effort. Rmode does not require those workflows or agents. Run `scripts/check-portability` before publishing.

## UI design validation and migration

Run `./scripts/check-ui-design` to check instruction budgets, YAML metadata, and local links. On macOS or Linux, it requires Python 3.10 or newer with `venv` support. The first run downloads the pinned dependencies from `scripts/ui-design-requirements.txt` into a private environment under `${XDG_CACHE_HOME:-$HOME/.cache}/rstack/ui-design`. Later runs reuse that environment; no global Python packages or `uv` installation are needed. Changing the pins or Python version creates a separate environment. It measures complete Markdown files with `tiktoken` and `o200k_base`; these counts compare instruction size, not billing or any host's full prompt. Add `--baseline /resolved/path/to/impeccable` to measure the previous workflow with the same tokenizer.

Replay `tests/ui-design/trigger-cases.json` in fresh host sessions when changing routing. Inspect actual reference reads and actions against each case. The deterministic validator checks the fixtures' structure, not model behavior. Test installation in a clean environment and verify `npx -y skills@latest list --global --json` discovers the committed skill for the intended agents.

After UI design validates and is installed, replace broad Impeccable discovery with the explicit `$ui-design redesign` workflow. First inventory Impeccable copies, pinned shortcuts, and project hooks. Resolve each installed target with `skills list --global --json`. Remove the resolved global skill with `npx -y skills@latest remove impeccable --global --yes`; this removes its installed files and agent links. Archive a custom installation outside discovery first if it needs to remain recoverable. Check pinned shortcuts and hooks separately, and preserve product design documents and assets. Verify discovery in a fresh session. Do not patch an installed Impeccable copy to maintain a second, untracked policy.

## Principle budgets

All 23 `principle-*` names are available, including individual installations. Rmode selects principle details conditionally; `unslop` and `technical-writing` are optional separate workflows. Run `./scripts/check-instruction-budgets --self-test --tracked` before publishing. Like the UI validator, it uses Python 3.10+, pinned dependencies, and a private cache under `${XDG_CACHE_HOME:-$HOME/.cache}/rstack/instruction-budgets`. It measures full Markdown files and discovery descriptions with tiktoken 0.14.0 / `o200k_base`, and checks budgets, links, caller inventory, invocation metadata, and negative test cases. Baseline measurements and route definitions live in `tests/instruction-budgets/`. The baseline covers the 23 restored upstream principles at `8c3d19d`; the older compressed 21-skill budgets no longer describe this package. Rmode has a separate entry-point budget, invocation-policy check, and exact two-file package check. Budgets are ceilings, not targets or billing estimates; installed bodies do not all load every turn.

Trigger fixtures describe expected reads and actions. Deterministic checks validate their structure, not model behavior. Replay them in fresh Codex, Claude Code, and OpenCode sessions and inspect actual reads before claiming routing accuracy. Codex's official `quick_validate.py` rejects the portable `disable-model-invocation` field used by explicit-only skills. Preserve that cross-host policy; Codex and ChatGPT receive the equivalent policy from each skill's `agents/openai.yaml`.

Install from the pushed branch as described above, then resolve installed destinations with `skills list --global --json`. Run `./scripts/check-skill-installation --revision <verified-sha> --installed-root <resolved-skills-directory>` to compare all budgeted skills and rmode, including references, metadata, and unexpected files. Repeat `--installed-root` for distinct agent directories, or use repeated `--skill` flags for individual installs. Updates can affect other agents sharing the canonical directory. To roll back, publish a revert or reinstall the previous verified ref, compare bytes again, and start fresh sessions; already-loaded instructions remain in existing sessions.

## Attribution

The engineering skills are adapted from pstack. The `show-me` skill is adapted from HumanLayer. See `UPSTREAMS.md`, `LICENSE-PSTACK`, and `LICENSE-SHOW-ME`. The conversation-control skills are independently authored for rstack.
