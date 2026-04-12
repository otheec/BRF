using BRF.Api.Data;
using FastEndpoints;

namespace BRF.Api.Features.Venues.GetVenue;

public class GetVenueEndpoint : Endpoint<GetVenueRequest, GetVenueResponse>
{
    private readonly AppDbContext _db;

    public GetVenueEndpoint(AppDbContext db) => _db = db;

    public override void Configure()
    {
        Get("/venues/{id}");
        AllowAnonymous();
    }

    public override async Task HandleAsync(GetVenueRequest req, CancellationToken ct)
    {
        if (!Guid.TryParse(req.Id, out var guid))
        {
            await Send.NotFoundAsync(ct);
            return;
        }

        var venue = await _db.Venues.FindAsync([guid], ct);

        if (venue is null)
        {
            await Send.NotFoundAsync(ct);
            return;
        }

        await Send.OkAsync(new GetVenueResponse
        {
            Id = venue.Id,
            Name = venue.Name,
            Type = venue.Type,
            City = venue.City,
            Country = venue.Country,
            Description = venue.Description,
            Amenities = venue.Amenities,
            CreatedAt = venue.CreatedAt,
        }, ct);
    }
}
