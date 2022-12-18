using Microsoft.EntityFrameworkCore;

namespace back_end.Data;

public class CvRepository : ICvRepository
{
    private readonly DataContext _dataContext;

    public CvRepository(DataContext dataContext)
    {
        _dataContext = dataContext;
    }
    
    public async Task<List<Cv>> GetAllAsync()
    {
        return await _dataContext.Cvs.ToListAsync();
    }

    public async Task<Cv?> GetAsync(int id)
    {
        return await _dataContext.Cvs
            .FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task DeleteAsync(Cv cv)
    { 
        _dataContext.Cvs.Remove(cv);
        
        await _dataContext.SaveChangesAsync();
    }

    public async Task AddAsync(Cv cv)
    {
        await _dataContext.Cvs.AddAsync(cv);
        
        await _dataContext.SaveChangesAsync();
    }

    public async Task SaveChangesAsync()
    {
        await _dataContext.SaveChangesAsync();
    }
}