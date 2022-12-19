using back_end.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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
        [Authorize(Roles = "Recruiter")]
        [HttpPost("[action]")]
        public IActionResult WriteComment(CommentDto commentDto)
        {
            _repository.WriteComment(commentDto);
            return Ok("Comment Written");
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
