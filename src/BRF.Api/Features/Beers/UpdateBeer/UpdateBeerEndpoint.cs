using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Beers.UpdateBeer;

public class UpdateBeerEndpoint(BrfDbContext db) : Endpoint<UpdateBeerRequest, UpdateBeerResponse>
{
    public override void Configure()
    {
        Put("/api/beers/{Id}");
        AllowAnonymous();
    }

    public override async Task HandleAsync(UpdateBeerRequest req, CancellationToken ct)
    {
        var beer = await db.Beers
            .FirstOrDefaultAsync(b => b.Id == req.Id, ct);

        if (beer is null)
        {
            await Send.NotFoundAsync(ct);
            return;
        }

        beer.Name = req.Name;
        beer.Style = req.Style;
        beer.Abv = req.Abv;
        beer.Description = req.Description;
        beer.BreweryId = req.BreweryId;

        await db.SaveChangesAsync(ct);

        var response = new UpdateBeerResponse
        {
            Id = beer.Id,
            Name = beer.Name,
            Style = beer.Style,
            Abv = beer.Abv,
            Description = beer.Description,
            CreatedAt = beer.CreatedAt,
            BreweryId = beer.BreweryId
        };

        await Send.OkAsync(response, ct);
    }
}
