using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.Entities;

namespace WPA.backend.Services
{
    public interface IRestService<T, C, U>
    {
        Task<IList<T>> GetAll(int plannerId);
        Task<int> Create(C item);
        Task<int> Update(U item);
        Task Delete(int id);
    }
}
