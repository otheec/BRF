namespace BRF.Api.Domain;

public class BeerLog
{
    public Guid Id { get; set; }
    public string UserId { get; set; } = string.Empty;
    public Guid BeerId { get; set; }
    public Beer Beer { get; set; } = null!;
    public Guid? VenueId { get; set; }
    public Venue? Venue { get; set; }
    public DateTime LoggedAt { get; set; }
    public string? Notes { get; set; }
    public int? Rating { get; set; }
    public DateTime CreatedAt { get; set; }
}
