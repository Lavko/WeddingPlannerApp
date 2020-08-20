using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.DTOs.Home
{
    public class GuestSummaryDto
    {
        public int GuestsCount { get; set; }
        public int InvitedGuestsCount { get; set; }
        public int ConfirmedGuestsCount { get; set; }
    }
}
