# ADR 0003: API contract versioning strategy

## Status
Accepted

## Context
Request/Response types are API contracts. Breaking changes must be managed.

## Decision
Breaking contract changes require versioning via the repo-established approach:
- Prefer introducing a new versioned endpoint/route rather than silently changing existing contracts.
- All breaking changes must be documented in PR description.

## Consequences
- More stable clients
- Slightly more maintenance due to multiple versions when needed