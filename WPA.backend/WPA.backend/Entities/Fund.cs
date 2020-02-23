using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.Entities
{
    public class Fund
    {
        public int Id { get; set; }
        public int PlannerId { get; set; }
        public string Source { get; set; }
        public double Amount { get; set; }
    }
}
