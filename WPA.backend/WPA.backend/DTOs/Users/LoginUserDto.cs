using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.DTOs.Users
{
    public class LoginUserDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
