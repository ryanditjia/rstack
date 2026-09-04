---
name: why
description: "Use for 'why does X work this way', 'why we picked Y', design rationale, regressions, postmortems, code history, or data-backed thresholds. Reconstructs intent from code, tests, comments, repository docs, Git history, GitHub PRs and issues, and relevant user-named repositories. Use how for runtime behavior."
---

# Why

Reconstruct why code has its current shape. Find the constraints, edge cases, rejected alternatives, and history that explain it. Treat source repositories as the record unless the user explicitly asks for another source.

## Evidence rules

- Gather evidence before forming a narrative.
- Cite claims about intent with a file and line, commit hash, or GitHub PR or issue URL. Prefer quotes when wording matters.
- Code proves behavior, not motivation. Tests, comments, repository docs, commit messages, PR discussions, and issues can state intent. Code shape alone supports only an inference.
- Search beyond the last commit. The current design may combine several decisions.
- Surface contradictions and missing evidence. Do not smooth them into one story.
- Treat the user's proposed explanation as a hypothesis to test.
- Do not discover or query external connectors by default. Use them only when the user names one or asks for evidence outside repositories.

## Investigate

### Anchor the question

Identify the relevant files, lines, symbols, and observed behavior. If the target is ambiguous, state the best interpretation and proceed so the user can redirect.

### Search the repository record

Start with source, tests, comments, config, and repository docs. Then trace history with the commands that fit the question:

```bash
git blame -L <start>,<end> <file>
git log --follow -p -- <file>
git log -S '<exact text>' -p -- <path>
git log -G '<pattern>' -p -- <path>
git show <commit>
```

Inspect the full diff and nearby changes for substantive commits. Use `gh pr view` to read the PR body, review discussion, files, comments, and linked issues. Search the repository for ADRs, RFCs, READMEs, changelogs, comments, tests, error strings, feature names, and issue IDs. Follow renamed files and earlier versions of copied patterns.

For defensive code, look for reverts, hotfixes, incident references, failing cases, and tests added with the guard. For numeric thresholds, trace the exact literal and its replacements, then check nearby config, tests, benchmarks, PRs, and issues. A matching number is circumstantial evidence unless a source states the relationship.

Follow evidence into another repository only when the user names it, the current project identifies it as controlled by the same organization, or a concrete dependency points there. Good links include generated code, module dependencies, shared schemas, API clients, protocol definitions, and commit or PR references. State which repositories were searched.

### Choose the workload

Investigate directly when the trail is narrow. For broad or independent lines of inquiry, use subagents or agent threads as the workload warrants. Useful lines include source and tests, Git archaeology, GitHub discussion, and related repositories. Give each delegate a bounded question and require citations, searches performed, contradictions, and gaps.

The current thread owns synthesis and the final answer. Check delegated findings against the cited source when they conflict or support an important conclusion.

## Weigh the evidence

Classify each material claim:

- **Direct.** A source explicitly states the reason. State it plainly and cite it.
- **Supported.** Several indirect sources converge. Name the evidence chain and cite each part.
- **Inferred.** The record permits a likely interpretation but does not state it. Hedge and explain the reasoning.
- **Speculative.** Several explanations fit thin evidence. Present them as competing hypotheses.
- **Unknown.** The searches did not answer the question. Say what was searched and what remains missing.

Do not turn absence of evidence into evidence of absence. Do not infer author intent from names, patterns, or current correctness. When sources disagree, preserve both accounts and explain whether they can coexist.

## Present

Answer the user's question first. Keep mechanics brief unless they are needed to explain the rationale. Adapt the structure to the evidence:

- **What the record says.** Direct and supported findings with citations.
- **What it suggests.** Inferences and their evidence chain, only when needed.
- **Competing explanations.** Evidence for and against each live hypothesis, only when ambiguity matters.
- **What remains unknown.** Specific gaps and unsuccessful searches.
- **Sources checked.** Repositories, paths, commits, PRs, issues, and queries. Keep this compact.

End with a short confidence statement. If the investigation precedes a code change, translate the findings into Preserve / Change / Avoid / Risk constraints for that change.

Before returning, check that every intent claim has evidence or an uncertainty label, citations resolve to the claimed text, contradictions remain visible, and the answer explains why rather than restating what the code does.
