# PR Checklist

## Scope
- [ ] Change is scoped (no unrelated refactors)
- [ ] Feature folder follows `Features/<Group>/<Feature>/` and contains Endpoint/Request/Response

## API / Contracts
- [ ] Route changes are documented in PR description
- [ ] Auth/policy changes are documented
- [ ] Contract changes are documented
- [ ] Breaking changes handled via versioning strategy (see ADR 0003)

## Errors
- [ ] Uses the standard error format (see `docs/architecture/error-handling.md`)
- [ ] No new ad-hoc error shapes introduced

## Data access / performance
- [ ] Uses repo-approved data access pattern (see `docs/architecture/data-access.md`)
- [ ] Read endpoints use efficient queries (paging where needed)
- [ ] CancellationToken passed through all I/O

## Observability / security
- [ ] Structured logging; no secrets/PII in logs
- [ ] Outbound calls have timeouts/retry per `docs/architecture/integrations.md`

## Tests
- [ ] Relevant tests added/updated
- [ ] `dotnet test` passes locally