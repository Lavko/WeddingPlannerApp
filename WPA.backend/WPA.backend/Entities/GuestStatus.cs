using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.Entities
{
    public enum GuestStatus
    {
        None = 0,
        Informed,
        Invited,
        Confirmed,
        Cancelled
    }
}
