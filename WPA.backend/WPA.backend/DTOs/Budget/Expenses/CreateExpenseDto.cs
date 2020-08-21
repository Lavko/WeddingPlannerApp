using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.Entities;

namespace WPA.backend.DTOs.Expenses
{
    public class CreateExpenseDto
    {
        [Required]
        public int PlannerId { get; set; }

        public int? ServiceProviderId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public decimal Amount { get; set; }

        public string Adnotation { get; set; }

        [Required]
        public decimal Deposit { get; set; }

        [Required]
        public ExpenseStatus ExpenseStatus { get; set; }
    }
}
