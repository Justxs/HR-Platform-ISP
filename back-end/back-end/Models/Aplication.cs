namespace back_end.Models
{
    public class Aplication
    {
        public int Id { get; set; }
        public AplicationState State { get; set; }
        public DateTime? Date { get; set; }
        public JobAd JobAd { get; set; }
        public int JobAdId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
    public enum AplicationState
    {
        Applied,
        JobOfferSent,
        Rejected
    }
}
