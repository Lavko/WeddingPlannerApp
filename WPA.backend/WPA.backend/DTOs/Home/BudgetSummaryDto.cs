using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.DTOs.Home
{
    public class BudgetSummaryDto
    {
        public decimal IncomesSum { get; set; }
        public decimal ExpensesSum { get; set; }
        public decimal PaidExpensesSum { get; set; }
    }
}
