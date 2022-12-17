using back_end.Dtos;

namespace back_end.Data
{
    public interface IEmailRepository
    {
        void SendEmail(EmailDto request);

    }
}
