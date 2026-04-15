using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Venues.ListVenues;

public class ListVenuesEndpoint : Endpoint<ListVenuesRequest, ListVenuesResponse>
{
    private readonly AppDbContext _db;

    public ListVenuesEndpoint(AppDbContext db) => _db = db;

    public override void Configure()
    {
        Get("/venues");
        AllowAnonymous();
    }

    public override async Task HandleAsync(ListVenuesRequest req, CancellationToken ct)
    {
        var skip = Math.Max(0, req.Skip);
        var take = Math.Clamp(req.Take, 1, 50);

        var total = await _db.Venues.CountAsync(ct);

        var items = await _db.Venues
            .OrderBy(v => v.Name)
            .Skip(skip)
            .Take(take)
            .Select(v => new VenueListItem
            {
                Id = v.Id,
                Name = v.Name,
                Type = v.Type,
                City = v.City,
                Country = v.Country,
                Description = v.Description,
                ImageUrl = v.ImageUrl,
                Amenities = v.Amenities,
            })
            .ToListAsync(ct);

        await Send.OkAsync(new ListVenuesResponse { Items = items, Total = total }, ct);
    }
}
