namespace back_end.Dtos;

public record CvDto(int Id, DateTime? CreationDate, string FileBase64, bool Hydrated, int UserId);

public record CreateCvDto(string FileBase64, int UserId);

public record UpdateCvDto(string FileBase64, int UserId);