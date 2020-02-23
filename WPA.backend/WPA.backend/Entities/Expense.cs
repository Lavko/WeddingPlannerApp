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
        public string Name { get; set; }
        public double Amount { get; set; }
        public string Adnotation { get; set; }
        public string Provider { get; set; }
        public double Deposit { get; set; }
        public ExpenseStatus ExpenseStatus { get; set; }
    }
}
