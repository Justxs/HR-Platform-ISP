using back_end.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using back_end.Helpers;
using System.Security.Claims;

namespace back_end.Controllers
{
    [Authorize]
    [Route("api")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserRepository _repository;
        public UserController(IUserRepository repository)
        {
            _repository = repository;
        }
        [AllowAnonymous]
        [HttpPost("/account/edit")]
        public IActionResult Edit(EditDto dto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = _repository.GetById(Convert.ToInt16(userId));
            _repository.Edit(dto, user);

            return Ok(new { message = "User update successful" });
        }

    }
}
