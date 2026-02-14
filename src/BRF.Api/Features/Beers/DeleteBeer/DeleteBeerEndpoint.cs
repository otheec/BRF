using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Beers.DeleteBeer;

public class DeleteBeerEndpoint(BrfDbContext db) : Endpoint<DeleteBeerRequest>
{
    public override void Configure()
    {
        Delete("/api/beers/{Id}");
        AllowAnonymous();
    }

    public override async Task HandleAsync(DeleteBeerRequest req, CancellationToken ct)
    {
        var beer = await db.Beers
            .FirstOrDefaultAsync(b => b.Id == req.Id, ct);

        if (beer is null)
        {
            await Send.NotFoundAsync(ct);
            return;
        }

        db.Beers.Remove(beer);
        await db.SaveChangesAsync(ct);

        await Send.NoContentAsync(ct);
    }
}
