# Architecture Overview

## Style
Vertical Slice Architecture (VSA) using FastEndpoints.

## Organization
Features are grouped by business area (Group) and feature name.

Path pattern:
```
src/BRF.Api/Features/<Group>/<Feature>/
```

### Feature groups
| Group | Description |
|-------|-------------|
| Beers | Beer catalogue — CRUD, styles, attributes |
| Breweries | Brewery profiles, locations, contacts |
| Venues | Pubs, restaurants, bars — places that serve beers |

### Feature folder contents
Each feature folder contains (at minimum):
- `<FeatureName>Endpoint.cs`
- `<FeatureName>Request.cs`
- `<FeatureName>Response.cs`

Optional:
- `<FeatureName>Validator.cs` — FastEndpoints/FluentValidation validator
- `<FeatureName>Mapper.cs` — mapping logic
- `Models.cs` — feature-local models only

### Example
```
src/BRF.Api/Features/Beers/GetAllBeers/
├── GetAllBeersEndpoint.cs
├── GetAllBeersRequest.cs
└── GetAllBeersResponse.cs
```

## Data layer
- DbContext: `src/BRF.Api/Data/BrfDbContext.cs`
- Entities: `src/BRF.Api/Data/Entities/`
- See `docs/architecture/data-access.md` for full guidance.

## Principles
- Each slice owns its endpoint contract and orchestration.
- Endpoints stay thin: validation → data access → map → return.
- No cross-feature coupling via feature types (Request/Response/Endpoint).
- Shared code only when clearly reused and stable.
- Never leak EF entities into API contracts — always map to DTOs.
