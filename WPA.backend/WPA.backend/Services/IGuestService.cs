using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.Entities;

namespace WPA.backend.Services
{
    public interface IGuestService
    {
        Task<IList<Guest>> GetAll(int plannerId);
        Task<int> Create(Guest guest);
        Task<int> Update(Guest guest);
        void Delete(Guest guest);
    }
}
