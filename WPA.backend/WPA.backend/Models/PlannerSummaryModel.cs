using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.Models
{
    public class PlannerSummaryModel
    {
        public DateTime WeddingDate { get; set; }
        public string WeddingPlace { get; set; }
        public DateTime CeremonyDate { get; set; }
        public string CeremonyPlace { get; set; }
        public int GuestCount { get; set; }
        public int ConfirmedGuestCount { get; set; }
        public double Budget { get; set; }
        public double Expenses { get; set; }
    }
}
