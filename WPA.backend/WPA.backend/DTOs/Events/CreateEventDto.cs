using System;
using WPA.backend.Entities;

namespace WPA.backend.DTOs.Events
{
    public class CreateEventDto
    {
        public int PlannerId { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public EventColor Color { get; set; }
    }
}
