# Deep review

Use only for an explicitly requested technical-writing deep review. Read document structure for organization, procedures for steps, or Global English for ambiguity when that issue exists in the supplied artifact. A commit message does not need Diátaxis.

Check the actual text against its purpose:

- Can the reader find the task, fact, or explanation they came for?
- Are commands, symbols, paths, counts, and behavior true? Check against the source; distinguish unverified claims.
- Does each instruction have one action and its condition in the right place?
- Does every pronoun and modifier point to one clear meaning?
- Does each concept keep one name?
- Can a sentence lose words without losing evidence or necessary uncertainty?
- Does the prose explain a concrete mechanism instead of describing a feeling?

For example, "Configuration of the import budget parameters is performed via budget.json. If exceeded, CI fails" hides the actor and the failure condition.

Prefer: "`budget.mjs` reads `budget.json` and counts imports. If the count exceeds the budget, CI fails."

Verify those names and that behavior before making the replacement. Do not invent precision to improve the sentence.

Report material problems and proposed corrections at the requested scope. A review request does not authorize editing the document or changing the skills.
