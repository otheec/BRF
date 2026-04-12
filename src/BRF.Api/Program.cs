using System.Text.Json;
using System.Text.Json.Serialization;
using BRF.Api.Data;
using FastEndpoints;
using FastEndpoints.Swagger;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("Default")));

builder.Services.AddFastEndpoints();
builder.Services.SwaggerDocument(o =>
{
    o.DocumentSettings = s =>
    {
        s.Title = "Brewfolio API";
        s.Version = "v1";
    };
});

var app = builder.Build();

app.UseSwaggerGen();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    var logger = scope.ServiceProvider.GetRequiredService<ILogger<AppDbContext>>();
    var retries = 10;
    while (retries-- > 0)
    {
        try
        {
            db.Database.Migrate();
            break;
        }
        catch (Exception ex) when (retries > 0)
        {
            logger.LogWarning("Database not ready, retrying in 2s... ({Retries} left). {Message}", retries, ex.Message);
            Thread.Sleep(2000);
        }
    }
}

if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}
app.UseFastEndpoints(c =>
{
    c.Serializer.Options.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
    c.Serializer.Options.Converters.Add(new JsonStringEnumConverter(JsonNamingPolicy.CamelCase));
});

if (app.Environment.IsDevelopment())
{
    await ArticleSeeder.SeedAsync(app.Services);
}

app.Run();
