namespace BRF.Api.Features.Articles.ListArticles;

public class ListArticlesRequest
{
    public int Skip { get; set; } = 0;
    public int Take { get; set; } = 10;
}
