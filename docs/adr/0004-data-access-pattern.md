# ADR 0004: Follow existing data access pattern per feature

## Status
Accepted

## Context
Vertical Slice architecture benefits from local consistency. Introducing new patterns creates drift.

## Decision
For new work:
- Inspect similar features and replicate the existing data access approach.
- Do not introduce new cross-cutting patterns without an ADR.

## Consequences
- Consistent codebase
- Lower cognitive load and easier reviews