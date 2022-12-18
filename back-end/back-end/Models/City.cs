namespace back_end.Models
{
    public class City
    {
        public int id { get; set; }
        public string? Name { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}
