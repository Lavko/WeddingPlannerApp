using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.DTOs;
using WPA.backend.DTOs.Guests;
using WPA.backend.Entities;
using WPA.backend.Helpers;

namespace WPA.backend.Services
{
    public class GuestService : IRestService<GuestDto, CreateGuestDto, UpdateGuestDto>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public GuestService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IList<GuestDto>> GetAll(int plannerId)
        {
            var guests = await _context.Guests.Where(g => g.PlannerId == plannerId).ToListAsync();

            return _mapper.Map<IList<GuestDto>>(guests);
        }

        public async Task<int> Create(CreateGuestDto createGuestDto)
        {
            //validation
            var guest = _mapper.Map<Guest>(createGuestDto);

            _context.Add(guest);
            await _context.SaveChangesAsync();

            return  guest.Id;
        }

        public async Task<int> Update(UpdateGuestDto updateGuestDto)
        {
            //validation
            var guest = _mapper.Map<Guest>(updateGuestDto);

            _context.Update(guest);
            await _context.SaveChangesAsync();

            return guest.Id;
        }

        public async Task Delete(int id)
        {
            var guest = await _context.Guests.FindAsync(id);
            if(guest == null)
            {
                throw new ArgumentException($"Guest with id: {id} doesn't exists.");
            }
            _context.Remove(guest);
            await _context.SaveChangesAsync();
        }
    }
}
