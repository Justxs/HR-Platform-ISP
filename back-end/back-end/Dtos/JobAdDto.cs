namespace back_end.Dtos;

public record JobAdDto(int Id, string? Name, DateTime? CreationDate, string? About, List<RequirementDto> Requirements, int UserId, int Salary);

public record CreateJobAdDto(string? Name, string? About, int UserId, int Salary, List<CreateRequirementDto> Requirements);

public record UpdateJobAdDto(string? Name, string? About, int Salary);