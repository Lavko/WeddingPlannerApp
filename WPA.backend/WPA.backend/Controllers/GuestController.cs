using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using WPA.backend.DTOs.Guests;
using WPA.backend.Entities;
using WPA.backend.Services;

namespace WPA.backend.Controllers
{
    [Authorize]
    [ApiController]
    public class GuestController : ControllerBase
    {
        private IRestService<GuestDto, CreateGuestDto, UpdateGuestDto> _guestService;
        private IUserService _userService;

        public GuestController(IRestService<GuestDto, CreateGuestDto, UpdateGuestDto> guestService, IUserService userService)
        {
            _guestService = guestService;
            _userService = userService;
        }

        [HttpGet("planner/{plannerId}/guests")]
        [ProducesResponseType(typeof(IList<GuestDto>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> GetAll(int plannerId)
        {
            var guests = await _guestService.GetAll(plannerId);

            return Ok(guests);
        }

        [HttpPost("planner/{plannerId}/guests")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Post([FromBody] CreateGuestDto createGuestDto)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));

            await _guestService.Create(createGuestDto);

            return Ok();
        }

        [HttpPut("planner/{plannerId}/guests")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Put([FromBody] UpdateGuestDto updateGuestDto)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));
                await _guestService.Update(updateGuestDto);
         
            return Ok();
        }

        [HttpDelete("planner/{plannerId}/guests/{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Delete(int id)
        {
            await _guestService.Delete(id);
            return Ok();
            
        }
    }
}
