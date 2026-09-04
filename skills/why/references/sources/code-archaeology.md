# Code archaeology

Use the repository record to find when a decision appeared and what its authors said about it.

## Search

Read the target source, tests, comments, configuration, ADRs, RFCs, READMEs, changelogs, and release notes. Search TODOs, FIXMEs, error strings, feature names, and issue IDs when relevant.

Trace history with the commands that fit the question:

```bash
git blame -L <start>,<end> <file>
git log --follow -p -- <file>
git log -S '<exact text>' -p -- <path>
git log -G '<pattern>' -p -- <path>
git show <commit>
```

Inspect the full diff and the files changed with each substantive commit. Co-changed files often reveal the constraint or failing case. Follow renames and find the earlier source when the target copied an existing pattern.

Use `gh pr view` to read the full PR body, review discussion, comments, files, and linked issues. Follow relevant links rather than stopping at the title or summary.

## Judge the record

- Prefer an explicit explanation in a PR, commit, comment, test, or repository doc.
- Treat a test as evidence of a motivating case only when its name, assertion, or surrounding discussion connects it to the change.
- Treat commit messages cautiously. Read the diff.
- For squash merges, use the PR body and discussion when branch commits are absent.
- Skip bot commits unless the automation itself explains the decision.
- Do not cite current code as proof of its author's intent.

Return exact quotes when wording matters. Include the source, author and date when available, whether the evidence is direct or circumstantial, and what you searched without finding.
