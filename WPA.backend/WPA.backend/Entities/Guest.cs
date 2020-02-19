using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.Entities
{
    public class Guest
    {
        public int Id { get; set; }
        public int PlannerId { get; set; }
        public string Name { get; set; }
        public bool IsTravelling { get; set; }
        public string Adnotation { get; set; }
        public GuestStatus Status { get; set; }
        public GuestSide Side { get; set; }
    }
}
