# Copilot Instructions — Brewfolio (BRF)

## Project
Beer-focused CRM: manage beers, breweries, and venues (pubs, restaurants, bars).

## Stack
- .NET 10, FastEndpoints, EF Core + SQL Server, Vertical Slice Architecture

## Feature structure
```
src/BRF.Api/Features/<Group>/<Feature>/
├── <FeatureName>Endpoint.cs
├── <FeatureName>Request.cs
└── <FeatureName>Response.cs
```
Groups: Beers, Breweries, Venues.

## Reference feature
See `src/BRF.Api/Features/Beers/GetAllBeers/` for the pattern to follow.

## Rules
- Endpoints must be thin: validate → query/persist → map → return.
- Use primary constructors for dependency injection.
- Always use CancellationToken for I/O.
- Never leak EF entities into API contracts — map to Request/Response DTOs.
- Use the standard error shapes from `docs/architecture/error-handling.md`.
- No cross-feature coupling (don't reference another feature's types).
- Nullable enabled, no warnings.

## Data access
- DbContext: `src/BRF.Api/Data/BrfDbContext.cs`
- Entities: `src/BRF.Api/Data/Entities/`
- Use `AsNoTracking()` for reads, CancellationToken for all async calls.
