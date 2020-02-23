using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using WPA.backend.Entities;

namespace WPA.backend.Helpers
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            Database.Migrate();
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Planner> Planners { get; set; }
        public DbSet<Guest> Guests { get; set; }
        public DbSet<Expense> Expenses { get; set; }
        public DbSet<Fund> Funds { get; set; }
    }
}