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
            try
            {
                _repository.Register(dto);
            }
            catch(Exception ex)
            {
                return Conflict(new { message = ex.Message });
            }
            return Ok(new { message = "Registration successful" });
        }
        [Authorize(Roles = "Admin")]
        [HttpPost("register/recruiter")]
        public IActionResult RegisterRecruiter(RegisterDto dto)
        {
            try
            {
                _repository.RegisterRecruiter(dto);
            }
            catch (Exception ex)
            {
                return Conflict(new { message = ex.Message });
            }
            return Ok(new { message = "Registration successful" });
        }
        [AllowAnonymous]
        [HttpPost("[action]")]
        public IActionResult Login(LoginDto model)
        {
            try
            {
                var response = _repository.Login(model);
                var cookieOptions = new CookieOptions
                {
                    HttpOnly = true,
                    Expires = DateTime.Now.AddDays(1)
                };
                Response.Cookies.Append("jwt", response.Token, cookieOptions);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return Conflict(new { message = ex.Message });
            }
        }
        [HttpGet("[action]")]
        public IActionResult GetMe()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = _repository.GetById(Convert.ToInt16(userId));
            return Ok(user);
        }
        [Authorize (Roles="Admin")]
        [HttpGet("[action]")]
        public IActionResult GetAll()
        {
            var users = _repository.GetAll();
            return Ok(users);
        }

        [HttpPost("[action]")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");
            return Ok(new {message = "Success"});
        }
    }
}
