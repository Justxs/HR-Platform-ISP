namespace back_end.Models
{
    public class Avatar
    {
        public int Id { get; set; }
        public double? Size { get; set; }
        public string? Url { get; set; }
        public string? FileName { get; set; }
        public string? Alt { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}
