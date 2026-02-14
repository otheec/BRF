# /review

Review changes with focus on:
- Slice boundaries (no cross-feature coupling)
- Contract stability and versioning
- Error format consistency (`docs/architecture/error-handling.md`)
- Data access correctness/performance (`docs/architecture/data-access.md`)
- EF entities not leaking into API contracts
- Logging/security (no secrets/PII)
- FastEndpoints conventions (Send.* API, CancellationToken)
Return actionable findings.