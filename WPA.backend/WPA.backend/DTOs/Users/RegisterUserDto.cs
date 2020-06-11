using System.ComponentModel.DataAnnotations;

namespace WPA.backend.DTOs.Users
{
    public class RegisterUserDto
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}