using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Breweries.UpdateBrewery;

public class UpdateBreweryEndpoint(BrfDbContext db) : Endpoint<UpdateBreweryRequest, UpdateBreweryResponse>
{
    public override void Configure()
    {
        Put("/api/breweries/{Id}");
        AllowAnonymous();
    }

    public override async Task HandleAsync(UpdateBreweryRequest req, CancellationToken ct)
    {
        var brewery = await db.Breweries
            .FirstOrDefaultAsync(b => b.Id == req.Id, ct);

        if (brewery is null)
        {
            await Send.NotFoundAsync(ct);
            return;
        }

        brewery.Name = req.Name;
        brewery.Country = req.Country;
        brewery.City = req.City;
        brewery.Website = req.Website;
        brewery.Description = req.Description;

        await db.SaveChangesAsync(ct);

        var response = new UpdateBreweryResponse
        {
            Id = brewery.Id,
            Name = brewery.Name,
            Country = brewery.Country,
            City = brewery.City,
            Website = brewery.Website,
            Description = brewery.Description,
            CreatedAt = brewery.CreatedAt
        };

        await Send.OkAsync(response, ct);
    }
}
