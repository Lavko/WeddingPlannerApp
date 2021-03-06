﻿using Microsoft.Extensions.DependencyInjection;
using WPA.backend.DTOs.Events;
using WPA.backend.DTOs.Expenses;
using WPA.backend.DTOs.Funds;
using WPA.backend.DTOs.Guests;
using WPA.backend.DTOs.ServiceProviders;

namespace WPA.backend.Services
{
    public static class IocExtension
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IPlannerService, PlannerService>();
            services.AddTransient<IRestService<GuestDto, CreateGuestDto, UpdateGuestDto>, GuestService>();
            services.AddTransient<IRestService<ExpenseDto, CreateExpenseDto, UpdateExpenseDto>, ExpenseService>();
            services.AddTransient<IRestService<IncomeDto, CreateIncomeDto, UpdateIncomeDto>, IncomeService>();
            services.AddTransient<IRestService<ServiceProviderDto, CreateServiceProviderDto, UpdateServiceProviderDto>, ServiceProviderService>();
            services.AddTransient<IRestService<EventDto, CreateEventDto, UpdateEventDto>, EventService>();
            services.AddTransient<IHomeSummaryService, HomeSummaryService>();
        }
    }
}
