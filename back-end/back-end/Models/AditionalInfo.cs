namespace back_end.Models
{
    public class AditionalInfo
    {
        public int Id { get; set; }
        public string? Achievement { get; set; }
        public DateTime? Date { get; set; }
        public string? About { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}
