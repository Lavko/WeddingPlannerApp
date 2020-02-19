using Microsoft.EntityFrameworkCore.Migrations;

namespace WPA.backend.Migrations
{
    public partial class addedPlannerId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Planners_PlannerId",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "PlannerId",
                table: "Users",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Planners_PlannerId",
                table: "Users",
                column: "PlannerId",
                principalTable: "Planners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Planners_PlannerId",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "PlannerId",
                table: "Users",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Planners_PlannerId",
                table: "Users",
                column: "PlannerId",
                principalTable: "Planners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
