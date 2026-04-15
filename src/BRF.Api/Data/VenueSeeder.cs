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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuB50s_oifOuYdoNfLTdP1bdFhC-bdnrKSgOxk4cV_ykwSdjkxw8Wr8rhIxpHJ_tv_6dnInzMAxzoMyVs7QZWd5yr9xhD3v9KzpPySmR15ERvsSqe1Mok_j6oNI0ttScVOnv1zs5UjCcG7u22Fv4m5C6VoSUvrIl0pt9e4hMU_5cQ5sQmr94JzDiYGqJqDEEY4Gil0MH-r0lGsRmwfy4ZHtq-Ilc1WEkVN2EZTOtm5drNIeUF6nrmyt2Y4-aDTU7aYVGdhnxj5JX7_o",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBAiiBORZYiKswM5vBbtwGebxpn4Gkk4f0I5KV7fck6ZrTcpxKrQK3tRC3aw3heE7JJShkygTiwivYdL4CxCi91y2w4XNPy1OoUMOqmRd3hf4j9pohAL1E__msNXuRIcMtU27CXhER8RfgnM7uPRDwpaIuL9AO4QzlYE9FgZMeKGEVeXSF3F4nVZ-QnhogKuztB7llREET7hWHXLsu8qqdocRYRWjpK4dJaQ09Hcs7CvfcqVRzoXi4lZax1AoBHaCKdduYd0myANdM",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuD37rGNNp338vDMzEbuvgCWnLEUhP0ZEtJwQZbTLctc1-AczifLrvRwUdh805IqL_j6ierz7pmSQnAGhLhPmFcfBHBSV-9hdD7JUwIPy9AAAxhCFbmSE9r1WmIaWGOskkcAJYj1SW-RUvIB7zybjaBNxjeXUjso1U8LvAoC0JEiirKLzIpLbJRjvm_yG-sfLGLbuaz4hwkchkHnjLdcFNIntCNSSavRakwwr-TkqFCrt85J0wR86q7AzC7sPf_qDv_PHCzCIcpRXyk",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCAGrhagwYfheWu_b50B2z11r_2WD-93-AHvaVq-DbR58d6Oz8emQGyiQpN_TtJKwgCTbeowUtZg4ELAhy8rO1bzTFYJRcZks9nc-HEbnDE9Ix6-ibjwlKuYGgyTT17lrQVmmqDcV6BqHuN0YZxZKaU-rI2xxVTzoiK9KCydtrfokMntiJDPaGPZ0aVMv_YjILkJMtyBi3LfFZfZf5dX1CR_IqqU93Yok1bIGp5bhIPNBJh3k2vFZf5HEwnsB2rkTbB4U-Vfgnu0Uc",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBVEDQPJbQGdvGQSrCPPM9tRwr6sHddb-cCZ-L0r9XIjqYX8vimVLT1wxq5RueKFA9BUxjvBG14Ezkji0GPRYW9F1wlZFKiK7OtYj0ag3YPeg8P7ZKQeuQybWmbZvpeWMc_GtGCIFSor54KxAwSpa_1NueNUeD-sI2jtMjB2yUJOhv1FBHx2f2SQprb2w1zvrtnLMqo9ifl-S2ac3_4cISrITAnWmQ3CDIhiQ9NXiAQYY-gm-QKoE52JTInJpex2X9H7ZdiWp9Ae28",
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
                ImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCEGaDGqxRJkkZuquzWHquAcDSoV5Fifnd9FQ5C6JE8LXty5L0OtYW7dUDV24rGpfx8YeKlJxxusjYZ14wv6tbLHFlCWXMA0jDwCLtDyWhGTs76uM5fovaz5JvcJNRWPztk0tVoUSETzVVA3VaRG73Cr2g3PxpEuUN4wyteX69vBV7FAvlJu9wPZS13UQHuTkn8KGtSeIAswnh4LH47zGZhgYR4wASalHyKN-oAgK4_GN5964zCd5pZCuoo1IbxEiCQdMYZbYWIxJQ",
                Amenities = ["Dog Friendly", "Food"],
                CreatedAt = DateTime.UtcNow,
            },
        };

        db.Venues.AddRange(venues);
        await db.SaveChangesAsync();
    }
}
