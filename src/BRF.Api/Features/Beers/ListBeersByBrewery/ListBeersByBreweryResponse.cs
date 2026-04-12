namespace BRF.Api.Features.Beers.ListBeersByBrewery;

public class ListBeersByBreweryResponse
{
    public List<BeerByBreweryItem> Items { get; set; } = [];
}

public class BeerByBreweryItem
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Style { get; set; } = string.Empty;
    public decimal? Abv { get; set; }
    public int? Ibu { get; set; }
    public string? Description { get; set; }
}
