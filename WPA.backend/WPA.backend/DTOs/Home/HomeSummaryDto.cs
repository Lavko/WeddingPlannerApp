﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.DTOs.Home
{
    public class HomeSummaryDto
    {
        public string UserName { get; set; }
        public string PartnerName { get; set; }
        public DateTime WeddingDate { get; set; }
        public string WeddingPlace { get; set; }
        public DateTime CeremonyDate { get; set; }
        public string CeremonyPlace { get; set; }
        public bool IsWeddingDetailsSaved { get; set; }
        public virtual GuestSummaryDto GuestSummary { get; set; }
        public virtual BudgetSummaryDto BudgetSummary { get; set; }
        public virtual CalendarSummaryDto CalendarSummary { get; set; }
    }
}
