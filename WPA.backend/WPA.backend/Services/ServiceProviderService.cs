using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.DTOs.ServiceProviders;
using WPA.backend.Entities;
using WPA.backend.Helpers;

namespace WPA.backend.Services
{
    public class ServiceProviderService : IRestService<ServiceProviderDto, CreateServiceProviderDto, UpdateServiceProviderDto>
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ServiceProviderService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<int> Create(CreateServiceProviderDto createServiceProviderDto)
        {
            var item = _mapper.Map<ServiceProvider>(createServiceProviderDto);

            _context.Add(item);
            await _context.SaveChangesAsync();
            return item.Id;
        }

        public async Task Delete(int id)
        {
            var item = await _context.ServiceProviders.FindAsync(id);
            if (item == null)
            {
                throw new ArgumentException($"Service provider with id: {id} doesn't exists.");
            }

            _context.Remove(item);
            await _context.SaveChangesAsync();
        }

        public async Task<IList<ServiceProviderDto>> GetAll(int plannerId)
        {
            var items = await _context.ServiceProviders.ToListAsync();

            return _mapper.Map<IList<ServiceProviderDto>>(items);
        }

        public async Task<int> Update(UpdateServiceProviderDto updateServiceProviderDto)
        {
            var item = _mapper.Map<ServiceProvider>(updateServiceProviderDto);

            _context.Update(item);
            await _context.SaveChangesAsync();
            return item.Id;
        }
    }
}
