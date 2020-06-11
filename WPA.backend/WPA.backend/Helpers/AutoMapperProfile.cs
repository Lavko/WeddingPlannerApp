using AutoMapper;
using WPA.backend.Entities;
using WPA.backend.DTOs.Users;

namespace WPA.backend.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, GetUserDto>();
            CreateMap<RegisterUserDto, User>();
            CreateMap<UpdateUserDto, User>();
        }
    }
}