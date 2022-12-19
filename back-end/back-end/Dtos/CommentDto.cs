namespace back_end.Dtos
{
    public class CommentDto
    {
        public User Usr { get; set; }
        public int Id { get; set; }
        public string? Comment { get; set; }
    }
}
