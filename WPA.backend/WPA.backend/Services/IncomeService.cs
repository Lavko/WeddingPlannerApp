using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.DTOs.Funds;
using WPA.backend.Entities;
using WPA.backend.Helpers;

namespace WPA.backend.Services
{
    public class IncomeService : IRestService<IncomeDto, CreateIncomeDto, UpdateIncomeDto>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public IncomeService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<int> Create(CreateIncomeDto createIncomeDto)
        {
            //validate

            var income = _mapper.Map<Income>(createIncomeDto);

            _context.Add(income);
            await _context.SaveChangesAsync();

            return income.Id;
        }

        public async Task Delete(int id)
        {
            var income = await _context.Incomes.FindAsync(id);
            if(income == null)
            {
                throw new ArgumentException($"Income with id: {id} doesn't exists.");
            }

            _context.Remove(income);
           await _context.SaveChangesAsync();
        }

        public async Task<IList<IncomeDto>> GetAll(int plannerId)
        {
            var incomes = await _context.Incomes.Where(e => e.PlannerId == plannerId).ToListAsync();

            return _mapper.Map<IList<IncomeDto>>(incomes);
        }

        public async Task<int> Update(UpdateIncomeDto updateIncomeDto)
        {
            //validate

            var income = _mapper.Map<Income>(updateIncomeDto);

            _context.Update(income);
            await _context.SaveChangesAsync();

            return income.Id;
        }
    }
}
