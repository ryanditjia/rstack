---
name: why
description: "Use for 'why does X work this way', 'why we picked Y', design rationale, regressions, postmortems, code history, or data-backed thresholds. Reconstructs intent from code, tests, comments, repository docs, Git history, GitHub PRs and issues, and relevant user-named repositories. Use how for runtime behavior."
---

# Why

Reconstruct why code has its current shape. Find the constraints, edge cases, rejected alternatives, and history that explain it. Treat source repositories as the record unless the user explicitly asks for another source.

## Evidence rules

- Gather evidence before forming a narrative.
- Cite claims about intent with a file and line, commit hash, or GitHub PR or issue URL.
- Code proves behavior, not motivation. Code shape alone supports only an inference.
- Search beyond the last commit. The current design may combine several decisions.
- Preserve contradictions and missing evidence.
- Test the user's proposed explanation as a hypothesis.
- Do not discover or query external connectors by default. Use one only when the user names it or asks for evidence outside repositories.

## Investigate

Identify the relevant files, lines, symbols, and observed behavior. If the target is ambiguous, state the best interpretation and proceed.

Read `references/source-playbook.md` to choose the repository playbooks. Start with source, tests, comments, configuration, repository docs, Git history, and GitHub discussion. Follow evidence into another repository only when the user names it, the project identifies it as controlled by the same organization, or a concrete dependency points there. State which repositories you searched.

Investigate directly when the trail is narrow. For broad or independent lines of inquiry, use subagents or agent threads as the workload warrants. Give each delegate a bounded question using `references/investigator-prompt.md`.

The current thread owns synthesis and the final answer. Check delegated findings against their cited sources when they conflict or support an important conclusion.

## Weigh and present

Read `references/epistemics.md` before classifying claims. When several evidence trails or delegated findings need reconciliation, also read `references/synthesizer-prompt.md`. That file guides the current thread; it does not create a separate synthesizer.

Answer the user's question first. Keep mechanics brief unless they explain the rationale. Use only the sections the evidence needs:

- **What the record says.** Direct and supported findings with citations.
- **What it suggests.** Inferences and their evidence chain.
- **Competing explanations.** Evidence for and against each live hypothesis.
- **What remains unknown.** Specific gaps and unsuccessful searches.
- **Sources checked.** Repositories, paths, commits, PRs, issues, and exact queries. Distinguish empty searches from relevant sources that were unavailable or not searched, and say why.

End with a short confidence statement. If the investigation precedes a code change, translate the findings into Preserve / Change / Avoid / Risk constraints.

Before returning, check that every intent claim has evidence or an uncertainty label, citations resolve to the claimed text, contradictions remain visible, and the answer explains why rather than restating what the code does.
