namespace BRF.Api.Features.Breweries.CreateBrewery;

public class CreateBreweryRequest
{
    public string Name { get; set; } = string.Empty;
    public string? Country { get; set; }
    public string? City { get; set; }
    public string? Website { get; set; }
    public string? Description { get; set; }
}
