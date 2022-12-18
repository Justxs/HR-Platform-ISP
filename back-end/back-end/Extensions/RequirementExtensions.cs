using back_end.Dtos;

namespace back_end.Extensions;

public static class RequirementExtensions
{
    public static RequirementDto ToDto(this Requirement requirement)
        => new(requirement.Id, requirement.Technology, requirement.LevelId, requirement.JobAd.Id);

    public static List<RequirementDto> ToDto(this IEnumerable<Requirement> requirements)
        => requirements.Select(x => x.ToDto()).ToList();
}