# MyApp

## Structure
- `src/` application code
- `tests/` automated tests
- `docs/` architecture docs + ADRs
- `devops/` CI/CD + infra files (if present)

## Architecture
Vertical Slice Architecture using FastEndpoints.
See:
- `docs/architecture/overview.md`
- `docs/architecture/boundaries.md`
- `docs/architecture/error-handling.md`

## Development
- Build: `dotnet build`
- Test: `dotnet test`

## Contributing
Before opening a PR, follow `docs/pr-checklist.md`.