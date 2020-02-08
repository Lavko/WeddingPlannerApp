using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.Entities
{
    public class Planner
    {
        public int Id { get; set; }
        public DateTime WeddingDate { get; set; }
        public string WeddingPlace { get; set; }
        public DateTime CeremonyDate { get; set; }
        public string CeremonyPlace { get; set; }
    }
}
