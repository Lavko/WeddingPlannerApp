
using System.Threading.Tasks;
using WPA.backend.DTOs.Home;
using WPA.backend.Entities;

namespace WPA.backend.Services
{
    public interface IHomeSummaryService
    {
        Task<HomeSummaryDto> GetSummary(User user);
        Task UpdateWeddingDetails(UpdateWeddingDetailsDto updateWeddingDetailsDto);
    }
}
