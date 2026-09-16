---
name: setup-rstack
description: "Configure rmode's per-role subagents (flash, luna, glm, muse), their models, and their reasoning effort. Use for /setup-rstack, \"configure rstack agents\", or changing which model a role runs on."
---

# Setup rstack

Configure the role agents rmode routes to and write them into `~/.config/opencode/opencode.jsonc`.

## Role agents

| Agent | Model | Reasoning | Roles |
|---|---|---|---|
| `flash` | `opencode-go/deepseek-v4.1-flash` | max | feature, refactoring, bug-fix, perf-issue, hillclimb, hardest tasks, how explorer, why investigators, swarm workers |
| `luna` | `opencode-go/gpt-5.6-luna` | max | judgment and prose, how explainer, why synthesizer, reflect judgment, tooling, divergent, and synthesizer |
| `glm` | `opencode-go/glm-5.3-flash` | max | panel diversity |
| `muse` | `opencode-go/muse-spark-1.3-contributor` | xhigh | panel diversity |

Panel roles (arena runners, arena cross-judge pool, architect runners, interrogate reviewers) run one subagent per entry: `flash`, `glm`, `muse`, `luna`.

## Steps

### 1. Detect available models

Run `opencode models`. That is the dependable source. If it fails, ask the user to paste the model list. Never write a model slug that was not confirmed available.

### 2. Load current state

Read `~/.config/opencode/opencode.jsonc`. If its `agent` block already defines these agents, treat their models and `reasoningEffort` values as the current choices. Otherwise start from the table above.

### 3. Confirm the mapping

Show every agent with its model and effort. Ask whether to accept as-is or change specific agents, offering the detected models as the options. Maximum reasoning effort per model comes from the opencode models cache at `~/.cache/opencode/models.json`, under that model's `reasoning_options`. Use the highest effort value the model lists.

### 4. Write the agents

Write or update the `agent` block in `~/.config/opencode/opencode.jsonc`. Overwrite only these keys so re-runs stay idempotent. Shape:

```jsonc
"agent": {
  "flash": {
    "description": "Fast code and bulk work.",
    "mode": "subagent",
    "model": "opencode-go/deepseek-v4.1-flash",
    "reasoningEffort": "max"
  },
  "luna": {
    "description": "Judgment, prose, and synthesis.",
    "mode": "subagent",
    "model": "opencode-go/gpt-5.6-luna",
    "reasoningEffort": "max"
  },
  "glm": {
    "description": "Panel diversity.",
    "mode": "subagent",
    "model": "opencode-go/glm-5.3-flash",
    "reasoningEffort": "max"
  },
  "muse": {
    "description": "Panel diversity.",
    "mode": "subagent",
    "model": "opencode-go/muse-spark-1.3-contributor",
    "reasoningEffort": "xhigh"
  }
}
```

Additional agent options pass through to the provider as model options, so `reasoningEffort` reaches the model. Keep the JSON valid. Leave the rest of the file untouched.

### 5. Confirm

Tell the user the agents were written, they apply to new sessions, and re-running this skill updates them.

### 6. Offer a verification skill (optional)

Check whether the project has a way to drive the real app for proof (a `verify-*` skill, or an existing harness). If not, offer once: "want a project-local verification skill, so agents can drive the app the way a user does and prove changes work? I can generate one with the create-verification-skill skill." On yes, invoke the `create-verification-skill` skill. On no, move on without pushing.
