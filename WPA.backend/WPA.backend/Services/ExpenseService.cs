using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.DTOs.Expenses;
using WPA.backend.Entities;
using WPA.backend.Helpers;

namespace WPA.backend.Services
{
    public class ExpenseService : IRestService<ExpenseDto, CreateExpenseDto, UpdateExpenseDto>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ExpenseService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<int> Create(CreateExpenseDto createExpenseDto)
        {
            //validation
            var expense = _mapper.Map<Expense>(createExpenseDto);

            _context.Add(expense);
            await _context.SaveChangesAsync();

            return expense.Id;
        }

        public async Task Delete(int id)
        {
            var expense = await _context.Expenses.FindAsync(id);
            if(expense == null)
            {
                throw new ArgumentException($"Expense with id: {id} doesn't exists.");
            }
            _context.Remove(expense);
            await _context.SaveChangesAsync();
        }

        public async Task<IList<ExpenseDto>> GetAll(int plannerId)
        {
            var expenses = await _context.Expenses.Where(e => e.PlannerId == plannerId).ToListAsync();
            return _mapper.Map<IList<ExpenseDto>>(expenses);
        }

        public async Task<int> Update(UpdateExpenseDto updateExpenseDto)
        {
            //validation
            var expense = _mapper.Map<Expense>(updateExpenseDto);

            _context.Update(expense);
            await _context.SaveChangesAsync();

            return expense.Id;
        }
    }
}
