using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.Entities;

namespace WPA.backend.Models
{
    public class BudgetModel
    {
        public IList<Fund> Funds { get; set; }
        public IList<Expense> Expenses { get; set; }
    }
}
