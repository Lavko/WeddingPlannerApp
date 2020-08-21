using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.Entities
{
    public class Expense
    {
        public int Id { get; set; }
        public int PlannerId { get; set; }
        public int? ServiceProviderId { get; set; }
        public ServiceProvider? ServiceProvider { get; set; }
        public string Name { get; set; }
        public decimal Amount { get; set; }
        public string Adnotation { get; set; }
        public decimal Deposit { get; set; }
        public ExpenseStatus ExpenseStatus { get; set; }
    }
}
