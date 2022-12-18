using back_end.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using back_end.Helpers;

namespace back_end.Controllers
{
    [Authorize]
    [Route("api")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUserRepository _repository;
        public AuthController(IUserRepository repository)
        {
            _repository = repository;
        }
        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register(RegisterDto dto)
        {
            _repository.Register(dto);
            return Ok(new { message = "Registration successful" });
        }
        [AllowAnonymous]
        [HttpPost("[action]")]
        public IActionResult Login(LoginDto model)
        {
            var response = _repository.Login(model);
            return Ok(response);
        }

        [HttpGet("[action]")]
        public IActionResult GetMe()
        {
            var user = User.Identity.Name;

            return Ok(user);
        }
        [HttpGet("[action]")]
        public IActionResult GetAll()
        {
            var users = _repository.GetAll();
            return Ok(users);
        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");
            return Ok(new {message = "Success"});
        }
    }
}
