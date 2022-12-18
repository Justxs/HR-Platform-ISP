using Microsoft.EntityFrameworkCore;

namespace back_end.Data;

public class RequirementRepository : IRequirementRepository
{
    private readonly DataContext _dataContext;

    public RequirementRepository(DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public async Task<List<Requirement>> GetAllAsync()
    {
        return await _dataContext.Requirements.ToListAsync();
    }

    public async Task<List<Requirement>> GetAllAsync(int adId)
    {
        return await _dataContext.Requirements
            .Where(x => x.JobAd.Id == adId)
            .ToListAsync();
    }

    public async Task<Requirement?> GetAsync(int id)
    {
        return await _dataContext.Requirements
            .FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task DeleteAsync(Requirement requirement)
    {
        _dataContext.Requirements.Remove(requirement);

        await _dataContext.SaveChangesAsync();
    }

    public async Task AddAsync(Requirement requirement)
    {
        await _dataContext.AddAsync(requirement);
        
        await _dataContext.SaveChangesAsync();
    }

    public async Task SaveChangesAsync()
    {
        await _dataContext.SaveChangesAsync();
    }
}