using back_end.Dtos;

namespace back_end.Extensions;

public static class ApplicationExtensions
{
    public static ApplicationDto ToDto(this Aplication application)
        => new(application.Id, application.State, application.Date, application.JobAdId, application.UserId);

    public static List<ApplicationDto> ToDto(this IEnumerable<Aplication> application)
        => application.Select(x => x.ToDto()).ToList();
}