using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.DTOs.Funds
{
    public class CreateIncomeDto
    {
        [Required]
        public int PlannerId { get; set; }

        [Required]
        public string Source { get; set; }

        [Required]
        public double Amount { get; set; }
    }
}
