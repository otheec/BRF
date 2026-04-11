using BRF.Api.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Features.Articles.ListArticles;

public class ListArticlesEndpoint : Endpoint<ListArticlesRequest, ListArticlesResponse>
{
    private readonly AppDbContext _db;

    public ListArticlesEndpoint(AppDbContext db) => _db = db;

    public override void Configure()
    {
        Get("/articles");
        AllowAnonymous();
    }

    public override async Task HandleAsync(ListArticlesRequest req, CancellationToken ct)
    {
        var skip = Math.Max(0, req.Skip);
        var take = Math.Clamp(req.Take, 1, 50);

        var total = await _db.Articles.CountAsync(ct);

        var raw = await _db.Articles
            .OrderByDescending(a => a.PublishedAt)
            .Skip(skip)
            .Take(take)
            .Select(a => new { a.Id, a.Title, a.AuthorId, a.Tag, a.Content, a.PublishedAt })
            .ToListAsync(ct);

        var items = raw.Select(a => new ArticleListItem
        {
            Id = a.Id,
            Title = a.Title,
            Author = a.AuthorId,
            Tag = a.Tag,
            Excerpt = a.Content.Length > 160 ? a.Content[..160] : a.Content,
            PublishedAt = a.PublishedAt,
        }).ToList();

        await SendOkAsync(new ListArticlesResponse { Items = items, Total = total }, ct);
    }
}
