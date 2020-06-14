﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.Entities;

namespace WPA.backend.DTOs.Expenses
{
    public class UpdateExpenseDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public int PlannerId { get; set; }

        public int? ServiceProviderId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public double Amount { get; set; }

        public string Adnotation { get; set; }

        [Required]
        public double Deposit { get; set; }

        [Required]
        public ExpenseStatus ExpenseStatus { get; set; }
    }
}
