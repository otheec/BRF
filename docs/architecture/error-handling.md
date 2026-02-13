# Error Handling Standard

## Goals
- One consistent error shape across endpoints
- Clear mapping from domain/application errors to HTTP status codes
- Avoid leaking internal details

## Recommended response shapes

### Validation errors (400)
```json
{
  "type": "validation_error",
  "title": "Validation failed",
  "status": 400,
  "errors": {
    "fieldName": ["message1", "message2"]
  },
  "traceId": "..."
}