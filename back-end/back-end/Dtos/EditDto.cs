using System.ComponentModel.DataAnnotations;

namespace back_end.Dtos
{
    public class EditDto
    {
        public string? FirstName { set; get; }
        public string? LastName { set; get; }
        public string? Username { set; get; }

    }
}
