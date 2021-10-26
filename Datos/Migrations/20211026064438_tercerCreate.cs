using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class tercerCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "idPersona",
                table: "citas",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "idPersona",
                table: "citas");
        }
    }
}
