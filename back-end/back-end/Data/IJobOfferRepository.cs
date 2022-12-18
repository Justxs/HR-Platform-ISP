namespace back_end.Data;

public interface IJobOfferRepository
{
    public Task<List<JobOffer>> GetAllAsync();
    public Task<JobOffer?> GetAsync(int id);
    public Task DeleteAsync(JobOffer offer);
    public Task AddAsync(JobOffer offer);
    public Task SaveChangesAsync();
}