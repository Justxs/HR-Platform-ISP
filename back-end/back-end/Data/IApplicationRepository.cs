namespace back_end.Data;

public interface IApplicationRepository
{
    public Task<List<Aplication>> GetAllAsync();
    public Task<List<Aplication>> GetAllAsync(int adId);
    public Task<bool> ExistsAsync(int adId, int userId);
    public Task<Aplication?> GetAsync(int id);
    public Task DeleteAsync(Aplication application);
    public Task AddAsync(Aplication application);
    public Task SaveChangesAsync();
}