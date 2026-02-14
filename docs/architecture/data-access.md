# Data Access

## ORM
Entity Framework Core with SQL Server via `Microsoft.EntityFrameworkCore.SqlServer`.

## Project layout
| Path | Purpose |
|------|---------|
| `src/BRF.Api/Data/BrfDbContext.cs` | Application DbContext |
| `src/BRF.Api/Data/Entities/` | EF entity classes (one file per entity) |

## DbContext registration
Registered in `Program.cs` via:
```csharp
builder.Services.AddDbContext<BrfDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("Default")));
```

## Connection string
Stored in `appsettings.Development.json` under `ConnectionStrings:Default`.
Never commit production credentials — use environment variables or user-secrets.

## Migrations
Use EF Core CLI for migrations:
```bash
# Add a new migration
dotnet ef migrations add <MigrationName> --project src/BRF.Api

# Apply migrations
dotnet ef database update --project src/BRF.Api
```

Migration files are auto-generated and live in `src/BRF.Api/Migrations/`.

## Conventions
- One entity class per file in `Data/Entities/`.
- Entity names are singular (`Beer`, not `Beers`). DbSet names are plural (`Beers`).
- Configure entity relationships and constraints in `BrfDbContext.OnModelCreating()` or via `IEntityTypeConfiguration<T>` classes.
- Never leak EF entities into API contracts — always map to Request/Response DTOs.
- Use `AsNoTracking()` for read-only queries.
- Use `CancellationToken` for all async DB operations.
- Avoid N+1 queries — use `Include()` or projection (`Select()`) as needed.

## Anti-patterns to avoid
- Returning `IQueryable` from endpoints.
- Using `ToList()` without filtering (unbounded result sets).
- Mixing raw SQL with EF unless there's a clear performance justification.
