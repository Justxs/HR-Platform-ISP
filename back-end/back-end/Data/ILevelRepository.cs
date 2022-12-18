namespace back_end.Data;

public interface ILevelRepository
{
    public Task<List<Level>> GetAllAsync();
    public Task<List<Level>> GetAllAsync(int requirementId);
    public Task<Level?> GetAsync(int id);
    public Task DeleteAsync(Level level);
    public Task AddAsync(Level level);
    public Task SaveChangesAsync();
}