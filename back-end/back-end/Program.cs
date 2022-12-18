global using back_end.Data;
global using back_end.Models;
global using back_end.Helpers;
using System.Runtime.InteropServices;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        Description = "Standard Authorization header using the Bearer scheme",
        In = ParameterLocation.Header,
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "Bearer"
    });

    options.OperationFilter<SecurityRequirementsOperationFilter>();
});
builder.Services.AddCors(option=> option.AddPolicy(name:"HRplatform",
    policy =>
    {
        policy.WithOrigins("http://localhost:5173").AllowAnyMethod().AllowAnyHeader().AllowCredentials();
    }));
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(builder.Configuration.GetSection("AppSettings:Secret").Value)),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
// builder.Services.AddDbContext<DataContext>(options =>
// {
//     options.UseInMemoryDatabase("Db");
// });
builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));
builder.Services
    .AddScoped<IUserRepository, UserRepository>()
    .AddScoped<IEmailRepository, EmailRepository>()
    .AddScoped<IApplicationRepository, ApplicationRepository>()
    .AddScoped<IJobAdRepository, JobAdRepository>()
    .AddScoped<IJobOfferRepository, JobOfferRepository>()
    .AddScoped<ICvRepository, CvRepository>()
    .AddScoped<ILevelRepository, LevelRepository>()
    .AddScoped<IRequirementRepository, RequirementRepository>();
// builder.Services.AddDbContext<DataContext>();


var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors();
}

app.UseHttpsRedirection();
app.UseCors("HRplatform");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
