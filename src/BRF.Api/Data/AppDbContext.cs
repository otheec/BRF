using BRF.Api.Domain;
using Microsoft.EntityFrameworkCore;

namespace BRF.Api.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Article> Articles => Set<Article>();

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
    }
}
