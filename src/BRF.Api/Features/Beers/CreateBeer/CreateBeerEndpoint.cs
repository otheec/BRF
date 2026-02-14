using BRF.Api.Data;
using BRF.Api.Data.Entities;
using FastEndpoints;

namespace BRF.Api.Features.Beers.CreateBeer;

public class CreateBeerEndpoint(BrfDbContext db) : Endpoint<CreateBeerRequest, CreateBeerResponse>
{
    public override void Configure()
    {
        Post("/api/beers");
        AllowAnonymous();
    }

    public override async Task HandleAsync(CreateBeerRequest req, CancellationToken ct)
    {
        var beer = new Beer
        {
            Name = req.Name,
            Style = req.Style,
            Abv = req.Abv,
            Description = req.Description,
            BreweryId = req.BreweryId
        };

        db.Beers.Add(beer);
        await db.SaveChangesAsync(ct);

        var response = new CreateBeerResponse
        {
            Id = beer.Id,
            Name = beer.Name,
            Style = beer.Style,
            Abv = beer.Abv,
            Description = beer.Description,
            CreatedAt = beer.CreatedAt,
            BreweryId = beer.BreweryId
        };

        await Send.CreatedAtAsync<GetBeerById.GetBeerByIdEndpoint>(
            new { beer.Id },
            response,
            cancellation: ct);
    }
}
