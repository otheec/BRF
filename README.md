# Brewfolio (BRF)

A beer-focused CRM for managing beers, breweries, and venues (pubs, restaurants, bars).
Track draft beers, beer styles, brewery information, and the places that serve them.

## Structure
- `src/BRF.Api/` — API application (FastEndpoints + EF Core)
- `docs/` — architecture docs + ADRs

## Architecture
Vertical Slice Architecture using FastEndpoints.
See:
- `docs/architecture/overview.md` — VSA structure and principles
- `docs/architecture/data-access.md` — EF Core + MySQL patterns
- `docs/architecture/error-handling.md` — standard error shapes
- `docs/architecture/performance.md` — pagination, N+1, CancellationToken
- `docs/architecture/integrations.md` — outbound HTTP, retries
- `docs/architecture/security.md` — logging hygiene, AuthZ

## Development
```bash
dotnet build
dotnet run --project src/BRF.Api
```

## Contributing
Before opening a PR, follow `docs/pr-checklist.md`.
