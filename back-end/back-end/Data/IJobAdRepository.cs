namespace back_end.Data;

public interface IJobAdRepository
{
    public Task<List<JobAd>> GetAllAsync();
    public Task<JobAd?> GetAsync(int id);
    public Task DeleteAsync(JobAd ad);
    public Task AddAsync(JobAd ad);
    public Task SaveChangesAsync();
}