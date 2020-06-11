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
    public class FundService : IRestService<FundDto, CreateFundDto, UpdateFundDto>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public FundService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<int> Create(CreateFundDto createFundDto)
        {
            //validate

            var fund = _mapper.Map<Fund>(createFundDto);

            _context.Add(fund);
            await _context.SaveChangesAsync();

            return fund.Id;
        }

        public async Task Delete(int id)
        {
            var fund = await _context.Funds.FindAsync(id);
            if(fund == null)
            {
                throw new ArgumentException($"Fund with id: {id} doesn't exists.");
            }

            _context.Remove(fund);
           await _context.SaveChangesAsync();
        }

        public async Task<IList<FundDto>> GetAll(int plannerId)
        {
            var funds = await _context.Funds.Where(e => e.PlannerId == plannerId).ToListAsync();

            return _mapper.Map<IList<FundDto>>(funds);
        }

        public async Task<int> Update(UpdateFundDto updateFundDto)
        {
            //validate

            var fund = _mapper.Map<Fund>(updateFundDto);

            _context.Update(fund);
            await _context.SaveChangesAsync();

            return fund.Id;
        }
    }
}
