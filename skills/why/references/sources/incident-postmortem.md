# Incident and postmortem history

Use this angle when defensive code may have come from a production failure.

Search commit messages, PRs, GitHub issues, tests, and repository docs for the target symbol, error string, incident ID, and terms such as `incident`, `outage`, `hotfix`, `revert`, and `postmortem`. Check the dates around the first introduction and later revisions.

Follow incident IDs into repository postmortems or GitHub issues. Read action items and verify whether they name or link the target change. A timing match is circumstantial evidence, not proof. Strong evidence connects the incident, action item, and shipped change in the repository record.

Skip this playbook when the target has no defensive or recovery behavior.
