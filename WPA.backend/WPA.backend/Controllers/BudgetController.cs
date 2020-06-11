using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using WPA.backend.DTOs.Expenses;
using WPA.backend.DTOs.Funds;
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
        private IRestService<ExpenseDto, CreateExpenseDto, UpdateExpenseDto> _expenseService;
        private IRestService<FundDto, CreateFundDto, UpdateFundDto> _fundService;
        private IUserService _userService;

        public BudgetController(IRestService<ExpenseDto, CreateExpenseDto, UpdateExpenseDto> expenseService, IRestService<FundDto, CreateFundDto, UpdateFundDto> fundService, IUserService userService)
        {
            _expenseService = expenseService;
            _fundService = fundService;
            _userService = userService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(BudgetModel), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> GetSummary()
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));
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
        public async Task<IActionResult> CreateFund([FromBody] CreateFundDto createFundDto)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));
            if (createFundDto.PlannerId != user.PlannerId)
            {
                return BadRequest();
            }

            await _fundService.Create(createFundDto);

            return Ok();
        }

        [HttpPut("fund")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> UpdateFund([FromBody] UpdateFundDto updateFundDto)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));
            if (updateFundDto.PlannerId != user.PlannerId)
            {
                return BadRequest();
            }

            await _fundService.Update(updateFundDto);

            return Ok();
        }

        [HttpPost("expense")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> CreateExpense([FromBody] CreateExpenseDto createExpenseDto)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));
            if (createExpenseDto.PlannerId != user.PlannerId)
            {
                return BadRequest();
            }

            await _expenseService.Create(createExpenseDto);

            return Ok();
        }
        [HttpPut("expense")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> UpdateExpense([FromBody] UpdateExpenseDto updateExpenseDto)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));
            if (updateExpenseDto.PlannerId != user.PlannerId)
            {
                return BadRequest();
            }

            await _expenseService.Update(updateExpenseDto);

            return Ok();
        }


        [HttpDelete("fund/{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> DeleteFund(int id)
        {
            await _fundService.Delete(id);
            return Ok();
        }

        [HttpDelete("expense/{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> DeleteExpense(int id)
        {
            await _expenseService.Delete(id);
            return Ok();
        }
    }
}
