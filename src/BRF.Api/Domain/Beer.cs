namespace BRF.Api.Domain;

public class Beer
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Style { get; set; } = string.Empty;
    public decimal? Abv { get; set; }
    public int? Ibu { get; set; }
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public Guid BreweryId { get; set; }
    public Brewery Brewery { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
}
