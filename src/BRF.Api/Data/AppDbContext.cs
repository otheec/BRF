using BRF.Api.Domain;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Article> Articles => Set<Article>();
    public DbSet<Brewery> Breweries => Set<Brewery>();
    public DbSet<Beer> Beers => Set<Beer>();
    public DbSet<Venue> Venues => Set<Venue>();
    public DbSet<BeerLog> BeerLogs => Set<BeerLog>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Article>(entity =>
        {
            entity.OwnsMany(a => a.Content, content =>
            {
                content.ToJson();
                content.OwnsMany(s => s.Images);
            });
        });

        modelBuilder.Entity<Beer>(entity =>
        {
            entity.HasOne(b => b.Brewery)
                .WithMany()
                .HasForeignKey(b => b.BreweryId);
        });

        modelBuilder.Entity<Venue>(entity =>
        {
            entity.Property(v => v.Type)
                .HasConversion<string>();

            entity.PrimitiveCollection(v => v.Amenities)
                .ElementType()
                .HasMaxLength(100);
        });

        modelBuilder.Entity<BeerLog>(entity =>
        {
            entity.HasOne(l => l.Beer)
                .WithMany()
                .HasForeignKey(l => l.BeerId);

            entity.HasOne(l => l.Venue)
                .WithMany()
                .HasForeignKey(l => l.VenueId);
        });
    }
}
