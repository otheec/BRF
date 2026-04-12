using BRF.Api.Data;
using BRF.Api.Domain;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.BeerLogs.CreateBeerLog;

public class CreateBeerLogEndpoint : Endpoint<CreateBeerLogRequest, CreateBeerLogResponse>
{
    private readonly AppDbContext _db;

    public CreateBeerLogEndpoint(AppDbContext db) => _db = db;

    public override void Configure()
    {
        Post("/beer-logs");
        AllowAnonymous();
    }

    public override async Task HandleAsync(CreateBeerLogRequest req, CancellationToken ct)
    {
        var beerExists = await _db.Beers.AnyAsync(b => b.Id == req.BeerId, ct);
        if (!beerExists)
        {
            AddError("BeerId", "Pivo nebylo nalezeno.");
            await Send.ErrorsAsync(cancellation: ct);
            return;
        }

        if (req.VenueId.HasValue)
        {
            var venueExists = await _db.Venues.AnyAsync(v => v.Id == req.VenueId.Value, ct);
            if (!venueExists)
            {
                AddError("VenueId", "Místo nebylo nalezeno.");
                await Send.ErrorsAsync(cancellation: ct);
                return;
            }
        }

        if (req.Rating is < 1 or > 5)
        {
            AddError("Rating", "Hodnocení musí být mezi 1 a 5.");
            await Send.ErrorsAsync(cancellation: ct);
            return;
        }

        var log = new BeerLog
        {
            Id = Guid.NewGuid(),
            UserId = req.UserId,
            BeerId = req.BeerId,
            VenueId = req.VenueId,
            LoggedAt = DateTime.UtcNow,
            Notes = req.Notes,
            Rating = req.Rating,
            CreatedAt = DateTime.UtcNow,
        };

        _db.BeerLogs.Add(log);
        await _db.SaveChangesAsync(ct);

        await Send.CreatedAtAsync<CreateBeerLogEndpoint>(
            new { id = log.Id },
            new CreateBeerLogResponse { Id = log.Id, LoggedAt = log.LoggedAt },
            cancellation: ct);
    }
}
