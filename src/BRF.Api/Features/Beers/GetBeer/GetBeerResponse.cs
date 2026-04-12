namespace BRF.Api.Features.Beers.GetBeer;

public class GetBeerResponse
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Style { get; set; } = string.Empty;
    public decimal? Abv { get; set; }
    public int? Ibu { get; set; }
    public string? Description { get; set; }
    public Guid BreweryId { get; set; }
    public string BreweryName { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}
