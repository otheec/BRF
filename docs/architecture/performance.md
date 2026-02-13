# Performance

## API
- Use pagination for list endpoints.
- Avoid returning unbounded collections.
- Use CancellationToken for all I/O.
- Prefer minimal allocations and simple mapping.

## DB
- Ensure queries are indexed appropriately (coordinate with schema/migrations).
- Avoid N+1 queries.
- For large reads, select only required columns.

## Outbound calls
- Use timeouts.
- Use retry only for transient failures; avoid retry storms.