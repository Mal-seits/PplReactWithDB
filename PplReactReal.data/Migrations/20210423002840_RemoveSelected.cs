using Microsoft.EntityFrameworkCore.Migrations;

namespace PplReactReal.data.Migrations
{
    public partial class RemoveSelected : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Selected",
                table: "People");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Selected",
                table: "People",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
