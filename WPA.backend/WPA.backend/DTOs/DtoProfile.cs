using AutoMapper;
using WPA.backend.DTOs.Events;
using WPA.backend.DTOs.Expenses;
using WPA.backend.DTOs.Funds;
using WPA.backend.DTOs.Guests;
using WPA.backend.DTOs.Home;
using WPA.backend.DTOs.ServiceProviders;
using WPA.backend.Entities;

namespace WPA.backend.DTOs
{
    public class DtoProfile : Profile
    {
        public DtoProfile()
        {
            CreateMap<CreateGuestDto, Guest>().ReverseMap();
            CreateMap<UpdateGuestDto, Guest>().ReverseMap();
            CreateMap<GuestDto, Guest>().ReverseMap();

            CreateMap<CreateIncomeDto, Income>().ReverseMap();
            CreateMap<UpdateIncomeDto, Income>().ReverseMap();
            CreateMap<IncomeDto, Income>().ReverseMap();

            CreateMap<ExpenseDto, Expense>().ReverseMap();
            CreateMap<CreateExpenseDto, Expense>().ReverseMap();
            CreateMap<UpdateExpenseDto, Expense>().ReverseMap();

            CreateMap<ServiceProviderDto, ServiceProvider>().ReverseMap();
            CreateMap<CreateServiceProviderDto, ServiceProvider>().ReverseMap();
            CreateMap<UpdateServiceProviderDto, ServiceProvider>().ReverseMap();

            CreateMap<EventDto, Event>().ReverseMap();
            CreateMap<CreateEventDto, Event>().ReverseMap();
            CreateMap<UpdateEventDto, Event>().ReverseMap();

            CreateMap<UpdateWeddingDetailsDto, Planner>()
                .ForMember(dest => dest.IsWeddingDetailsSaved, opt => opt.MapFrom(src => true))
                .ReverseMap();
        }
    }
}
