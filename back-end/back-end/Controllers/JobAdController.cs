using back_end.Dtos;
using back_end.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers;

[Route("api/[controller]")]
[ApiController]
public class JobAdController : Controller
{
    private readonly IJobAdRepository _jobAdRepository;

    public JobAdController(IJobAdRepository jobAdRepository)
    {
        _jobAdRepository = jobAdRepository;
    }
    
    [HttpGet]
    public async Task<IEnumerable<JobAd>> GetMany()
    {
        return await _jobAdRepository.GetAllAsync();
    }


    [HttpGet("{adId:int}")]
    public async Task<IActionResult> Get(int adId)
    {
        var jobAd = await _jobAdRepository.GetAsync(adId);

        if (jobAd is null) return NotFound();

        return Ok(jobAd);
    }

    [HttpPost]
    public async Task<ActionResult<JobAd>> Create(CreateJobAdDto dto)
    {
        var jobAd = new JobAd()
        {
            Name = dto.Name,
            About = dto.About,
            UserId = dto.UserId,
            Aplications = new List<Aplication>(),
        };

        await _jobAdRepository.AddAsync(jobAd);

        return Ok(jobAd.ToDto());
    }

    [HttpPut("{adId:int}")]
    public async Task<ActionResult<JobAd>> Update(int adId, UpdateJobAdDto dto)
    {
        var jobAd = await _jobAdRepository.GetAsync(adId);

        if (jobAd is null) return NotFound();

        jobAd.Name = dto.Name;
        jobAd.About = dto.About;

        await _jobAdRepository.SaveChangesAsync();

        return Ok(jobAd.ToDto());
    }

    [HttpDelete("{adId:int}")]
    public async Task<IActionResult> Remove(int adId)
    {
        var jobAd = await _jobAdRepository.GetAsync(adId);
        
        if(jobAd is null) return NotFound();

        await _jobAdRepository.DeleteAsync(jobAd);

        return NoContent();
    }
}