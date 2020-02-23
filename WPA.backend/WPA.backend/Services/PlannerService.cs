using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.Entities;
using WPA.backend.Helpers;
using WPA.backend.Models;

namespace WPA.backend.Services
{
    public class PlannerService : IPlannerService
    {
        private readonly DataContext _context;

        public PlannerService(DataContext context)
        {
            _context = context;
        }

        public async Task<PlannerSummaryModel> GetPlanner(int plannerId)
        {
            var planner = await _context.Planners.Where(p => p.Id == plannerId).Select(p => 
            new PlannerSummaryModel{
                CeremonyDate = p.CeremonyDate,
                CeremonyPlace = p.CeremonyPlace,
                WeddingDate = p.WeddingDate,
                WeddingPlace = p.WeddingPlace,
                GuestCount = p.Guests.Count(),
                ConfirmedGuestCount = p.Guests.Where(g => g.Status == GuestStatus.Confirmed).Count(),
                Budget = p.Funds.Sum(f => f.Amount),
                Expenses = p.Expenses.Sum(e => e.Amount)
            }).FirstOrDefaultAsync();
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
