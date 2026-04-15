using BRF.Api.Data;
using FastEndpoints;

namespace BRF.Api.Features.Breweries.GetBrewery;

public class GetBreweryEndpoint : Endpoint<GetBreweryRequest, GetBreweryResponse>
{
    private readonly AppDbContext _db;

    public GetBreweryEndpoint(AppDbContext db) => _db = db;

    public override void Configure()
    {
        Get("/breweries/{id}");
        AllowAnonymous();
    }

    public override async Task HandleAsync(GetBreweryRequest req, CancellationToken ct)
    {
        if (!Guid.TryParse(req.Id, out var guid))
        {
            await Send.NotFoundAsync(ct);
            return;
        }

        var brewery = await _db.Breweries.FindAsync([guid], ct);

        if (brewery is null)
        {
            await Send.NotFoundAsync(ct);
            return;
        }

        await Send.OkAsync(new GetBreweryResponse
        {
            Id = brewery.Id,
            Name = brewery.Name,
            City = brewery.City,
            Country = brewery.Country,
            Type = brewery.Type,
            Description = brewery.Description,
            ImageUrl = brewery.ImageUrl,
            Established = brewery.Established,
            CreatedAt = brewery.CreatedAt,
        }, ct);
    }
}
