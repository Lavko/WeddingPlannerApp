using System;
using System.Threading.Tasks;

namespace WPA.SeedData
{
    class Program
    {
        static async Task Main(string[] args)
        {
            using(var seeder = new DataSeeder())
            {
                await seeder.GenerateData();
            }
        }
    }
}
