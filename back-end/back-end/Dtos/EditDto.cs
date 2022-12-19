using System.ComponentModel.DataAnnotations;

namespace back_end.Dtos
{
    public class EditDto
    {
        public string? FirstName { set; get; }
        public string? LastName { set; get; }
        public string? Username { set; get; }
        public DateTime? BirthdayDate { set; get; }
        public string? LinkedInURL { set; get; }
        public string? About { set; get; }
        public string? PhoneNumber { set; get; }

    }
}
