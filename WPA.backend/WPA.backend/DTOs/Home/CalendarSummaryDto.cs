using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.DTOs.Events;

namespace WPA.backend.DTOs.Home
{
    public class CalendarSummaryDto
    {
        public int EventsCount { get; set; }
        public int EventsInFutureCount { get; set; }
        public IList<EventDto> EventsForNextDays { get; set; }
    }
}
