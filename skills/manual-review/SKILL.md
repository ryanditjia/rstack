---
name: manual-review
description: Guide a human through an effective code diff one coherent chunk at a time while they inspect and stage approved changes. Use only when explicitly invoked.
disable-model-invocation: true
---

# Manual review

Help the human review the whole effective change, including the original branch and any fixes stacked on it. The human decides what passes and stages it. Do not stage, commit, or push unless they explicitly ask.

## Set up

1. Confirm the comparison base and inspect the full diff against it. Do not limit the review to changes made in this conversation.
2. Inspect the worktree, index, branch, and relevant history. Preserve existing staged changes.
3. When the human wants to stage files as they approve them, prefer a dedicated worktree containing the effective changes as unstaged files. Reuse an equivalent setup when one already exists.
4. Explain which checkout and baseline the editor shows before review begins.

## Review loop

Choose the next smallest coherent behavior or dependency slice. Do not sort mechanically by filename.

For each slice:

1. Link the exact local files and lines.
2. State what changed, who calls it, whether behavior changes, and what deserves scrutiny.
3. Answer follow-up questions by tracing callers, tests, configuration, and history as needed.
4. Make a change only when the human asks. Keep it unstaged and run the narrowest meaningful verification.
5. Stop after the slice. The human reviews and stages approved files.

When the human says `next`, inspect the index and worktree again. A file may be staged, unstaged, or both. A file marked `MM` is not fully approved. Then choose the next coherent slice.

## Review judgment

- Call out behavior changes explicitly. Do not describe them as cleanup.
- Prefer direct code over string dispatch, one-caller wrappers, helper proliferation, or abstractions that only rename a call.
- Test observable behavior. Flag tests coupled only to private helpers or incidental structure.
- Trace terminology through real callers and configuration before recommending a rename.
- Treat a long explanatory comment as a reason to inspect the code shape. Keep comments only for constraints or reasons the code cannot express.
- Separate defects and maintainability costs from taste. Say when a point is merely preference or no longer worth review time.
- Keep explanations short. Expand only where the human is still confused.

## Finish

After every intended file is staged, run the relevant full test and lint checks. Report staged, unstaged, and untracked files plus unresolved risks. Commit or push only with explicit authorization.
