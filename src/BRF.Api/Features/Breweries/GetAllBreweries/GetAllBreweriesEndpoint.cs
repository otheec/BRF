using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Breweries.GetAllBreweries;

public class GetAllBreweriesEndpoint(BrfDbContext db) : EndpointWithoutRequest<List<GetAllBreweriesResponse>>
{
    public override void Configure()
    {
        Get("/api/breweries");
        AllowAnonymous();
    }

    public override async Task HandleAsync(CancellationToken ct)
    {
        var breweries = await db.Breweries
            .AsNoTracking()
            .Select(b => new GetAllBreweriesResponse
            {
                Id = b.Id,
                Name = b.Name,
                Country = b.Country,
                City = b.City,
                BeerCount = b.Beers.Count
            })
            .ToListAsync(ct);

        await Send.OkAsync(breweries, ct);
    }
}
