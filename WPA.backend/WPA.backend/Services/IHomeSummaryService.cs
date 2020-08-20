
using System.Threading.Tasks;
using WPA.backend.DTOs.Home;

namespace WPA.backend.Services
{
    public interface IHomeSummaryService
    {
        Task<HomeSummaryDto> GetSummary(int plannerId);
    }
}
