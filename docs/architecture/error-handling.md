# Error Handling Standard

## Goals
- One consistent error shape across all endpoints.
- Clear mapping from domain/application errors to HTTP status codes.
- Never leak internal details (stack traces, DB errors) to API consumers.

## Recommended response shapes

### Validation errors (400 Bad Request)
Returned when request validation fails (FastEndpoints `Validator` or `ThrowIfAnyErrors()`).

```json
{
  "type": "validation_error",
  "title": "Validation failed",
  "status": 400,
  "errors": {
    "name": ["Name is required"],
    "abv": ["ABV must be between 0 and 100"]
  },
  "traceId": "00-abc123..."
}
```

### Not found (404 Not Found)
Returned when a requested resource does not exist.

```json
{
  "type": "not_found",
  "title": "Resource not found",
  "status": 404,
  "detail": "Beer with ID 42 was not found",
  "traceId": "00-abc123..."
}
```

Implementation in endpoint:
```csharp
var beer = await dbContext.Beers.FindAsync(req.Id, ct);
if (beer is null)
{
    await Send.NotFoundAsync();
    return;
}
```

### Conflict (409 Conflict)
Returned when a request conflicts with current state (e.g., duplicate name).

```json
{
  "type": "conflict",
  "title": "Resource conflict",
  "status": 409,
  "detail": "A beer with name 'Pilsner Urquell' already exists",
  "traceId": "00-abc123..."
}
```

### Internal server error (500)
Returned by the global exception handler for unhandled exceptions.
Never leak exception details to the client.

```json
{
  "type": "server_error",
  "title": "An unexpected error occurred",
  "status": 500,
  "traceId": "00-abc123..."
}
```

## Implementation approach

### FastEndpoints built-in error handling
- Use `AddError()` + `ThrowIfAnyErrors()` for validation-style errors inside endpoints.
- Use `Send.NotFoundAsync()` for 404 responses.
- Use `Send.OkAsync(response)` for 200 responses.
- Use `Send.ErrorsAsync(statusCode)` for custom error status codes.

### Global exception handler
Unhandled exceptions are caught by ASP.NET Core exception handler middleware configured in `Program.cs`.
This ensures a consistent 500 shape without leaking stack traces.

## Rules
- Do not create ad-hoc error shapes — use the patterns above.
- Always include `traceId` for correlation.
- Log the full exception server-side (via `ILogger`) but return only the safe shape to clients.
