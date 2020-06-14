using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.DTOs.Expenses;
using WPA.backend.DTOs.Funds;
using WPA.backend.Entities;

namespace WPA.backend.Models
{
    public class BudgetModel
    {
        public IList<IncomeDto> Incomes { get; set; }
        public IList<ExpenseDto> Expenses { get; set; }
    }
}
