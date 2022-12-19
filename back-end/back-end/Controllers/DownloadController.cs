using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using Spire.Doc;


namespace back_end.Controllers
{
    [ApiController]
    public class DownloadController : ControllerBase
    {
        private readonly IUserRepository _repository;
        public DownloadController(IUserRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        [Route("/[action]/{UserId}")]
        public IActionResult DownloadOffer(int UserId)
        {
            User user = _repository.GetById(UserId);
            DateTime date = DateTime.Today;
            string datestr = date.ToString("dd MMMM yyyy", new CultureInfo("en-US"));
            Spire.Doc.Document document = new();
            var path = Path.Combine(Directory.GetCurrentDirectory(), "Templates", "templates.docx");
            document.LoadFromFile(path);
            document.Replace("{firstName}", user?.FirstName?.ToUpper(), false, true);
            document.Replace("{firstNamee}", user?.FirstName, false, true);
            document.Replace("{lastName}", user?.LastName?.ToUpper(), false, true);
            document.Replace("{lastNamee}", user?.LastName, false, true);
            document.Replace("{date}", datestr, false, true);
            document.SaveToFile($"Job_offer_Xplicity_{user?.FirstName}_{user?.LastName}.docx", FileFormat.Docx);
            path = Path.Combine(Directory.GetCurrentDirectory(), "", $"Job_offer_Xplicity_{user?.FirstName}_{user?.LastName}.docx");

            return File(
                fileContents: System.IO.File.ReadAllBytes(path),
                contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                fileDownloadName: $"Job_offer_Xplicity_{user?.FirstName}_{user?.LastName}.docx");
        }
    }
}
