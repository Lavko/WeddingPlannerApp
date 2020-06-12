using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WPA.backend.Migrations
{
    public partial class ServiceProvidersChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ServiceProviders_ServiceType_ServiceTypeId",
                table: "ServiceProviders");

            migrationBuilder.DropTable(
                name: "ServiceType");

            migrationBuilder.DropIndex(
                name: "IX_ServiceProviders_ServiceTypeId",
                table: "ServiceProviders");

            migrationBuilder.AddColumn<int>(
                name: "ServiceType",
                table: "ServiceProviders",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ServiceType",
                table: "ServiceProviders");

            migrationBuilder.CreateTable(
                name: "ServiceType",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Order = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceType", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ServiceProviders_ServiceTypeId",
                table: "ServiceProviders",
                column: "ServiceTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceProviders_ServiceType_ServiceTypeId",
                table: "ServiceProviders",
                column: "ServiceTypeId",
                principalTable: "ServiceType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
