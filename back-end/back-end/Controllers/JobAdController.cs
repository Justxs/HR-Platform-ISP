using back_end.Dtos;
using back_end.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace back_end.Controllers;

[Route("api/job-ads")]
[ApiController]
public class JobAdController : Controller
{
    private readonly IJobAdRepository _jobAdRepository;
    private readonly ILevelRepository _levelRepository;
    private readonly IRequirementRepository _requirementsRepository;
    private readonly DataContext _context;

    public JobAdController(DataContext context, IJobAdRepository jobAdRepository, IRequirementRepository requirementsRepository, ILevelRepository levelRepository)
    {
        _jobAdRepository = jobAdRepository;
        _requirementsRepository = requirementsRepository;
        _levelRepository = levelRepository;
        _context = context;
    }
    
    [HttpGet]
    public async Task<IEnumerable<JobAdDto>> GetMany()
    { 
        var jobAds = await _jobAdRepository.GetAllAsync();

        return jobAds.ToDto();
    }


    [HttpGet("{adId:int}")]
    public async Task<IActionResult> Get(int adId)
    {
        var jobAd = await _jobAdRepository.GetAsync(adId);

        if (jobAd is null) return NotFound();

        return Ok(jobAd.ToDto());
    }

    [HttpPost]
    public async Task<ActionResult<JobAdDto>> Create(CreateJobAdDto dto)
    {
        var jobAd = new JobAd()
        {
            Name = dto.Name,
            About = dto.About,
            UserId = dto.UserId,
            CreationDate = DateTime.UtcNow,
            Salary = dto.Salary,
            Aplications = new List<Aplication>(),
            Requirements = new List<Requirement>()
        };
        
        // await _jobAdRepository.AddAsync(jobAd);
        await _context.AddAsync(jobAd);

        foreach (var requirement in dto.Requirements)
        {
            var level = new Level()
            {
                TechLevel = requirement.Level.TechnologyLevel
            };
            await _context.AddAsync(level);
            // await _levelRepository.AddAsync(level);
            var req = new Requirement()
            {
                Technology = requirement.Technology,
                JobAd = jobAd,
                Level = level
            };
            await _context.AddAsync(req);
            // await _requirementsRepository.AddAsync(req);
        }

        await _context.SaveChangesAsync();

        return Ok(jobAd.ToDto());
    }

    [HttpPut("{adId:int}")]
    public async Task<ActionResult<JobAdDto>> Update(int adId, UpdateJobAdDto dto)
    {
        var jobAd = await _jobAdRepository.GetAsync(adId);

        if (jobAd is null) return NotFound();

        jobAd.Name = dto.Name;
        jobAd.About = dto.About;
        jobAd.Salary = dto.Salary;

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