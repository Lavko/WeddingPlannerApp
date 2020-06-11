using AutoMapper;
using WPA.backend.DTOs.Expenses;
using WPA.backend.DTOs.Funds;
using WPA.backend.DTOs.Guests;
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

            CreateMap<CreateFundDto, Fund>().ReverseMap();
            CreateMap<UpdateFundDto, Fund>().ReverseMap();
            CreateMap<FundDto, Fund>().ReverseMap();

            CreateMap<ExpenseDto, Expense>().ReverseMap();
            CreateMap<CreateExpenseDto, Expense>().ReverseMap();
            CreateMap<UpdateExpenseDto, Expense>().ReverseMap();

            CreateMap<ServiceProviderDto, ServiceProvider>().ReverseMap();
            CreateMap<CreateServiceProviderDto, ServiceProvider>().ReverseMap();
            CreateMap<UpdateServiceProviderDto, ServiceProvider>().ReverseMap();
        }
    }
}
