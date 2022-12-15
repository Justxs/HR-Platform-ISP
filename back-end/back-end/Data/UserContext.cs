using Microsoft.EntityFrameworkCore;

namespace back_end.Data
{
    public class UserContext : DbContext
    {
        
        public UserContext(DbContextOptions<UserContext> options) :base(options)
        {
        
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=HR-Platforma-ISP;Trusted_Connection=true;TrustServerCertificate=true;");
        }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity => {entity.HasIndex(e => e.Email).IsUnique(); });
        }
    }
}
