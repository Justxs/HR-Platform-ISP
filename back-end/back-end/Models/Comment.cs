namespace back_end.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string? Header { get; set; }
        public DateTime? Date { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}
