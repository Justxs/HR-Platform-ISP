using back_end.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace back_end.Controllers
{
    [Authorize]
    [Route("api/candidate")]
    [ApiController]
    public class CandidateController : Controller
    {
        private readonly IUserRepository _repository;
        public CandidateController(IUserRepository repository)
        {
            _repository = repository;
        }
        [Authorize(Roles = "Recruiter")]
        [HttpGet("[action]")]
        public IActionResult GetAll()
        {
            var users = _repository.GetAllCandidates();
            return Ok(users);
        }
        [AllowAnonymous]
        [HttpPost("[action]/{userId}/{comment}")]
        public IActionResult WriteComment(string comment, int userId)
        {
            var user = _repository.GetById(Convert.ToInt16(userId));
            _repository.WriteComment(comment, user);
            return Ok("Comment Written");
        }
        [AllowAnonymous]
        [HttpDelete("[action]/{userId}")]
        public IActionResult DeleteComment(int userId)
        {
            try
            {
                _repository.Delete(userId);
                return Ok("Comment Deleted");
            }
            catch (Exception e)
            {
                return BadRequest(e);

            }
        }
        [Authorize(Roles = "Recruiter")]
        [HttpGet("[action]")]
        public IActionResult GetComment(int id)
        {
            Comment com = _repository.GetByIdComment(id);
            return Ok(com);
        }


    }
}
