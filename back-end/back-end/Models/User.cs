using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace back_end.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Username { get; set; }
        [JsonIgnore]
        public string? Password { get; set; }
        [DataType(DataType.EmailAddress)]
        public string? Email { get; set; }
        public RoleStatus Role { get; set; }
        public DateTime? BirthdayDate { get; set; }
        public string? LinkedInUrl { get; set; }
        public string? About { get; set; }
        public DateTime? CreationDate { get; set; }
        public string? PhoneNumber { get; set; }
        public List<Comment> Comments { get; set; }
        public List<AditionalInfo> AditionalInfos { get; set; }
        public List<JobOffer> JobOffers { get; set; }
        public List<JobAd> JobAds { get; set; }
        public Avatar Avatar { get; set; }
        public Cv Cv { get; set; }
        public City City { get; set; }
        public List<Aplication> Aplications { get; set; }

    }
    public enum RoleStatus
    {
        Candidate,
        Recruiter,
        Admin
    }
}
