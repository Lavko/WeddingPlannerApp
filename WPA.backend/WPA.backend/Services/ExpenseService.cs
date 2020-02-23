using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.Entities;
using WPA.backend.Helpers;

namespace WPA.backend.Services
{
    public class ExpenseService : IRestService<Expense>
    {
        private readonly DataContext _context;

        public ExpenseService(DataContext context)
        {
            _context = context;
        }

        public async Task<int> Create(Expense expense)
        {
            _context.Add(expense);
            await _context.SaveChangesAsync();
            return expense.Id;
        }

        public void Delete(Expense expense)
        {
            _context.Remove(expense);
            _context.SaveChangesAsync();
        }

        public async Task<IList<Expense>> GetAll(int plannerId)
        {
            return await _context.Expenses.Where(e => e.PlannerId == plannerId).ToListAsync();
        }

        public async Task<int> Update(Expense expense)
        {
            _context.Update(expense);
            await _context.SaveChangesAsync();
            return expense.Id;
        }
    }
}
