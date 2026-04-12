using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Beers.ListBeersByBrewery;

public class ListBeersByBreweryEndpoint : Endpoint<ListBeersByBreweryRequest, ListBeersByBreweryResponse>
{
    private readonly AppDbContext _db;

    public ListBeersByBreweryEndpoint(AppDbContext db) => _db = db;

    public override void Configure()
    {
        Get("/breweries/{breweryId}/beers");
        AllowAnonymous();
    }

    public override async Task HandleAsync(ListBeersByBreweryRequest req, CancellationToken ct)
    {
        if (!Guid.TryParse(req.BreweryId, out var breweryGuid))
        {
            await Send.OkAsync(new ListBeersByBreweryResponse(), ct);
            return;
        }

        var items = await _db.Beers
            .Where(b => b.BreweryId == breweryGuid)
            .OrderBy(b => b.Name)
            .Select(b => new BeerByBreweryItem
            {
                Id = b.Id,
                Name = b.Name,
                Style = b.Style,
                Abv = b.Abv,
                Ibu = b.Ibu,
                Description = b.Description,
            })
            .ToListAsync(ct);

        await Send.OkAsync(new ListBeersByBreweryResponse { Items = items }, ct);
    }
}
