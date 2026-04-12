using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.BeerLogs.ListBeerLogs;

public class ListBeerLogsEndpoint : Endpoint<ListBeerLogsRequest, ListBeerLogsResponse>
{
    private readonly AppDbContext _db;

    public ListBeerLogsEndpoint(AppDbContext db) => _db = db;

    public override void Configure()
    {
        Get("/beer-logs");
        AllowAnonymous();
    }

    public override async Task HandleAsync(ListBeerLogsRequest req, CancellationToken ct)
    {
        var skip = Math.Max(0, req.Skip);
        var take = Math.Clamp(req.Take, 1, 50);

        var query = _db.BeerLogs
            .Include(l => l.Beer).ThenInclude(b => b.Brewery)
            .Include(l => l.Venue)
            .Where(l => l.UserId == req.UserId);

        var total = await query.CountAsync(ct);

        var items = await query
            .OrderByDescending(l => l.LoggedAt)
            .Skip(skip)
            .Take(take)
            .Select(l => new BeerLogItem
            {
                Id = l.Id,
                BeerName = l.Beer.Name,
                BreweryName = l.Beer.Brewery.Name,
                VenueName = l.Venue != null ? l.Venue.Name : null,
                LoggedAt = l.LoggedAt,
                Rating = l.Rating,
                Notes = l.Notes,
            })
            .ToListAsync(ct);

        await Send.OkAsync(new ListBeerLogsResponse { Items = items, Total = total }, ct);
    }
}
