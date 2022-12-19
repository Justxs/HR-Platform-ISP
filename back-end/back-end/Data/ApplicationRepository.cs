using Microsoft.EntityFrameworkCore;

namespace back_end.Data;

public class ApplicationRepository : IApplicationRepository
{
    private readonly DataContext _dataContext;

    public ApplicationRepository(DataContext dataContext)
    {
        _dataContext = dataContext;
    }
    
    public async Task<List<Aplication>> GetAllAsync()
    {
        return await _dataContext.Aplication
            .Include(x => x.User)
            .Include(x => x.JobAd)
            .ToListAsync();
    }

    public async Task<List<Aplication>> GetAllAsync(int adId)
    {
        return await _dataContext.Aplication
            .Where(x => x.JobAdId == adId)
            .ToListAsync();
    }

    public async Task<bool> ExistsAsync(int adId, int userId)
    {
        return await _dataContext.Aplication
            .AnyAsync(x => x.UserId == userId && x.JobAdId == adId);
    }

    public async Task<Aplication?> GetAsync(int id)
    {
        return await _dataContext.Aplication
            .FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task DeleteAsync(Aplication application)
    { 
        _dataContext.Aplication
            .Remove(application);
        await _dataContext.SaveChangesAsync();
    }

    public async Task AddAsync(Aplication application)
    {
        await _dataContext.AddAsync(application);
        
        await _dataContext.SaveChangesAsync();
    }

    public async Task SaveChangesAsync()
    {
        await _dataContext.SaveChangesAsync();
    }
}