﻿namespace back_end.Dtos;

public record LevelDto(int Id, TechnologyLevel TechnologyLevel, int requirementId);

public record CreateLevelDto(TechnologyLevel TechnologyLevel, int requirementId);

public record UpdateLevelDto(TechnologyLevel TechnologyLevel);