# Architecture Overview

## Style
Vertical Slice Architecture using FastEndpoints.

## Organization
Features are grouped by business area (Group) and feature name.

Path pattern:
- `src/MyApp.API/Features/<Group>/<Feature>/`

Each feature folder contains:
- `Endpoint.cs`
- `Request.cs`
- `Response.cs`
Optional:
- `Validator.cs`, `Mapper.cs`, feature-local support models.

## Principles
- Each slice owns its endpoint contract and orchestration.
- Endpoints stay thin.
- No cross-feature coupling via feature types.
- Shared code only when clearly reused and stable.