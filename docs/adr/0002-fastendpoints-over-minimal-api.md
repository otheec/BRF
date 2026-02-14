# ADR 0002: FastEndpoints over Minimal APIs

## Status
Accepted

## Context
We need an HTTP framework for the Brewfolio API. The main candidates are:
1. **ASP.NET Minimal APIs** — built-in, lightweight, lambda-based routing.
2. **MediatR + Controllers** — traditional CQRS with MVC controllers.
3. **FastEndpoints** — vertical-slice-oriented endpoint framework built on top of ASP.NET.

The project uses Vertical Slice Architecture (VSA), so we need a framework that naturally maps one endpoint = one class with its own request/response contract.

## Decision
Use **FastEndpoints** as the HTTP framework.

## Consequences

### Positive
- Natural 1:1 mapping between feature slices and endpoint classes.
- Built-in request binding, validation (FluentValidation-style), and response sending.
- No boilerplate controller base classes or MediatR handler wiring.
- Good performance — built directly on ASP.NET routing, minimal overhead.
- Built-in Swagger/OpenAPI support via `FastEndpoints.Swagger`.

### Negative
- Additional NuGet dependency (not built-in like Minimal APIs).
- Developers unfamiliar with FastEndpoints need to learn the API.
- Opinionated — harder to customize if we outgrow the conventions.

## Alternatives considered

### Minimal APIs
Rejected because: lambda-based routing scatters endpoint logic and doesn't enforce the "one file per endpoint" pattern. Validation, request binding, and response shaping require manual wiring.

### MediatR + Controllers
Rejected because: adds two layers of indirection (Controller → MediatR → Handler) that don't add value in a simple CRUD-heavy API. More ceremony for the same result.

## Notes
- FastEndpoints docs: https://fast-endpoints.com
- If we ever need WebSocket or gRPC endpoints, those can coexist alongside FastEndpoints using standard ASP.NET middleware.
