using BRF.Api.Data;
using BRF.Api.Domain;
using FastEndpoints;

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
        if (!Guid.TryParse(req.Id, out var guid))
        {
            await Send.NotFoundAsync(ct);
            return;
        }

        var article = await _db.Articles.FindAsync([guid], ct);

        if (article is null)
        {
            await Send.NotFoundAsync(ct);
            return;
        }

        var firstParagraph = article.Content
            .FirstOrDefault(s => s.Type == ArticleSectionType.Paragraph && s.Text != null)
            ?.Text ?? string.Empty;

        var allText = string.Join(" ", article.Content
            .Where(s => s.Text != null)
            .Select(s => s.Text!));
        var words = allText.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length;
        var minutes = Math.Max(1, (int)Math.Round(words / 200.0));

        await Send.OkAsync(new GetArticleResponse
        {
            Id = article.Id,
            Title = article.Title,
            Content = article.Content,
            Author = article.AuthorId,
            Tag = article.Tag,
            CoverImageUrl = article.CoverImageUrl,
            ReadTime = $"{minutes} min read",
            Excerpt = firstParagraph.Length > 160 ? firstParagraph[..160] : firstParagraph,
            PublishedAt = article.PublishedAt,
            CreatedAt = article.CreatedAt,
        }, ct);
    }
}
