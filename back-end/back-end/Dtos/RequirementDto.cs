namespace back_end.Dtos;

public record RequirementDto(int Id, string? Technology, int LevelId, int JobAdId);

public record CreateRequirementDto(string? Technology, CreateLevelDto Level, int JobAdId);

public record UpdateRequirementDto(string? Technology);