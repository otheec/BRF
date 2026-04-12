using BRF.Api.Data;
using BRF.Api.Domain;
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

        var articles = await _db.Articles
            .OrderByDescending(a => a.PublishedAt)
            .Skip(skip)
            .Take(take)
            .ToListAsync(ct);

        var items = articles.Select(a =>
        {
            var firstParagraph = a.Content
                .FirstOrDefault(s => s.Type == ArticleSectionType.Paragraph && s.Text != null)
                ?.Text ?? string.Empty;

            var allText = string.Join(" ", a.Content
                .Where(s => s.Text != null)
                .Select(s => s.Text!));

            var words = allText.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length;
            var minutes = Math.Max(1, (int)Math.Round(words / 200.0));

            return new ArticleListItem
            {
                Id = a.Id,
                Title = a.Title,
                Tag = a.Tag,
                Excerpt = firstParagraph.Length > 160 ? firstParagraph[..160] : firstParagraph,
                ReadTime = $"{minutes} min čtení",
                CoverImageUrl = a.CoverImageUrl,
                PublishedAt = a.PublishedAt,
            };
        }).ToList();

        await Send.OkAsync(new ListArticlesResponse { Items = items, Total = total }, ct);
    }
}
