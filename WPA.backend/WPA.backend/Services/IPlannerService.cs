using System.Threading.Tasks;
using WPA.backend.Entities;
using WPA.backend.Models;

namespace WPA.backend.Services
{
    public interface IPlannerService
    {
        Task<PlannerSummaryModel> GetPlanner(int plannerId);
        Task<Planner> CreatePlanner();
        Task<Planner> AddUserToPlanner(User user, int PlannerId);
        void UpdatePlanner(Planner planner);
    }
}
