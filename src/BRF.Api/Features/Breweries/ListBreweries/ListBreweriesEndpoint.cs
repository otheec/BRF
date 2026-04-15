using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Breweries.ListBreweries;

public class ListBreweriesEndpoint : Endpoint<ListBreweriesRequest, ListBreweriesResponse>
{
    private readonly AppDbContext _db;

    public ListBreweriesEndpoint(AppDbContext db) => _db = db;

    public override void Configure()
    {
        Get("/breweries");
        AllowAnonymous();
    }

    public override async Task HandleAsync(ListBreweriesRequest req, CancellationToken ct)
    {
        var skip = Math.Max(0, req.Skip);
        var take = Math.Clamp(req.Take, 1, 50);

        var total = await _db.Breweries.CountAsync(ct);

        var items = await _db.Breweries
            .OrderBy(b => b.Name)
            .Skip(skip)
            .Take(take)
            .Select(b => new BreweryListItem
            {
                Id = b.Id,
                Name = b.Name,
                City = b.City,
                Country = b.Country,
                Type = b.Type,
                Description = b.Description,
                ImageUrl = b.ImageUrl,
                Established = b.Established,
            })
            .ToListAsync(ct);

        await Send.OkAsync(new ListBreweriesResponse { Items = items, Total = total }, ct);
    }
}
