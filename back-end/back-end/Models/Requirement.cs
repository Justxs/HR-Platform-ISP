namespace back_end.Models
{
    public class Requirement
    {
        public int Id { get; set; }
        public string? Technology { get; set; }
        public JobAd JobAd { get; set; }
        public Level Level { get; set; }
        public int LevelId { get; set; }
    }
}
