using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.Entities;
using WPA.backend.Helpers;

namespace WPA.backend.Services
{
    public class PlannerService : IPlannerService
    {
        private readonly DataContext _context;

        public PlannerService(DataContext context)
        {
            _context = context;
        }

        public async Task<Planner> GetPlanner(int plannerId)
        {
            var planner = await _context.Planners.FindAsync(plannerId);
            return planner;
        }

        public async Task<Planner> AddUserToPlanner(User user, int plannerId)
        {
            var planner = await _context.Planners.FindAsync(plannerId);
            if(planner != null)
            {
                user.Planner = planner;
                _context.Update(user);
                await _context.SaveChangesAsync();
            }
            
            return planner;
        }

        public async Task<Planner> CreatePlanner()
        {
            var planner = new Planner();

            _context.Add(planner);
            await _context.SaveChangesAsync();
            return planner;
        }

        public void UpdatePlanner(Planner planner)
        {
            _context.Update(planner);
            _context.SaveChangesAsync();
        }
    }
}
