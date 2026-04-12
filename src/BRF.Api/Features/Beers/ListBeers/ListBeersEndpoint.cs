using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Beers.ListBeers;

public class ListBeersEndpoint : Endpoint<ListBeersRequest, ListBeersResponse>
{
    private readonly AppDbContext _db;

    public ListBeersEndpoint(AppDbContext db) => _db = db;

    public override void Configure()
    {
        Get("/beers");
        AllowAnonymous();
    }

    public override async Task HandleAsync(ListBeersRequest req, CancellationToken ct)
    {
        var skip = Math.Max(0, req.Skip);
        var take = Math.Clamp(req.Take, 1, 50);

        var total = await _db.Beers.CountAsync(ct);

        var items = await _db.Beers
            .Include(b => b.Brewery)
            .OrderBy(b => b.Name)
            .Skip(skip)
            .Take(take)
            .Select(b => new BeerListItem
            {
                Id = b.Id,
                Name = b.Name,
                Style = b.Style,
                Abv = b.Abv,
                Ibu = b.Ibu,
                Description = b.Description,
                BreweryId = b.BreweryId,
                BreweryName = b.Brewery.Name,
            })
            .ToListAsync(ct);

        await Send.OkAsync(new ListBeersResponse { Items = items, Total = total }, ct);
    }
}
