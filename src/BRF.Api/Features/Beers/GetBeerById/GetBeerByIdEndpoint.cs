using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Beers.GetBeerById;

public class GetBeerByIdEndpoint(BrfDbContext db) : Endpoint<GetBeerByIdRequest, GetBeerByIdResponse>
{
    public override void Configure()
    {
        Get("/api/beers/{Id}");
        AllowAnonymous();
    }

    public override async Task HandleAsync(GetBeerByIdRequest req, CancellationToken ct)
    {
        var beer = await db.Beers
            .AsNoTracking()
            .Where(b => b.Id == req.Id)
            .Select(b => new GetBeerByIdResponse
            {
                Id = b.Id,
                Name = b.Name,
                Style = b.Style,
                Abv = b.Abv,
                Description = b.Description,
                CreatedAt = b.CreatedAt,
                BreweryId = b.BreweryId,
                BreweryName = b.Brewery != null ? b.Brewery.Name : null
            })
            .FirstOrDefaultAsync(ct);

        if (beer is null)
        {
            await Send.NotFoundAsync(ct);
            return;
        }

        await Send.OkAsync(beer, ct);
    }
}
