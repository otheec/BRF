namespace BRF.Api.Features.Articles.ListArticles;

public class ListArticlesResponse
{
    public List<ArticleListItem> Items { get; set; } = [];
    public int Total { get; set; }
}

public class ArticleListItem
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Tag { get; set; } = string.Empty;
    public string Excerpt { get; set; } = string.Empty;
    public string ReadTime { get; set; } = string.Empty;
    public string? CoverImageUrl { get; set; }
    public DateTime PublishedAt { get; set; }
}
