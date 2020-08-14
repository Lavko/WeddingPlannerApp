using System.ComponentModel.DataAnnotations;
using WPA.backend.Entities;

namespace WPA.backend.DTOs.Guests
{
    public class CreateGuestDto
    {
        public int PlannerId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public bool IsTravelling { get; set; }

        public string Adnotation { get; set; }

        [Required]
        public GuestStatus Status { get; set; }

        [Required]
        public GuestSide Side { get; set; }
    }
}
