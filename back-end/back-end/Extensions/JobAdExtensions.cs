using back_end.Dtos;

namespace back_end.Extensions;

public static class JobAdExtensions
{
    public static JobAdDto ToDto(this JobAd ad)
        => new(ad.Id, ad.Name, ad.CreationDate, ad.About, ad.Requirements.ToDto(), ad.UserId, ad.Salary);

    public static List<JobAdDto> ToDto(this IEnumerable<JobAd> ads)
        => ads.Select(x => x.ToDto()).ToList();
}