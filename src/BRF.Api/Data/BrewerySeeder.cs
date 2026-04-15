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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBpYzT7k3SLdciwFQTJfYRKsyeRqTm5rwV1KSl6XhKK3bqwQXEghzPykxDUqlHIgNBksqhRfxsXSatdv02XC85G9vVveHsohIYjXrBzBovPbF1tNn2ZFQXYVuKB3FxgZV_LpDxAz_L6Uc6JtxuLrFeZulrARCN2I4DXhxFb2KhMY40kLxsSd4O57yAyZdwCCrHrw8otnOHbJN1TRFtxxkzGGTqAXMj9AqCQAHIJXOUdf3P2B-bCOMcdttCDqMjROaW1IfIMq74HhL8",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuC88OJvb4OLwhxXc4u29g5plNCRw03GKqkSLCQTkOR9cqxC7JpJr3jGvape9K-6nzsa6IgnbJE6gpKCoabkJhsgfaD6Rk7ycooJcBRMqbwtXKab8Ely3_QZgijP1yQ3isDYEYAsk25obbpRtgIM0KFF-FCyXfdSQDKf91ajh6_QCfjphEejX-FWqKSRAXAreL-9OwclwSonP2OLWwbhq33BsnPtKVfwwublNnMZPmib-e91ugLOEijCUwvZvuiwCxcePPF2fYhVu0Q",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBdKEb839yRyR9CCZvbOhuPV_bDn_NE6DNQiocUmbEWkxG87mTq-r4uOY_dpU-8BjubT2vl9CDiwKnrawy1zQjcX1l44sDR57ALkJo5RP28JdX8ByBVwcCD3RLzaULkZoWK5g1GVwc9hDa0cxiGbP6uWp8CnKHWVaCId4IwynaO2J-Xq_xaoTqBBVWXx_MbpoxlZAa_p9n1IyKcJ37y7QhTc5ptyf1FhF9q7Vzw4hV4udaaHbZ-LX5AP1ZYpN3Aea7VL5aoMRXUwWY",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDawLTyqAQ-yRIrGLRHc-d8QT-b1xpcpAz1wrmBZoAJVAikNCG_bCXEztWxF85_1ONc6KALqk5-lP1b49tjlX-3QYQnczhV1JwGr05B5FW7aNmLEhockXilOSPp-nchahEOOJZtQqk8mK-YyyXeplMVvWjsGlmLTUVavYFUIUGVPTHdJXtW3uhVnT8AhD8fcayv3wobRG3DLLV65nwWvUJzCkUDcUNpRV_Fchksef1QQvKZsQnoqhg2ltY-KF2cfw_jAF-2jeA45_A",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6XarVM3C1d536IXKyIe_hU_C90GHAd1VT8ghBL7RGhLU82Y-xeByQ2z6Nb41qeetYDA0cFr7fm3tEzyQf7FSsaipIYhggbvejQ4GkhGYZ5jI_eyUjYfzK4FVHYyD5Hf3gr6YSL6GrrEXBj-o3WMm5Nj8AWUONjQHqgIjwvB55tgtOPIaow15HF3HXM5IIQiTwkrnNZSGcWU7xDfbJIioEvwcZEQH7vD3DAPNTgW2FJyMAr6hvHVcI3I6WZiTze-Oxui-7CzmWQk",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDbwGVIaMSHyLvwszWxgsrzIyuiUCr8ls4-XQ3ghjWdSs1L9WAUip0YCmytun6SHJI_wx9rxGdsAGrIKwdwSjQhtTEE8wLXwDqg9CvERs0hHuURyYCgNsR7tYTjeOnhxBKe_YDHGxioRtGSoooaPkyBL4KubwrTD1qs-Da7F-PEObt94U2GL4SdWKmLOhDXMqXfl0Vz1RdvLe4mg2hDy9gt8xzl7uexd6TGRVffDCPV-oLdeMdYqWihSsa41LG4je8EH8-QDesVEGE",
                Established = 2019,
                CreatedAt = DateTime.UtcNow,
            },
        };

        db.Breweries.AddRange(breweries);
        await db.SaveChangesAsync();
    }
}
