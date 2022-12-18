namespace back_end.Models
{
    public class Level
    {
        public int Id { get; set; }
        public TechnologyLevel TechLevel { get; set; }
        public Requirement Requirement { get; set; }
    }
    public enum TechnologyLevel
    {
        Intern,
        Junior,
        Mid,
        Senior
    }
}
