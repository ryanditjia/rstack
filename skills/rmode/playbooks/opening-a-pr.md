### Opening a PR

Invoked at the end of every other playbook.

**Worktree.** Work from a git worktree off main; subagents inherit it. Multiple delegation requests on the same branch each get their own worktree, or `git fetch && git reset --hard origin/<branch>` between them. Dirty branch with unrelated work: patch out, fresh worktree, apply. Snarled worktree: reset from main, redo minimally.

**Commits.** Commit liberally; rebase into small, ordered commits before opening PRs. Each commit is a future PR: landable, ordered to tell the story. Amend when the fix belongs in a just-made commit; new commit when separable.

**PRs.** Run a diff-cleanup pass from available host tooling over the diff before commit. Run the no-comments skill before review. Write every PR title, PR description, and commit body with the technical-writing skill's short PR/commit route, then apply the unslop skill. Detailed writing references are unnecessary unless the task calls for them.

**Titles.** Use Conventional Commits in the form `type(scope): subject`. Use `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, or `perf` as the type. Use the changed area, such as `rstack` or `rmode`, as the scope. Keep the subject short and imperative. Apply the same the technical-writing skill and the unslop skill pass as the body. Name a real symbol when one carries the change. For example, `fix(rstack): retarget opening-a-pr babysit trigger`. Do not add a trailing period.

**Descriptions.** Use these sections in order. Drop a section when it is empty.

- `## Why`. State the intent and why this approach fits.
- `## Scope`. State facts from the diff. Name real symbols and paths. Name both sides of a rename or retarget. State what is in and out when the boundary matters.
- `## Tradeoffs`. State real choices only. Skip this section when there are none.
- `## Blast Radius`. State who and what the change touches. Explain why the change is safe or risky. If main is red without the fix, name the continuing cost.
- `## Verification`. State how you ran each check and its rigor. Name the real path, such as the available CLI control capability, the available UI control capability, or the targeted tests. State the outcome of each check, not only the command name.

After these sections, attach videos or screenshots when they prove a claim. Do not use `## Summary` or `## Test plan` boilerplate. A commit body does not restate its subject.

**GitHub.** Use GitHub for every PR operation. Use the connected GitHub tools or `gh` for single PRs. Use `gh stack` for every stack. Do not use another stack manager. If the host cannot run `gh stack`, create the same GitHub-native base-branch chain through the connected GitHub tools or API and report that fallback.

**Size and stacks.** Prefer five narrow PRs to one large PR. For a new stack, run `gh stack init` for the root and `gh stack add` for each child. Run `gh stack submit` to create or update the PRs. The root PR targets trunk, and each child PR targets its parent branch. Keep all branches in the same GitHub repository. Branch from trunk only for independent work. When the stack has drifted from trunk, run `gh stack sync`. For an interactive conflict resolution, run `gh stack rebase`, then `gh stack push`.

**Readiness.** Open every PR ready, never as a draft. After `gh stack submit`, inspect the stack with `gh stack view` and inspect each PR through GitHub before you refer to its status. If a fallback creates a draft, mark it ready through GitHub.

**Babysit.** Opening a PR does not start a babysit. Post the URL and keep building. Finish the phase or stack first. Run a separate babysit pass only when the user asks for one after the whole stack exists. A babysit for each new PR stalls the build and spends checks on commits that later waves restart. Push back when feedback drifts from intent.

A subagent that opens a PR runs `interrogate`, a diff-cleanup pass, and the no-comments skill. It returns the URL and does not babysit. Return to the parent.
