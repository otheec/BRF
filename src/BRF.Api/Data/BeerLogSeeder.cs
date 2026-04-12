using BRF.Api.Domain;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Data;

public static class BeerLogSeeder
{
    public static async Task SeedAsync(IServiceProvider services)
    {
        using var scope = services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        if (await db.BeerLogs.AnyAsync())
            return;

        var logs = new List<BeerLog>
        {
            new()
            {
                Id = Guid.NewGuid(),
                UserId = "demo-user",
                BeerId = BeerSeeder.CloudRunnerId,
                VenueId = VenueSeeder.RustyAnchorId,
                LoggedAt = new DateTime(2024, 10, 28, 18, 0, 0, DateTimeKind.Utc),
                Rating = 5,
                Notes = "Neskutečně šťavnaté s výraznými tóny manga a ananasu. Jedna z nejlepších NEIPA, co jsem měl.",
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = Guid.NewGuid(),
                UserId = "demo-user",
                BeerId = BeerSeeder.MidnightRoastId,
                VenueId = VenueSeeder.IronForgeId,
                LoggedAt = new DateTime(2024, 10, 24, 19, 0, 0, DateTimeKind.Utc),
                Rating = 4,
                Notes = "Výjimečný charakter ovesného stoutu. Kávové tóny jsou výrazné, ale nepřevládají.",
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = Guid.NewGuid(),
                UserId = "demo-user",
                BeerId = BeerSeeder.AlpineLagerId,
                VenueId = VenueSeeder.CopperTapId,
                LoggedAt = new DateTime(2024, 10, 21, 17, 0, 0, DateTimeKind.Utc),
                Rating = 4,
                Notes = "Čistý a vyvážený. Přesně takový by měl být dobrý pilsner.",
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = Guid.NewGuid(),
                UserId = "demo-user",
                BeerId = BeerSeeder.VelvetSourId,
                VenueId = VenueSeeder.HopsCellarId,
                LoggedAt = new DateTime(2024, 10, 19, 16, 0, 0, DateTimeKind.Utc),
                Rating = 5,
                Notes = "Komplexní kyselá třešeň a dub. Úžasné divoké ale.",
                CreatedAt = DateTime.UtcNow,
            },
            new()
            {
                Id = Guid.NewGuid(),
                UserId = "demo-user",
                BeerId = BeerSeeder.CoastalHazeId,
                VenueId = VenueSeeder.BarrelCaskId,
                LoggedAt = new DateTime(2024, 10, 15, 20, 0, 0, DateTimeKind.Utc),
                Rating = 3,
                Notes = "Solidní West Coast IPA, ale dneska mi přišla trochu moc hořká.",
                CreatedAt = DateTime.UtcNow,
            },
        };

        db.BeerLogs.AddRange(logs);
        await db.SaveChangesAsync();
    }
}
