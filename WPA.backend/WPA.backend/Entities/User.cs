namespace WPA.backend.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public int PlannerId { get; set; }
        public Planner Planner { get; set; }
    }
}