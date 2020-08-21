using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.DTOs.Expenses;
using WPA.backend.DTOs.Funds;
using WPA.backend.Entities;

namespace WPA.backend.DTOs.Budget
{
    public class BudgetDto
    {
        public IList<IncomeDto> Incomes { get; set; }
        public IList<ExpenseDto> Expenses { get; set; }
    }
}
