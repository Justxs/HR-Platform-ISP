using back_end.Dtos;
using back_end.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CvController : Controller
{
    private readonly ICvRepository _cvRepository;

    public CvController(ICvRepository cvRepository)
    {
        _cvRepository = cvRepository;
    }
    
    [HttpGet]
    public async Task<IEnumerable<CvDto>> GetMany()
    {
        var cvs =  await _cvRepository.GetAllAsync();

        return cvs.ToDto();
    }


    [HttpGet("{cvId:int}")]
    public async Task<IActionResult> Get(int cvId)
    {
        var cv = await _cvRepository.GetAsync(cvId);

        if (cv?.About is null) return NotFound();

        var bytes = await System.IO.File.ReadAllBytesAsync(cv.About);

        return Ok(cv.ToDto(Convert.ToBase64String(bytes)));
    }

    [HttpPost]
    public async Task<ActionResult<CvDto>> Create(CreateCvDto dto)
    {
        var directory = $"{AppDomain.CurrentDomain.BaseDirectory}/cv";
        var path = $"{directory}/{dto.UserId}.pdf";
        if (!System.IO.File.Exists(directory))
        {
            Directory.CreateDirectory(directory);
        }
        try
        {
            var bytes = Convert.FromBase64String(dto.FileBase64);
            await System.IO.File.WriteAllBytesAsync(path, bytes);
        }
        catch (FormatException)
        {
            return BadRequest();
        }

        var cv = new Cv()
        {
            DateOfCreation = DateTime.UtcNow,
            UserId = dto.UserId,
            About = path
        };

        await _cvRepository.AddAsync(cv);

        return cv.ToDto();
    }

    [HttpPut("{cvId:int}")]
    public async Task<ActionResult<ApplicationDto>> Update(int cvId, UpdateCvDto dto)
    {
        var cv = await _cvRepository.GetAsync(cvId);

        if (cv is null) return NotFound();

        try
        {
            var path = $"{AppDomain.CurrentDomain.BaseDirectory}/cv/{dto.UserId}.pdf";
            var bytes = Convert.FromBase64String(dto.FileBase64);
            await System.IO.File.WriteAllBytesAsync(path, bytes);
        }
        catch (FormatException)
        {
            return BadRequest();
        }


        return Ok(cv.ToDto());
    }

    [HttpDelete("{cvId:int}")]
    public async Task<IActionResult> Remove(int cvId)
    {
        var cv = await _cvRepository.GetAsync(cvId);

        if (cv?.About is null) return NotFound();
        
        System.IO.File.Delete(cv.About);

        await _cvRepository.DeleteAsync(cv);

        return NoContent();
    }
}