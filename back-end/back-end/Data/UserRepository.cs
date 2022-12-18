using back_end.Dtos;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace back_end.Data
{
    public class UserRepository: IUserRepository
    {
        private DataContext _context;
        private readonly IConfiguration _configuration;

        public UserRepository(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public void Register(RegisterDto model)
        {
            // validate
            if (_context.Users.Any(x => x.Username == model.Username))
                throw new Exception("Username '" + model.Username + "' is already taken");
            if (_context.Users.Any(x => x.Email == model.Email))
                throw new Exception("Email '" + model.Email + "' is already taken");
            // map model to new user object
            User user = new User
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                Username = model.Username,
                Role = RoleStatus.Candidate,
                CreationDate= DateTime.Now,

                // hash password
                Password = BCrypt.Net.BCrypt.HashPassword(model.Password)
            };
            // save user
            _context.Users.Add(user);
            _context.SaveChanges();
        }
        public AuthenticateResponse Login(LoginDto model)
        {
            var user = _context.Users.SingleOrDefault(x => x.Email == model.Email);

            // validate
            if (user == null || !BCrypt.Net.BCrypt.Verify(model.Password, user.Password))
                throw new Exception("Username or password is incorrect");

            // authentication successful so generate jwt token
            var jwtToken = CreateToken(user);

            return new AuthenticateResponse(user, jwtToken);
        }
        public void SaveChanges(User user)
        {
            _context.Users.Update(user);
            _context.SaveChanges();

        }
        public string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Email),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Role, user.Role.ToString())
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Secret").Value));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var Token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: cred);
            var jwt = new JwtSecurityTokenHandler().WriteToken(Token);
            return jwt;
        }
        public User GetByEmail(string email)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email);
        }
        public User GetById(int id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);
        }
        public IEnumerable<User> GetAll()
        {
            return _context.Users;
        }
    }
}
