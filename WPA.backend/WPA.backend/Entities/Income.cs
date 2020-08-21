using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.Entities
{
    public class Income
    {
        public int Id { get; set; }
        public int PlannerId { get; set; }
        public string Source { get; set; }
        public decimal Amount { get; set; }
    }
}
