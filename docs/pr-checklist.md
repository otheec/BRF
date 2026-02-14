# PR Checklist

## Scope
- [ ] Change is scoped (no unrelated refactors)
- [ ] Feature folder follows `Features/<Group>/<Feature>/` and contains `<FeatureName>Endpoint.cs`, `<FeatureName>Request.cs`, `<FeatureName>Response.cs`

## API / Contracts
- [ ] Route changes are documented in PR description
- [ ] Auth/policy changes are documented
- [ ] Contract changes are documented
- [ ] Breaking changes handled via versioning strategy

## Errors
- [ ] Uses the standard error format (see `docs/architecture/error-handling.md`)
- [ ] No new ad-hoc error shapes introduced

## Data access / performance
- [ ] Uses EF Core patterns per `docs/architecture/data-access.md`
- [ ] Read endpoints use efficient queries (paging where needed)
- [ ] CancellationToken passed through all I/O
- [ ] No N+1 queries

## Observability / security
- [ ] Structured logging; no secrets/PII in logs
- [ ] Outbound calls have timeouts/retry per `docs/architecture/integrations.md`

## Build
- [ ] `dotnet build` passes with no warnings
