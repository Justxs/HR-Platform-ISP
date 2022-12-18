using System.ComponentModel.DataAnnotations;

namespace back_end.Dtos
{
    public class ChangePasswordDto
    {
        [Required]
        public string? OldPassword { set; get; }
        [Required]
        public string? NewPassword { set; get; }

    }
}
