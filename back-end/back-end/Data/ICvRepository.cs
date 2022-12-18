namespace back_end.Data;

public interface ICvRepository
{
    public Task<List<Cv>> GetAllAsync();
    public Task<Cv?> GetAsync(int id);
    public Task DeleteAsync(Cv cv);
    public Task AddAsync(Cv cv);
    public Task SaveChangesAsync();
}