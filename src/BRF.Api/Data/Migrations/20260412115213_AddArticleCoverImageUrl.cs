using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BRF.Api.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddArticleCoverImageUrl : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CoverImageUrl",
                table: "Articles",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CoverImageUrl",
                table: "Articles");
        }
    }
}
