namespace BRF.Api.Features.BeerLogs.ListBeerLogs;

public class ListBeerLogsRequest
{
    public string UserId { get; set; } = "demo-user";
    public int Skip { get; set; } = 0;
    public int Take { get; set; } = 20;
}
