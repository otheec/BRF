# /pr-check

Before finalizing a PR:
- Ensure feature folder structure is followed (`Features/<Group>/<Feature>/`)
- Ensure file naming: `<FeatureName>Endpoint.cs`, `<FeatureName>Request.cs`, `<FeatureName>Response.cs`
- Ensure errors follow standard format (`docs/architecture/error-handling.md`)
- Ensure routes/auth/contract changes are called out
- Ensure `dotnet build` passes with no warnings
- Follow `docs/pr-checklist.md`
Return a short checklist result.