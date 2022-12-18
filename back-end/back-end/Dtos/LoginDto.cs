using System.ComponentModel.DataAnnotations;

namespace back_end.Dtos
{
    public class LoginDto
    {
        [Required]
        public string? Email { set; get; }
        [Required]
        public string? Password { set; get; }
    }
}
