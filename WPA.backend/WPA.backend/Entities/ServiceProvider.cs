using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.Entities
{
    public class ServiceProvider
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ServiceTypeId { get; set; }
        public ServiceType ServiceType { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
    }
}
