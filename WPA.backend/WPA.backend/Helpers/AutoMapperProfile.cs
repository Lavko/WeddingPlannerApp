using AutoMapper;
using WPA.backend.Entities;
using WPA.backend.Models.Users;

namespace WPA.backend.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserModel>();
            CreateMap<RegisterModel, User>();
            CreateMap<UpdateModel, User>();
        }
    }
}