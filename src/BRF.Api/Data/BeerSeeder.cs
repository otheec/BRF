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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBNqmY42My6UBKkBtKYI2_hXGnKXWNLPT2CBHqAG3XuW8SmioRD6yTI2aPkCP-VPzuPtuBkB3ezOXYg1frhXY8YgwePpMo9hmpdiS7MUq9sDTW9Vz6khbpvEQ6f1fqm2TLDPLq2kFzlEz22CWShnKDCusxULA85I-kIJEb1w8TtA8g6qLS5HgHpvUedgrH2p9mpSR0tw-LiWZxuVPvwrPOIaurfHKsRCerRt-e-Gncxf_LeuiGgWl-v1mKaSJfzpV-0IxMHtbz4mj8",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuAWFvWaROYCwhfT0Dlp3OZyQuKfLHqq5RdNRkiNKHUw4pUDN9BR6XWh0EWA9im1cRpmDE0Qlb5gQe0NllTPQqBceN_glb0RJspFmX9Py3v4eLWymlc22tj_jmMpYetVtM_bttjpYLuP3Eci-gd-IJ6xXfqFfjajr7Z_NzXlSkc7h7hu6iK2K8avze_5wCjrneicSSB91C_PYihIxhKBS7AcY_xCinQQqCW4H-5mDC_jrMCchOrXjWBkt2V5GHiqZnufNn3HiOtdYjI",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDr8Ix8X6OWPSBemE9gu_dthZlYO3gB6WNn8bhHHVYx-ejjCeuxq7eteuqT9otMNuT5dt-fgQlpSa9FQ-n_lJqOnAinS9P6FyIuJHAd_p2fubP2-mI-nQlCs_MBN3Fz8SADQbrfB_EFTG-sMe7ZCul1VMw_yieElBhnUPnU6C8TTHfuz-FOiSMIgeoectTW8pwVpuVCgdZQtp5ycJIAqVhdIe2xGuD8ez3_0-HoUNQx-lHx0zhHuEqG7c3El2ADb4uWvGx-tT9_Iwo",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6XarVM3C1d536IXKyIe_hU_C90GHAd1VT8ghBL7RGhLU82Y-xeByQ2z6Nb41qeetYDA0cFr7fm3tEzyQf7FSsaipIYhggbvejQ4GkhGYZ5jI_eyUjYfzK4FVHYyD5Hf3gr6YSL6GrrEXBj-o3WMm5Nj8AWUONjQHqgIjwvB55tgtOPIaow15HF3HXM5IIQiTwkrnNZSGcWU7xDfbJIioEvwcZEQH7vD3DAPNTgW2FJyMAr6hvHVcI3I6WZiTze-Oxui-7CzmWQk",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuB26DD15X5fE1sHI6R7VUD2V4kRBUO0b2PfZiQfB-NmRWk33YWyCmATtvz0YAsatPiWmRFUjvMZGP05MvHoPJsylQkdcyKY7FaJhhBUKorRFoL286i6DDYyZCjkcnowh03NxZPjw4uAC57H_7Gzm9vlZZTXSUmX2rSV9JPukS3YQv3HMIpoLrJNU1xLIbYbYyZ6SpQVHFb8dmL_43am4MIakTlV8xSrSkPZenYzHiSsBHQYCqq-2sOL1UruxyjIeIW8B5SSGQSybvA",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDhC8F4yYlDpfgo5Ar6cqRmVcA8TW_GvXKbWvsykOCa6hwEGtgHEKXmxQSk9drBTv-UzGjIMVJW429z5mlGjC5VZrLhWg4Yr1na1Icp6J80jD1PZsfXpi0YRU1HagTDFAptJqf8mbyI5eG9ZXOBfognR9dT9KaeNXqXkxighZ6E7lggHW6qkq9lmZxc0fMUhu3qzZGmbghuoKJek56qisLv4Y_10FT21UEq2bJHNqxF114Oa78vKq5FRBYCq0M5xv2rxhRNHG2-9DE",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDAA6DPR_ZVbBiJkYTA2WZ2NUgv_NiHUvCogzjw1Ms4qhIuhNQyfPxai_YdxmGSyrz68GuOnbhiUvYEigfF94j5HfPonCl2o-SjUxPi3w4HYeKeGEElNoK3nqy-kwKfJygLMWxo0m0TJQsdzoBiRcLoIJ5a-7zEvJ7H4DyunrWiTR9MvPutX-fyR-bo9B4MG-ufY7ZJojiRFYTXhbXmtZ4_25CylFnZWmUv-Ka3MNU1taHNhJriY3nZtM7hHlaPr5Aywz_890D-Jgg",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuB3nmEcgssd4-GnJUYrNGmDeQbih521GrIjoFApYspQdUKASGuFisD-dDPLJJA2CcR4ffvYqZ19nVEu3let6JshqjIbzZi8i39o25-js4AGntq7QlRL7KwycIRoAb0r2Mc-M1-K9P0BorUU61Yk9SHOyuhfhyhc4e0vlvEQkdxDufg2dt7RVfnWix2IFk40nYSrg7q0n2lI8IgSni-GXSxhRPNrE7AORFhZl0OV7N5zWNSHxl-RlB00uK1dke7b92tnUCVD2L4JdsQ",
                BreweryId = BrewerySeeder.WildwoodId,
                CreatedAt = DateTime.UtcNow,
            },
        };

        db.Beers.AddRange(beers);
        await db.SaveChangesAsync();
    }
}
