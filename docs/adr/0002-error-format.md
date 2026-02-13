# ADR 0002: Standard error response format

## Status
Accepted

## Context
Multiple endpoints returning inconsistent error shapes increases client complexity.

## Decision
Adopt a single standard error response format as documented in:
- `docs/architecture/error-handling.md`

## Consequences
- Clients handle errors consistently.
- Endpoint implementations must follow the shared format.

## Alternatives considered
- Returning raw exceptions (rejected: insecure and inconsistent)
- Per-feature custom error shapes (rejected: client complexity)