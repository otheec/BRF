namespace BRF.Api.Features.BeerLogs.ListBeerLogs;

public class ListBeerLogsResponse
{
    public List<BeerLogItem> Items { get; set; } = [];
    public int Total { get; set; }
}

public class BeerLogItem
{
    public Guid Id { get; set; }
    public string BeerName { get; set; } = string.Empty;
    public string BreweryName { get; set; } = string.Empty;
    public string? VenueName { get; set; }
    public DateTime LoggedAt { get; set; }
    public int? Rating { get; set; }
    public string? Notes { get; set; }
}
