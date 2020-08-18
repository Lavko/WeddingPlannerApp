using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.Entities
{
    public class Event
    {
        public int Id { get; set; }
        public int PlannerId { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public EventColor Color { get; set; }
    }
}
