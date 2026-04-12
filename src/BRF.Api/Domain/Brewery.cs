namespace BRF.Api.Domain;

public class Brewery
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Country { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string? Description { get; set; }
    public int Established { get; set; }
    public DateTime CreatedAt { get; set; }
}
