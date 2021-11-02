using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class CuartoCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "historias",
                columns: table => new
                {
                    idHistoria = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    idPaciente = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    personaidentificacion = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    motivoConsulta = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    antecedentesPaciente = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    diagnostico = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    planOrientacion = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_historias", x => x.idHistoria);
                    table.ForeignKey(
                        name: "FK_historias_personas_personaidentificacion",
                        column: x => x.personaidentificacion,
                        principalTable: "personas",
                        principalColumn: "identificacion",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_historias_personaidentificacion",
                table: "historias",
                column: "personaidentificacion");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "historias");
        }
    }
}
