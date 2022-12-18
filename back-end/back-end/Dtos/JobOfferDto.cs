namespace back_end.Dtos;

public record JobOfferDto(int Id, string? Name, DateTime? Date, string? Message, int UserId, int JobAdId);

public record CreateJobOfferDto(string? Name, string? Message, int UserId, int JobAdId);

public record UpdateJobOfferDto(string? Name, string? Message);