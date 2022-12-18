using Microsoft.EntityFrameworkCore;

namespace back_end.Data;

public class LevelRepository : ILevelRepository
{
    private readonly DataContext _dataContext;

    public LevelRepository(DataContext dataContext)
    {
        _dataContext = dataContext;
    }
    
    public async Task<List<Level>> GetAllAsync()
    {
        return await _dataContext.Levels.ToListAsync();
    }
    
    public async Task<List<Level>> GetAllAsync(int requirementId)
    {
        return await _dataContext.Levels
            .Where(x => x.Requirement.Id == requirementId)
            .ToListAsync();
    }

    public async Task<Level?> GetAsync(int id)
    {
        return await _dataContext.Levels
            .FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task DeleteAsync(Level level)
    {
        _dataContext.Levels.Remove(level);
        await _dataContext.SaveChangesAsync();
    }

    public async Task AddAsync(Level level)
    {
        await _dataContext.AddAsync(level);
        
        await _dataContext.SaveChangesAsync();
    }

    public async Task SaveChangesAsync()
    {
        await _dataContext.SaveChangesAsync();
    }
}