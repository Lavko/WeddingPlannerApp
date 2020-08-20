using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WPA.backend.DTOs.Events;
using WPA.backend.DTOs.Home;
using WPA.backend.Entities;
using WPA.backend.Helpers;

namespace WPA.backend.Services
{
    public class HomeSummaryService : IHomeSummaryService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public HomeSummaryService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<HomeSummaryDto> GetSummary(int plannerId)
        {
            var planner = await _context.Planners.FindAsync(plannerId);
            var guestsSummary = await GetGuestsSummary(plannerId);
            var budgetSummary = await GetBudgetSummary(plannerId);
            var calendarSummary = await GetCalendarSummary(plannerId);

            return new HomeSummaryDto
            {
                CeremonyDate = planner.CeremonyDate,
                CeremonyPlace = planner.CeremonyPlace,
                WeddingDate = planner.WeddingDate,
                WeddingPlace = planner.WeddingPlace,
                GuestSummary = guestsSummary,
                BudgetSummary = budgetSummary,
                CalendarSummary = calendarSummary
            };
        }

        private async Task<GuestSummaryDto> GetGuestsSummary(int plannerId)
        {
            var guests = await _context.Guests.Where(g => g.PlannerId == plannerId).ToListAsync();

            return new GuestSummaryDto
            {
                GuestsCount = guests.Count,
                InvitedGuestsCount = guests.Where(g => g.Status == GuestStatus.Invited).Count(),
                ConfirmedGuestsCount = guests.Where(g => g.Status == GuestStatus.Confirmed).Count()
            };
        }

        private async Task<BudgetSummaryDto> GetBudgetSummary(int plannerId)
        {
            var incomes = await _context.Incomes.Where(i => i.PlannerId == plannerId).ToListAsync();
            var expenses = await _context.Expenses.Where(e => e.PlannerId == plannerId).ToListAsync();

            return new BudgetSummaryDto
            {
                ExpensesSum = expenses.Sum(e => e.Amount),
                IncomesSum = incomes.Sum(e => e.Amount),
                PaidExpensesSum = expenses.Where(e => e.ExpenseStatus == ExpenseStatus.Paid || e.ExpenseStatus == ExpenseStatus.Prepaid).Sum(e => e.Amount)
            };
        }

        private async Task<CalendarSummaryDto> GetCalendarSummary(int plannerId)
        {
            var events = await _context.Events.Where(e => e.PlannerId == plannerId).ToListAsync();

            return new CalendarSummaryDto
            {
                EventsCount = events.Count,
                EventsInFutureCount = events.Where(e => e.Date > DateTime.Now).Count(),
                EventsForNextDays = _mapper.Map<IList<EventDto>>(events.Where(e => e.Date > DateTime.Now && e.Date < DateTime.Now.AddDays(7)).ToList())
            };
        }
    }
}
