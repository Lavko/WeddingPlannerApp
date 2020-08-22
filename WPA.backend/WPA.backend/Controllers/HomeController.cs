using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using WPA.backend.DTOs.Home;
using WPA.backend.Services;

namespace WPA.backend.Controllers
{
    [Authorize]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IHomeSummaryService _homeSummaryService;
        private readonly IUserService _userService;

        public HomeController(IHomeSummaryService homeSummaryService, IUserService userService)
        {
            _homeSummaryService = homeSummaryService;
            _userService = userService;
        }

        [HttpGet("summary")]
        [ProducesResponseType(typeof(HomeSummaryDto), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Forbidden)]
        public async Task<IActionResult> Get()
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));

            var summary = await _homeSummaryService.GetSummary(user);

            return Ok(summary);
        }

        [HttpPut("summary")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Forbidden)]
        public async Task<IActionResult> Put([FromBody] UpdateWeddingDetailsDto updateWeddingDetailsDto)
        {
            await _homeSummaryService.UpdateWeddingDetails(updateWeddingDetailsDto);

            return Ok();
        }
    }
}
