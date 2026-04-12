namespace BRF.Api.Features.Breweries.ListBreweries;

public class ListBreweriesRequest
{
    public int Skip { get; set; } = 0;
    public int Take { get; set; } = 20;
}
