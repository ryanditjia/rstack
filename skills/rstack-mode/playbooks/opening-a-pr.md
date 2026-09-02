### Opening a PR

Invoked at the end of every other playbook.

**Worktree.** Work from a git worktree off main; subagents inherit it. Multiple delegation requests on the same branch each get their own worktree, or `git fetch && git reset --hard origin/<branch>` between them. Dirty branch with unrelated work: patch out, fresh worktree, apply. Snarled worktree: reset from main, redo minimally.

**Commits.** Commit liberally; rebase into small, ordered commits before opening PRs. Each commit is a future PR: landable, ordered to tell the story. Amend when the fix belongs in a just-made commit; new commit when separable.

**PRs.** Run a diff-cleanup pass from available host tooling over the diff before commit. Run the no-comments skill before review. Write every PR title, PR description, and commit body with the technical-writing skill, then apply the unslop skill. Apply every technical-writing layer except Diátaxis. Use one word for each action, keep articles, and avoid `-ing` when a plain verb works.

**Titles.** Use Conventional Commits in the form `type(scope): subject`. Use `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, or `perf` as the type. Use the changed area, such as `rstack` or `rstack-mode`, as the scope. Keep the subject short and imperative. Apply the same the technical-writing skill and the unslop skill pass as the body. Name a real symbol when one carries the change. For example, `fix(rstack): retarget opening-a-pr babysit trigger`. Do not add a trailing period.

**Descriptions.** Use these sections in order. Drop a section when it is empty.

- `## Why`. State the intent and why this approach fits.
- `## Scope`. State facts from the diff. Name real symbols and paths. Name both sides of a rename or retarget. State what is in and out when the boundary matters.
- `## Tradeoffs`. State real choices only. Skip this section when there are none.
- `## Blast Radius`. State who and what the change touches. Explain why the change is safe or risky. If main is red without the fix, name the continuing cost.
- `## Verification`. State how you ran each check and its rigor. Name the real path, such as the available CLI control capability, the available UI control capability, or the targeted tests. State the outcome of each check, not only the command name.

After these sections, attach videos or screenshots when they prove a claim. Do not use `## Summary` or `## Test plan` boilerplate. A commit body does not restate its subject.

**Forge.** Resolve the forge before the first PR operation and keep that choice for create, edit, view, watch, and merge. Prefer the host's connected forge tools, then its supported forge CLI. Record the fallback when the preferred capability cannot resolve the repository. Do not require Graphite.

**Size and stacks.** Prefer five narrow PRs to one large PR. A stack is a base-branch chain. The root PR targets trunk; each child branch rebases onto its parent's exact tip and its PR targets the parent branch. Branch from trunk only for independent work. Rebase on trunk before substantial stack work.

**Readiness.** Open every PR ready, never as a draft. Set the resolved forge's ready or open state explicitly when its creation tool defaults to draft. If a PR still opens as a draft, use that forge's ready operation. Read the PR through the same forge before you refer to its status.

**Babysit.** Opening a PR does not start a babysit. Post the URL and keep building. Finish the phase or stack first. Run a separate babysit pass only when the user asks for one after the whole stack exists. A babysit for each new PR stalls the build and spends checks on commits that later waves restart. Push back when feedback drifts from intent.

A subagent that opens a PR runs `interrogate`, a diff-cleanup pass, and the no-comments skill. It returns the URL and does not babysit. Return to the parent.
