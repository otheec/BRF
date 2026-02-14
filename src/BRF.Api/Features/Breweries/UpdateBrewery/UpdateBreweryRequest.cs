namespace BRF.Api.Features.Breweries.UpdateBrewery;

public class UpdateBreweryRequest
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Country { get; set; }
    public string? City { get; set; }
    public string? Website { get; set; }
    public string? Description { get; set; }
}
