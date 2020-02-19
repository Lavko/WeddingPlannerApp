using Microsoft.AspNetCore.Authorization;
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
    public class GuestController : ControllerBase
    {
        private IGuestService _guestService;
        private IUserService _userService;

        public GuestController(IGuestService guestService, IUserService userService)
        {
            _guestService = guestService;
            _userService = userService;
        }

        [HttpGet("all")]
        [ProducesResponseType(typeof(IList<Guest>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> GetAll()
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.Name)));
            var guests = await _guestService.GetAll(user.PlannerId);
            return Ok(guests);
        }

        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Post([FromBody] Guest guest)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.Name)));
            if (guest.PlannerId != user.PlannerId)
            {
                return BadRequest();
            }
            await _guestService.Create(guest);
            return Ok();
        }

        [HttpDelete]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Delete([FromBody] Guest guest)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.Name)));
            if (guest.PlannerId != user.PlannerId)
            {
                return BadRequest();
            }
            _guestService.Delete(guest);
            return Ok();
        }
    }
}
