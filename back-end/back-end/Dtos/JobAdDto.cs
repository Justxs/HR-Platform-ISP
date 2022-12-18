namespace back_end.Dtos;

public record JobAdDto(int Id, string? Name, string? About, List<RequirementDto> Requirements, int UserId);

public record CreateJobAdDto(string? Name, string? About, int UserId, List<CreateRequirementDto> Requirements);

public record UpdateJobAdDto(string? Name, string? About);