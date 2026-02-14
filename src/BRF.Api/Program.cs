using BRF.Api.Data;
using FastEndpoints;
using FastEndpoints.Swagger;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// FastEndpoints
builder.Services.AddFastEndpoints();
builder.Services.SwaggerDocument();

// EF Core + SQL Server
var connectionString = builder.Configuration.GetConnectionString("Default");
builder.Services.AddDbContext<BrfDbContext>(options =>
    options.UseSqlServer(connectionString));

var app = builder.Build();

app.UseHttpsRedirection();
app.UseFastEndpoints();
app.UseSwaggerGen();

app.Run();
