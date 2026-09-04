---
name: principle-exhaust-the-design-space
description: "Apply when facing a novel UI interaction or architectural decision with no precedent in the codebase. Explore competing concrete shapes before committing, with effort chosen from the uncertainty and cost of being wrong."
---

# Exhaust the Design Space

When a novel interaction or architectural decision has no established precedent, explore concrete alternatives before implementation. Spend more effort when uncertainty and the cost of being wrong are high.

**The rule.** When the right answer is not obvious, build enough competing prototypes or sketches to expose the real choice. Compare them side by side before committing. Structurally distinct alternatives count; cosmetic variations do not.

**When it applies:**
- Novel UI interactions (no prior art in the codebase)
- Architectural choices with multiple viable approaches
- Product design decisions where user experience depends on feel, not logic

**When it doesn't:**
- Mechanical implementation where the pattern is established
- Bug fixes or refactors with a clear target state
- Changes where constraints dictate a single viable approach
