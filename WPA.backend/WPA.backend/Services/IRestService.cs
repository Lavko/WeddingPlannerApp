using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.Entities;

namespace WPA.backend.Services
{
    public interface IRestService<T>
    {
        Task<IList<T>> GetAll(int plannerId);
        Task<int> Create(T item);
        Task<int> Update(T item);
        void Delete(T item);
    }
}
