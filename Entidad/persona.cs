using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Entidad
{
    public class persona
    {
        public persona()
        {
            
        }
        [Key]
        public String identificacion { get; set; }
        public String nombre { get; set; }
        public String apellido { get; set; }
        public String direccion { get; set; }
        public DateTime añoNacimiento { get; set; }
        public String correo { get; set; }
        public String telefono { get; set; }
        public String estado { get; set; }
    }
    
}