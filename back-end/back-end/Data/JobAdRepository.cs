using Microsoft.EntityFrameworkCore;

namespace back_end.Data;

public class JobAdRepository : IJobAdRepository
{
    private readonly DataContext _dataContext;

    public JobAdRepository(DataContext dataContext)
    {
        _dataContext = dataContext;
    }
    
    public async Task<List<JobAd>> GetAllAsync()
    {
        return await _dataContext.JobAds
            .Include(x => x.Requirements)
            .ToListAsync();
    }

    public async Task<JobAd?> GetAsync(int id)
    {
        return await _dataContext.JobAds
            .Include(x => x.Requirements)
            .FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task DeleteAsync(JobAd ad)
    { 
        _dataContext.JobAds
            .Remove(ad);
        await _dataContext.SaveChangesAsync();
    }

    public async Task AddAsync(JobAd ad)
    {
        await _dataContext.AddAsync(ad);
        
        await _dataContext.SaveChangesAsync();
    }

    public async Task SaveChangesAsync()
    {
        await _dataContext.SaveChangesAsync();
    }
}