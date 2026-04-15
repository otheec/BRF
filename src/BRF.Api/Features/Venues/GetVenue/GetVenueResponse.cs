using BRF.Api.Domain;

namespace BRF.Api.Features.Venues.GetVenue;

public class GetVenueResponse
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public VenueType Type { get; set; }
    public string City { get; set; } = string.Empty;
    public string Country { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public List<string> Amenities { get; set; } = [];
    public DateTime CreatedAt { get; set; }
}
