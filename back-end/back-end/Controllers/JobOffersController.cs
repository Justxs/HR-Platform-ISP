using back_end.Dtos;
using back_end.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers;

[Route("api/[controller]")]
[ApiController]
public class JobOffersController : Controller
{
    private readonly IJobOfferRepository _jobOfferRepository;

    public JobOffersController(IJobOfferRepository jobOfferRepository)
    {
        _jobOfferRepository = jobOfferRepository;
    }


    [HttpGet]
    public async Task<IEnumerable<JobOfferDto>> GetMany()
    {
        var offers =  await _jobOfferRepository.GetAllAsync();

        return offers.ToDto();
    }


    [HttpGet("{offerId:int}")]
    public async Task<IActionResult> Get(int offerId)
    {
        var jobOffer = await _jobOfferRepository.GetAsync(offerId);

        if (jobOffer is null) return NotFound();

        return Ok(jobOffer.ToDto());
    }

    [HttpPost]
    public async Task<ActionResult<JobOfferDto>> Create(CreateJobOfferDto dto)
    {
        var jobOffer = new JobOffer()
        {
            Name = dto.Name,
            Date = DateTime.UtcNow,
            Message = dto.Message,
            UserId = dto.UserId,
            JobAdId = dto.JobAdId,
        };

        await _jobOfferRepository.AddAsync(jobOffer);

        return jobOffer.ToDto();
    }

    [HttpPut("{offerId:int}")]
    public async Task<ActionResult<JobOfferDto>> Update(int offerId, UpdateJobOfferDto dto)
    {
        var jobOffer = await _jobOfferRepository.GetAsync(offerId);

        if (jobOffer is null) return NotFound();
        
        jobOffer.Name = dto.Name;
        jobOffer.Message = dto.Message;
        
        return Ok(jobOffer.ToDto());
    }

    [HttpDelete("{offerId:int}")]
    public async Task<IActionResult> Remove(int offerId)
    {
        var jobOffer = await _jobOfferRepository.GetAsync(offerId);

        if (jobOffer is null) return NotFound();

        await _jobOfferRepository.DeleteAsync(jobOffer);

        return NoContent();
    }
}