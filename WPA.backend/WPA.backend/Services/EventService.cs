using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.DTOs.Events;
using WPA.backend.Entities;
using WPA.backend.Helpers;

namespace WPA.backend.Services
{
    public class EventService : IRestService<EventDto, CreateEventDto, UpdateEventDto>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public EventService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<int> Create(CreateEventDto item)
        {
            //validation
            var eventObj = _mapper.Map<Event>(item);

            _context.Add(eventObj);
            await _context.SaveChangesAsync();

            return eventObj.Id;
        }

        public async Task Delete(int id)
        {
            var eventObj = await _context.Events.FindAsync(id);
            if (eventObj == null)
            {
                throw new ArgumentException($"Expense with id: {id} doesn't exists.");
            }
            _context.Remove(eventObj);
            await _context.SaveChangesAsync();
        }

        public async Task<IList<EventDto>> GetAll(int plannerId)
        {
            var events = await _context.Events.ToListAsync();
            return _mapper.Map<IList<EventDto>>(events);
        }

        public async Task<int> Update(UpdateEventDto item)
        {
            //validation
            var eventObj = _mapper.Map<Event>(item);

            _context.Update(eventObj);
            await _context.SaveChangesAsync();

            return eventObj.Id;
        }
    }
}
