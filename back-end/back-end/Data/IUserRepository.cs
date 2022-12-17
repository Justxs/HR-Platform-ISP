namespace back_end.Data
{
    public interface IUserRepository
    {
        User Create(User user);
        User GetByEmail(string email);
        User GetById(int id);
        User GetByVerificationToken(string token);
        void SaveChanges(User user);
    }
}
