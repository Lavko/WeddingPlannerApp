using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using WPA.backend.Entities;
using WPA.backend.Models;
using WPA.backend.Services;

namespace WPA.backend.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class BudgetController : ControllerBase
    {
        private IRestService<Expense> _expenseService;
        private IRestService<Fund> _fundService;
        private IUserService _userService;

        public BudgetController(IRestService<Expense> expenseService, IRestService<Fund> fundService, IUserService userService)
        {
            _expenseService = expenseService;
            _fundService = fundService;
            _userService = userService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IList<BudgetModel>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> GetAll()
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.Name)));
            var budget = new BudgetModel
            {
                Funds = await _fundService.GetAll(user.PlannerId),
                Expenses = await _expenseService.GetAll(user.PlannerId)
            };
            return Ok(budget);
        }

        [HttpPost("fund")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Post([FromBody] Fund fund)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.Name)));
            if (fund.PlannerId != user.PlannerId)
            {
                return BadRequest();
            }
            if (fund.Id == 0)
            {
                await _fundService.Create(fund);
            }
            else
            {
                await _fundService.Update(fund);
            }
            return Ok();
        }

        [HttpPost("expense")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Post([FromBody] Expense expense)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.Name)));
            if (expense.PlannerId != user.PlannerId)
            {
                return BadRequest();
            }
            if (expense.Id == 0)
            {
                await _expenseService.Create(expense);
            }
            else
            {
                await _expenseService.Update(expense);
            }
            return Ok();
        }

        [HttpDelete("fund")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Delete([FromBody] Fund fund)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.Name)));
            if (fund.PlannerId != user.PlannerId)
            {
                return BadRequest();
            }
            _fundService.Delete(fund);
            return Ok();
        }

        [HttpDelete("expense")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Delete([FromBody] Expense expense)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.Name)));
            if (expense.PlannerId != user.PlannerId)
            {
                return BadRequest();
            }
            _expenseService.Delete(expense);
            return Ok();
        }
    }
}
