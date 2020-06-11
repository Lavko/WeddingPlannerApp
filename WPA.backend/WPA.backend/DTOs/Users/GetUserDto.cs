namespace WPA.backend.DTOs.Users
{
  public class GetUserDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
    }
}