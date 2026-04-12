using BRF.Api.Domain;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Data;

public static class BeerSeeder
{
    // Deterministic Guids so BeerLog seeder can reference them
    public static readonly Guid CloudRunnerId = Guid.Parse("c3d4e5f6-3333-4000-8000-000000000001");
    public static readonly Guid MidnightRoastId = Guid.Parse("c3d4e5f6-3333-4000-8000-000000000002");
    public static readonly Guid SunDrenchedHazeId = Guid.Parse("c3d4e5f6-3333-4000-8000-000000000003");
    public static readonly Guid CoastalHazeId = Guid.Parse("c3d4e5f6-3333-4000-8000-000000000004");
    public static readonly Guid ObsidianStoutId = Guid.Parse("c3d4e5f6-3333-4000-8000-000000000005");
    public static readonly Guid AlpineLagerId = Guid.Parse("c3d4e5f6-3333-4000-8000-000000000006");
    public static readonly Guid VelvetSourId = Guid.Parse("c3d4e5f6-3333-4000-8000-000000000007");
    public static readonly Guid LawnmowerGoldId = Guid.Parse("c3d4e5f6-3333-4000-8000-000000000008");

    public static async Task SeedAsync(IServiceProvider services)
    {
        using var scope = services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        if (await db.Beers.AnyAsync())
            return;

        var beers = new List<Beer>
        {
            new()
            {
                Id = CloudRunnerId,
                Name = "Cloud Runner",
                Style = "Hazy IPA",
                Abv = 6.8m,
                Description = "Tropické mango, citrusová kůra a hladký, krémový dozvuk.",
                BreweryId = BrewerySeeder.WildwoodId,
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = MidnightRoastId,
                Name = "Midnight Roast",
                Style = "Coffee Stout",
                Abv = 8.2m,
                Description = "Etiopská zrna a kakao se sametovým dozvukem.",
                BreweryId = BrewerySeeder.WildwoodId,
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = SunDrenchedHazeId,
                Name = "Sun-Drenched Haze",
                Style = "NEIPA",
                Abv = 6.5m,
                Ibu = 42,
                Description = "Šťavnaté citrusy a tropické ovoce s hedvábnou texturou.",
                BreweryId = BrewerySeeder.CrestlineId,
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = CoastalHazeId,
                Name = "Coastal Haze IPA",
                Style = "West Coast IPA",
                Abv = 6.8m,
                Description = "S důrazem na borový chmel, pryskyřičná a zářivě čistá.",
                BreweryId = BrewerySeeder.NorthboundId,
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = ObsidianStoutId,
                Name = "Obsidian Stout",
                Style = "Imperial Stout",
                Abv = 10.2m,
                Description = "Hořká čokoláda, espresso a hřejivý dozvuk.",
                BreweryId = BrewerySeeder.MidnightHopsId,
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = AlpineLagerId,
                Name = "Alpine Lager",
                Style = "Czech Pilsner",
                Abv = 4.5m,
                Description = "Svěží, čistý a nekonečně osvěžující.",
                BreweryId = BrewerySeeder.CrestlineId,
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = VelvetSourId,
                Name = "Velvet Sour",
                Style = "Flanders Red",
                Abv = 5.4m,
                Description = "Kyselá třešeň, dub a náznak vanilky.",
                BreweryId = BrewerySeeder.FloraWildId,
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = LawnmowerGoldId,
                Name = "Lawnmower Gold",
                Style = "Pilsner",
                Abv = 4.5m,
                Description = "Svěží a čistý, ideální celodenní pivo.",
                BreweryId = BrewerySeeder.WildwoodId,
                CreatedAt = DateTime.UtcNow,
            },
        };

        db.Beers.AddRange(beers);
        await db.SaveChangesAsync();
    }
}
