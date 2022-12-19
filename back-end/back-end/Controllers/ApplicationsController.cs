using back_end.Dtos;
using back_end.Extensions;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers;

[Route("api/job-ads/{adId:int}/applications")]
[ApiController]
public class ApplicationsController : Controller
{
    private readonly IApplicationRepository _applicationRepository;
    private readonly IEmailRepository _emailRepository;

    public ApplicationsController(IApplicationRepository applicationRepository, IEmailRepository emailRepository) 
    {
        _applicationRepository = applicationRepository;
        _emailRepository = emailRepository;
    }


    [HttpGet]
    public async Task<IEnumerable<ApplicationDto>> GetMany(int adId)
    {
        var applications =  await _applicationRepository.GetAllAsync(adId);

        return applications.ToDto();
    }


    [HttpGet("{applicationId:int}")]
    public async Task<IActionResult> Get(int adId, int applicationId)
    {
        var application = await _applicationRepository.GetAsync(applicationId);

        if (application is null) return NotFound();

        return Ok(application.ToDto());
    }

    [HttpPost]
    public async Task<ActionResult<ApplicationDto>> Create(int adId, CreateApplicationDto dto)
    {
        if (await _applicationRepository.ExistsAsync(adId, dto.UserId))
        {
            return BadRequest();
        }
        
        var application = new Aplication()
        {
            State = AplicationState.JobOfferSent,
            Date = DateTime.UtcNow,
            JobAdId = adId,
            UserId = dto.UserId,
        };

        await _applicationRepository.AddAsync(application);

        return application.ToDto();
    }

    [HttpPut]
    public async Task<ActionResult<ApplicationDto>> Update(int adId, UpdateApplicationDto dto)
    {
        var application = await _applicationRepository.GetAsync(adId);

        if (application is null) return NotFound();
        
        application.State = dto.State;

        var emailDto = new EmailDto()
        {
            To = application.User.Email,
            Subject = "Application update",
            Body = $"Application state changed to {Enum.GetName(application.State)}"
        };
        
        _emailRepository.SendEmail(emailDto);

        return Ok(application.ToDto());
    }

    [HttpDelete]
    public async Task<IActionResult> Remove(int adId)
    {
        var application = await _applicationRepository.GetAsync(adId);

        if (application is null) return NotFound();

        await _applicationRepository.DeleteAsync(application);

        return NoContent();
    }
}