using BRF.Api.Domain;

namespace BRF.Api.Features.Articles.GetArticle;

public class GetArticleResponse
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public List<ArticleSection> Content { get; set; } = [];
    public string Author { get; set; } = string.Empty;
    public string Tag { get; set; } = string.Empty;
    public string? CoverImageUrl { get; set; }
    public string ReadTime { get; set; } = string.Empty;
    public string Excerpt { get; set; } = string.Empty;
    public DateTime PublishedAt { get; set; }
    public DateTime CreatedAt { get; set; }
}
