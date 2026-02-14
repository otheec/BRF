using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Breweries.GetBreweryById;

public class GetBreweryByIdEndpoint(BrfDbContext db) : Endpoint<GetBreweryByIdRequest, GetBreweryByIdResponse>
{
    public override void Configure()
    {
        Get("/api/breweries/{Id}");
        AllowAnonymous();
    }

    public override async Task HandleAsync(GetBreweryByIdRequest req, CancellationToken ct)
    {
        var brewery = await db.Breweries
            .AsNoTracking()
            .Where(b => b.Id == req.Id)
            .Select(b => new GetBreweryByIdResponse
            {
                Id = b.Id,
                Name = b.Name,
                Country = b.Country,
                City = b.City,
                Website = b.Website,
                Description = b.Description,
                CreatedAt = b.CreatedAt,
                Beers = b.Beers.Select(beer => new GetBreweryByIdBeerDto
                {
                    Id = beer.Id,
                    Name = beer.Name,
                    Style = beer.Style,
                    Abv = beer.Abv
                }).ToList()
            })
            .FirstOrDefaultAsync(ct);

        if (brewery is null)
        {
            await Send.NotFoundAsync(ct);
            return;
        }

        await Send.OkAsync(brewery, ct);
    }
}
