namespace BRF.Api.Features.Beers.ListBeers;

public class ListBeersRequest
{
    public int Skip { get; set; } = 0;
    public int Take { get; set; } = 20;
}
