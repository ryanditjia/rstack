import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const script = fileURLToPath(new URL("./check-plan.mjs", import.meta.url));
const template = readFileSync(new URL("../playbooks/multi-phase-plan.md", import.meta.url), "utf8")
  .split("````markdown\n")[1].split("\n````")[0];

function check(text) {
  const dir = mkdtempSync(join(tmpdir(), "rstack-plan-test-"));
  try {
    const file = join(dir, "plan.md");
    writeFileSync(file, text);
    const result = spawnSync(process.execPath, [script, file], { encoding: "utf8" });
    if (result.error) throw result.error;
    return result;
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

test("accepts the published plan template", () => {
  const result = check(template);
  assert.equal(result.status, 0, result.stderr);
});

test("accepts ten scenarios assigned to two independent reviewers", () => {
  const plan = template.replace(
    /(\*\*Verify, live\.\*\* .*?boxes are all checked\.).*/,
    "$1 Two independent reviewers cover all ten scenarios at the PR head."
  );
  const result = check(plan);
  assert.equal(result.status, 0, result.stderr);
});

for (const [name, pattern] of [
  ["missing scenario", /^- \[ \] Lane 10\..*\n/m],
  ["missing screenshot", /Save `<slug>\.png`\./],
  ["missing pass predicate", /Pass when <predicate>\./],
  ["missing performance metric", /^- \[ \] Metric\..*\n/m],
  ["missing verification rule", /Tests alone are not sufficient verification\. A PR is verified only when its unit, live, and perf boxes are all checked\./g],
]) {
  test(`rejects ${name}`, () => {
    const plan = template.replace(pattern, "");
    assert.notEqual(plan, template);
    assert.equal(check(plan).status, 1);
  });
}
