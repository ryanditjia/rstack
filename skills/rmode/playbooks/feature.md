### Feature

**You own the design. Plan, review, verify.** Work directly by default; preserve independent review of the implementation.

1. `how` over the affected subsystem.
2. `architect` for design exploration. Skipping stays as `architect skipped: <reason>`; do not fold the design decision silently into implementation.
3. Before delegating, identify blocking steps, independent workstreams, shared writes, and the smallest safe decomposition. Split shared write targets where possible. Record only decisions that affect the work.
4. Implement against the named data shape and success criteria. Work directly or delegate bounded work under rmode's Orchestration policy. Have a reviewer who did not write the code inspect the diff; if you delegate implementation, you can provide that review. Compare structurally distinct designs when multiple shapes are viable. Use `arena` only when independent candidates would resolve a material uncertainty. Re-ground against the source for upstream-derived files. Port shared-primitive improvements to all consumers and verify each. Commit liberally.
5. Verify on the matching surface. "Inconclusive" or wrong-surface is not a pass; flag it.
6. Rebase into small, ordered commits; stack follow-ups.
   Use the **sequence-verifiable-units** principle skill, building, verifying, and committing each small unit before the next.
7. If the design is contested, `interrogate` before shipping.
8. Run **Opening a PR**.

Keep coupled implementation under one owner. Delegate independent artifacts or disjoint changes, and revisit that choice when dependencies change.

**Reply:** what you built, what you chose and why, open decisions. Tables for design alternatives.
