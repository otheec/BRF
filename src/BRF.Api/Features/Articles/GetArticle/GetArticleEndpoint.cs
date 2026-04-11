using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Articles.GetArticle;

public class GetArticleEndpoint : Endpoint<GetArticleRequest, GetArticleResponse>
{
    private readonly AppDbContext _db;

    public GetArticleEndpoint(AppDbContext db) => _db = db;

    public override void Configure()
    {
        Get("/articles/{id}");
        AllowAnonymous();
    }

    public override async Task HandleAsync(GetArticleRequest req, CancellationToken ct)
    {
        var article = await _db.Articles.FindAsync([req.Id], ct);

        if (article is null)
        {
            await SendNotFoundAsync(ct);
            return;
        }

        await SendOkAsync(new GetArticleResponse
        {
            Id = article.Id,
            Title = article.Title,
            Content = article.Content,
            Author = article.AuthorId,
            Tag = article.Tag,
            PublishedAt = article.PublishedAt,
            CreatedAt = article.CreatedAt,
        }, ct);
    }
}
