using back_end.Dtos;

namespace back_end.Extensions;

public static class CvExtensions
{
    public static CvDto ToDto(this Cv cv, string base64 = "")
        => new(cv.Id, cv.DateOfCreation, base64, !string.IsNullOrWhiteSpace(base64), cv.UserId);

    public static List<CvDto> ToDto(this IEnumerable<Cv> cvs)
        => cvs.Select(x => x.ToDto()).ToList();
}