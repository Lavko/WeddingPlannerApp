using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.Entities;
using WPA.backend.Helpers;

namespace WPA.backend.Services
{
    public class FundService :IRestService<Fund>
    {
        private readonly DataContext _context;

        public FundService(DataContext context)
        {
            _context = context;
        }

        public async Task<int> Create(Fund fund)
        {
            _context.Add(fund);
            await _context.SaveChangesAsync();
            return fund.Id;
        }

        public void Delete(Fund fund)
        {
            _context.Remove(fund);
            _context.SaveChangesAsync();
        }

        public async Task<IList<Fund>> GetAll(int plannerId)
        {
            return await _context.Funds.Where(e => e.PlannerId == plannerId).ToListAsync();
        }

        public async Task<int> Update(Fund fund)
        {
            _context.Update(fund);
            await _context.SaveChangesAsync();
            return fund.Id;
        }
    }
}
