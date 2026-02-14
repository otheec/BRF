using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Breweries.DeleteBrewery;

public class DeleteBreweryEndpoint(BrfDbContext db) : Endpoint<DeleteBreweryRequest>
{
    public override void Configure()
    {
        Delete("/api/breweries/{Id}");
        AllowAnonymous();
    }

    public override async Task HandleAsync(DeleteBreweryRequest req, CancellationToken ct)
    {
        var brewery = await db.Breweries
            .FirstOrDefaultAsync(b => b.Id == req.Id, ct);

        if (brewery is null)
        {
            await Send.NotFoundAsync(ct);
            return;
        }

        db.Breweries.Remove(brewery);
        await db.SaveChangesAsync(ct);

        await Send.NoContentAsync(ct);
    }
}
