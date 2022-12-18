using back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace back_end.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<AditionalInfo> AditionalInfos { get; set; }
        public DbSet<Aplication> Aplication { get; set; } 
        public DbSet<Avatar> Avatars { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Cv> Cvs { get; set; }
        public DbSet<JobAd> JobAds { get; set; }
        public DbSet<JobOffer> JobOffers { get; set; }
        public DbSet<Level> Levels { get; set; }
        public DbSet<Requirement> Requirements { get; set; }
    }
}
