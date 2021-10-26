using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class SecondCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "idPersona",
                table: "citas");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "idPersona",
                table: "citas",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
