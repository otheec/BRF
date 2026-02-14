namespace BRF.Api.Features.Breweries.GetAllBreweries;

public class GetAllBreweriesResponse
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Country { get; set; }
    public string? City { get; set; }
    public int BeerCount { get; set; }
}
