namespace back_end.Models
{
    public class JobOffer
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public DateTime? Date { get; set; }
        public string? Message { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public JobAd JobAd { get; set; }
        public int JobAdId { get; set; }
    }
}
