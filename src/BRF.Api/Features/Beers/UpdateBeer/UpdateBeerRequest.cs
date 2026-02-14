namespace BRF.Api.Features.Beers.UpdateBeer;

public class UpdateBeerRequest
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Style { get; set; }
    public decimal? Abv { get; set; }
    public string? Description { get; set; }
    public int? BreweryId { get; set; }
}
