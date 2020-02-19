using System.Threading.Tasks;
using WPA.backend.Entities;

namespace WPA.backend.Services
{
    public interface IPlannerService
    {
        Task<Planner> GetPlanner(int plannerId);
        Task<Planner> CreatePlanner();
        Task<Planner> AddUserToPlanner(User user, int PlannerId);
        void UpdatePlanner(Planner planner);
    }
}
