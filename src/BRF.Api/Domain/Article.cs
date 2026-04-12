using System.Text.Json.Serialization;

namespace BRF.Api.Domain;

public class Article
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public List<ArticleSection> Content { get; set; } = [];
    public string AuthorId { get; set; } = string.Empty;
    public string Tag { get; set; } = string.Empty;
    public string? CoverImageUrl { get; set; }
    public DateTime PublishedAt { get; set; }
    public DateTime CreatedAt { get; set; }
}

[JsonConverter(typeof(JsonStringEnumConverter<ArticleSectionType>))]
public enum ArticleSectionType
{
    Paragraph,
    Heading,
    Quote,
    Images,
}

public class ArticleSection
{
    public ArticleSectionType Type { get; set; }
    public string? Text { get; set; }
    public List<ArticleSectionImage>? Images { get; set; }
}

public class ArticleSectionImage
{
    public string Src { get; set; } = string.Empty;
    public string Alt { get; set; } = string.Empty;
    public string? Caption { get; set; }
}
