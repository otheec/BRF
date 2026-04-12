using BRF.Api.Domain;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Data;

public static class BrewerySeeder
{
    // Deterministic Guids so Beer/BeerLog seeders can reference them
    public static readonly Guid WildwoodId = Guid.Parse("a1b2c3d4-1111-4000-8000-000000000001");
    public static readonly Guid NorthboundId = Guid.Parse("a1b2c3d4-1111-4000-8000-000000000002");
    public static readonly Guid MidnightHopsId = Guid.Parse("a1b2c3d4-1111-4000-8000-000000000003");
    public static readonly Guid CrestlineId = Guid.Parse("a1b2c3d4-1111-4000-8000-000000000004");
    public static readonly Guid IronRangeId = Guid.Parse("a1b2c3d4-1111-4000-8000-000000000005");
    public static readonly Guid FloraWildId = Guid.Parse("a1b2c3d4-1111-4000-8000-000000000006");

    public static async Task SeedAsync(IServiceProvider services)
    {
        using var scope = services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        if (await db.Breweries.AnyAsync())
            return;

        var breweries = new List<Brewery>
        {
            new()
            {
                Id = WildwoodId,
                Name = "Wildwood Brewing Co.",
                City = "Asheville",
                Country = "USA",
                Type = "Micro/Taproom",
                Description = "Spojení tradičních postupů s lesními ingrediencemi a spontánním kvašením.",
                Established = 2014,
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = NorthboundId,
                Name = "Northbound Craft",
                City = "Vancouver",
                Country = "Canada",
                Type = "Micro",
                Description = "Průkopníci organických ale, kteří posouvají hranice západopobřežního pivovarnictví.",
                Established = 2011,
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = MidnightHopsId,
                Name = "Midnight Hops",
                City = "Berlin",
                Country = "Germany",
                Type = "Brewpub",
                Description = "Experimentální tmavé slady v srdci Berlína.",
                Established = 2016,
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = CrestlineId,
                Name = "Crestline Brewing Co.",
                City = "Denver",
                Country = "USA",
                Type = "Taproom",
                Description = "Zakalená, šťavnatá NEIPA a čistý ležák z Rocky Mountains.",
                Established = 2018,
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = IronRangeId,
                Name = "Iron Range Ales",
                City = "Minneapolis",
                Country = "USA",
                Type = "Micro",
                Description = "Robustní ale ze středozápadu s moderním nádechem.",
                Established = 2015,
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = FloraWildId,
                Name = "Flora Wild Ales",
                City = "Portland",
                Country = "USA",
                Type = "Nano",
                Description = "100% spontánně a smíšeně kvašená divoká ale.",
                Established = 2019,
                CreatedAt = DateTime.UtcNow,
            },
        };

        db.Breweries.AddRange(breweries);
        await db.SaveChangesAsync();
    }
}
