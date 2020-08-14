using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using WPA.backend.DTOs;
using WPA.backend.DTOs.Expenses;
using WPA.backend.DTOs.Funds;
using WPA.backend.DTOs.Guests;
using WPA.backend.Entities;
using WPA.backend.Helpers;
using WPA.backend.Services;

namespace WPA.SeedData
{
    public class DataSeeder : IDisposable
    {
        private readonly IConfiguration _configuration;
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IPlannerService _plannerService;
        private readonly IUserService _userService;
        private readonly IRestService<GuestDto, CreateGuestDto, UpdateGuestDto> _guestService;
        private readonly IRestService<IncomeDto, CreateIncomeDto, UpdateIncomeDto> _incomeService;
        private readonly IRestService<ExpenseDto, CreateExpenseDto, UpdateExpenseDto> _expenseService;

        public DataSeeder()
        {
            _configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.Development.json")
                .AddEnvironmentVariables()
                .Build();

            var connectionString = _configuration.GetConnectionString("DefaultConnection");
            var dbContextOptions = new DbContextOptionsBuilder<DataContext>()
                .UseSqlServer(connectionString)
                .Options;

            _context = new DataContext(dbContextOptions);

            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddMaps(new[]
                {
                    Assembly.GetAssembly(typeof(DtoProfile)),
                });
            });
            _mapper = config.CreateMapper();

            _plannerService = new PlannerService(_context);
            _userService = new UserService(_context, _plannerService);
            _guestService = new GuestService(_context, _mapper);
            _incomeService = new IncomeService(_context, _mapper);
            _expenseService = new ExpenseService(_context, _mapper);
        }

        public async Task GenerateData()
        {
            try
            {
                await GenerateUsers();
            }catch(Exception e)
            {
                Console.WriteLine(e);
            }
        }

        private async Task GenerateUsers()
        {
            
            var user = new User { Email = "tyrion.lannister@wpa-test.pl", FirstName = "Tyrion" };
            if(!await _context.Users.AnyAsync(u => u.Email == user.Email))
            {
                var savedUser = await _userService.Create(user, "test");
                await GenerateGuestsForUser(savedUser.PlannerId);
                await GenerateBudgetForUser(savedUser.PlannerId);
            }
        }

        private async Task GenerateGuestsForUser(int plannerId)
        {
            var guests = new List<CreateGuestDto>
            {
                new CreateGuestDto{Name = "Arya Stark", Status = GuestStatus.Cancelled, IsTravelling = true, Side = GuestSide.FamilyA, Adnotation = "nie ma imienia", PlannerId = plannerId},
                new CreateGuestDto{Name = "Bran Stark", Status = GuestStatus.Cancelled, IsTravelling = false, Side = GuestSide.FamilyA, Adnotation = "trójoki chłopiec", PlannerId = plannerId},
                new CreateGuestDto{Name = "Brienne Tarth", Status = GuestStatus.Confirmed, IsTravelling = true, Side = GuestSide.FriendA, Adnotation = string.Empty, PlannerId = plannerId},
                new CreateGuestDto{Name = "Catelyn Stark", Status = GuestStatus.Confirmed, IsTravelling = true, Side = GuestSide.FamilyA, Adnotation = "prawdopodobnie nie żyje", PlannerId = plannerId},
                new CreateGuestDto{Name = "Cersei Lannister", Status = GuestStatus.Informed, IsTravelling = false, Side = GuestSide.FamilyB, Adnotation = "nikt jej nie chce", PlannerId = plannerId},
                new CreateGuestDto{Name = "Daenerys Targaryen", Status = GuestStatus.Informed, IsTravelling = false, Side = GuestSide.Other, Adnotation = "nie sadzać z Cersei Lannister", PlannerId = plannerId},
                new CreateGuestDto{Name = "Davos Seaworth", Status = GuestStatus.Invited, IsTravelling = true, Side = GuestSide.FriendA, Adnotation = "może prosić o zagranie Disco Polo. Pilnować!", PlannerId = plannerId},
                new CreateGuestDto{Name = "Eddard Stark", Status = GuestStatus.Invited, IsTravelling = false, Side = GuestSide.FamilyB, Adnotation = "po pierwszej godzinie zaliczy zgon", PlannerId = plannerId},
                new CreateGuestDto{Name = "Jaime Lannister", Status = GuestStatus.Invited, IsTravelling = true, Side = GuestSide.FamilyB, Adnotation = "nie ma lewej dłoni. A może prawej?", PlannerId = plannerId},
                new CreateGuestDto{Name = "Joffrey Baratheon", Status = GuestStatus.Confirmed, IsTravelling = true, Side = GuestSide.FamilyB, Adnotation = "uczulenie na wino. Nie polewać!", PlannerId = plannerId},
            };

            foreach(var guest in guests)
            {
                await _guestService.Create(guest);
            }
        }

        private async Task GenerateBudgetForUser(int plannerId)
        {
            var incomes = new List<CreateIncomeDto> 
            {
                new CreateIncomeDto { Source = "Rodzice", Amount = 30000.00, PlannerId = plannerId},
                new CreateIncomeDto { Source = "Oszczędności", Amount = 10000, PlannerId = plannerId},
                new CreateIncomeDto { Source = "Przekręty", Amount = 15000.50, PlannerId = plannerId},
            };

            foreach(var income in incomes)
            {
                await _incomeService.Create(income);
            }

            var expenses = new List<CreateExpenseDto>
            {
                new CreateExpenseDto { Name = "Sala weselna", Amount = 10000, Deposit = 2840, ExpenseStatus = ExpenseStatus.Prepaid, Adnotation = "Najlepsza w Westeros", PlannerId = plannerId},
                new CreateExpenseDto { Name = "Bard", Amount = 5000, Deposit = 1120, ExpenseStatus = ExpenseStatus.Prepaid, Adnotation = "Podobno śpiewał i przeżył ostatnie wesele", PlannerId = plannerId},
                new CreateExpenseDto { Name = "Malarz", Amount = 2020, Deposit = 0, ExpenseStatus = ExpenseStatus.Paid, Adnotation = "Malował jakieś mapy u Cersei, nada się", PlannerId = plannerId},
                new CreateExpenseDto { Name = "Ciasta i tort", Amount = 3130, Deposit = 0, ExpenseStatus = ExpenseStatus.Paid, Adnotation = "Tort w kształcie lwa", PlannerId = plannerId},
                new CreateExpenseDto { Name = "Ochrona", Amount = 1150, Deposit = 0, ExpenseStatus = ExpenseStatus.Estimated, Adnotation = "Jeśli i Cersei i Daenerys potwierdzą to będzie potrzebna", PlannerId = plannerId},
                new CreateExpenseDto { Name = "Świece", Amount = 546, Deposit = 0, ExpenseStatus = ExpenseStatus.Estimated, Adnotation = "Skąd wziąć tyle świec", PlannerId = plannerId},
                new CreateExpenseDto { Name = "Obrączki", Amount = 2300, Deposit = 0, ExpenseStatus = ExpenseStatus.Signed, Adnotation = "Pamiętaj o grawerze!", PlannerId = plannerId},
                new CreateExpenseDto { Name = "Wystrój", Amount = 3445, Deposit = 0, ExpenseStatus = ExpenseStatus.Signed, Adnotation = "Trochę skór i czaszek", PlannerId = plannerId},
            };

            foreach(var expense in expenses)
            {
                await _expenseService.Create(expense);
            }
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
