using back_end.Dtos;

namespace back_end.Data
{
    public interface IUserRepository
    {
        void Register(RegisterDto model);
        void RegisterRecruiter(RegisterDto model);

        User GetByEmail(string email);
        User GetById(int id);
        void SaveChanges(User user);
        AuthenticateResponse Login(LoginDto model);
        public IEnumerable<User> GetAll();
        public IEnumerable<User> GetAllCandidates();
        string CreateToken(User user);
        void Edit(EditDto model, User user);
        void ChangePassword(ChangePasswordDto model, User user);
        void DeleteUser(User user);
        ViewUserDto ShowUser(User user);
        Comment GetByIdComment(int id);
        void WriteComment(string comment, User user);
        void Delete(int id);
    }
}
