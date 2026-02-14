# /implement

Implement the requested feature following repo rules:
- Vertical Slice folder convention (`Features/<Group>/<Feature>/`)
- FastEndpoints thin endpoint (validate → data access → map → return)
- Standard error format (see `docs/architecture/error-handling.md`)
- CancellationToken for I/O
- Use `Send.OkAsync()`, `Send.NotFoundAsync()`, etc. for responses
- Never leak EF entities into API contracts
- Minimal, scoped change set

After implementation, summarize:
- What changed
- How to verify locally