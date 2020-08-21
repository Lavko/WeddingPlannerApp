using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.DTOs.Funds
{
    public class IncomeDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Source { get; set; }

        [Required]
        public decimal Amount { get; set; }

        [Required]
        public int PlannerId { get; set; }
    }
}
