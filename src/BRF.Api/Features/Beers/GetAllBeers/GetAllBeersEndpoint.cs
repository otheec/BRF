using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Beers.GetAllBeers;

public class GetAllBeersEndpoint(BrfDbContext db) : EndpointWithoutRequest<List<GetAllBeersResponse>>
{
    public override void Configure()
    {
        Get("/api/beers");
        AllowAnonymous();
    }

    public override async Task HandleAsync(CancellationToken ct)
    {
        var beers = await db.Beers
            .AsNoTracking()
            .Select(b => new GetAllBeersResponse
            {
                Id = b.Id,
                Name = b.Name,
                Style = b.Style,
                Abv = b.Abv
            })
            .ToListAsync(ct);

        await Send.OkAsync(beers, ct);
    }
}
