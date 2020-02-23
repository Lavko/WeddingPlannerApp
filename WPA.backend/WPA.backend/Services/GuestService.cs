using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.Entities;
using WPA.backend.Helpers;

namespace WPA.backend.Services
{
    public class GuestService : IRestService<Guest>
    {
        private readonly DataContext _context;

        public GuestService(DataContext context)
        {
            _context = context;
        }

        public async Task<IList<Guest>> GetAll(int plannerId)
        {
            return await _context.Guests.Where(g => g.PlannerId == plannerId).ToListAsync();
        }

        public async Task<int> Create(Guest guest)
        {
            _context.Add(guest);
            await _context.SaveChangesAsync();
            return  guest.Id;
        }

        public async Task<int> Update(Guest guest)
        {
            _context.Update(guest);
            await _context.SaveChangesAsync();
            return guest.Id;
        }

        public void Delete(Guest guest)
        {
            _context.Remove(guest);
        }
    }
}
