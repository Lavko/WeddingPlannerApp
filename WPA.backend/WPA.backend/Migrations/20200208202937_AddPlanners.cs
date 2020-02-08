using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WPA.backend.Migrations
{
    public partial class AddPlanners : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PlannerId",
                table: "Users",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Planners",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    WeddingDate = table.Column<DateTime>(nullable: false),
                    WeddingPlace = table.Column<string>(nullable: true),
                    CeremonyDate = table.Column<DateTime>(nullable: false),
                    CeremonyPlace = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Planners", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_PlannerId",
                table: "Users",
                column: "PlannerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Planners_PlannerId",
                table: "Users",
                column: "PlannerId",
                principalTable: "Planners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Planners_PlannerId",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Planners");

            migrationBuilder.DropIndex(
                name: "IX_Users_PlannerId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "PlannerId",
                table: "Users");
        }
    }
}
