# Rationale template

Keep the rationale beside the design sketch. Replace each instruction with project-specific content.

## Problem

State the change and the constraints that make its shape non-obvious. Cite the grounding evidence for existing boundaries, callers, and invariants.

## Usage

Write the caller's view first. Show what callers import, call, and receive through realistic examples. Keep the type sketch consistent with this usage.

## Shape

Describe the data structures, signatures, runtime flow, configuration ownership, and module ownership. Name where parsing and validation occur, which invalid states the types prevent, and what the design deliberately leaves out.

Explain the interface depth. State what complexity the public interface hides and what callers must still understand.

## Selection

State why this shape was chosen. Name useful ideas incorporated from other candidates or evidence. Record rejected ideas and why they were not used.

## Tradeoffs accepted

For each material tradeoff, state what the design accepts and what it gains.

## Alternatives considered

Name each plausible, structurally different alternative. Compare caller burden, hidden complexity, boundaries, and failure behavior. Omit cosmetic variations of the chosen shape.

## Open questions and risks

List unresolved decisions and risks that implementation must test. Do not disguise assumptions as conclusions.

## First implementation step

Name the smallest step that proves the design can work in the existing system.
