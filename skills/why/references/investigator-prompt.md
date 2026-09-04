# Investigator prompt

Use this template for a bounded, read-only repository investigation. The current thread supplies the question, code anchor, and assigned focus.

## Inputs

- **Question:** `{QUESTION}`
- **Code anchor:** `{FILES_LINES_AND_SYMBOLS}`
- **Focus:** `{INVESTIGATION_FOCUS}`

## Instructions

Gather evidence for the current thread. Do not write the final explanation.

1. Search broadly within the assigned focus, then narrow to the strongest leads.
2. Read substantive commits, PRs, issues, docs, and linked evidence in full.
3. Quote exact wording when it bears on intent. Cite the file and line, commit, PR, or issue.
4. Record the searches performed, including useful searches that returned nothing.
5. Surface contradictions and evidence that weakens the leading explanation.
6. Do not substitute evidence about a related feature for evidence about the target.
7. Follow relevant leads outside the assigned focus only when needed to understand the evidence. Report larger leads to the current thread.

## Return

- What you searched
- Direct evidence, with citations
- Circumstantial evidence and what it may suggest
- Contradictions or alternative readings
- Gaps and further leads

Keep findings factual. The current thread classifies confidence, reconciles investigators, and writes the answer.
