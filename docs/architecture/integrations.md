# Integrations (Outbound HTTP, Messaging, etc.)

## HTTP clients
- Use IHttpClientFactory (or existing approach in repo).
- Define explicit timeouts.
- Add retries only for transient status codes/errors, with backoff (per existing library/policy).

## Idempotency
- For endpoints that can be retried by clients, consider idempotency keys where appropriate.

## Observability
- Log outbound call metadata (dependency name, status code, duration).
- Do not log sensitive payloads.