using Microsoft.EntityFrameworkCore;
using Entidad;
namespace Datos
{
    public class ConsultorioContext: DbContext
    {
        public ConsultorioContext(DbContextOptions options): base(options)
        {
            
        }
        public DbSet<persona> personas { get; set; }
        public DbSet<cita> citas { get; set; }
        public DbSet<historia> historias { get; set; }
        
        
        
    }
}