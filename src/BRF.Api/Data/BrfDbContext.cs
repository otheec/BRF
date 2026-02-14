using BRF.Api.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Data;

public class BrfDbContext : DbContext
{
    public BrfDbContext(DbContextOptions<BrfDbContext> options) : base(options) { }

    public DbSet<Beer> Beers => Set<Beer>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Beer>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Name).IsRequired().HasMaxLength(200);
            entity.Property(e => e.Style).HasMaxLength(100);
            entity.Property(e => e.Abv).HasPrecision(4, 2);
        });
    }
}
