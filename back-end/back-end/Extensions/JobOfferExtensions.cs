using back_end.Dtos;

namespace back_end.Extensions;

public static class JobOfferExtensions
{
    public static JobOfferDto ToDto(this JobOffer offer)
        => new(offer.Id, offer.Name, offer.Date, offer.Message, offer.UserId, offer.JobAdId);

    public static List<JobOfferDto> ToDto(this IEnumerable<JobOffer> offers)
        => offers.Select(x => x.ToDto()).ToList();
}