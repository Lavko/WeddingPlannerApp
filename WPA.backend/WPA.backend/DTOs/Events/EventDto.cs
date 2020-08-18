using System;
using WPA.backend.Entities;

namespace WPA.backend.DTOs.Events
{
    public class EventDto
    {
        public int Id { get; set; }
        public int PlannerId { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public EventColor Color { get; set; }
    }
}
