namespace BRF.Api.Features.Breweries.ListBreweries;

public class ListBreweriesResponse
{
    public List<BreweryListItem> Items { get; set; } = [];
    public int Total { get; set; }
}

public class BreweryListItem
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string Country { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string? Description { get; set; }
    public int Established { get; set; }
}
