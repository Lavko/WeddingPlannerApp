using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.DTOs.Home
{
    public class BudgetSummaryDto
    {
        public double IncomesSum { get; set; }
        public double ExpensesSum { get; set; }
        public double PaidExpensesSum { get; set; }
    }
}
