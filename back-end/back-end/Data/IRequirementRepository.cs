namespace back_end.Data;

public interface IRequirementRepository
{
    public Task<List<Requirement>> GetAllAsync();
    public Task<List<Requirement>> GetAllAsync(int adId);
    public Task<Requirement?> GetAsync(int id);
    public Task DeleteAsync(Requirement requirement);
    public Task AddAsync(Requirement requirement);
    public Task SaveChangesAsync();
}