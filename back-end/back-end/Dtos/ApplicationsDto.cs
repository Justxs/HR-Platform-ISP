namespace back_end.Dtos;

public record ApplicationDto(int Id, AplicationState State, DateTime? Date, int JobAdId, int UserId);

public record CreateApplicationDto(int UserId);

public record UpdateApplicationDto(AplicationState State);