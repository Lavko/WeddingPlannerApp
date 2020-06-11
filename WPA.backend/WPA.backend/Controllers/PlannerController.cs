using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using WPA.backend.Entities;
using WPA.backend.Services;

namespace WPA.backend.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class PlannerController : ControllerBase
    {
        private IPlannerService _plannerService;
        private IUserService _userService;

        public PlannerController(IPlannerService plannerService, IUserService userService)
        {
            _plannerService = plannerService;
            _userService = userService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(Planner), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Get()
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));
            var planner = await _plannerService.GetPlanner(user.PlannerId);
            return Ok(planner);
        }
    }
}
