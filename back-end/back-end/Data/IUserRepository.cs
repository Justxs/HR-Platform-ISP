using back_end.Dtos;

namespace back_end.Data
{
    public interface IUserRepository
    {
        void Register(RegisterDto model);
        User GetByEmail(string email);
        User GetById(int id);
        void SaveChanges(User user);
        AuthenticateResponse Login(LoginDto model);
        public IEnumerable<User> GetAll();
        string CreateToken(User user);
        void Edit(EditDto model, User user);
    }
}
