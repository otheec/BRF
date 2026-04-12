namespace BRF.Api.Features.BeerLogs.CreateBeerLog;

public class CreateBeerLogRequest
{
    public string UserId { get; set; } = string.Empty;
    public Guid BeerId { get; set; }
    public Guid? VenueId { get; set; }
    public string? Notes { get; set; }
    public int? Rating { get; set; }
}
