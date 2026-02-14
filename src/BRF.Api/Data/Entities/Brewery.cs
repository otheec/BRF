namespace BRF.Api.Data.Entities;

public class Brewery
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Country { get; set; }
    public string? City { get; set; }
    public string? Website { get; set; }
    public string? Description { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<Beer> Beers { get; set; } = [];
}
