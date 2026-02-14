namespace BRF.Api.Features.Beers.GetAllBeers;

public class GetAllBeersResponse
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Style { get; set; }
    public decimal? Abv { get; set; }
}
