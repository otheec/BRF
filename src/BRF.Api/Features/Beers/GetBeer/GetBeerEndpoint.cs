using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Beers.GetBeer;

public class GetBeerEndpoint : Endpoint<GetBeerRequest, GetBeerResponse>
{
    private readonly AppDbContext _db;

    public GetBeerEndpoint(AppDbContext db) => _db = db;

    public override void Configure()
    {
        Get("/beers/{id}");
        AllowAnonymous();
    }

    public override async Task HandleAsync(GetBeerRequest req, CancellationToken ct)
    {
        if (!Guid.TryParse(req.Id, out var guid))
        {
            await Send.NotFoundAsync(ct);
            return;
        }

        var beer = await _db.Beers
            .Include(b => b.Brewery)
            .FirstOrDefaultAsync(b => b.Id == guid, ct);

        if (beer is null)
        {
            await Send.NotFoundAsync(ct);
            return;
        }

        await Send.OkAsync(new GetBeerResponse
        {
            Id = beer.Id,
            Name = beer.Name,
            Style = beer.Style,
            Abv = beer.Abv,
            Ibu = beer.Ibu,
            Description = beer.Description,
            BreweryId = beer.BreweryId,
            BreweryName = beer.Brewery.Name,
            CreatedAt = beer.CreatedAt,
        }, ct);
    }
}
