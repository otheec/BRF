using BRF.Api.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Data;

public class BrfDbContext : DbContext
{
    public BrfDbContext(DbContextOptions<BrfDbContext> options) : base(options) { }

    public DbSet<Beer> Beers => Set<Beer>();
    public DbSet<Brewery> Breweries => Set<Brewery>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Beer>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Name).IsRequired().HasMaxLength(200);
            entity.Property(e => e.Style).HasMaxLength(100);
            entity.Property(e => e.Abv).HasPrecision(4, 2);

            entity.HasOne(e => e.Brewery)
                .WithMany(b => b.Beers)
                .HasForeignKey(e => e.BreweryId)
                .OnDelete(DeleteBehavior.SetNull);
        });

        modelBuilder.Entity<Brewery>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Name).IsRequired().HasMaxLength(200);
            entity.Property(e => e.Country).HasMaxLength(100);
            entity.Property(e => e.City).HasMaxLength(100);
            entity.Property(e => e.Website).HasMaxLength(500);
        });
    }
}
