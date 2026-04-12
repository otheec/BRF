using BRF.Api.Domain;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Data;

public static class VenueSeeder
{
    // Deterministic Guids so BeerLog seeder can reference them
    public static readonly Guid RustyAnchorId = Guid.Parse("b2c3d4e5-2222-4000-8000-000000000001");
    public static readonly Guid IronForgeId = Guid.Parse("b2c3d4e5-2222-4000-8000-000000000002");
    public static readonly Guid HopsCellarId = Guid.Parse("b2c3d4e5-2222-4000-8000-000000000003");
    public static readonly Guid CopperTapId = Guid.Parse("b2c3d4e5-2222-4000-8000-000000000004");
    public static readonly Guid AmberLoungeId = Guid.Parse("b2c3d4e5-2222-4000-8000-000000000005");
    public static readonly Guid BarrelCaskId = Guid.Parse("b2c3d4e5-2222-4000-8000-000000000006");

    public static async Task SeedAsync(IServiceProvider services)
    {
        using var scope = services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        if (await db.Venues.AnyAsync())
            return;

        var venues = new List<Venue>
        {
            new()
            {
                Id = RustyAnchorId,
                Name = "The Rusty Anchor",
                Type = VenueType.Taproom,
                City = "Portland",
                Country = "OR",
                Description = "Otevřeno do 23:00. 24 rotujících čepů, jen lokální piva.",
                Amenities = ["Dog Friendly", "Outdoor Seating", "Food"],
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = IronForgeId,
                Name = "Iron Forge Brewery",
                Type = VenueType.Brewpub,
                City = "Portland",
                Country = "OR",
                Description = "Plná kuchyně a 16 domácích čepů.",
                Amenities = ["Outdoor Seating", "Food"],
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = HopsCellarId,
                Name = "Hops & Cellar",
                Type = VenueType.BottleShop,
                City = "Portland",
                Country = "OR",
                Description = "500+ vzácných plechovek a lahví. V pondělí zavřeno.",
                Amenities = ["Dog Friendly"],
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = CopperTapId,
                Name = "The Copper Tap",
                Type = VenueType.Taproom,
                City = "Vancouver",
                Country = "BC",
                Description = "42 rotujících čepů se zaměřením na lokální řemeslná piva.",
                Amenities = ["Food", "WiFi"],
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = AmberLoungeId,
                Name = "Amber Lounge",
                Type = VenueType.Other,
                City = "Melbourne",
                Country = "Australia",
                Description = "Koktejly, řemeslné pivo a živý jazz.",
                Amenities = ["Outdoor Seating", "Food"],
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = BarrelCaskId,
                Name = "Barrel & Cask",
                Type = VenueType.Taproom,
                City = "Denver",
                Country = "CO",
                Description = "Útulný taproom zaměřený na piva zrající v sudech.",
                Amenities = ["Dog Friendly", "Food"],
                CreatedAt = DateTime.UtcNow,
            },
        };

        db.Venues.AddRange(venues);
        await db.SaveChangesAsync();
    }
}
