using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using WPA.backend.DTOs.ServiceProviders;
using WPA.backend.Entities;
using WPA.backend.Services;

namespace WPA.backend.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ServiceProviderController : ControllerBase
    {
        private IRestService<ServiceProviderDto, CreateServiceProviderDto, UpdateServiceProviderDto> _providerService;
        private IUserService _userService;

        public ServiceProviderController(IRestService<ServiceProviderDto, CreateServiceProviderDto, UpdateServiceProviderDto> providerService, IUserService userService)
        {
            _providerService = providerService;
            _userService = userService;
        }

        [HttpGet("all")]
        [ProducesResponseType(typeof(IList<ServiceProvider>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> GetAll()
        {
            var providers = await _providerService.GetAll(0);
            return Ok(providers);
        }

        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Post([FromBody] CreateServiceProviderDto provider)
        {
            await _providerService.Create(provider);

            return Ok();
        }

        [HttpPut]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Put([FromBody] UpdateServiceProviderDto provider)
        {
            await _providerService.Update(provider);

            return Ok();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Delete(int id)
        {
            await _providerService.Delete(id);
            return Ok();

        }
    }
}
