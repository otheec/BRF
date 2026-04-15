namespace BRF.Api.Features.Beers.ListBeers;

public class ListBeersResponse
{
    public List<BeerListItem> Items { get; set; } = [];
    public int Total { get; set; }
}

public class BeerListItem
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Style { get; set; } = string.Empty;
    public decimal? Abv { get; set; }
    public int? Ibu { get; set; }
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public Guid BreweryId { get; set; }
    public string BreweryName { get; set; } = string.Empty;
}
