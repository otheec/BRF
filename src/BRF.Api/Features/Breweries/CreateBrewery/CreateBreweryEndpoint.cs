using BRF.Api.Data;
using BRF.Api.Data.Entities;
using FastEndpoints;

namespace BRF.Api.Features.Breweries.CreateBrewery;

public class CreateBreweryEndpoint(BrfDbContext db) : Endpoint<CreateBreweryRequest, CreateBreweryResponse>
{
    public override void Configure()
    {
        Post("/api/breweries");
        AllowAnonymous();
    }

    public override async Task HandleAsync(CreateBreweryRequest req, CancellationToken ct)
    {
        var brewery = new Brewery
        {
            Name = req.Name,
            Country = req.Country,
            City = req.City,
            Website = req.Website,
            Description = req.Description
        };

        db.Breweries.Add(brewery);
        await db.SaveChangesAsync(ct);

        var response = new CreateBreweryResponse
        {
            Id = brewery.Id,
            Name = brewery.Name,
            Country = brewery.Country,
            City = brewery.City,
            Website = brewery.Website,
            Description = brewery.Description,
            CreatedAt = brewery.CreatedAt
        };

        await Send.CreatedAtAsync<GetBreweryById.GetBreweryByIdEndpoint>(
            new { brewery.Id },
            response,
            cancellation: ct);
    }
}
