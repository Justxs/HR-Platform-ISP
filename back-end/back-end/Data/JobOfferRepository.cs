using Microsoft.EntityFrameworkCore;

namespace back_end.Data;

public class JobOfferRepository : IJobOfferRepository
{
    private readonly DataContext _dataContext;

    public JobOfferRepository(DataContext dataContext)
    {
        _dataContext = dataContext;
    }
    
    public async Task<List<JobOffer>> GetAllAsync()
    {
        return await _dataContext.JobOffers
            .Include(x => x.User)
            .Include(x => x.JobAd)
            .ToListAsync();
    }

    public async Task<JobOffer?> GetAsync(int id)
    {
        return await _dataContext.JobOffers
            .FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task DeleteAsync(JobOffer jobOffer)
    { 
        _dataContext.JobOffers
            .Remove(jobOffer);
        await _dataContext.SaveChangesAsync();
    }

    public async Task AddAsync(JobOffer offer)
    {
        await _dataContext.AddAsync(offer);
        
        await _dataContext.SaveChangesAsync();
    }

    public async Task SaveChangesAsync()
    {
        await _dataContext.SaveChangesAsync();
    }
}