using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BRF.Api.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddImageUrlToEntities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Venues",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Breweries",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Beers",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Venues");

            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Breweries");

            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Beers");
        }
    }
}
