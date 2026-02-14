namespace BRF.Api.Features.Breweries.GetBreweryById;

public class GetBreweryByIdResponse
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Country { get; set; }
    public string? City { get; set; }
    public string? Website { get; set; }
    public string? Description { get; set; }
    public DateTime CreatedAt { get; set; }
    public List<GetBreweryByIdBeerDto> Beers { get; set; } = [];
}

public class GetBreweryByIdBeerDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Style { get; set; }
    public decimal? Abv { get; set; }
}
