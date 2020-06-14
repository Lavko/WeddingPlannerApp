using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WPA.backend.Entities
{
    public enum ExpenseStatus
    {
        Unknown = 0,
        Estimated,
        Signed,
        Prepaid,
        Paid
    }
}
