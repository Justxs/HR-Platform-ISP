namespace back_end.Models
{
    public class Cv
    {
        public int Id { get; set; }
        public DateTime? DateOfCreation { get; set; }
        public string? About { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}
