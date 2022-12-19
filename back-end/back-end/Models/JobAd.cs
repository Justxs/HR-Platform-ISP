namespace back_end.Models
{
    public class JobAd
    {
        public int Id { get; set; }
        public DateTime? CreationDate { get; set; }
        public string? Name { get; set; }
        public string? About { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public List<Aplication> Aplications { get; set; }
        public int AplicationId { get; set; }
        public List<Requirement> Requirements { get; set; }
        public JobOffer JobOffer { get; set; }
        public int Salary { get; set; }

    }
}
