using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.DTOs.ServiceProviders
{
    public class UpdateServiceProviderDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int ServiceType { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        [Required]
        public string Address { get; set; }
    }
}
