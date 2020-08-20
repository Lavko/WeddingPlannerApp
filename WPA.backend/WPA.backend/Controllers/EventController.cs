using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using WPA.backend.DTOs.Events;
using WPA.backend.Services;

namespace WPA.backend.Controllers
{
    [Authorize]
    [ApiController]
    public class EventController : ControllerBase
    {
        private IRestService<EventDto, CreateEventDto, UpdateEventDto> _eventService;
        private IUserService _userService;

        public EventController(IRestService<EventDto, CreateEventDto, UpdateEventDto> eventService, IUserService userService)
        {
            _eventService = eventService;
            _userService = userService;
        }

        [HttpGet("events")]
        [ProducesResponseType(typeof(IList<EventDto>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> GetAll(int plannerId)
        {
            var events = await _eventService.GetAll(plannerId);

            return Ok(events);
        }

        [HttpPost("events")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Post([FromBody] CreateEventDto createEventDto)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));

            if (createEventDto.PlannerId != user.PlannerId)
            {
                return BadRequest();
            }

            await _eventService.Create(createEventDto);

            return Ok();
        }

        [HttpPut("events")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Put([FromBody] UpdateEventDto updateEventDto)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));

            if (updateEventDto.PlannerId != user.PlannerId)
            {
                return BadRequest();
            }

            await _eventService.Update(updateEventDto);

            return Ok();
        }

        [HttpDelete("events/{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Delete(int id)
        {
            await _eventService.Delete(id);
            return Ok();

        }
    }
}
