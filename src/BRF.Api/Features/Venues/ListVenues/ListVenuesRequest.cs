namespace BRF.Api.Features.Venues.ListVenues;

public class ListVenuesRequest
{
    public int Skip { get; set; } = 0;
    public int Take { get; set; } = 20;
}
