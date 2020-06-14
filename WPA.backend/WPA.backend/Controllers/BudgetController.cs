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
        private IRestService<IncomeDto, CreateIncomeDto, UpdateIncomeDto> _incomeService;
        private IUserService _userService;

        public BudgetController(IRestService<ExpenseDto, CreateExpenseDto, UpdateExpenseDto> expenseService, IRestService<IncomeDto, CreateIncomeDto, UpdateIncomeDto> incomeService, IUserService userService)
        {
            _expenseService = expenseService;
            _incomeService = incomeService;
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
                Incomes = await _incomeService.GetAll(user.PlannerId),
                Expenses = await _expenseService.GetAll(user.PlannerId)
            };
            return Ok(budget);
        }

        [HttpPost("income")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> CreateIncome([FromBody] CreateIncomeDto createIncomeDto)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));
            if (createIncomeDto.PlannerId != user.PlannerId)
            {
                return BadRequest();
            }

            await _incomeService.Create(createIncomeDto);

            return Ok();
        }

        [HttpPut("income")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> UpdateIncome([FromBody] UpdateIncomeDto updateIncomeDto)
        {
            var user = await _userService.GetById(int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)));
            if (updateIncomeDto.PlannerId != user.PlannerId)
            {
                return BadRequest();
            }

            await _incomeService.Update(updateIncomeDto);

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


        [HttpDelete("income/{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> DeleteIncome(int id)
        {
            await _incomeService.Delete(id);
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
